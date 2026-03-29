use crate::utility::{
    contains_control_characters::no_control_characters, errors::AppErrors, is_empty::is_empty,
};

pub fn validate_email(email: &str) -> Result<(), AppErrors> {
    let err = AppErrors::InvalidEmail;

    is_empty(email, AppErrors::EmptyEmail)?;
    no_control_characters(email, AppErrors::InvalidEmail)?;

    let (local, domain) = email.split_once('@').ok_or(AppErrors::InvalidEmail)?;

    let (_, tld) = domain.rsplit_once(".").ok_or(AppErrors::InvalidEmail)?;

    if email.len() > 254
        || email.contains("..")
        || domain.len() < 2
        || tld.chars().all(|c| c.is_numeric())
    {
        return Err(err);
    }

    if local.len() > 64
        || local.starts_with('-')
        || local.ends_with('-')
        || domain.starts_with('.')
        || domain.ends_with('.')
        || !domain
            .chars()
            .all(|c| c.is_ascii_alphanumeric() || matches!(c, '.' | '-'))
        || !local
            .chars()
            .all(|c| c.is_ascii_alphanumeric() || matches!(c, '.' | '-' | '_' | '+'))
    {
        return Err(err);
    }

    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    // Valid
    #[test]
    fn test_valid_email() {
        assert!(validate_email("user@example.com").is_ok());
    }

    #[test]
    fn test_valid_email_with_dots_and_plus() {
        assert!(validate_email("user.name+tag@example.com").is_ok());
    }

    // Empty
    #[test]
    fn test_empty_email() {
        assert!(validate_email("").is_err());
    }

    // Control characters
    #[test]
    fn test_control_character() {
        assert!(validate_email("user\n@example.com").is_err());
    }

    // @ checks
    #[test]
    fn test_no_at_sign() {
        assert!(validate_email("userexample.com").is_err());
    }

    #[test]
    fn test_two_at_signs() {
        assert!(validate_email("user@@example.com").is_err());
    }

    // Length
    #[test]
    fn test_email_too_long() {
        let long = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.com";
        assert!(validate_email(long).is_err());
    }

    #[test]
    fn test_local_part_too_long() {
        let long_local = format!("{}@example.com", "a".repeat(65));
        assert!(validate_email(&long_local).is_err());
    }

    // Dots
    #[test]
    fn test_consecutive_dots() {
        assert!(validate_email("user..name@example.com").is_err());
    }

    #[test]
    fn test_domain_starts_with_dot() {
        assert!(validate_email("user@.example.com").is_err());
    }

    #[test]
    fn test_domain_ends_with_dot() {
        assert!(validate_email("user@example.com.").is_err());
    }

    // TLD
    #[test]
    fn test_numeric_tld() {
        assert!(validate_email("user@example.123").is_err());
    }

    #[test]
    fn test_no_dot_in_domain() {
        assert!(validate_email("user@examplecom").is_err());
    }

    // Dashes
    #[test]
    fn test_local_starts_with_dash() {
        assert!(validate_email("-user@example.com").is_err());
    }

    #[test]
    fn test_local_ends_with_dash() {
        assert!(validate_email("user-@example.com").is_err());
    }

    // Invalid chars
    #[test]
    fn test_space_in_local() {
        assert!(validate_email("user name@example.com").is_err());
    }

    #[test]
    fn test_invalid_char_in_domain() {
        assert!(validate_email("user@exa!mple.com").is_err());
    }
}
