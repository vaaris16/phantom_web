use sqlx::PgPool;

use crate::emails::{emails_templates, send_emails::send_email};

#[derive(sqlx::FromRow)]
struct Subscriber {
    email: String,
    name: String,
}

pub async fn send_newsletter_emails(email: String, smtp_pass: &str, pool: &PgPool) {
    let rows = sqlx::query_as::<_, Subscriber>("SELECT email, name FROM subscribers")
        .fetch_all(pool)
        .await
        .unwrap();

    for row in rows {
        let template = emails_templates::on_sub::EmailTemplate::newsletter(&row.name);
        if let Err(e) = send_email(
            &smtp_pass,
            &row.email,
            &email,
            &template.body,
            &template.subject,
        )
        .await
        {
            eprintln!("Failed to send to {}: {:?}", row.email, e)
        }
    }
}
#[cfg(test)]
mod tests {
    use super::*;
    use sqlx::PgPool;

    #[tokio::test]
    async fn test_newsletter() {
        dotenvy::dotenv().ok();
        let url = std::env::var("DATABASE_URL").unwrap();
        let pool = PgPool::connect(&url).await.unwrap();
        let smtp_email = std::env::var("SMTP_EMAIL").unwrap();
        let smtp_pass = std::env::var("SMTP_PASSWORD").unwrap();

        send_newsletter_emails(smtp_email, &smtp_pass, &pool).await;
    }
}
