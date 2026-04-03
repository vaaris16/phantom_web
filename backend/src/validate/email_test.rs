#[cfg(test)]
mod real_world_email_tests {
    use crate::{utility::errors::AppErrors, validate::validate_email::validate_email};

    #[test]
    fn v1() {
        assert!(validate_email("a@b.cd").is_ok());
    }
    #[test]
    fn v2() {
        assert!(validate_email("user@example.com").is_ok());
    }
    #[test]
    fn v3() {
        assert!(validate_email("first.last@example.com").is_ok());
    }
    #[test]
    fn v4() {
        assert!(validate_email("user+tag@example.com").is_ok());
    }
    #[test]
    fn v5() {
        assert!(validate_email("user_name@example.com").is_ok());
    }
    #[test]
    fn v6() {
        assert!(validate_email("u123@example.com").is_ok());
    }
    #[test]
    fn v7() {
        assert!(validate_email("user@sub.example.com").is_ok());
    }
    #[test]
    fn v8() {
        assert!(validate_email("user@my-domain.com").is_ok());
    }
    #[test]
    fn v9() {
        assert!(validate_email("user@exa-mple.co").is_ok());
    }
    #[test]
    fn v10() {
        assert!(validate_email("x@y.io").is_ok());
    }

    #[test]
    fn v11() {
        assert!(validate_email("a.b-c_d+e@example.com").is_ok());
    }
    #[test]
    fn v12() {
        assert!(validate_email("abc123@abc123.com").is_ok());
    }
    #[test]
    fn v13() {
        assert!(validate_email("user@domain.museum").is_ok());
    }
    #[test]
    fn v14() {
        assert!(validate_email("user@domain.travel").is_ok());
    }
    #[test]
    fn v15() {
        assert!(validate_email("user@domain.c0m").is_ok());
    }

    // ---- INVALID: EMPTY / BASIC ----

    #[test]
    fn i1() {
        assert_eq!(validate_email(""), Err(AppErrors::EmptyEmail));
    }
    #[test]
    fn i2() {
        assert_eq!(validate_email(" "), Err(AppErrors::EmptyEmail));
    }
    #[test]
    fn i3() {
        assert_eq!(validate_email("@"), Err(AppErrors::InvalidEmail));
    }
    #[test]
    fn i4() {
        assert_eq!(validate_email("user@"), Err(AppErrors::InvalidEmail));
    }
    #[test]
    fn i5() {
        assert_eq!(validate_email("@example.com"), Err(AppErrors::InvalidEmail));
    }

    // ---- INVALID: LOCAL PART ----

    #[test]
    fn i6() {
        assert_eq!(
            validate_email(".user@example.com"),
            Err(AppErrors::InvalidEmail)
        );
    }
    #[test]
    fn i7() {
        assert_eq!(
            validate_email("user.@example.com"),
            Err(AppErrors::InvalidEmail)
        );
    }
    #[test]
    fn i8() {
        assert_eq!(
            validate_email("-user@example.com"),
            Err(AppErrors::InvalidEmail)
        );
    }
    #[test]
    fn i9() {
        assert_eq!(
            validate_email("user-@example.com"),
            Err(AppErrors::InvalidEmail)
        );
    }
    #[test]
    fn i10() {
        assert_eq!(
            validate_email("us..er@example.com"),
            Err(AppErrors::InvalidEmail)
        );
    }

    #[test]
    fn i11() {
        assert_eq!(
            validate_email("us er@example.com"),
            Err(AppErrors::InvalidEmail)
        );
    }
    #[test]
    fn i12() {
        assert_eq!(
            validate_email("user!@example.com"),
            Err(AppErrors::InvalidEmail)
        );
    }
    #[test]
    fn i13() {
        assert_eq!(
            validate_email("üser@example.com"),
            Err(AppErrors::InvalidEmail)
        );
    }
    #[test]
    fn i14() {
        assert_eq!(
            validate_email("\nuser@example.com"),
            Err(AppErrors::InvalidEmail)
        );
    }
    #[test]
    fn i15() {
        assert_eq!(
            validate_email("u\tser@example.com"),
            Err(AppErrors::InvalidEmail)
        );
    }

    // ---- INVALID: DOMAIN ----

    #[test]
    fn i16() {
        assert_eq!(
            validate_email("user@.example.com"),
            Err(AppErrors::InvalidEmail)
        );
    }
    #[test]
    fn i17() {
        assert_eq!(
            validate_email("user@example.com."),
            Err(AppErrors::InvalidEmail)
        );
    }
    #[test]
    fn i18() {
        assert_eq!(
            validate_email("user@-example.com"),
            Err(AppErrors::InvalidEmail)
        );
    }
    #[test]
    fn i19() {
        assert_eq!(
            validate_email("user@example-.com"),
            Err(AppErrors::InvalidEmail)
        );
    }
    #[test]
    fn i20() {
        assert_eq!(
            validate_email("user@exam_ple.com"),
            Err(AppErrors::InvalidEmail)
        );
    }

    #[test]
    fn i21() {
        assert_eq!(
            validate_email("user@example..com"),
            Err(AppErrors::InvalidEmail)
        );
    }
    #[test]
    fn i22() {
        assert_eq!(
            validate_email("user@exa..mple.com"),
            Err(AppErrors::InvalidEmail)
        );
    }
    #[test]
    fn i23() {
        assert_eq!(
            validate_email("user@éxample.com"),
            Err(AppErrors::InvalidEmail)
        );
    }
    #[test]
    fn i24() {
        assert_eq!(
            validate_email("user@localhost"),
            Err(AppErrors::InvalidEmail)
        );
    }
    #[test]
    fn i25() {
        assert_eq!(validate_email("user@a"), Err(AppErrors::InvalidEmail));
    }

    // ---- INVALID: TLD ----

    #[test]
    fn i26() {
        assert_eq!(
            validate_email("user@example.c"),
            Err(AppErrors::InvalidEmail)
        );
    }
    #[test]
    fn i27() {
        assert_eq!(
            validate_email("user@example.1"),
            Err(AppErrors::InvalidEmail)
        );
    }
    #[test]
    fn i28() {
        assert_eq!(
            validate_email("user@example.12"),
            Err(AppErrors::InvalidEmail)
        );
    }
    #[test]
    fn i29() {
        assert_eq!(
            validate_email("user@example.-com"),
            Err(AppErrors::InvalidEmail)
        );
    }
    #[test]
    fn i30() {
        assert_eq!(
            validate_email("user@example.com-"),
            Err(AppErrors::InvalidEmail)
        );
    }

    // ---- INVALID: MULTIPLE @ ----

    #[test]
    fn i31() {
        assert_eq!(validate_email("a@b@c.com"), Err(AppErrors::InvalidEmail));
    }
    #[test]
    fn i32() {
        assert_eq!(
            validate_email("user@@example.com"),
            Err(AppErrors::InvalidEmail)
        );
    }

    // ---- INVALID: LENGTH ----

    #[test]
    fn i33() {
        let local = "a".repeat(65);
        let email = format!("{local}@example.com");
        assert_eq!(validate_email(&email), Err(AppErrors::InvalidEmail));
    }

    #[test]
    fn i34() {
        let local = "a".repeat(64);
        let domain = "b".repeat(190);
        let email = format!("{local}@{domain}.com");
        assert_eq!(validate_email(&email), Err(AppErrors::InvalidEmail));
    }

    // ---- INVALID: EDGE SHAPES ----

    #[test]
    fn i35() {
        assert_eq!(validate_email("user@-.com"), Err(AppErrors::InvalidEmail));
    }
    #[test]
    fn i36() {
        assert_eq!(validate_email("user@com-"), Err(AppErrors::InvalidEmail));
    }
    #[test]
    fn i37() {
        assert_eq!(validate_email("user@.com"), Err(AppErrors::InvalidEmail));
    }
    #[test]
    fn i38() {
        assert_eq!(validate_email("user@com."), Err(AppErrors::InvalidEmail));
    }
    #[test]
    fn i39() {
        assert_eq!(validate_email("user@-.-.com"), Err(AppErrors::InvalidEmail));
    }

    // ---- INVALID: CONTROL ----

    #[test]
    fn i40() {
        assert_eq!(
            validate_email("user\0@example.com"),
            Err(AppErrors::InvalidEmail)
        );
    }
    #[test]
    fn i41() {
        assert_eq!(
            validate_email("user\n@example.com"),
            Err(AppErrors::InvalidEmail)
        );
    }
    #[test]
    fn i42() {
        assert_eq!(
            validate_email("user\r@example.com"),
            Err(AppErrors::InvalidEmail)
        );
    }

    // ---- VALID FINAL SANITY ----

    #[test]
    fn v16() {
        assert!(validate_email("real.user+prod@service.company").is_ok());
    }
    #[test]
    fn v17() {
        assert!(validate_email("noreply@github.com").is_ok());
    }
    #[test]
    fn v18() {
        assert!(validate_email("support@google.com").is_ok());
    }
    #[test]
    fn v19() {
        assert!(validate_email("alerts@amazon.co").is_ok());
    }
    #[test]
    fn v20() {
        assert!(validate_email("billing@stripe.com").is_ok());
    }
}
