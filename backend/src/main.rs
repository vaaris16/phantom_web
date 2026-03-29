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

fn create() -> Router {
    Router::new().route("/validate_input", post(validate_input))
}

#[tokio::main]
async fn main() {
    dotenvy::dotenv().ok();
    let app = create();
    let listener = tokio::net::TcpListener::bind("0.0.0.0:8000").await.unwrap();

    let url = env::var("DATABASE_URL").to_string();
    let pool = sqlx::postgres::PgPool::connect(&url).await;

    axum::serve(listener, app).await.unwrap();
}

async fn validate_input(Json(payload): Json<Input>) -> Result<(String, String), AppErrors> {
    let name = payload.name.trim().to_string();
    validate_name(&name)?;
    validate_email(&payload.email)?;

    Ok((payload.email, name))
}

async fn create_subscriber(
    State(pool): State<PgPool>,
    Json(payload): Json<Input>,
) -> Result<Json<ValidateInput>, AppErrors> {
    let (email, name) = validate_input(&payload)?;

    sqlx::query!(
        "INSERT INTO subscriber (email, name) VALUES ($1, $2)",
        email,
        name
    )
    .execute(&pool)
    .await
    .map_err(|_| AppErrors::ServerError)?;

    Ok(Json(ValidateInput { email, name }))
}
