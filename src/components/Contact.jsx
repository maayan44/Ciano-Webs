import { useRef, useState } from 'react'
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

/**
 * Renders the contact form section of the main page. Collects a
 * visitor's name, email address, desired service type, and message,
 * validates each field manually on submit, then sends the data
 * through EmailJS rather than a custom backend.
 */

const Contact = () => {
  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    service_type: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const serviceRef = useRef(null)
  const messageRef = useRef(null)
  const fieldRefs = { from_name: nameRef, from_email: emailRef, service_type: serviceRef, message: messageRef }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const next = {}
    if (!form.from_name.trim()) next.from_name = 'Please enter your name.'
    if (!form.from_email.trim() || !form.from_email.includes('@')) next.from_email = 'Please enter a valid email address.'
    if (!form.service_type) next.service_type = 'Please select a service.'
    if (!form.message.trim()) next.message = 'Please write a message.'
    return next
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const nextErrors = validate()
    setErrors(nextErrors)
    setSubmitStatus(null)

    const firstInvalid = ['from_name', 'from_email', 'service_type', 'message'].find((f) => nextErrors[f])
    if (firstInvalid) {
      fieldRefs[firstInvalid].current?.focus()
      return
    }

    setLoading(true)

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      setSubmitStatus('success')
      setForm({ from_name: '', from_email: '', service_type: '', message: '' })
    } catch {
      setSubmitStatus('error')
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
                  ref={nameRef}
                  id="from_name"
                  className="form-input"
                  type="text"
                  name="from_name"
                  placeholder="Your name"
                  value={form.from_name}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={errors.from_name ? 'true' : 'false'}
                  aria-describedby={errors.from_name ? 'error-name' : undefined}
                  autoComplete="name"
                />
                {errors.from_name && (
                  <p id="error-name" role="alert" className="field-error">✗ {errors.from_name}</p>
                )}
              </div>
              <div>
                <label htmlFor="from_email" className="form-label">Email</label>
                <input
                  ref={emailRef}
                  id="from_email"
                  className="form-input"
                  type="email"
                  name="from_email"
                  placeholder="your@email.com"
                  value={form.from_email}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={errors.from_email ? 'true' : 'false'}
                  aria-describedby={errors.from_email ? 'error-email' : undefined}
                  autoComplete="email"
                  spellCheck={false}
                />
                {errors.from_email && (
                  <p id="error-email" role="alert" className="field-error">✗ {errors.from_email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="service_type" className="form-label">Service</label>
              <select
                ref={serviceRef}
                id="service_type"
                className="form-input"
                name="service_type"
                value={form.service_type}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={errors.service_type ? 'true' : 'false'}
                aria-describedby={errors.service_type ? 'error-service' : undefined}
              >
                <option value="">What are you looking for?</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errors.service_type && (
                <p id="error-service" role="alert" className="field-error">✗ {errors.service_type}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                ref={messageRef}
                id="message"
                className="form-input"
                name="message"
                placeholder="Tell me about your project…"
                rows={5}
                value={form.message}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'error-message' : undefined}
                style={{ resize: 'vertical' }}
              />
              {errors.message && (
                <p id="error-message" role="alert" className="field-error">✗ {errors.message}</p>
              )}
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
                {loading ? 'Sending…' : 'Send Message'}
              </button>
            </div>

            <div aria-live="polite" aria-atomic="true">
              {submitStatus === 'success' && (
                <p role="alert" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  ✓ Message sent, I'll get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && (
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