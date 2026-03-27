use crate::utility::errors::AppErrors;

pub fn is_empty(data: &str, error: AppErrors) -> Result<(), AppErrors> {
    if data.trim().is_empty() {
        Err(error)
    } else {
        Ok(())
    }
}
