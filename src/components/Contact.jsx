import React, { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 1200)
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.info}>
            <span className={styles.label}>Get in touch</span>
            <h2 className={styles.title}>Contact Me</h2>
            <p className={styles.desc}>
              Have a project in mind, want to collaborate, or just want to say hi?
              Drop me a message and I'll get back to you soon.
            </p>

            <div className={styles.channels}>
              <div className={styles.channel}>
                <div className={styles.channelIcon}>@</div>
                <div>
                  <div className={styles.channelLabel}>Email</div>
                  <div className={styles.channelValue}>your@email.com</div>
                </div>
              </div>
              <div className={styles.channel}>
                <div className={styles.channelIcon}>W</div>
                <div>
                  <div className={styles.channelLabel}>WhatsApp</div>
                  <div className={styles.channelValue}>Coming Soon</div>
                </div>
              </div>
              <div className={styles.channel}>
                <div className={styles.channelIcon}>G</div>
                <div>
                  <div className={styles.channelLabel}>GitHub</div>
                  <div className={styles.channelValue}>S21Nexor</div>
                </div>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className={styles.textarea}
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className={styles.btn}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
            </button>
            {status === 'sent' && (
              <p className={styles.success}>Your message was sent successfully.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
