use axum::{Json, Router, routing::post};
use serde::{Deserialize, Serialize};

mod utility;
mod validate;

use validate::{validate_email::validate_email, validate_name::validate_name};

use crate::utility::errors::AppErrors;

#[derive(Deserialize)]
struct Input {
    name: String,
    email: String,
}

#[derive(Serialize)]
struct Response {
    name: String,
    email: String,
}

fn create() -> Router {
    Router::new().route("/validate_input", post(validate_input))
}

#[tokio::main]
async fn main() {
    let app = create();
    let listener = tokio::net::TcpListener::bind("0.0.0.0:8000").await.unwrap();

    axum::serve(listener, app).await.unwrap();
}

async fn validate_input(Json(payload): Json<Input>) -> Result<Json<Response>, AppErrors> {
    validate_name(&payload.name)?;
    validate_email(&payload.email)?;

    Ok(Json(Response {
        name: payload.name,
        email: payload.email,
    }))
}
