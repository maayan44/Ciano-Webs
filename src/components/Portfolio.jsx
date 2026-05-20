import { projects } from '../data/projects'

function Portfolio() {
  return (
    <section id="work" className="section">
      <div className="container">

        <p className="section-label">Selected Work</p>
        <h2 className="section-title">
          Sites live &<br />
          <span className="accent">running</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          marginTop: '3rem',
        }}>
          {projects.map((project) => (
            <div key={project.id} className="portfolio-card">

              {/* Browser bar */}
              <div style={{
                background: 'var(--bg)',
                padding: '0.6rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderBottom: '1px solid var(--border)',
              }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28ca41', display: 'inline-block' }} />
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--muted)',
                  marginLeft: '0.5rem',
                }}>
                  {project.url.replace('https://', '')}
                </span>
              </div>

              {/* Preview iframe */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <iframe
                  src={project.url}
                  title={project.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    pointerEvents: 'none',
                  }}
                  loading="lazy"
                />
              </div>

              {/* Card info */}
              <div style={{ padding: '1.25rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '0.5rem',
                }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: '600' }}>{project.name}</h3>
                  
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="live-link"
                  >
                    ↗ Live
                  </a>
                </div>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--muted)',
                  lineHeight: '1.6',
                  marginBottom: '1rem',
                }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Portfolio