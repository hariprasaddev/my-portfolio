import { BadgeCheck } from 'lucide-react'
import { certifications } from '../data/portfolio.js'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" alt title="Verified learning">
      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.08}>
            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand/50 dark:border-slate-800 dark:bg-ink-800">
              <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-bold leading-snug">{c.name}</h3>
                <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400">{c.year}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
