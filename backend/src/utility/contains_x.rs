use crate::utility::errors::AppErrors;

pub fn contains_x(data: &str, target: &str, errors: AppErrors) -> Result<(), AppErrors> {
    if data.contains(target) {
        Err(errors)
    } else {
        Ok(())
    }
}
