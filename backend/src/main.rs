use sqlx::Row;
use std::error::Error;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let url = "postgres://vaarischitkara:vardan22@localhost:5432/postgres";
    let pool = sqlx::postgres::PgPool::connect(url).await?;

    let res = sqlx::query("SELECT 1 + 1 as sum").fetch_one(&pool).await?;

    let sum: i32 = res.get("sum");
    println!("1 + 1 = {}", sum);
    Ok(())
}
