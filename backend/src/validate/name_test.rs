#[cfg(test)]
mod validate_name_tests {
    use crate::{utility::errors::AppErrors, validate::validate_name::validate_name};

    #[test]
    fn v1() {
        assert_eq!(validate_name("John"), Ok(()));
    }
    #[test]
    fn v2() {
        assert_eq!(validate_name("A B"), Ok(()));
    }
    #[test]
    fn v3() {
        assert_eq!(validate_name("John Doe"), Ok(()));
    }
    #[test]
    fn v4() {
        assert_eq!(validate_name("Jean-Luc"), Ok(()));
    }
    #[test]
    fn v5() {
        assert_eq!(validate_name("O'Connor"), Ok(()));
    }
    #[test]
    fn v6() {
        assert_eq!(validate_name("Mary Jane"), Ok(()));
    }
    #[test]
    fn v7() {
        assert_eq!(validate_name("A1"), Ok(()));
    }
    #[test]
    fn v8() {
        assert_eq!(validate_name("Ab"), Ok(()));
    }
    #[test]
    fn v9() {
        assert_eq!(validate_name("Zx"), Ok(()));
    }
    #[test]
    fn v10() {
        assert_eq!(validate_name("User123"), Ok(()));
    }

    #[test]
    fn v11() {
        assert_eq!(validate_name(&"a".repeat(2)), Ok(()));
    }
    #[test]
    fn v12() {
        assert_eq!(validate_name(&"a".repeat(50)), Ok(()));
    }
    #[test]
    fn v13() {
        assert_eq!(validate_name(&"a".repeat(100)), Ok(()));
    }

    #[test]
    fn i1() {
        assert_eq!(validate_name(""), Err(AppErrors::EmptyName));
    }
    #[test]
    fn i2() {
        assert_eq!(validate_name(" "), Err(AppErrors::EmptyName));
    }
    #[test]
    fn i3() {
        assert_eq!(validate_name("   "), Err(AppErrors::EmptyName));
    }

    #[test]
    fn i4() {
        assert_eq!(validate_name("a"), Err(AppErrors::InvalidName));
    }
    #[test]
    fn i5() {
        assert_eq!(validate_name("Z"), Err(AppErrors::InvalidName));
    }

    #[test]
    fn i6() {
        assert_eq!(validate_name(&"a".repeat(101)), Err(AppErrors::InvalidName));
    }
    #[test]
    fn i7() {
        assert_eq!(validate_name(&"a".repeat(200)), Err(AppErrors::InvalidName));
    }

    #[test]
    fn i8() {
        assert_eq!(validate_name("\n"), Err(AppErrors::EmptyName));
    }
    #[test]
    fn i9() {
        assert_eq!(validate_name("\t"), Err(AppErrors::EmptyName));
    }
    #[test]
    fn i10() {
        assert_eq!(validate_name("\0"), Err(AppErrors::InvalidName));
    }

    #[test]
    fn i11() {
        assert_eq!(validate_name("Jo\nhn"), Err(AppErrors::InvalidName));
    }
    #[test]
    fn i12() {
        assert_eq!(validate_name("Ja\tke"), Err(AppErrors::InvalidName));
    }
    #[test]
    fn i13() {
        assert_eq!(validate_name("A\0B"), Err(AppErrors::InvalidName));
    }

    #[test]
    fn v14() {
        assert_eq!(validate_name("Émile"), Ok(()));
    }
    #[test]
    fn v15() {
        assert_eq!(validate_name("Łukasz"), Ok(()));
    }
    #[test]
    fn v16() {
        assert_eq!(validate_name("Søren"), Ok(()));
    }
    #[test]
    fn v17() {
        assert_eq!(validate_name("Renée"), Ok(()));
    }
    #[test]
    fn v18() {
        assert_eq!(validate_name("İbrahim"), Ok(()));
    }

    #[test]
    fn v19() {
        assert_eq!(validate_name("First Last"), Ok(()));
    }
    #[test]
    fn v20() {
        assert_eq!(validate_name("First Middle Last"), Ok(()));
    }

    #[test]
    fn i14() {
        assert_eq!(validate_name("A"), Err(AppErrors::InvalidName));
    }
    #[test]
    fn i15() {
        assert_eq!(validate_name("B"), Err(AppErrors::InvalidName));
    }

    #[test]
    fn v21() {
        assert_eq!(validate_name("X Æ"), Ok(()));
    }
    #[test]
    fn v22() {
        assert_eq!(validate_name("Test-User"), Ok(()));
    }
    #[test]
    fn v23() {
        assert_eq!(validate_name("User_Name"), Ok(()));
    }

    #[test]
    fn v24() {
        assert_eq!(validate_name("Dr Strange"), Ok(()));
    }
    #[test]
    fn v25() {
        assert_eq!(validate_name("Mr Smith"), Ok(()));
    }

    #[test]
    fn i16() {
        assert_eq!(validate_name("\u{7f}"), Err(AppErrors::InvalidName));
    }
    #[test]
    fn i17() {
        assert_eq!(validate_name("\u{1b}"), Err(AppErrors::InvalidName));
    }

    #[test]
    fn v26() {
        assert_eq!(validate_name("Alpha Beta"), Ok(()));
    }
    #[test]
    fn v27() {
        assert_eq!(validate_name("Gamma Delta"), Ok(()));
    }
    #[test]
    fn v28() {
        assert_eq!(validate_name("Theta Sigma"), Ok(()));
    }
    #[test]
    fn v29() {
        assert_eq!(validate_name("Lambda Mu"), Ok(()));
    }
    #[test]
    fn v30() {
        assert_eq!(validate_name("Omega Phi"), Ok(()));
    }

    #[test]
    fn v31() {
        assert_eq!(validate_name("User One"), Ok(()));
    }
    #[test]
    fn v32() {
        assert_eq!(validate_name("User Two"), Ok(()));
    }
    #[test]
    fn v33() {
        assert_eq!(validate_name("User Three"), Ok(()));
    }
    #[test]
    fn v34() {
        assert_eq!(validate_name("User Four"), Ok(()));
    }
    #[test]
    fn v35() {
        assert_eq!(validate_name("User Five"), Ok(()));
    }

    #[test]
    fn i18() {
        assert_eq!(validate_name("\nJohn"), Err(AppErrors::InvalidName));
    }
    #[test]
    fn i19() {
        assert_eq!(validate_name("John\n"), Err(AppErrors::InvalidName));
    }

    #[test]
    fn v36() {
        assert_eq!(validate_name("Final Test"), Ok(()));
    }
}
