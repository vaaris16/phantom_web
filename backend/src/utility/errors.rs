use axum::{
    Json,
    http::StatusCode,
    response::{IntoResponse, Response},
};
use serde::Serialize;

#[derive(Debug, PartialEq, Eq)]
pub enum AppErrors {
    EmptyEmail,
    EmptyName,
    InvalidEmail,
    InvalidName,
}

#[derive(Serialize)]
struct ErrorResponse {
    error: String,
}

impl IntoResponse for AppErrors {
    fn into_response(self) -> Response {
        let (status, message) = match self {
            AppErrors::EmptyEmail => (StatusCode::BAD_REQUEST, "Email is empty"),
            AppErrors::EmptyName => (StatusCode::BAD_REQUEST, "Name is empty"),
            AppErrors::InvalidEmail => (StatusCode::BAD_REQUEST, "Email is not valid"),
            AppErrors::InvalidName => (StatusCode::BAD_REQUEST, "Name is not valid"),
        };

        let body = Json(ErrorResponse {
            error: message.to_string(),
        });

        (status, body).into_response()
    }
}
