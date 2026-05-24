const services = [
    {
        number: '01',
        title: 'Custom Websites',
        description: 'Fully custom-built sites from scratch. No templates, no shortcuts. Every pixel has a reason.',
    },
    {
        number: '02',
        title: 'Landing Pages',
        description: 'High-converting single pages designed to turn visits into leads. Fast, focused, effective.',
    },
    {
        number: '03',
        title: 'Web Apps',
        description: 'Interactive experiences built with modern React. Clean code, smooth performance, real results.',
    },
    {
        number: '04',
        title: 'Shopify & E-Commerce',
        description: 'Custom Shopify stores built to sell. Branded, fast, and optimized for the full customer journey.',
    },
]

function Services() {
    return (
        <section id="services" className="section">
            <div className="container">

                <p className="section-label">What I Do</p>
                <h2 className="section-title">
                    Services built for<br />
                    <span className="accent">real results</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '1px',
                    background: 'var(--border)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    marginTop: '3rem',
                }}>
                    {services.map((s) => (
                        <div key={s.number} className="service-card">
                            <span style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.75rem',
                                color: 'var(--accent)',
                                marginBottom: '1rem',
                                display: 'block',
                            }}>
                                {s.number}
                            </span>
                            <h3 style={{
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                marginBottom: '0.75rem',
                                color: 'var(--text)',
                            }}>
                                {s.title}
                            </h3>
                            <p style={{
                                fontSize: '0.9rem',
                                color: 'var(--muted)',
                                lineHeight: '1.6',
                            }}>
                                {s.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Services