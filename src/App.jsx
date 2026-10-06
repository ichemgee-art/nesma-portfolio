import React from "react";
import { process, projectPlaceholders, services, skills } from "./data.js";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Nesma portfolio home">
          <span className="brand-mark">N</span>
          <span className="brand-name">NESMA</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#services">What I do</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Let&apos;s talk <Arrow />
        </a>
      </header>

      <main>
        <section className="hero section-pad" id="top">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              MARKETING × AI CONTENT
            </div>

            <h1>
              Ideas people
              <span className="hero-accent"> stop for.</span>
            </h1>

            <p className="hero-lead">
              I manage social accounts, shape content ideas and turn concepts into
              AI-powered images and videos made for modern brands.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                See selected work <Arrow />
              </a>
              <a className="button button-ghost" href="#services">
                Explore what I do
              </a>
            </div>

            <div className="hero-meta">
              <div className="status-pill">
                <span className="status-dot" />
                Creative marketing portfolio
              </div>
              <span className="meta-note">Built for ideas, content & growth.</span>
            </div>
          </div>

          <div className="creative-board" aria-label="Creative marketing preview">
            <div className="board-glow board-glow-one" />
            <div className="board-glow board-glow-two" />

            <article className="mock-card mock-main">
              <div className="mock-topline">
                <span>CONTENT STUDIO</span>
                <span className="mini-badge">AI + SOCIAL</span>
              </div>
              <div className="mock-visual">
                <div className="visual-orb orb-one" />
                <div className="visual-orb orb-two" />
                <div className="visual-copy">
                  <span>IDEA</span>
                  <strong>to visual</strong>
                </div>
              </div>
              <div className="mock-caption">
                <div>
                  <span className="tiny-label">Concept</span>
                  <strong>Scroll-stopping content</strong>
                </div>
                <span className="round-arrow">↗</span>
              </div>
            </article>

            <article className="mock-card mock-calendar">
              <div className="card-icon">✦</div>
              <span className="tiny-label">CONTENT PLAN</span>
              <strong>01 → 30</strong>
              <div className="calendar-grid">
                {Array.from({ length: 12 }).map((_, index) => (
                  <span key={index} className={index === 4 || index === 8 ? "active" : ""} />
                ))}
              </div>
            </article>

            <article className="mock-card mock-reel">
              <div className="reel-screen">
                <span className="play-button">▶</span>
                <span className="reel-tag">AI VIDEO</span>
              </div>
              <div className="reel-footer">
                <strong>Concept → Motion</strong>
                <span>9:16</span>
              </div>
            </article>

            <div className="floating-note note-one">fresh ideas ✦</div>
            <div className="floating-note note-two">social-first</div>
          </div>
        </section>

        <section className="skill-strip" aria-label="Skills">
          <div className="skill-track">
            {[...skills, ...skills].map((skill, index) => (
              <span key={`${skill}-${index}`}>
                {skill} <b>✦</b>
              </span>
            ))}
          </div>
        </section>

        <section className="section-pad section-block" id="services">
          <div className="section-heading">
            <div>
              <span className="section-kicker">WHAT I DO</span>
              <h2>Marketing brain. Creative hands.</h2>
            </div>
            <p>
              From managing the account to building the actual creative, the work
              stays connected from idea to publish.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-head">
                  <span>{service.number}</span>
                  <span className="service-tag">{service.tag}</span>
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <span className="service-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad account-section">
          <div className="account-copy">
            <span className="section-kicker light">ACCOUNT MANAGEMENT</span>
            <h2>Not just posting. Keeping the whole account moving.</h2>
            <p>
              Content planning, brand consistency, publishing rhythm, ideas and
              ongoing improvement — all viewed as one system.
            </p>

            <div className="account-points">
              <span>Content calendars</span>
              <span>Platform direction</span>
              <span>Campaign ideas</span>
              <span>Performance thinking</span>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-top">
              <div>
                <span className="tiny-label">SOCIAL OVERVIEW</span>
                <strong>Content pulse</strong>
              </div>
              <span className="live-chip"><i /> Live plan</span>
            </div>

            <div className="dashboard-score">
              <div className="score-ring">
                <span>86</span>
                <small>flow</small>
              </div>
              <div className="score-copy">
                <span className="tiny-label">THIS MONTH</span>
                <strong>Consistent. Clear. Active.</strong>
                <p>Placeholder dashboard for future real account results.</p>
              </div>
            </div>

            <div className="dashboard-bars">
              <div><span>Ideas</span><i style={{ "--bar": "88%" }} /></div>
              <div><span>Visuals</span><i style={{ "--bar": "74%" }} /></div>
              <div><span>Reels</span><i style={{ "--bar": "66%" }} /></div>
            </div>
          </div>
        </section>

        <section className="section-pad section-block creative-lab">
          <div className="section-heading">
            <div>
              <span className="section-kicker">AI CREATIVE LAB</span>
              <h2>Prompts are only the start.</h2>
            </div>
            <p>
              The goal is not to make “AI content”. The goal is to make content
              that fits the brand, feels intentional and earns attention.
            </p>
          </div>

          <div className="lab-grid">
            <article className="lab-card lab-large">
              <div className="lab-art art-one">
                <span className="art-pill">AI IMAGE</span>
                <div className="art-type">
                  <small>CAMPAIGN VISUAL</small>
                  <strong>Build the scene.</strong>
                </div>
              </div>
              <div className="lab-info">
                <div><span>01</span><strong>AI Visual Direction</strong></div>
                <p>Concepts, prompts, composition and brand-fit visual thinking.</p>
              </div>
            </article>

            <article className="lab-card">
              <div className="lab-art art-two">
                <span className="art-pill">AI VIDEO</span>
                <span className="play-button large">▶</span>
                <span className="frame-code">00:08</span>
              </div>
              <div className="lab-info">
                <div><span>02</span><strong>Short-form Motion</strong></div>
                <p>Scene logic, transitions and vertical content designed for feeds.</p>
              </div>
            </article>

            <article className="lab-card">
              <div className="lab-art art-three">
                <div className="idea-stack">
                  <span>HOOK</span>
                  <span>ANGLE</span>
                  <span>VISUAL</span>
                  <span>CTA</span>
                </div>
              </div>
              <div className="lab-info">
                <div><span>03</span><strong>Content Concepts</strong></div>
                <p>Strong ideas before production, so every piece has a reason to exist.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section-pad process-section">
          <div className="process-title">
            <span className="section-kicker">MY FLOW</span>
            <h2>Simple process.<br />Better content.</h2>
          </div>

          <div className="process-list">
            {process.map((item, index) => (
              <article className="process-item" key={item.step}>
                <span className="process-num">0{index + 1}</span>
                <h3>{item.step}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad section-block" id="work">
          <div className="section-heading work-heading">
            <div>
              <span className="section-kicker">SELECTED WORK</span>
              <h2>Space ready for the real projects.</h2>
            </div>
            <p>
              The layout is ready. In the next pass we replace these placeholders
              with actual accounts, visuals, videos and case-study results.
            </p>
          </div>

          <div className="projects-list">
            {projectPlaceholders.map((project, index) => (
              <article className="project-row" key={project.index}>
                <div className={`project-thumb project-thumb-${index + 1}`}>
                  <span>{project.index}</span>
                  <div className="thumb-window">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <div className="project-copy">
                  <span>{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.note}</p>
                </div>
                <span className="project-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad about-section" id="about">
          <div className="about-card">
            <span className="section-kicker">ABOUT</span>
            <h2>
              A 21-year-old marketer who likes the space between
              <em> strategy and creativity.</em>
            </h2>
            <p>
              This section is intentionally ready for the personal story. We&apos;ll
              add the real bio, experience, tools and photo once the design direction
              is approved.
            </p>
            <div className="about-tags">
              <span>Marketing</span>
              <span>Social</span>
              <span>AI Creation</span>
              <span>Creative Thinking</span>
            </div>
          </div>

          <div className="about-side">
            <div className="portrait-placeholder">
              <span>PHOTO</span>
              <strong>your portrait goes here</strong>
            </div>
            <div className="personal-placeholder">
              <span className="tiny-label">NEXT PASS</span>
              <p>Name · photo · bio · tools · experience · contact details</p>
            </div>
          </div>
        </section>

        <section className="section-pad contact-section" id="contact">
          <span className="section-kicker light">LET&apos;S CREATE</span>
          <h2>Have a brand that needs fresh content?</h2>
          <p>
            Contact details will be connected here after the design approval.
          </p>
          <a className="contact-button" href="#top">
            Portfolio draft ready <Arrow />
          </a>
          <div className="contact-orb" />
        </section>
      </main>

      <footer className="footer">
        <div>
          <span className="brand-mark small">N</span>
          <strong>NESMA</strong>
        </div>
        <span>Marketing · Account Management · AI Content</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}

export default App;
