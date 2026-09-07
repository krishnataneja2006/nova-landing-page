import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "What is NOVA?",
      answer:
        "NOVA is an intelligent productivity platform that brings projects, tasks, collaboration, and automation together in one workspace.",
    },
    {
      question: "Can I try NOVA for free?",
      answer:
        "Yes. You can start with the free Starter plan and upgrade whenever your team needs more features.",
    },
    {
      question: "How does AI automation work?",
      answer:
        "NOVA uses intelligent automation to handle repetitive tasks, organize workflows, and help your team spend more time on meaningful work.",
    },
    {
      question: "Can I invite my entire team?",
      answer:
        "Yes. You can invite your teammates and collaborate together using shared projects, tasks, workflows, and communication tools.",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "Yes. You can change your plan as your team's needs grow. You can start small and upgrade whenever you're ready.",
    },
    {
      question: "Is my team's data secure?",
      answer:
        "NOVA is designed with security in mind, helping teams keep their projects, workflows, and information protected.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section className="faq-section" id="faq">
      <div className="section-container">

        <div className="section-heading">
          <span className="section-badge">FAQ</span>

          <h2 className="section-title">
            Questions?
            <br />
            <span>We've got answers.</span>
          </h2>

          <p className="section-description">
            Everything you need to know about NOVA.
            Can't find what you're looking for? Get in touch with our team.
          </p>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`faq-item ${isOpen ? "open" : ""}`}
                key={item.question}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{item.question}</span>

                  <span className="faq-icon">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer-wrapper"
                  aria-hidden={!isOpen}
                >
                  <div className="faq-answer">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FAQ;