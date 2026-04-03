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

    ServerError,
    EmailAlreadyExists,
}

#[derive(Serialize)]
struct ErrorResponse {
    field: &'static str,
    error: String,
}

impl IntoResponse for AppErrors {
    fn into_response(self) -> Response {
        let (status, field, message) = match self {
            AppErrors::EmptyEmail => (StatusCode::BAD_REQUEST, "email", "Email is empty"),
            AppErrors::InvalidEmail => (StatusCode::BAD_REQUEST, "email", "Email is not valid"),
            AppErrors::EmailAlreadyExists => {
                (StatusCode::CONFLICT, "email", "Email already exists")
            }

            AppErrors::EmptyName => (StatusCode::BAD_REQUEST, "name", "Name is empty"),
            AppErrors::InvalidName => (StatusCode::BAD_REQUEST, "name", "Name is not valid"),

            AppErrors::ServerError => (StatusCode::INTERNAL_SERVER_ERROR, "form", "Server error"),
        };

        let body = Json(ErrorResponse {
            error: message.to_string(),
            field: field,
        });

        (status, body).into_response()
    }
}
