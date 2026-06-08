import { useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_u5qvnuq'
const TEMPLATE_ID = 'template_jn5fk9y'
const PUBLIC_KEY = '5vInr2hH0Gld7dBPo'

const services = [
  'Custom Website',
  'Landing Page',
  'Web App',
  'Shopify Store',
  'Other',
]

function Contact() {
  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    service_type: '',
    message: '',
  })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.from_name.trim()) {
      setStatus('name')
      return
    }
    if (!form.from_email.trim() || !form.from_email.includes('@')) {
      setStatus('email')
      return
    }
    if (!form.service_type) {
      setStatus('service')
      return
    }
    if (!form.message.trim()) {
      setStatus('message')
      return
    }

    setLoading(true)
    setStatus(null)

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      setStatus('success')
      setForm({ from_name: '', from_email: '', service_type: '', message: '' })
    } catch (err) {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">

        <div style={{ maxWidth: '640px' }}>
          <p className="section-label" aria-hidden="true">Contact</p>
          <h2 id="contact-heading" className="section-title">
            Got a project <span className="accent">in mind?</span>
          </h2>
          <p style={{
            color: 'var(--muted)',
            marginBottom: '3rem',
            fontSize: '0.95rem',
            lineHeight: '1.7',
          }}>
            Tell me what you're looking for and I'll get back to you within 24 hours.
          </p>

          <form
            noValidate
            onSubmit={handleSubmit}
            aria-label="Contact form"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div>
                <label htmlFor="from_name" className="form-label">Name</label>
                <input
                  id="from_name"
                  className="form-input"
                  type="text"
                  name="from_name"
                  placeholder="Your name"
                  value={form.from_name}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={status === 'name' ? 'true' : 'false'}
                  aria-describedby={status === 'name' ? 'error-name' : undefined}
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="from_email" className="form-label">Email</label>
                <input
                  id="from_email"
                  className="form-input"
                  type="email"
                  name="from_email"
                  placeholder="your@email.com"
                  value={form.from_email}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={status === 'email' ? 'true' : 'false'}
                  aria-describedby={status === 'email' ? 'error-email' : undefined}
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service_type" className="form-label">Service</label>
              <select
                id="service_type"
                className="form-input"
                name="service_type"
                value={form.service_type}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={status === 'service' ? 'true' : 'false'}
                aria-describedby={status === 'service' ? 'error-service' : undefined}
              >
                <option value="">What are you looking for?</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                className="form-input"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={status === 'message' ? 'true' : 'false'}
                aria-describedby={status === 'message' ? 'error-message' : undefined}
                style={{ resize: 'vertical' }}
              />
            </div>

            <div>
              <button
                type="submit"
                className="btn-primary"
                disabled={loading}
                aria-disabled={loading}
                aria-busy={loading}
                style={{ opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer', border: 'none' }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            <div aria-live="polite" aria-atomic="true">
              {status === 'name' && (
                <p id="error-name" role="alert" style={{ color: '#ff5f57', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  ✗ Please enter your name.
                </p>
              )}
              {status === 'email' && (
                <p id="error-email" role="alert" style={{ color: '#ff5f57', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  ✗ Please enter a valid email address.
                </p>
              )}
              {status === 'service' && (
                <p id="error-service" role="alert" style={{ color: '#ff5f57', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  ✗ Please select a service.
                </p>
              )}
              {status === 'message' && (
                <p id="error-message" role="alert" style={{ color: '#ff5f57', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  ✗ Please write a message.
                </p>
              )}
              {status === 'success' && (
                <p role="alert" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  ✓ Message sent — I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p role="alert" style={{ color: '#ff5f57', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  ✗ Something went wrong. Try again or reach out on WhatsApp.
                </p>
              )}
            </div>

          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact