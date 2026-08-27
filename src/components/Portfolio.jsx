import { projects } from '../data/projects'

/**
 * Renders the work section of the main page, split into up to three
 * sub-sections — live sites, sites in progress, and sites for sale — in
 * that fixed order. A sub-section only renders when at least one project
 * has the matching status. Each project is one row: a live (or preview)
 * frame on the left, and the story + tech details on the right.
 */

const SECTIONS = [
  { status: 'live', eyebrow: 'Selected Work', title: <>Sites live &amp; <span className="accent">running</span></> },
  { status: 'coming-soon', eyebrow: 'In Progress', title: <>Coming <span className="accent">soon</span></> },
  { status: 'for-sale', eyebrow: 'On The Market', title: <>Available for <span className="accent">purchase</span></> },
]

const ProjectRow = ({ project }) => {
  const isLive = project.status === 'live' || (project.status === 'for-sale' && !!project.url)
  const isComingSoon = project.status === 'coming-soon'

  return (
    <li className="portfolio-row">

      {/* Left: live preview, or a placeholder while the site is in progress */}
      {(() => {
        const FrameTag = isLive ? 'a' : 'div'
        const frameProps = isLive
          ? {
              href: project.url,
              target: '_blank',
              rel: 'noreferrer',
              'aria-label': `Visit ${project.name}, opens in a new tab`,
            }
          : {}

        return (
      <FrameTag className={`portfolio-frame${isLive ? ' portfolio-frame-clickable' : ''}`} {...frameProps}>
        <div aria-hidden="true" className="portfolio-frame-bar">
          {project.icon && (
            <span className={`frame-icon${project.iconLight ? ' frame-icon-light' : ''}`}>
              <img src={project.icon} alt="" />
            </span>
          )}
          <span className="frame-url">
            {isLive ? project.url.replace('https://', '') : 'in development'}
          </span>
        </div>

        <div className="portfolio-frame-body">
          {isLive ? (
            <iframe
              src={project.url}
              title={`Preview of ${project.name}`}
              aria-label={`Live preview of ${project.name} website`}
              tabIndex="-1"
              style={{ width: '100%', height: '100%', border: 'none', pointerEvents: 'none' }}
              loading="lazy"
            />
          ) : project.previewVideo ? (
            <video
              src={project.previewVideo}
              aria-label={`Preview of ${project.name}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : project.previewImage ? (
            <img
              src={project.previewImage}
              alt={`Preview of ${project.name}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div className="portfolio-frame-placeholder">
              <span className="status-pill">In development</span>
              {project.features?.length > 0 && (
                <ul role="list" aria-label={`Planned features of ${project.name}`} className="placeholder-features">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </FrameTag>
        )
      })()}

      {/* Right: the story and the tech details */}
      <div className="portfolio-info">
        <div className="portfolio-info-header">
          <h3>{project.name}</h3>

          {isLive ? (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="live-link"
              aria-label={`Visit ${project.name}, opens in a new tab`}
            >
              ↗ Live
            </a>
          ) : isComingSoon ? (
            <span className="status-pill">In development</span>
          ) : (
            <span className="status-pill status-pill-sale">For sale</span>
          )}
        </div>

        {project.description && (
          <div className="portfolio-description">
            <p className="portfolio-description-label" aria-hidden="true">{project.descriptionLabel || 'Description'}</p>
            {project.description.split(/<\/br>/i).map((paragraph, i) => (
              <p key={i} className="portfolio-description-text">{paragraph.trim()}</p>
            ))}
          </div>
        )}

        <p className="portfolio-tech">{project.tech}</p>

        <ul
          role="list"
          aria-label={`Technologies used in ${project.name}`}
          className="portfolio-tags"
        >
          {project.tags.map((tag) => (
            <li key={tag} className="tag">{tag}</li>
          ))}
        </ul>
      </div>

    </li>
  )
}

const Portfolio = () => {
  return (
    <section id="work" className="section" aria-label="Selected work">
      <div className="container">

        {SECTIONS.map((section, index) => {
          const sectionProjects = projects.filter((project) => project.status === section.status)
          if (sectionProjects.length === 0) return null

          return (
            <div key={section.status} style={{ marginTop: index === 0 ? 0 : '6rem' }}>

              <p className="section-label" aria-hidden="true">{section.eyebrow}</p>
              <h2 className="section-title">{section.title}</h2>

              <ul role="list" className="portfolio-list">
                {sectionProjects.map((project) => (
                  <ProjectRow key={project.id} project={project} />
                ))}
              </ul>

            </div>
          )
        })}

      </div>
    </section>
  )
}

export default Portfolio
