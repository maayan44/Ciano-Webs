import { projects } from '../data/projects'

/**
 * Renders the selected work section of the main page. Each project
 * from the shared projects data file is shown as a card containing a
 * fake browser chrome bar, a live embedded preview of the actual site
 * using an iframe, and a summary with a link that opens the real site
 * in a new tab.
 */

const Portfolio = () => {
  return (
    <section
      id="work"
      className="section"
      aria-labelledby="portfolio-heading"
    >
      <div className="container">

        <p className="section-label" aria-hidden="true">Selected Work</p>

        <h2 id="portfolio-heading" className="section-title">
          Sites live & <span className="accent">running</span>
        </h2>

        <ul
          role="list"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginTop: '3rem',
            padding: 0,
            listStyle: 'none',
          }}
        >
          {projects.map((project) => (
            <li key={project.id} className="portfolio-card">

              {/* Decorative browser chrome bar showing the site's domain */}
              <div
                aria-hidden="true"
                style={{
                  background: 'var(--bg)',
                  padding: '0.6rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  borderBottom: '1px solid var(--border)',
                }}
              >
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

              {/* Inert live preview, not focusable or clickable, purely visual */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <iframe
                  src={project.url}
                  title={`Preview of ${project.name}`}
                  aria-label={`Live preview of ${project.name} website`}
                  tabIndex="-1"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    pointerEvents: 'none',
                  }}
                  loading="lazy"
                />
              </div>

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
                    aria-label={`Visit ${project.name}, opens in a new tab`}
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

                <ul
                  role="list"
                  aria-label={`Technologies used in ${project.name}`}
                  style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', padding: 0, listStyle: 'none' }}
                >
                  {project.tags.map((tag) => (
                    <li key={tag} className="tag">{tag}</li>
                  ))}
                </ul>

              </div>

            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default Portfolio