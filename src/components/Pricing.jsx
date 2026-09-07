import { useState } from "react";

function Pricing() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthly: 0,
      annual: 0,
      description: "For individuals getting started with smarter work.",
      features: [
        "Up to 3 team members",
        "Basic project management",
        "Task management",
        "5 GB storage",
        "Email support",
      ],
      button: "Get started",
    },
    {
      name: "Growth",
      monthly: 12,
      annual: 9,
      description: "For growing teams that want to move faster.",
      features: [
        "Unlimited team members",
        "AI-powered automation",
        "Advanced analytics",
        "50 GB storage",
        "Priority support",
        "Custom workflows",
      ],
      button: "Start free trial",
      popular: true,
    },
    {
      name: "Scale",
      monthly: 29,
      annual: 24,
      description:
        "For organizations that need maximum power and flexibility.",
      features: [
        "Everything in Growth",
        "Unlimited storage",
        "Advanced security",
        "Custom integrations",
        "Dedicated support",
        "Team permissions",
      ],
      button: "Contact sales",
    },
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="section-container">

        <div className="section-heading">
          <span className="section-badge">SIMPLE PRICING</span>

          <h2 className="section-title">
            Choose the plan that
            <br />
            <span>fits your team.</span>
          </h2>

          <p className="section-description">
            Start free and upgrade when your team is ready.
            No complicated contracts or hidden fees.
          </p>
        </div>

        <div className="pricing-toggle-wrapper">
          <span className={!annual ? "active" : ""}>
            Monthly
          </span>

          <button
            type="button"
            className={`pricing-toggle ${annual ? "annual" : ""}`}
            onClick={() => setAnnual(!annual)}
            aria-label="Toggle between monthly and annual pricing"
            aria-pressed={annual}
          >
            <span></span>
          </button>

          <span className={annual ? "active" : ""}>
            Annual
          </span>

          <small>Save up to 20%</small>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => {
            const price = annual ? plan.annual : plan.monthly;

            return (
              <article
                className={`pricing-card ${
                  plan.popular ? "popular" : ""
                }`}
                key={plan.name}
              >
                {plan.popular && (
                  <div className="popular-badge">
                    Most Popular
                  </div>
                )}

                <div className="pricing-card-header">
                  <h3>{plan.name}</h3>

                  <p>{plan.description}</p>

                  <div className="price">
                    <span>$</span>
                    <strong>{price}</strong>
                    <small>/month</small>
                  </div>
                </div>

                <div className="pricing-features">
                  {plan.features.map((feature) => (
                    <div
                      className="pricing-feature"
                      key={feature}
                    >
                      <span>✓</span>
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={
                    plan.popular
                      ? "pricing-button primary"
                      : "pricing-button"
                  }
                >
                  {plan.button}
                </a>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Pricing;