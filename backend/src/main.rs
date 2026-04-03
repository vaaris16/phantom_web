use std::env;

use axum::{Json, Router, extract::State, routing::post};
use serde::{Deserialize, Serialize};

mod emails;
mod utility;
mod validate;

use sqlx::PgPool;
use tokio_cron_scheduler::{Job, JobScheduler};
use tower_http::cors::{Any, CorsLayer};
use validate::{validate_email::validate_email, validate_name::validate_name};

use crate::{
    emails::{
        emails_templates::{self, on_sub::EmailTemplate},
        send_emails::send_email,
        send_newsletter_emails::send_newsletter_emails,
    },
    utility::errors::AppErrors,
};

#[derive(Deserialize)]
struct Input {
    email: String,
    name: String,
}

#[derive(Serialize)]
struct ValidateInput {
    email: String,
    name: String,
}

fn create(pool: PgPool) -> Router {
    Router::new()
        .route("/create_sub", post(create_subscriber))
        .with_state(pool)
}

#[tokio::main]
async fn main() {
    dotenvy::dotenv().ok();

    let url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    println!("Connecting to: {}", url);
    let pool = sqlx::postgres::PgPool::connect(&url)
        .await
        .expect("Failed to connect to database");
    sqlx::migrate!("./migrations")
        .run(&pool)
        .await
        .expect("Failed to run migrations");

    let smtp_email = env::var("SMTP_EMAIL").expect("could not load smtp email");
    let smtp_pass = env::var("SMTP_PASSWORD").expect("could not load smtp password");

    tokio::spawn(start_newsletter_scheduler(
        pool.clone(),
        smtp_pass,
        smtp_email,
    ));

    let app = create(pool).layer(
        CorsLayer::new()
            .allow_origin(Any)
            .allow_methods(Any)
            .allow_headers(Any),
    );

    let listener = tokio::net::TcpListener::bind("0.0.0.0:8000").await.unwrap();

    axum::serve(listener, app).await.unwrap();
}

fn validate_input(payload: &Input) -> Result<(String, String), AppErrors> {
    let name = payload.name.trim().to_string();
    validate_name(&name)?;
    validate_email(&payload.email)?;

    Ok((payload.email.clone(), name))
}

async fn create_subscriber(
    State(pool): State<PgPool>,
    Json(payload): Json<Input>,
) -> Result<Json<ValidateInput>, AppErrors> {
    let (email, name) = validate_input(&payload)?;

    sqlx::query("INSERT INTO subscribers (email, name) VALUES ($1, $2)")
        .bind(&email)
        .bind(&name)
        .execute(&pool)
        .await
        .map_err(|e| {
            if let sqlx::Error::Database(db_err) = &e {
                eprintln!("Constraint: {:?}", db_err.constraint());
                if db_err.constraint() == Some("subscribers_email_key") {
                    return AppErrors::EmailAlreadyExists;
                }
            }
            AppErrors::ServerError
        })?;

    let smtp_email = env::var("SMTP_EMAIL").expect("could not load smtp email");
    let smtp_pass = env::var("SMTP_PASSWORD").expect("could not load smtp password");
    let email_content = EmailTemplate::welcome(&name);

    send_email(
        &smtp_pass,
        &email,
        &smtp_email,
        &email_content.body,
        &email_content.subject,
    )
    .await?;
    Ok(Json(ValidateInput { email, name }))
}

async fn start_newsletter_scheduler(pool: PgPool, smtp_pass: String, smtp_email: String) {
    let schedular = JobScheduler::new().await.unwrap();

    let job = Job::new_async("0 0 9 * * 0", move |_uuid, _lock: JobScheduler| {
        let pool = pool.clone();
        let smtp_email = smtp_email.clone();
        let smtp_pass = smtp_pass.clone();
        Box::pin(async move {
            send_newsletter_emails(smtp_email, &smtp_pass, &pool).await;
        })
    })
    .unwrap();

    schedular.add(job).await.unwrap();
    schedular.start().await.unwrap();

    loop {
        tokio::time::sleep(tokio::time::Duration::from_secs(60)).await;
    }
}
