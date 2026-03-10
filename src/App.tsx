import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Cpu,
  ExternalLink,
  Terminal,
  Brain,
  Zap,
  Award,
  Layers,
  X,
  Wrench
} from 'lucide-react';
import Scene from './components/Scene';
import { RESUME_DATA } from './data';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const App = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [firstName, ...lastNameParts] = RESUME_DATA.name.split(' ');
  const lastName = lastNameParts.join(' ');

  return (
    <div className="overlay-container">
      <Scene />

      <nav className="nav">
        <div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Project</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge">
              <div style={{ width: 40, height: 40, borderRadius: '8px', overflow: 'hidden', background: '#222' }}>
                <img src="/profile.png" alt="Avatar Small" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ fontStyle: 'italic', color: 'white' }}>"{RESUME_DATA.tagline}"</span>
            </div>

            <h1 className="hero-title">
              Hi I'm <br />
              <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{firstName}</span> <br />
              <span className="gradient-text">{lastName}</span>
            </h1>

            <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.6)', marginBottom: '3rem', maxWidth: '600px', lineHeight: '1.6' }}>
              {RESUME_DATA.summary}
            </p>

            <div className="hero-actions" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <a
                href="#projects"
                className="btn btn-primary"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.1)',
                  textDecoration: 'none'
                }}
              >
                Explore My Projects
              </a>
              <div style={{ display: 'flex', gap: '1.2rem' }}>
                <a href={RESUME_DATA.github} target="_blank" rel="noopener noreferrer" className="nav-link" style={{ opacity: 1 }}>
                  <Github size={22} color="var(--primary)" />
                </a>
                <a href={RESUME_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="nav-link" style={{ opacity: 1 }}>
                  <Linkedin size={22} color="var(--primary)" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{
              scale: 1.02,
              translateZ: 50,
              boxShadow: "0 30px 60px rgba(0,0,0,0.6)"
            }}
            transition={{ duration: 1 }}
            className="animated-border-wrapper"
            style={{ perspective: '1000px' }}
          >
            <div className="animated-border-content profile-card">
              <div className="glass-reflection" />
              <div className="profile-img-container" style={{ aspectRatio: '0.8', overflow: 'hidden' }}>
                <img src="/profile.png" alt={RESUME_DATA.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div style={{ padding: '1.2rem 1.5rem', display: 'flex', alignItems: 'center', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)', position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <img src="/profile.png" alt="Mini" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'white' }}>{RESUME_DATA.handle}</p>
                    <p style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 600 }}>Online</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <motion.div {...fadeInUp} className="glass-panel">
          <h2 style={{ marginBottom: '2rem' }}>Core <span className="gradient-text">Philosophy</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <p style={{ lineHeight: '1.8', color: 'var(--text-dim)' }}>
                {RESUME_DATA.about.philosophy}
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${RESUME_DATA.about.stats.length}, 1fr)`, gap: '1rem' }}>
              {RESUME_DATA.about.stats.map((stat, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '1rem', textAlign: 'center' }}>
                  {stat.type === 'brain' ? <Brain color="var(--primary)" size={32} /> : <Zap color="var(--accent)" size={32} />}
                  <h3 style={{ marginTop: '0.5rem' }}>{stat.value}</h3>
                  <p style={{ fontSize: '0.8rem' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <motion.div {...fadeInUp}>
          <h2 style={{ marginBottom: '1rem' }}>Featured <span className="gradient-text">Missions</span></h2>
          <p style={{ color: 'var(--text-dim)', marginBottom: '3rem' }}>Deploying AI to solve critical challenges in agriculture and healthcare.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="projects-grid"
        >
          {RESUME_DATA.projects.map((project: any) => (
            <motion.div key={project.id} variants={fadeInUp} className="glass-panel project-card">
              {project.image && (
                <div
                  onClick={() => setSelectedImg(project.image)}
                  style={{ width: '100%', height: '180px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.1)', cursor: 'zoom-in' }}
                >
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                {project.id === 'miragex' ? (
                  <div style={{ width: '80px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="/miragex-logo.jpg" alt="MirageX" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                ) : (
                  project.type === 'primary' ? <Cpu color="var(--primary)" size={40} /> : <Brain color="var(--accent)" size={40} />
                )}
                <div style={{
                  background: project.type === 'primary' ? 'rgba(92, 234, 219, 0.1)' : 'rgba(139, 92, 246, 0.1)',
                  color: project.type === 'primary' ? 'var(--primary)' : 'var(--accent)',
                  padding: '4px 12px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 700
                }}>
                  {project.status}
                </div>
              </div>
              <h3 style={{ marginBottom: '1rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                {project.description}
              </p>
              <div style={{ marginBottom: '1.5rem' }}>
                {project.tags.map((tag: string) => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <a
                  href={project.link}
                  className="nav-link"
                  target={project.link !== '#' ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', opacity: 1, color: project.type === 'primary' ? 'var(--primary)' : 'var(--accent)' }}
                >
                  {project.type === 'primary' ? 'Explore Architecture' : 'View Case Study'} <ExternalLink size={14} />
                </a>
                {project.videoDemo && (
                  <a
                    href={project.videoDemo}
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', opacity: 1, color: 'var(--secondary)' }}
                  >
                    Watch Working Demo <Zap size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <motion.div {...fadeInUp} className="glass-panel">
          <h2 style={{ marginBottom: '3rem' }}>Technical <span className="gradient-text">Arsenal</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Terminal color="var(--primary)" size={24} />
                <h3>Languages</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {RESUME_DATA.skills.languages.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Layers color="var(--secondary)" size={24} />
                <h3>Frameworks</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {RESUME_DATA.skills.frameworks.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Award color="var(--accent)" size={24} />
                <h3>Systems</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {RESUME_DATA.skills.systems.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Wrench color="var(--primary)" size={24} />
                <h3>Tools</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {(RESUME_DATA.skills as any).tools.map((skill: string) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <motion.div {...fadeInUp} style={{ textAlign: 'center' }}>
          <h2 className="hero-title" style={{ fontSize: '3rem', marginBottom: '2rem' }}>
            READY TO <span className="gradient-text">COLLABORATE?</span>
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div className="glass-panel" style={{ minWidth: '280px' }}>
              <Mail color="var(--primary)" size={24} style={{ marginBottom: '1rem' }} />
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>EMAIL</p>
              <p style={{ fontWeight: 600 }}>{RESUME_DATA.email}</p>
            </div>
            <div className="glass-panel" style={{ minWidth: '280px' }}>
              <Phone color="var(--secondary)" size={24} style={{ marginBottom: '1rem' }} />
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>PHONE</p>
              <p style={{ fontWeight: 600 }}>{RESUME_DATA.phone}</p>
            </div>
          </div>

          <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            <a href={RESUME_DATA.github} target="_blank" className="nav-link"><Github size={24} /></a>
            <a href={RESUME_DATA.linkedin} target="_blank" className="nav-link"><Linkedin size={24} /></a>
          </div>

          <footer style={{ marginTop: '5rem', padding: '2rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
            <p>© 2026 {RESUME_DATA.name.toUpperCase()}. BUILT WITH REACT, THREE.JS & PASSION.</p>
          </footer>
        </motion.div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(5, 7, 10, 0.95)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              cursor: 'zoom-out'
            }}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              style={{
                position: 'fixed',
                top: '2rem',
                right: '2rem',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                padding: '0.5rem',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              <X size={24} />
            </motion.button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImg}
              alt="Workflow Full View"
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                borderRadius: '12px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
