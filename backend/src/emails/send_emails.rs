use crate::utility::errors::AppErrors;
use lettre::{
    AsyncSmtpTransport, AsyncTransport, Message, Tokio1Executor,
    transport::smtp::authentication::Credentials,
};

pub async fn send_email(
    smtp_pass: &str,
    to: &str,
    from: &str,
    body: &str,
    subject: &str,
) -> Result<(), AppErrors> {
    let email = Message::builder()
        .subject(subject)
        .from(from.parse().unwrap())
        .to(to.parse().unwrap())
        .body(body.to_string())
        .unwrap();

    let cred = Credentials::new(from.to_string(), smtp_pass.to_string());

    let mailer = AsyncSmtpTransport::<Tokio1Executor>::relay("smtp.gmail.com")
        .unwrap()
        .credentials(cred)
        .build();

    mailer
        .send(email)
        .await
        .map_err(|_| AppErrors::ServerError)?;

    Ok(())
}
