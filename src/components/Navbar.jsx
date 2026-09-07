import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
          aria-label="NOVA home"
        >
          NOVA<span>.</span>
        </a>

        <nav
          id="main-navigation"
          className={`nav-links ${menuOpen ? "active" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#features" onClick={closeMenu}>
            Features
          </a>

          <a href="#how-it-works" onClick={closeMenu}>
            How It Works
          </a>

          <a href="#solutions" onClick={closeMenu}>
            Solutions
          </a>

          <a href="#pricing" onClick={closeMenu}>
            Pricing
          </a>

          <a href="#faq" onClick={closeMenu}>
            FAQ
          </a>
        </nav>

        <a href="#contact" className="nav-button">
          Get Started
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;