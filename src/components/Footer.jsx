function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer aria-label="Site footer" style={{
            borderTop: '1px solid var(--border)',
            padding: '2.5rem 0',
        }}>
            <div className="container footer-container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>

                <a
                    href="#hero"
                    className="footer-logo"
                    aria-label="Ciano Webs — back to top"
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1rem',
                        color: 'var(--text)',
                    }}
                >
                    ciano<span style={{ color: 'var(--accent)' }}>.webs</span>
                </a>

                <p className="footer-copyright" style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--muted)',
                }}>
                    © {year} Ciano Webs&nbsp;·&nbsp;All rights reserved.
                </p>

                <nav aria-label="Social links" className="footer-socials" style={{ display: 'flex', gap: '1.5rem' }}>
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
                            aria-label={`${link.label} — opens in a new tab`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

            </div>
        </footer>
    )
}

export default Footer