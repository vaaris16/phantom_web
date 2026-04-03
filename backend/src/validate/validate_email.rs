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
        || tld.len() < 2
    {
        return Err(err);
    }

    is_empty(local, AppErrors::InvalidEmail)?;
    is_empty(domain, AppErrors::InvalidEmail)?;

    if local.len() > 64
        || local.starts_with('-')
        || local.ends_with('-')
        || local.starts_with('.')
        || local.ends_with('.')
        || domain.starts_with('.')
        || domain.ends_with('.')
        || domain.starts_with('-')
        || domain.ends_with('-')
        || tld.starts_with('-')
        || tld.ends_with('-')
        || !domain
            .chars()
            .all(|c| c.is_ascii_alphanumeric() || matches!(c, '.' | '-'))
        || !local
            .chars()
            .all(|c| c.is_ascii_alphanumeric() || matches!(c, '.' | '-' | '_' | '+'))
    {
        return Err(err);
    }

    for label in domain.split('.') {
        if label.starts_with('-') || label.ends_with('-') {
            return Err(err);
        }
    }

    Ok(())
}
