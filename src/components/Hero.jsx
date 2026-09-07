import { useState } from "react";

function Hero() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-container">

          <div className="hero-content">
            <div className="hero-badge">
              ✨ AI-powered productivity platform
            </div>

            <h1>
              Build better.
              <br />
              <span>Work smarter.</span>
            </h1>

            <p>
              NOVA brings your team's projects, tasks, communication,
              and workflows together in one intelligent workspace.
            </p>

            <div className="hero-buttons">
              <a href="#pricing" className="primary-button">
                Start for free
              </a>

              <button
                type="button"
                className="secondary-button"
                onClick={() => setShowDemo(true)}
              >
                ▶ See how it works
              </button>
            </div>

            <div className="hero-trust">
              <div className="avatar-group">
                <span>AK</span>
                <span>RM</span>
                <span>JS</span>
                <span>PK</span>
              </div>

              <div>
                <strong>10,000+ teams</strong>
                <p>already working smarter</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-glow"></div>

            <div className="dashboard-card">

              <div className="dashboard-header">
                <div>
                  <span className="small-label">Overview</span>
                  <h3>Good morning, Alex 👋</h3>
                </div>

                <div className="profile-circle">
                  A
                </div>
              </div>

              <div className="dashboard-stats">

                <div className="dashboard-stat">
                  <span>Tasks</span>
                  <strong>24</strong>
                  <small>↑ 18%</small>
                </div>

                <div className="dashboard-stat">
                  <span>Completed</span>
                  <strong>86%</strong>
                  <small>↑ 12%</small>
                </div>

              </div>

              <div className="dashboard-chart">

                <div className="chart-header">
                  <span>Weekly productivity</span>
                  <strong>+38%</strong>
                </div>

                <div className="chart-bars">
                  <span style={{ height: "35%" }}></span>
                  <span style={{ height: "50%" }}></span>
                  <span style={{ height: "42%" }}></span>
                  <span style={{ height: "65%" }}></span>
                  <span style={{ height: "58%" }}></span>
                  <span style={{ height: "78%" }}></span>
                  <span style={{ height: "92%" }}></span>
                </div>

              </div>

              <div className="dashboard-tasks">

                <div className="task-heading">
                  <strong>Today's tasks</strong>
                  <span>View all</span>
                </div>

                <div className="task-item">
                  <span className="task-check">✓</span>

                  <div>
                    <strong>Launch campaign</strong>
                    <small>Marketing</small>
                  </div>

                  <span className="task-status">
                    Done
                  </span>
                </div>

                <div className="task-item">
                  <span className="task-check pending"></span>

                  <div>
                    <strong>Review product roadmap</strong>
                    <small>Product</small>
                  </div>

                  <span className="task-status pending-text">
                    In progress
                  </span>
                </div>

              </div>

            </div>

            <div className="floating-card ai-card">
              <span className="floating-icon">✦</span>

              <div>
                <strong>AI Assistant</strong>
                <p>3 tasks automated</p>
              </div>
            </div>

            <div className="floating-card productivity-card">
              <span>⚡</span>

              <div>
                <strong>+38%</strong>
                <p>Productivity</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {showDemo && (
        <div
          className="demo-overlay"
          onClick={() => setShowDemo(false)}
        >
          <div
            className="demo-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="demo-close"
              onClick={() => setShowDemo(false)}
              aria-label="Close demo"
            >
              ×
            </button>

            <div className="demo-icon">
              ▶
            </div>

            <h2>See NOVA in action</h2>

            <p>
              Imagine your entire team working from one intelligent
              workspace. NOVA automates repetitive tasks, organizes
              projects, and keeps everyone aligned.
            </p>

            <div className="demo-preview">
              <div className="demo-play">
                ▶
              </div>

              <span>
                Product demo preview
              </span>
            </div>

            <a
              href="#pricing"
              className="primary-button"
              onClick={() => setShowDemo(false)}
            >
              Start for free
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;