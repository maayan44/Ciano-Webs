function Hero() {
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

        <p style={{
          fontSize: '1.1rem',
          color: 'var(--muted)',
          maxWidth: '480px',
          lineHeight: '1.7',
          marginBottom: '2.5rem',
        }}>
          Ciano Webs crafts fast, clean, and purposeful websites —
          built to convert visitors into customers.
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