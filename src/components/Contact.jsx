import { useState } from 'react'
import { Download, Mail, MapPin, Send, Smartphone } from 'lucide-react'
import { profile, availability } from '../data/portfolio.js'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
    if (errors[field]) setErrors({ ...errors, [field]: '' })
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = 'Please enter a valid email address.'
    if (!form.message.trim()) next.message = 'Please enter a message.'
    return next
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) {
      setSent(false)
      return
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name.trim()}`)
    const body = encodeURIComponent(`${form.message.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setForm(initialForm)
  }

  const contactRows = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
    { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, Icon: Smartphone },
    { label: 'Location', value: profile.location, href: '', Icon: MapPin },
  ]

  const inputClass = (field) =>
    `mt-2 block w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none dark:bg-ink-900 dark:text-white ${
      errors[field]
        ? 'border-red-400 ring-1 ring-red-300'
        : 'border-slate-200 focus:border-brand focus:ring-1 focus:ring-brand dark:border-slate-700'
    }`

  return (
    <Section id="contact" eyebrow="Contact" alt title="Let's work together" description={availability}>
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        {/* Left: direct contact details */}
        <Reveal>
          <div className="space-y-4">
            {contactRows.map(({ label, value, href, Icon }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand/50 dark:border-slate-800 dark:bg-ink-800"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand dark:text-brand-light">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="mt-0.5 block break-all text-sm font-semibold text-slate-900 hover:text-brand dark:text-white dark:hover:text-brand-light">
                      {value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-sm font-semibold text-slate-900 dark:text-white">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Resume download */}
            <a
              href={profile.resume}
              download="Hariprasad_Mukkera_Resume.pdf"
              className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand hover:text-brand dark:border-slate-800 dark:bg-ink-800 dark:text-slate-200 dark:hover:text-brand-light"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download resume
            </a>
          </div>
        </Reveal>

        {/* Right: the form */}
        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-ink-800" aria-label="Contact form">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={set('name')}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  placeholder="Recruiter name"
                  className={inputClass('name')}
                />
                {errors.name && (
                  <p id="contact-name-error" className="mt-1 text-xs text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={set('email')}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  placeholder="you@company.com"
                  className={inputClass('email')}
                />
                {errors.email && (
                  <p id="contact-email-error" className="mt-1 text-xs text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="contact-message" className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={form.message}
                onChange={set('message')}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                placeholder="Tell me about the role…"
                className={inputClass('message')}
              />
              {errors.message && (
                <p id="contact-message-error" className="mt-1 text-xs text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Send message
              </button>
              <p role="status" aria-live="polite" className={`text-xs ${sent ? 'text-emerald-600 dark:text-emerald-400' : ''}`}>
                {sent ? 'Your email app should be open — if not, write to ' + profile.email : `Opens your email app · ${profile.email}`}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
