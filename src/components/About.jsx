function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">

        <div className="about-grid">

          <div className="about-visual">
            <div className="about-window">

              <div className="window-top">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="window-title">NOVA Workspace</span>
              </div>

              <div className="workspace-content">

                <aside className="workspace-sidebar">
                  <div className="sidebar-logo">N.</div>

                  <div className="sidebar-item active">
                    <span>▦</span>
                    Overview
                  </div>

                  <div className="sidebar-item">
                    <span>✓</span>
                    Tasks
                  </div>

                  <div className="sidebar-item">
                    <span>◫</span>
                    Projects
                  </div>

                  <div className="sidebar-item">
                    <span>◉</span>
                    Team
                  </div>
                </aside>

                <div className="workspace-main">

                  <div className="workspace-heading">
                    <div>
                      <span>MONDAY, SEPTEMBER 7</span>
                      <h3>Good morning, Alex 👋</h3>
                    </div>

                    <div className="profile-circle">A</div>
                  </div>

                  <div className="workspace-cards">

                    <div className="workspace-card">
                      <span>Tasks completed</span>
                      <strong>28</strong>
                      <small>↑ 24% this week</small>
                    </div>

                    <div className="workspace-card">
                      <span>Team productivity</span>
                      <strong>91%</strong>
                      <small>↑ 8% this month</small>
                    </div>

                  </div>

                  <div className="workspace-project">
                    <div className="project-header">
                      <span>Project overview</span>
                      <strong>76%</strong>
                    </div>

                    <div className="project-bar">
                      <div></div>
                    </div>

                    <div className="project-items">
                      <div>
                        <span className="check">✓</span>
                        Website redesign
                        <small>Completed</small>
                      </div>

                      <div>
                        <span className="check">✓</span>
                        Product strategy
                        <small>Completed</small>
                      </div>

                      <div>
                        <span className="pending-check">○</span>
                        Launch campaign
                        <small>In progress</small>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            <div className="about-floating">
              <span>✦</span>
              <div>
                <strong>AI suggestion</strong>
                <small>3 tasks automated</small>
              </div>
            </div>
          </div>

          <div className="about-content">

            <span className="section-tag">ONE SMART WORKSPACE</span>

            <h2>
              Your work,
              <span> beautifully organized.</span>
            </h2>

            <p>
              NOVA brings your projects, people and processes together in
              one intelligent workspace. Spend less time managing work
              and more time doing meaningful work.
            </p>

            <div className="about-points">

              <div className="about-point">
                <div className="point-icon">✓</div>
                <div>
                  <h3>Everything in one place</h3>
                  <p>
                    Keep projects, tasks, conversations and files organized
                    without switching between different tools.
                  </p>
                </div>
              </div>

              <div className="about-point">
                <div className="point-icon">✦</div>
                <div>
                  <h3>AI that works for you</h3>
                  <p>
                    Let intelligent automation take care of repetitive
                    work so your team can focus on higher-value tasks.
                  </p>
                </div>
              </div>

              <div className="about-point">
                <div className="point-icon">↗</div>
                <div>
                  <h3>Built to help teams grow</h3>
                  <p>
                    From small teams to growing organizations, NOVA
                    adapts to the way you work.
                  </p>
                </div>
              </div>

            </div>

            <a href="#how-it-works" className="about-link">
              Explore how NOVA works <span>→</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;