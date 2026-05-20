function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer style={{
            borderTop: '1px solid var(--border)',
            padding: '2.5rem 0',
        }}>
            {/* Added className "footer-container" here */}
            <div className="container footer-container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>

                {/* Added className "footer-logo" here */}
                <a href="#hero" className="footer-logo" style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1rem',
                    color: 'var(--text)',
                }}>
                    ciano<span style={{ color: 'var(--accent)' }}>.webs</span>
                </a>

                {/* Added className "footer-copyright" here */}
                <p className="footer-copyright" style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--muted)',
                }}>
                    © {year} Ciano Webs&nbsp;·&nbsp;All rights reserved.
                </p>

                {/* Added className "footer-socials" here */}
                <div className="footer-socials" style={{ display: 'flex', gap: '1.5rem' }}>
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