use crate::utility::errors::AppErrors;

pub fn no_control_characters(data: &str, errors: AppErrors) -> Result<(), AppErrors> {
    if data.chars().any(|c| c.is_control()) {
        Err(errors)
    } else {
        Ok(())
    }
}
