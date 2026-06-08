const services = [
    {
        number: '01',
        title: 'Custom Websites',
        description: 'Fully custom-built sites from scratch. No templates, no shortcuts. Every pixel has a reason.',
    },
    {
        number: '02',
        title: 'Landing Pages',
        description: 'High-converting single pages designed to turn visitors into leads. Fast, focused, effective.',
    },
    {
        number: '03',
        title: 'Web Apps',
        description: 'Interactive experiences built with modern React. Clean code, smooth performance, real results.',
    },
    {
        number: '04',
        title: 'Shopify & E-Commerce',
        description: 'Full e-commerce builds, from Shopify boutique stores to custom React platforms. Branded, fast and optimized for the full customer journey.',
    },
]

function Services() {
    return (
        <section
            id="services"
            className="section"
            aria-labelledby="services-heading"
        >
            <div className="container">

                <p className="section-label" aria-hidden="true">What I Do</p>

                <h2 id="services-heading" className="section-title">
                    Services built for <span className="accent">real results</span>
                </h2>

                <ul
                    role="list"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '1px',
                        background: 'var(--border)',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        marginTop: '3rem',
                        padding: 0,
                        listStyle: 'none',
                    }}
                >
                    {services.map((s) => (
                        <li key={s.number} className="service-card">

                            <span
                                aria-hidden="true"
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.75rem',
                                    color: 'var(--accent)',
                                    marginBottom: '1rem',
                                    display: 'block',
                                }}
                            >
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

                        </li>
                    ))}
                </ul>

            </div>
        </section>
    )
}

export default Services