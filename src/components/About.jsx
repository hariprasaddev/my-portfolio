import { aboutParagraphs, recruiterSnapshot } from '../data/portfolio.js'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <Section id="about" eyebrow="About me" title="I build and ship, end to end">
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-4 text-base leading-relaxed">
          {aboutParagraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-ink-800">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand dark:text-brand-light">
              {recruiterSnapshot.title}
              <span className="sr-only">
                — instantly answers the first questions a hiring manager has
              </span>
            </h3>
            <dl className="mt-5 space-y-3.5 text-sm">
              {recruiterSnapshot.rows.map(({ key, value }) => (
                <div key={key} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <dt className="shrink-0 font-medium text-slate-500 dark:text-slate-400">{key}</dt>
                  <dd className="font-semibold text-right text-slate-900 dark:text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </Reveal>
      </div>
    </Section>
  )
}
