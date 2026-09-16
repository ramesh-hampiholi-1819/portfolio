import { useState } from 'react'
import type { CSSProperties, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import {
  ArrowUp,
  ArrowUpRight,
  Atom,
  Braces,
  Check,
  Database,
  FolderOpen,
  GraduationCap,
  Layout,
  Mail,
  Menu,
  Network,
  QrCode,
  Rocket,
  Send,
  Server,
  Sparkles,
  UserRound,
  Wrench,
  X,
  Zap,
} from 'lucide-react'
import { NavLink, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { learningPath, projects, skillGroups } from './data/projects'
import './App.css'

const Github = ({ size = 18 }: { size?: number }) => (
  <span style={{ font: `${Math.max(10, size - 4)}px var(--mono)`, fontWeight: 700 }}>GH</span>
)

const Linkedin = ({ size = 18 }: { size?: number }) => (
  <span style={{ font: `${Math.max(10, size - 4)}px var(--mono)`, fontWeight: 700 }}>in</span>
)

const navItems = [
  ['Home', '/'],
  ['About', '/about'],
  ['Skills', '/skills'],
  ['Projects', '/projects'],
  ['Education', '/education'],
  ['Contact', '/contact'],
]

const skillIconMap = {
  code: Braces,
  layout: Layout,
  server: Server,
  database: Database,
  wrench: Wrench,
  sparkles: Sparkles,
}

const projectIconMap = {
  attendance: Network,
  chess: Atom,
  auth: UserRound,
  files: FolderOpen,
  qr: QrCode,
  treasure: Zap,
}

function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="navbar">
        <NavLink className="logo" to="/" aria-label="Ramesh Hampiholi home" onClick={() => setMenuOpen(false)}>
          <span>R</span>H<span className="logo-dot">.</span>
        </NavLink>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <NavLink className="nav-cta" to="/contact" onClick={() => setMenuOpen(false)}>
          Let's talk <ArrowUpRight size={16} />
        </NavLink>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="section-wrap footer-inner">
          <NavLink className="logo" to="/" aria-label="Ramesh Hampiholi home">
            <span>R</span>H<span className="logo-dot">.</span>
          </NavLink>

          <p>
            Ramesh Hampiholi
            <br />
            <span>BCA Student · Developer · AI & Data Science Enthusiast</span>
          </p>

          <div className="footer-links">
            <a href="https://github.com/ramesh-hampiholi-1819" target="_blank" rel="noreferrer">GitHub</a>
            <a href="/contact">LinkedIn</a>
            <a href="mailto:replace-with-your-email@example.com">Email</a>
          </div>
        </div>

        <div className="footer-bottom section-wrap">
          <span>© 2026 Ramesh Hampiholi. All rights reserved.</span>
          <NavLink to="/">Back to top <ArrowUp size={14} /></NavLink>
        </div>
      </footer>
    </div>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero section-wrap">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="eyebrow-line" /> Available for learning & collaboration</p>
          <h1>
            Hi, I'm <em>Ramesh.</em><br />
            <span>Building ideas into</span><br />
            <strong>digital experiences.</strong>
          </h1>
          <p className="hero-text">BCA student and developer exploring AI, Data Science, Web Development and Software Engineering.</p>

          <div className="hero-actions">
            <NavLink className="button button-primary" to="/projects">View my projects <ArrowUpRight size={18} /></NavLink>
            <NavLink className="button button-ghost" to="/contact">Let's connect <Mail size={17} /></NavLink>
          </div>

          <div className="social-links" aria-label="Social links">
            <a href="https://github.com/ramesh-hampiholi-1819" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={19} />
            </a>
            <a href="/contact" aria-label="LinkedIn placeholder">
              <Linkedin size={19} />
            </a>
            <a href="mailto:replace-with-your-email@example.com" aria-label="Email">
              <Mail size={19} />
            </a>
          </div>
        </div>

        <div className="hero-art" aria-label="Abstract developer workspace visual" role="img">
          <div className="art-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="code-window">
            <div className="window-bar">
              <span />
              <span />
              <span />
              <code>ramesh.dev</code>
            </div>

            <div className="code-lines">
              <p><span className="pink">const</span> <span className="blue">developer</span> = {'{'}</p>
              <p className="indent"><span className="green">name</span>: <span className="orange">'Ramesh'</span>,</p>
              <p className="indent"><span className="green">focus</span>: [<span className="orange">'AI'</span>, <span className="orange">'web'</span>],</p>
              <p className="indent"><span className="green">curious</span>: <span className="yellow">true</span></p>
              <p>{'}'} <span className="pink">=&gt;</span> <span className="blue">build</span>();</p>
            </div>
          </div>

          <div className="floating-chip chip-python"><span>P</span> Python</div>
          <div className="floating-chip chip-react"><span>R</span> React</div>
        </div>
      </section>

      <section className="content-section section-wrap">
        <div className="section-heading reveal">
          <p className="section-kicker">01 / Highlights</p>
          <h2>Learning by <span>building.</span></h2>
        </div>

        <div className="skills-grid">
          {skillGroups.slice(0, 3).map((group) => {
            const Icon = skillIconMap[group.icon as keyof typeof skillIconMap]

            return (
              <article className="skill-card reveal" key={group.label}>
                <div className="skill-icon"><Icon size={20} /></div>
                <h3>{group.label}</h3>
                <div className="skill-list">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

function AboutPage() {
  return (
    <section className="content-section section-wrap page-shell">
      <div className="section-heading reveal">
        <p className="section-kicker">01 / About me</p>
        <h2>Curious by nature.<br /><span>Builder by choice.</span></h2>
      </div>

      <div className="about-grid">
        <div className="about-copy reveal">
          <p className="lead">I'm a BCA student at KLE JT BCA College, Gadag, learning how thoughtful technology can turn a simple idea into something genuinely useful.</p>
          <p>My curiosity moves between programming fundamentals, web experiences, artificial intelligence, and data. I learn best by making things, testing ideas, and turning every project into a chance to understand a little more.</p>
          <NavLink className="text-link" to="/contact">Let's build something <ArrowUpRight size={16} /></NavLink>
        </div>

        <div className="info-panel reveal">
          <div className="info-top">
            <span className="mini-label">A little more</span>
            <span className="panel-mark"><Sparkles size={15} /></span>
          </div>

          <div className="info-item">
            <GraduationCap size={20} />
            <span><small>Education</small><strong>BCA</strong></span>
          </div>

          <div className="info-item">
            <Layout size={20} />
            <span><small>College</small><strong>KLE JT BCA College, Gadag</strong></span>
          </div>

          <div className="info-item">
            <Rocket size={20} />
            <span><small>Focus</small><strong>AI · Data Science · Software Development</strong></span>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillsPage() {
  return (
    <section className="content-section section-wrap page-shell">
      <div className="section-heading reveal">
        <p className="section-kicker">02 / What I use</p>
        <h2>Tools for <span>turning thoughts<br />into things.</span></h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = skillIconMap[group.icon as keyof typeof skillIconMap]

          return (
            <article className="skill-card reveal" style={{ '--delay': `${index * 60}ms` } as CSSProperties} key={group.label}>
              <div className="skill-icon"><Icon size={20} /></div>
              <h3>{group.label}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  return (
    <section className="content-section section-wrap page-shell">
      <div className="section-heading projects-heading reveal">
        <div>
          <p className="section-kicker">03 / Selected work</p>
          <h2>Ideas I've <span>brought to life.</span></h2>
        </div>
        <p className="heading-note">A selection of projects where I learn by building, one thoughtful step at a time.</p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => {
          const Icon = projectIconMap[project.icon as keyof typeof projectIconMap]
          const expanded = selectedProject === project.title

          return (
            <article className={`project-card ${expanded ? 'expanded' : ''} accent-${project.accent} reveal`} style={{ '--delay': `${index * 70}ms` } as CSSProperties} key={project.title} onClick={() => setSelectedProject(expanded ? null : project.title)}>
              <div className="project-visual">
                <span className="project-number">{project.number}</span>
                <Icon className="project-visual-icon" size={58} strokeWidth={1} />
                <span className="visual-lines" />
                <span className="visual-spark" />
              </div>

              <div className="project-info">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <span className="project-expand"><ArrowUpRight size={18} /></span>
                </div>

                <p>{project.description}</p>

                <div className="badges">
                  {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
                </div>

                {expanded && project.features && (
                  <ul className="feature-list">
                    {project.features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}
                  </ul>
                )}

                <div className="project-links">
                  <a href={project.github} onClick={(event) => event.stopPropagation()} aria-label={`${project.title} GitHub repository`}>
                    GitHub <Github size={15} />
                  </a>
                  <a href={project.demo} onClick={(event) => event.stopPropagation()} aria-label={`${project.title} live demo`}>
                    Live demo <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function EducationPage() {
  return (
    <>
      <section className="content-section section-wrap page-shell">
        <div className="section-heading reveal">
          <p className="section-kicker">04 / The journey so far</p>
          <h2>Learning with <span>intent.</span></h2>
        </div>

        <div className="education-card reveal">
          <div className="edu-year">2024 <span>—</span> 2028</div>
          <div className="edu-line"><span className="edu-dot" /></div>
          <div className="edu-content">
            <p className="mini-label">Bachelor of Computer Applications</p>
            <h3>KLE JT BCA College, Gadag</h3>
            <p>Expected completion: <strong>2028</strong></p>
          </div>
          <GraduationCap className="edu-icon" size={70} strokeWidth={1} />
        </div>
      </section>

      <section className="content-section section-wrap learning-section">
        <div className="section-heading reveal">
          <p className="section-kicker">06 / On the horizon</p>
          <h2>Currently <span>learning.</span></h2>
        </div>

        <div className="learning-layout">
          <div className="learning-intro reveal">
            <p className="lead">The best part of development is there is always a next question.</p>
            <p>Right now, I'm strengthening the fundamentals that make ambitious ideas possible, while staying open to whatever sparks my curiosity next.</p>
          </div>

          <div className="roadmap reveal">
            {learningPath.map((item, index) => (
              <div className="roadmap-item" key={item}>
                <span className="roadmap-index">0{index + 1}</span>
                <span>{item}</span>
                <span className="roadmap-arrow"><ArrowUpRight size={15} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error' | 'sending'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      setFormStatus('error')
      form.reportValidity()
      return
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setFormStatus('error')
      return
    }

    setFormStatus('sending')

    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey })
      setFormStatus('success')
      form.reset()
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <section className="content-section section-wrap page-shell">
      <div className="contact-section">
        <div className="contact-intro reveal">
          <p className="section-kicker">07 / Say hello</p>
          <h2>Let's build<br /><span>something.</span></h2>
          <p>Have an idea, a question, or just want to talk tech? My inbox is open.</p>

          <div className="contact-detail">
            <Mail size={18} />
            <a href="mailto:replace-with-your-email@example.com">replace-with-your-email@example.com</a>
          </div>

          <div className="contact-detail">
            <Github size={18} />
            <a href="https://github.com/ramesh-hampiholi-1819" target="_blank" rel="noreferrer">github.com/ramesh-hampiholi-1819</a>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
          <label>
            Name
            <input name="name" type="text" placeholder="Your name" required />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="you@example.com" required />
          </label>

          <label>
            Message
            <textarea name="message" placeholder="Tell me a little about your idea..." rows={4} required />
          </label>

          {formStatus === 'error' && <p className="form-message error">Please check your fields or configure EmailJS in your environment.</p>}
          {formStatus === 'success' && <p className="form-message success">Thanks, Ramesh will be in touch soon.</p>}

          <button className="button button-primary" type="submit" disabled={formStatus === 'sending'}>
            {formStatus === 'sending' ? 'Sending...' : 'Send message'} <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
