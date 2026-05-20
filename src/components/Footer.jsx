function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer style={{
            borderTop: '1px solid var(--border)',
            padding: '2.5rem 0',
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>

                <a href="#hero" style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1rem',
                    color: 'var(--text)',
                }}>
                    ciano<span style={{ color: 'var(--accent)' }}>.webs</span>
                </a>

                <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--muted)',
                }}>
                    © {year} Ciano Webs&nbsp;·&nbsp;All rights reserved.
                </p>

                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    {[
                        { label: 'GitHub', url: 'https://github.com/maayan44' },
                        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/maayan-marciano/' },
                        { label: 'WhatsApp', url: 'https://wa.me/972509127255' },
                    ].map((link) => (
                        <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="footer-link"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    )
}

export default Footer