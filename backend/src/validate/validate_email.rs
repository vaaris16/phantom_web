use crate::utility::{
    contains_control_characters::no_control_characters, contains_x::contains_x, errors::AppErrors,
    is_empty::is_empty,
};

pub fn validate_email(email: &str) -> Result<(), AppErrors> {
    is_empty(email, AppErrors::EmptyEmail)?;
    if !email.contains("@") {
        return Err(AppErrors::InvalidEmail);
    }
    if !email.contains(".") {
        return Err(AppErrors::InvalidEmail);
    }
    if email.contains("..") {
        return Err(AppErrors::InvalidEmail);
    }

    no_control_characters(email, AppErrors::InvalidEmail)?;

    let parts_at: Vec<&str> = email.split('@').collect();
    if parts_at.len() != 2 {
        return Err(AppErrors::InvalidEmail);
    }

    let local_part = parts_at[0];
    let domain = parts_at[1];

    if local_part.starts_with('.') || local_part.ends_with('.') {
        return Err(AppErrors::InvalidEmail);
    }

    if domain.starts_with('.') || domain.ends_with('.') {
        return Err(AppErrors::InvalidEmail);
    }

    if !domain
        .chars()
        .all(|c| c.is_alphanumeric() || c == '.' || c == '-')
    {
        return Err(AppErrors::InvalidEmail);
    }

    Ok(())
}

#[cfg(test)]
mod tests {
    use crate::{utility::errors::AppErrors, validate::validate_email::validate_email};

    #[test]
    fn empty_email_fails() {
        let input = validate_email("");
        assert_eq!(input, Err(AppErrors::EmptyEmail));
    }
    #[test]
    fn no_at_email_fails() {
        let input = validate_email("testgmail.com");
        assert_eq!(input, Err(AppErrors::InvalidEmail));
    }
    #[test]
    fn no_dot_email_fails() {
        let input = validate_email("test@gmailcom");
        assert_eq!(input, Err(AppErrors::InvalidEmail));
    }
}
