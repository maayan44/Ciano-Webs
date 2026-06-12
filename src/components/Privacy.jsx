import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const year = new Date().getFullYear()

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1.25rem 0',
        borderBottom: '1px solid var(--border)',
        background: 'rgba(10,10,10,0.95)',
        backdropFilter: 'blur(12px)',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1.1rem',
            fontWeight: '500',
            color: 'var(--text)',
            letterSpacing: '0.05em',
          }}>
            ciano<span style={{ color: 'var(--accent)' }}>.webs</span>
          </Link>
          <Link to="/" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--muted)',
          }}>
            ← Back
          </Link>
        </div>
      </nav>

      <main style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        <div className="container" style={{ maxWidth: '680px', margin: '0 auto' }}>

          <h1 style={{
            fontFamily: 'var(--font-main)',
            fontSize: '2rem',
            fontWeight: '600',
            color: 'var(--text)',
            marginBottom: '0.5rem',
          }}>
            Privacy Policy
          </h1>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '3rem' }}>
            Last updated: January {year}
          </p>

          {[
            {
              title: 'What we collect',
              body: 'When you submit the contact form, we collect your name, email address, and message. No other personal data is collected. We do not use cookies, analytics trackers, or any third-party tracking scripts.',
            },
            {
              title: 'Why we collect it',
              body: 'Your contact details are used solely to respond to your inquiry. We do not use them for marketing, and we do not add you to any mailing list without your explicit consent.',
            },
            {
              title: 'How it is processed',
              body: 'Contact form submissions are delivered via EmailJS, a third-party email delivery service. Your message is transmitted through their infrastructure to reach us. EmailJS acts as a data processor on our behalf. You can review their privacy policy at emailjs.com.',
            },
            {
              title: 'Who we share it with',
              body: 'We do not sell, rent, or share your personal data with any third parties beyond EmailJS as described above.',
            },
            {
              title: 'How long we keep it',
              body: 'Messages received via the contact form are kept only as long as needed to respond to your inquiry, and are deleted from our inbox thereafter.',
            },
            {
              title: 'Your rights',
              body: 'You have the right to request access to, correction of, or deletion of any personal data we hold about you. To exercise these rights, contact us directly at cixno44@gmail.com and we will respond within 30 days.',
            },
            {
              title: 'Legal basis',
              body: 'Data is processed on the basis of legitimate interest (responding to a direct inquiry you initiated). This policy complies with the Israeli Privacy Protection Law and, where applicable, the EU General Data Protection Regulation (GDPR).',
            },
          ].map((section) => (
            <div key={section.title} style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontFamily: 'var(--font-main)',
                fontSize: '1rem',
                fontWeight: '600',
                color: 'var(--text)',
                marginBottom: '0.5rem',
              }}>
                {section.title}
              </h2>
              <p style={{
                fontFamily: 'var(--font-main)',
                fontSize: '0.95rem',
                color: 'var(--muted)',
                lineHeight: '1.75',
              }}>
                {section.body}
              </p>
            </div>
          ))}

        </div>
      </main>

      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '2rem 0',
        textAlign: 'center',
      }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)' }}>
          © {year} Ciano Webs
        </p>
      </footer>
    </>
  )
}

export default Privacy