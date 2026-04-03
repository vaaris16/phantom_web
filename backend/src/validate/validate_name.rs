use crate::utility::{
    contains_control_characters::no_control_characters, errors::AppErrors, is_empty::is_empty,
};

pub fn validate_name(name: &str) -> Result<(), AppErrors> {
    let err = AppErrors::InvalidName;

    is_empty(name, AppErrors::EmptyName)?;
    no_control_characters(name, AppErrors::InvalidName)?;

    if name.len() < 2 || name.len() > 100 {
        return Err(err);
    }

    Ok(())
}
