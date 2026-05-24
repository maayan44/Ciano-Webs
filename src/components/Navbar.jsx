import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  const ulStyle = {
    display: 'flex',
    gap: '2.5rem',
    listStyle: 'none',
    alignItems: 'center',
  }

  const linkStyle = {
    fontSize: '0.9rem',
    color: 'var(--muted)',
    fontWeight: '500',
    transition: 'color 0.2s',
    cursor: 'pointer',
  }

  const ctaStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    color: 'var(--accent)',
    border: '1px solid var(--accent)',
    padding: '0.4rem 1rem',
    borderRadius: '4px',
    transition: 'background 0.2s',
    cursor: 'pointer',
  }

  const navLinks = ['Work', 'Services', 'About', 'Contact']

  return (
    <nav style={navStyle}>
      <div className="container" style={containerStyle}>

        <a href="#hero" style={logoStyle}>
          ciano<span style={{ color: 'var(--accent)' }}>.webs</span>
        </a>

        <ul className="nav-links-list">
          {navLinks.map((item) => (
            <li key={item}>
              <a href={'#' + item.toLowerCase()} className="nav-link">
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta">
              Let's Talk
            </a>
          </li>
        </ul>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

      </div>

      {menuOpen && (
        <div className="nav-mobile-menu">
          {['Work', 'Services', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={'#' + item.toLowerCase()}
              className="nav-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Let's Talk
          </a>
        </div>
      )}

    </nav>
  )
}

export default Navbar