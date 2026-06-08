const stack = [
  'React', 'Vite', 'Node.js', 'Express',
  'MongoDB', 'Shopify', 'JavaScript', 'CSS',
]

function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">

        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
        }}>

          {/* Left */}
          <div>
            <p className="section-label" aria-hidden="true">About</p>
            <h2 id="about-heading" className="section-title">
              A developer who <span className="accent">sweats the details</span>
            </h2>
            <p style={{
              color: 'var(--muted)',
              lineHeight: '1.8',
              marginBottom: '1.5rem',
              fontSize: '0.95rem',
            }}>
              Building sites that look sharp,
              load fast, and actually work for the
              businesses behind them.
            </p>
            <p style={{
              color: 'var(--muted)',
              lineHeight: '1.8',
              fontSize: '0.95rem',
              marginBottom: '2rem',
            }}>
              From single-page landing sites to full-stack platforms —
              we care about every pixel, every interaction, and every
              millisecond of load time.
            </p>
            <a href="#contact" className="btn-primary" aria-label="Work with me — go to contact section">
              Work With Me
            </a>
          </div>

          {/* Right */}
          <div>
            <p
              aria-hidden="true"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--accent)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Tech Stack
            </p>

            <ul
              role="list"
              aria-label="Tech stack"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                padding: 0,
                listStyle: 'none',
              }}
            >
              {stack.map((tech) => (
                <li key={tech} className="stack-tag">{tech}</li>
              ))}
            </ul>

            {/* Stats */}
            <dl
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem',
                marginTop: '3rem',
              }}
            >
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
                  <dd style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    color: 'var(--text)',
                    lineHeight: 1,
                    marginBottom: '0.35rem',
                  }}>
                    {stat.number}
                  </dd>
                  <dt style={{
                    fontSize: '0.8rem',
                    color: 'var(--muted)',
                  }}>
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About