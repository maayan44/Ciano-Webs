const stack = [
  'React', 'Vite', 'Node.js', 'Express',
  'MongoDB', 'Shopify', 'JavaScript', 'CSS',
]

function About() {
  return (
    <section id="about" className="section">
      <div className="container">

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
        }}>

          {/* Left */}
          <div>
            <p className="section-label">About</p>
            <h2 className="section-title">
              A developer who<br />
              <span className="accent">sweats the details</span>
            </h2>
            <p style={{
              color: 'var(--muted)',
              lineHeight: '1.8',
              marginBottom: '1.5rem',
              fontSize: '0.95rem',
            }}>
              I'm Ciano — a web developer based in Israel building sites
              that look sharp, load fast, and actually work for the
              businesses behind them.
            </p>
            <p style={{
              color: 'var(--muted)',
              lineHeight: '1.8',
              fontSize: '0.95rem',
              marginBottom: '2rem',
            }}>
              From single-page landing sites to full-stack platforms —
              I care about every pixel, every interaction, and every
              millisecond of load time.
            </p>
            <a href="#contact" className="btn-primary">
              Work With Me
            </a>
          </div>

          {/* Right */}
          <div>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--accent)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}>
              Tech Stack
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}>
              {stack.map((tech) => (
                <span key={tech} className="stack-tag">
                  {tech}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
              marginTop: '3rem',
            }}>
              {[
                { number: '10+', label: 'Projects delivered' },
                { number: '100%', label: 'Custom built' },
                { number: '2+', label: 'Years experience' },
                { number: '∞', label: 'Attention to detail' },
              ].map((stat) => (
                <div key={stat.label} style={{
                  borderLeft: '2px solid var(--accent)',
                  paddingLeft: '1rem',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    color: 'var(--text)',
                    lineHeight: 1,
                    marginBottom: '0.35rem',
                  }}>
                    {stat.number}
                  </p>
                  <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--muted)',
                  }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About