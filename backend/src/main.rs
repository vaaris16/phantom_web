use std::error::Error;
use uuid::Uuid;

struct Sub {
    pub email: String,
    pub name: String,
}

async fn create_subscriber(
    subscriber_data: &Sub,
    pool: &sqlx::PgPool,
) -> Result<(), Box<dyn Error>> {
    let query = "INSERT INTO subscribers (id, email, name) VALUES ($1, $2, $3)";
    let id = Uuid::new_v4();

    sqlx::query(query)
        .bind(&id)
        .bind(&subscriber_data.email)
        .bind(&subscriber_data.name)
        .execute(pool)
        .await?;

    Ok(())
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let url = "postgres://vaarischitkara:vardan22@localhost:5432/postgres";
    let pool = sqlx::postgres::PgPool::connect(url).await?;

    sqlx::migrate!("./migrations").run(&pool).await?;

    let sub = Sub {
        email: "vaarischitkara16@gmail.com".to_string(),
        name: "vaaris".to_string(),
    };

    create_subscriber(&sub, &pool).await?;

    Ok(())
}
