import { skills } from '../data/portfolio.js'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" alt title="Technical toolbox">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ group, items }, i) => (
          <Reveal key={group} delay={(i % 3) * 0.08}>
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-sm dark:border-slate-800 dark:bg-ink-800/80">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">{group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-600 dark:border-slate-700 dark:bg-ink-900 dark:text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
