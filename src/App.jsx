import Starfield from './components/Starfield';
import CitySkyline from './components/CitySkyline';
import FloatingNav from './components/FloatingNav';
import { GitHubIcon, LinkedInIcon, EmailIcon } from './components/Icons';
import useReveal from './hooks/useReveal';

const projects = [
  {
    title: 'DAISY',
    subtitle: 'Serverless E2EE Communication Tool',
    tag: 'Security & Protocol Design',
    desc: 'Engineered a zero-infrastructure, browser-based application for secure voice, text, and file sharing, bypassing central servers and WebRTC by leveraging Nostr relays for metadata-minimized message transport.',
    bullets: [
      <>Invented the <strong>Daisy Key Exchange (DKE)</strong>, a custom blind role negotiation protocol utilizing a lexicographical tie-breaker handshake to establish anonymous peer-to-peer connections.</>,
      'Implemented Web Workers for isolated cryptographic operations, integrating AES-256-GCM encryption and ephemeral ECDH key exchange to guarantee Perfect Forward Secrecy (PFS).',
      'Hardened the application against state-machine exploits and metadata leakage via traffic obfuscation and automated red-team testing.',
    ],
    tech: ['Nostr Relays', 'AES-256-GCM', 'ECDH', 'Web Workers', 'Cryptography'],
    icon: '🔒',
    accent: 'var(--accent)',
  },
  {
    title: 'ML Fingerprint ID',
    subtitle: 'Gender Identification via Fingerprint',
    tag: 'AI / Computer Vision',
    desc: 'Developed a machine learning application to identify gender based on fingerprint scans, successfully achieving an 80% accuracy rate. Processed datasets and trained identification models with target to publish in IEEE.',
    bullets: [],
    tech: ['Python', 'Machine Learning', 'TensorFlow', 'Data Processing'],
    icon: '🧠',
    accent: 'var(--accent-purple)',
  },
  {
    title: 'IoT Motion Alarm',
    subtitle: 'Motion-Detecting Alarm System',
    tag: 'Microservices & Infra',
    desc: 'Developed a custom motion-detecting hardware monitoring system utilizing an ESP8266 module. Programmed backend infrastructure using Flask and deployed on Render, integrating UptimeRobot for continuous remote health monitoring.',
    bullets: [],
    tech: ['ESP8266', 'Flask', 'Python', 'Render', 'UptimeRobot'],
    icon: '📡',
    accent: 'var(--accent-blue)',
  },
  {
    title: 'HexHive Solutions',
    subtitle: 'Startup Company Website',
    tag: 'Startup & Web Dev',
    desc: 'Built the complete website for HexHive Solutions — a tech career accelerator startup offering expert-led programs in DevOps, Full-Stack Development, and Embedded Systems. Designed and shipped a production-grade React app with SEO, responsive design, and modern UI.',
    bullets: [],
    tech: ['React', 'JavaScript', 'SEO', 'Responsive Design', 'Google Fonts'],
    icon: '🐝',
    accent: 'var(--accent-pink)',
    link: 'https://hexhivesolutions.com/',
  },
];

const skills = [
  { icon: '⌨️', title: 'Programming & Scripting', items: ['Python', 'Java', 'JavaScript / Web Workers'] },
  { icon: '🔐', title: 'Cryptography & Protocols', items: ['AES-256-GCM', 'ECDH (Forward Secrecy)', 'Nostr Relays', 'DKE (Blind Role Negotiation)'] },
  { icon: '🌐', title: 'Backend & Web Technologies', items: ['Spring Boot', 'Flask', 'Flutter'] },
];

export default function App() {
  useReveal();

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero" id="top">
        <Starfield />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="hero-overlay">
          <div className="hero-status">
            <span className="status-dot" />
            Open to opportunities
          </div>
          <p className="hero-hello">Hello, my name is</p>
          <h1 className="hero-name">Shankar.</h1>
          <p className="hero-tagline">
            I build things with code, circuits, and cryptography — from end-to-end encrypted systems to IoT ecosystems.
          </p>
          <div className="hero-socials">
            <a href="/Shankar_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-social-link resume-hero-link">
              <span>📄 View Resume</span>
            </a>
            <a href="https://github.com/shankarx831" target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <GitHubIcon /> <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/sankara-narayanan-ramaligame-10b3b9387" target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <LinkedInIcon /> <span>LinkedIn</span>
            </a>
            <a href="mailto:sankaranarayanan05062008@gmail.com" className="hero-social-link">
              <EmailIcon /> <span>Email</span>
            </a>
          </div>
        </div>
        <CitySkyline />
        <a className="scroll-indicator" href="#projects">
          <span>Scroll</span>
          <div className="scroll-line" />
        </a>
      </section>

      {/* ── Projects ── */}
      <section className="section" id="projects">
        <div className="section-header reveal">
          <span className="section-label">✦ What I&apos;ve Built</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider" />
        </div>

        {/* Featured / Spotlight project */}
        <div className="project-spotlight reveal">
          <div className="spotlight-glow" />
          <div className="spotlight-badge">⭐ Featured</div>
          <div className="spotlight-icon">{projects[0].icon}</div>
          <h3 className="spotlight-title">{projects[0].title}</h3>
          <p className="spotlight-subtitle">{projects[0].subtitle}</p>
          <p className="spotlight-desc">{projects[0].desc}</p>
          <ul className="spotlight-bullets">
            {projects[0].bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
          <div className="tech-pills">
            {projects[0].tech.map((t) => (
              <span className="pill" key={t}>{t}</span>
            ))}
          </div>
        </div>

        {/* Other projects in a bento grid */}
        <div className="bento-grid">
          {projects.slice(1).map((p, i) => (
            <div className="bento-card reveal" key={i} style={{ transitionDelay: `${(i + 1) * 0.15}s` }}>
              <div className="bento-icon" style={{ background: `linear-gradient(135deg, ${p.accent}, transparent)` }}>
                {p.icon}
              </div>
              <span className="bento-tag">{p.tag}</span>
              <h3 className="bento-title">{p.title}</h3>
              <p className="bento-subtitle">{p.subtitle}</p>
              <p className="bento-desc">{p.desc}</p>
              <div className="tech-pills">
                {p.tech.map((t) => (
                  <span className="pill" key={t}>{t}</span>
                ))}
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="bento-link">
                  Visit Live ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="section" id="skills">
        <div className="section-header reveal">
          <span className="section-label">✦ My Toolkit</span>
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider" />
        </div>
        <div className="skills-showcase">
          {skills.map((s, i) => (
            <div className="skill-row reveal" key={i} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="skill-row-header">
                <span className="skill-row-icon">{s.icon}</span>
                <span className="skill-row-title">{s.title}</span>
                <span className="skill-row-count">{s.items.length} skills</span>
              </div>
              <div className="skill-row-items">
                {s.items.map((item, j) => (
                  <span className="skill-chip" key={item} style={{ animationDelay: `${j * 0.05}s` }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Education ── */}
      <section className="section" id="education">
        <div className="section-header reveal">
          <span className="section-label">✦ Background</span>
          <h2 className="section-title">Education & Achievements</h2>
          <div className="section-divider" />
        </div>
        <div className="edu-cards">
          <div className="edu-card reveal">
            <div className="edu-card-icon">🎓</div>
            <div className="edu-card-content">
              <div className="edu-card-header">
                <h3 className="edu-card-title">B.Tech in Information Technology</h3>
                <span className="edu-card-date">2025 – 2029</span>
              </div>
              <p className="edu-card-institution">Sri Manakula Vinayagar Engineering College (SMVEC)</p>
              <p className="edu-card-location">📍 Puducherry, India</p>
            </div>
          </div>

          <div className="edu-card reveal" style={{ transitionDelay: '.15s' }}>
            <div className="edu-card-icon">🏆</div>
            <div className="edu-card-content">
              <div className="edu-card-header">
                <h3 className="edu-card-title">Scholarships & Achievements</h3>
                <span className="edu-card-date">2026</span>
              </div>
              <div className="edu-card-achievements">
                <div className="achievement">
                  <span className="achievement-marker" />
                  <p><strong>Foundation for Excellence (FFE):</strong> 2026 Scholarship Candidate.</p>
                </div>
                <div className="achievement">
                  <span className="achievement-marker" />
                  <p><strong>OA Techfest:</strong> Participant in regional technology and AI seminars.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="section cta-section" id="contact">
        <div className="cta-container reveal">
          <div className="cta-glow" />
          <span className="section-label">✦ Get In Touch</span>
          <h2 className="cta-title">Let&apos;s Build Something Together</h2>
          <p className="cta-desc">
            I&apos;m currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi — my inbox is always open.
          </p>
          <a href="mailto:sankaranarayanan05062008@gmail.com" className="cta-button">
            Say Hello →
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-socials">
          <a href="https://github.com/shankarx831" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href="https://linkedin.com/in/sankara-narayanan-ramaligame-10b3b9387" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="mailto:sankaranarayanan05062008@gmail.com" aria-label="Email">
            <EmailIcon />
          </a>
        </div>
        <p>Designed & Built by Shankar with lot of caffeine ☕</p>
      </footer>

      <FloatingNav />
    </>
  );
}
