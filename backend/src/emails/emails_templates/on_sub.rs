pub struct EmailTemplate {
    pub subject: &'static str,
    pub body: String,
}

impl EmailTemplate {
    pub fn welcome(name: &str) -> Self {
        Self {
            subject: "Welcome to Phantom!",
            body: format!(
                "Hey {name},\n\nWelcome to Phantom! You're now subscribed to our weekly updates.\n\nEvery week you'll hear about our progress, competitions, and team achievements.\n\nRegards,\nTeam Phantom"
            ),
        }
    }
}
