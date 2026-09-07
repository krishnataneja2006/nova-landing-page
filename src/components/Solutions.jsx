function Solutions() {
  const solutions = [
    {
      number: "01",
      title: "Marketing Teams",
      description:
        "Plan campaigns, manage content, and keep your marketing team aligned from one place.",
      tags: ["Campaigns", "Content", "Analytics"],
    },
    {
      number: "02",
      title: "Product Teams",
      description:
        "Turn ideas into organized roadmaps, prioritize tasks, and ship better products faster.",
      tags: ["Roadmaps", "Tasks", "Planning"],
    },
    {
      number: "03",
      title: "Remote Teams",
      description:
        "Keep distributed teams connected with clear communication, shared workflows, and visibility.",
      tags: ["Remote Work", "Collaboration", "Communication"],
    },
    {
      number: "04",
      title: "Growing Businesses",
      description:
        "Create scalable workflows that help your business stay organized as your team grows.",
      tags: ["Growth", "Automation", "Operations"],
    },
  ];

  return (
    <section className="solutions-section" id="solutions">
      <div className="section-container">

        <div className="section-heading">
          <span className="section-badge">BUILT FOR YOUR TEAM</span>

          <h2 className="section-title">
            One platform.
            <br />
            <span>Endless possibilities.</span>
          </h2>

          <p className="section-description">
            Whether you're launching campaigns, building products,
            or managing a growing business, NOVA adapts to the way
            your team works.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => (
            <article
              className="solution-card"
              key={solution.title}
            >
              <span className="solution-number">
                {solution.number}
              </span>

              <h3>{solution.title}</h3>

              <p>{solution.description}</p>

              <div className="solution-tags">
                {solution.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a href="#contact" className="solution-link">
                Explore solution →
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Solutions;