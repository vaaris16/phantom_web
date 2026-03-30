use crate::utility::errors::AppErrors;
use lettre::{
    AsyncSmtpTransport, AsyncTransport, Message, Tokio1Executor,
    transport::smtp::authentication::Credentials,
};
use std::env;

pub async fn send_email(to: &str, from: &str, body: &str, subject: &str) -> Result<(), AppErrors> {
    let smpt_pass = env::var("SMTP_PASSWORD").expect("Could not load SMTP password");

    let email = Message::builder()
        .subject(subject)
        .from(from.parse().unwrap())
        .to(to.parse().unwrap())
        .body(body.to_string())
        .unwrap();

    let cred = Credentials::new(from.to_string(), smpt_pass);

    let mailer = AsyncSmtpTransport::<Tokio1Executor>::relay("smtp.gmail.com")
        .unwrap()
        .credentials(cred)
        .build();

    mailer
        .send(email)
        .await
        .map_err(|e| AppErrors::ServerError)?;

    Ok(())
}
