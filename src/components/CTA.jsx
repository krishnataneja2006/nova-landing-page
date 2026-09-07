function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-background">
        <div className="cta-glow"></div>
      </div>

      <div className="section-container">

        <div className="cta-content">

          <span className="section-tag">GET STARTED TODAY</span>

          <h2>
            Ready to make
            <span> work better?</span>
          </h2>

          <p>
            Join thousands of teams using NOVA to simplify their work,
            automate busywork and accomplish more together.
          </p>

          <div className="cta-actions">
            <a href="#pricing" className="cta-primary">
              Start for free <span>→</span>
            </a>

            <a href="#faq" className="cta-secondary">
              Have questions?
            </a>
          </div>

          <small>No credit card required · Free forever plan · Setup in minutes</small>

        </div>

      </div>
    </section>
  );
}

export default CTA;