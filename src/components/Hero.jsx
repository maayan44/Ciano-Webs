import { useState, useEffect } from 'react'

const phrases = [
  'custom websites.',
  'e-commerce.',
  'landing pages.',
  'Shopify stores.',
]

function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]

    if (paused) {
      const timeout = setTimeout(() => {
        setPaused(false)
        setDeleting(true)
      }, 2000)
      return () => clearTimeout(timeout)
    }

    if (!deleting && displayed.length < current.length) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1))
      }, 60)
      return () => clearTimeout(timeout)
    }

    if (!deleting && displayed.length === current.length) {
      setPaused(true)
      return
    }

    if (deleting && displayed.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1))
      }, 30)
      return () => clearTimeout(timeout)
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false)
      setPhraseIndex((i) => (i + 1) % phrases.length)
    }
  }, [displayed, deleting, paused, phraseIndex])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '6rem',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
                          linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        opacity: 0.3,
        zIndex: 0,
      }} />

      {/* Accent glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, var(--accent-dim) 0%, transparent 70%)',
        zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          color: 'var(--accent)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
        }}>
          Your next site starts here
        </p>

        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: '700',
          lineHeight: '1.0',
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em',
        }}>
          Building sites<br />
          that <span style={{ color: 'var(--accent)' }}>speak</span><br />
          for themselves.
        </h1>

        {/* Typing line */}
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
          color: 'var(--text)',
          marginBottom: '2.5rem',
          minHeight: '2rem',
        }}>
          Specializing in{' '}
          <span style={{ color: 'var(--accent)' }}>
            {displayed}
          </span>
          <span style={{
            display: 'inline-block',
            width: '2px',
            height: '1.2em',
            background: 'var(--accent)',
            marginLeft: '2px',
            verticalAlign: 'middle',
            animation: 'blink 1s step-end infinite',
          }} />
        </p>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a href="#work" className="btn-primary">
            See My Work
          </a>
          <a href="#contact" className="btn-ghost">
            Start a Project
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero