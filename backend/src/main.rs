use std::env;

use axum::{Json, Router, extract::State, response::IntoResponseParts, routing::post};
use serde::{Deserialize, Serialize};

mod utility;
mod validate;

use sqlx::PgPool;
use validate::{validate_email::validate_email, validate_name::validate_name};

use crate::utility::errors::AppErrors;

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

    let app = create(pool);
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
        .map_err(|_| AppErrors::ServerError)?;

    Ok(Json(ValidateInput { email, name }))
}
