import Reveal from './Reveal.jsx'

/**
 * Shared section shell: consistent spacing, an eyebrow label (mono),
 * a title and room for a short description. `alt` flips the background
 * so adjacent sections alternate.
 */
export default function Section({ id, eyebrow, title, description, alt = false, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 md:py-24 ${alt ? 'bg-white dark:bg-ink-800/40' : ''} ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {eyebrow && (
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand dark:text-brand-light">
              {eyebrow}
            </p>
          </Reveal>
        )}
        {title && (
          <Reveal delay={0.05}>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
          </Reveal>
        )}
        {description && (
          <Reveal delay={0.1}>
            <p className="mt-3 max-w-2xl leading-relaxed">{description}</p>
          </Reveal>
        )}
        <div className="mt-10 md:mt-12">{children}</div>
      </div>
    </section>
  )
}
