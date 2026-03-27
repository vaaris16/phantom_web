use crate::utility::{
    contains_control_characters::no_control_characters, errors::AppErrors, is_empty::is_empty,
};

pub fn validate_name(name: &str) -> Result<(), AppErrors> {
    is_empty(name, AppErrors::EmptyName)?;
    no_control_characters(name, AppErrors::InvalidName)?;

    Ok(())
}
