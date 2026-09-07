function Features() {
  const features = [
    {
      icon: "✦",
      title: "AI-Powered Automation",
      description:
        "Automate repetitive work and let intelligent workflows handle the busywork for your team.",
    },
    {
      icon: "✓",
      title: "Smart Project Management",
      description:
        "Plan projects, organize tasks, and keep every deadline visible from one workspace.",
    },
    {
      icon: "↗",
      title: "Real-Time Collaboration",
      description:
        "Work together seamlessly with shared projects, updates, comments, and team communication.",
    },
    {
      icon: "▥",
      title: "Powerful Analytics",
      description:
        "Understand team performance with clear insights, reports, and productivity metrics.",
    },
    {
      icon: "⌘",
      title: "Workflow Integration",
      description:
        "Connect the tools your team already uses and create smoother workflows across your stack.",
    },
    {
      icon: "◆",
      title: "Secure Workspace",
      description:
        "Keep your team's projects and information protected with a secure workspace built for modern teams.",
    },
    {
      icon: "◷",
      title: "Time Tracking",
      description:
        "Track time effortlessly and understand exactly where your team's effort is going.",
    },
    {
      icon: "⚙",
      title: "Custom Workflows",
      description:
        "Build workflows around the way your team works instead of changing your process to fit the tool.",
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="section-container">

        <div className="section-heading">
          <span className="section-badge">POWERFUL FEATURES</span>

          <h2 className="section-title">
            Everything your team needs
            <br />
            to <span>work smarter.</span>
          </h2>

          <p className="section-description">
            NOVA combines powerful productivity tools with intelligent
            automation to help your team move faster and stay focused.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <a href="#contact" className="feature-link">
                Learn more →
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;