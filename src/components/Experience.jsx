import { experience } from '../data/portfolio.js'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Img from './Img.jsx'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Training and hands-on experience">
      <ol className="relative mx-auto max-w-3xl space-y-8 border-l-2 border-slate-200 pl-6 sm:pl-10 dark:border-slate-800">
        {experience.map((job, i) => (
          <li key={job.title + job.period} className="relative">
            {/* timeline dot + org logo */}
            <span className="absolute -left-[37px] top-0 grid h-11 w-11 place-items-center overflow-hidden rounded-full border-2 border-white bg-white shadow-sm sm:-left-[61px] dark:border-ink-900 dark:bg-ink-800">
              <Img
                src={job.orgLogo}
                alt={`${job.org} logo`}
                initials={job.orgInitials}
                className="h-full w-full"
                imgClass="h-full w-full object-cover"
              />
            </span>

            <Reveal delay={i * 0.08}>
              <article className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-sm dark:border-slate-800 dark:bg-ink-800">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold leading-snug text-slate-900 dark:text-white">{job.title}</h3>
                    <p className="text-sm font-semibold text-brand dark:text-brand-light">{job.org}</p>
                  </div>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs text-slate-500 dark:border-slate-700 dark:bg-ink-900 dark:text-slate-400">
                    {job.period}
                  </span>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-relaxed">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-600 dark:border-slate-700 dark:bg-ink-900 dark:text-slate-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
