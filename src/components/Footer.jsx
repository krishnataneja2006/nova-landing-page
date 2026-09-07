import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const footerLinks = {
    Product: ["Features", "Pricing", "Solutions", "Updates"],
    Company: ["About", "Careers", "Contact", "Partners"],
    Resources: ["Help Center", "Documentation", "Guides", "Community"],
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("You're subscribed! 🎉");
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              NOVA<span>.</span>
            </a>

            <p>
              The intelligent workspace that helps teams
              build better and work smarter.
            </p>

            <div className="footer-socials">
              <a href="#home" aria-label="LinkedIn">in</a>
              <a href="#home" aria-label="Twitter">𝕏</a>
              <a href="#home" aria-label="Instagram">◎</a>
            </div>
          </div>

          <div className="footer-links-wrapper">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div className="footer-column" key={category}>
                <h3>{category}</h3>

                {links.map((link) => (
                  <a href="#home" key={link}>
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>

          <div className="footer-newsletter">
            <h3>Stay in the loop</h3>

            <p>
              Get productivity tips, product updates,
              and useful resources.
            </p>

            <form
              className="newsletter-form"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setMessage("");
                }}
                aria-label="Email address"
              />

              <button type="submit">
                Subscribe
              </button>
            </form>

            {message && (
              <p className="newsletter-message">
                {message}
              </p>
            )}
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 NOVA. All rights reserved.</p>

          <div>
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;