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
    <section id="contact" className="section">
      <div className="container">

        <div style={{ maxWidth: '640px' }}>
          <p className="section-label">Contact</p>
          <h2 className="section-title">
            Got a project<br />
            <span className="accent">in mind?</span>
          </h2>
          <p style={{
            color: 'var(--muted)',
            marginBottom: '3rem',
            fontSize: '0.95rem',
            lineHeight: '1.7',
          }}>
            Tell me what you're looking for and I'll get back to you within 24 hours.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div>
                <label className="form-label">Name</label>
                <input
                  className="form-input"
                  type="text"
                  name="from_name"
                  placeholder="Your name"
                  value={form.from_name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  name="from_email"
                  placeholder="your@email.com"
                  value={form.from_email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="form-label">Service</label>
              <select
                className="form-input"
                name="service_type"
                value={form.service_type}
                onChange={handleChange}
              >
                <option value="">What are you looking for?</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="form-label">Message</label>
              <textarea
                className="form-input"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                style={{ resize: 'vertical' }}
              />
            </div>

            <div>
              <button
                className="btn-primary"
                onClick={handleSubmit}
                disabled={loading}
                style={{ opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer', border: 'none' }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {status === 'name' && (
              <p style={{ color: '#ff5f57', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                ✗ Please enter your name.
              </p>
            )}
            {status === 'email' && (
              <p style={{ color: '#ff5f57', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                ✗ Please enter a valid email address.
              </p>
            )}
            {status === 'service' && (
              <p style={{ color: '#ff5f57', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                ✗ Please select a service.
              </p>
            )}
            {status === 'message' && (
              <p style={{ color: '#ff5f57', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                ✗ Please write a message.
              </p>
            )}
            {status === 'success' && (
              <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                ✓ Message sent — I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p style={{ color: '#ff5f57', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                ✗ Something went wrong. Try again or reach out on WhatsApp.
              </p>
            )}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact