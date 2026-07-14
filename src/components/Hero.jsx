import { useTypewriter } from '../hooks/useTypewriter'

const phrases = [
  'custom websites.',
  'e-commerce.',
  'landing pages.',
  'Shopify stores.',
]

const Hero = () => {
  const { displayed, phraseIndex } = useTypewriter(phrases)

  return (
    <section
      id="hero"
      aria-label="Hero section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
                            linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, var(--accent-dim) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Availability badge */}
        <p
          aria-label="Availability status"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--accent)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}
        >
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

        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            color: 'var(--text)',
            marginBottom: '2.5rem',
            minHeight: '2rem',
          }}
        >
          Specializing in{' '}
          <span style={{ color: 'var(--accent)' }}>
            {displayed}
          </span>
          <span
            aria-hidden="true"
            style={{
              display: 'inline-block',
              width: '2px',
              height: '1.2em',
              background: 'var(--accent)',
              marginLeft: '2px',
              verticalAlign: 'middle',
              animation: 'blink 1s step-end infinite',
            }}
          />
          {/* Screen reader only — announces full phrase, not mid-type characters */}
          <span
            aria-live="polite"
            aria-atomic="true"
            style={{
              position: 'absolute',
              width: '1px',
              height: '1px',
              overflow: 'hidden',
              clip: 'rect(0,0,0,0)',
              whiteSpace: 'nowrap',
            }}
          >
            {phrases[phraseIndex]}
          </span>
        </p>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a
            href="#work"
            className="btn-primary"
            aria-label="See my work — scroll to portfolio section"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="btn-ghost"
            aria-label="Start a project — scroll to contact section"
          >
            Start a Project
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero