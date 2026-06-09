import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['services', 'work', 'about', 'contact']
      let found = false
      for (const id of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 380 && rect.bottom >= 380) {
          setActive(id)
          found = true
          break
        }
      }
      if (!found) setActive('')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: '1.25rem 0',
    borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    transition: 'all 0.3s ease',
  }

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

  const logoStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '1.1rem',
    fontWeight: '500',
    color: 'var(--text)',
    letterSpacing: '0.05em',
  }

  const navLinks = ['Services', 'Work', 'About', 'Contact']

  return (
    <>
      {/* Skip link — lets keyboard users jump straight to content */}
      <a href="#hero" className="skip-link">
        Skip to main content
      </a>

      <nav style={navStyle} role="navigation" aria-label="Main navigation">
        <div className="container" style={containerStyle}>

          <a href="#hero" style={logoStyle} aria-label="Ciano Webs — back to top">
            ciano<span style={{ color: 'var(--accent)' }}>.webs</span>
          </a>

          <ul className="nav-links-list" role="list">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={'#' + item.toLowerCase()}
                  className={active === item.toLowerCase() ? 'nav-link nav-link-active' : 'nav-link'}
                  aria-current={active === item.toLowerCase() ? 'true' : undefined}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="nav-cta" aria-label="Let's Talk — go to contact section">
                Let's Talk
              </a>
            </li>
          </ul>

          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

        </div>

        {menuOpen && (
          <div
            id="mobile-menu"
            className="nav-mobile-menu"
            role="menu"
            aria-label="Mobile navigation"
          >
            {['Services', 'Work', 'About'].map((item) => (
              <a
                key={item}
                href={'#' + item.toLowerCase()}
                className="nav-mobile-link"
                role="menuitem"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="nav-cta"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
              aria-label="Let's Talk — go to contact section"
            >
              Let's Talk
            </a>
          </div>
        )}

      </nav>
    </>
  )
}

export default Navbar