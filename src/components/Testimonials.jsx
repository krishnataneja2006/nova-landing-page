const testimonials = [
  {
    quote:
      "NOVA completely changed how our team manages projects. We spend less time organizing work and more time actually getting it done.",
    name: "Sarah Mitchell",
    role: "Head of Marketing",
    company: "Vertex",
    initials: "SM",
  },
  {
    quote:
      "The automation alone has saved our team hours every week. Everything feels more organized and everyone knows exactly what needs to happen next.",
    name: "Daniel Carter",
    role: "Product Manager",
    company: "Nexora",
    initials: "DC",
  },
  {
    quote:
      "We replaced several disconnected tools with NOVA. The team collaboration and visibility we've gained have been incredible.",
    name: "Maya Rodriguez",
    role: "Operations Lead",
    company: "Lumen",
    initials: "MR",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="section-container">

        <div className="section-heading">
          <span className="section-tag">CUSTOMER STORIES</span>

          <h2>
            Loved by teams
            <span> that get things done.</span>
          </h2>

          <p>
            See why growing teams choose NOVA to simplify their work
            and build better workflows.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article
              className="testimonial-card"
              key={testimonial.name}
            >
              <div className="testimonial-stars">
                ★ ★ ★ ★ ★
              </div>

              <blockquote>
                "{testimonial.quote}"
              </blockquote>

              <div className="testimonial-author">

                <div className="author-avatar">
                  {testimonial.initials}
                </div>

                <div>
                  <strong>{testimonial.name}</strong>

                  <span>
                    {testimonial.role} · {testimonial.company}
                  </span>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;