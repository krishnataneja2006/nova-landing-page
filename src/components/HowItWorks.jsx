const steps = [
  {
    number: "01",
    title: "Bring your work together",
    description:
      "Create a workspace and bring your projects, tasks and team into one organized place.",
  },
  {
    number: "02",
    title: "Automate the busywork",
    description:
      "Use NOVA's intelligent automation to handle repetitive tasks and keep workflows moving.",
  },
  {
    number: "03",
    title: "Work smarter together",
    description:
      "Collaborate in real time, understand your progress and make better decisions with your team.",
  },
];

function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="section-container">

        <div className="section-heading">
          <span className="section-tag">HOW IT WORKS</span>

          <h2>
            From idea to done,
            <span> without the busywork.</span>
          </h2>

          <p>
            Getting started with NOVA takes minutes. Bring your team in,
            set up your workflow and let NOVA take care of the rest.
          </p>
        </div>

        <div className="steps-grid">

          {steps.map((step, index) => (
            <article className="step-card" key={step.number}>

              <div className="step-top">
                <span className="step-number">{step.number}</span>

                {index < steps.length - 1 && (
                  <span className="step-line"></span>
                )}
              </div>

              <div className="step-icon">
                {index === 0 && "▦"}
                {index === 1 && "✦"}
                {index === 2 && "✓"}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;