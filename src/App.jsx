import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Statistics from "./components/Statistics";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ScrollReveal />

      <Navbar />

      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle dark mode"
        title="Toggle dark mode"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      <main>
        <Hero />

        <div className="reveal">
          <TrustedBy />
        </div>

        <div className="reveal">
          <Features />
        </div>

        <div className="reveal">
          <About />
        </div>

        <div className="reveal">
          <HowItWorks />
        </div>

        <div className="reveal">
          <Statistics />
        </div>

        <div className="reveal">
          <Solutions />
        </div>

        <div className="reveal">
          <Testimonials />
        </div>

        <div className="reveal">
          <Pricing />
        </div>

        <div className="reveal">
          <FAQ />
        </div>

        <div className="reveal">
          <CTA />
        </div>
      </main>

      <Footer />

      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default App;