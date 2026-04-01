use sqlx::PgPool;

use crate::emails::send_emails::send_email;

#[derive(sqlx::FromRow)]
struct Subscriber {
    email: String,
    name: String,
}

pub async fn send_newsletter_emails(
    email: String,
    smtp_pass: &str,
    pool: &PgPool,
    subject: &str,
    body: &str,
) {
    let rows = sqlx::query_as::<_, Subscriber>("SELECT email, name FROM subscribers")
        .fetch_all(pool)
        .await
        .unwrap();

    for row in rows {
        if let Err(e) = send_email(&smtp_pass, &row.email, &email, body, subject).await {
            eprintln!("Failed to send to {}: {:?}", row.email, e)
        }
    }
}
