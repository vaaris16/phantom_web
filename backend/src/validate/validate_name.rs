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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_valid_name() {
        assert!(validate_name("John").is_ok());
    }

    #[test]
    fn test_valid_name_with_numbers() {
        assert!(validate_name("vaaris16").is_ok());
    }

    #[test]
    fn test_valid_name_with_symbols() {
        assert!(validate_name("O'Brien").is_ok());
    }

    // Empty
    #[test]
    fn test_empty_name() {
        assert!(validate_name("").is_err());
    }

    // Length
    #[test]
    fn test_name_too_short() {
        assert!(validate_name("a").is_err());
    }

    #[test]
    fn test_name_too_long() {
        assert!(validate_name(&"a".repeat(101)).is_err());
    }

    #[test]
    fn test_name_exactly_2_chars() {
        assert!(validate_name("ab").is_ok());
    }

    #[test]
    fn test_name_exactly_100_chars() {
        assert!(validate_name(&"a".repeat(100)).is_ok());
    }

    // Control characters
    #[test]
    fn test_control_character() {
        assert!(validate_name("john\n").is_err());
    }

    #[test]
    fn test_null_byte() {
        assert!(validate_name("john\0").is_err());
    }
}
