import { ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolio.js'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Img from './Img.jsx'
import MicroservicesDiagram from './MicroservicesDiagram.jsx'
import { GitHubIcon } from './icons.jsx'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" alt title="Things I've built and shipped">
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.1}>
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-md dark:border-slate-800 dark:bg-ink-800">
              <Img
                src={p.image}
                alt={`${p.name} — ${p.subtitle}`}
                initials={p.initials}
                className="h-44 w-full shrink-0"
                imgClass="h-44 w-full object-cover"
                fallback={p.id === 'microservices' ? <MicroservicesDiagram /> : undefined}
              />

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-teal-700 dark:text-teal-300">
                    {p.tag}
                  </span>
                  <span className="font-mono text-xs text-slate-400">{p.year}</span>
                </div>

                <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">{p.name}</h3>
                <p className="text-sm font-semibold text-brand dark:text-brand-light">{p.subtitle}</p>

                {/* What the candidate personally did */}
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  My role
                </p>
                <p className="mt-1 text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">{p.role}</p>

                <p className="mt-3 text-sm leading-relaxed">{p.summary}</p>

                <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-600 dark:border-slate-700 dark:bg-ink-900 dark:text-slate-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Hidden while the URL is "" — no dead links */}
                {(p.live || p.repo) && (
                  <div className="mt-auto flex flex-wrap gap-3 pt-5">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-brand/40 bg-brand/5 px-3.5 py-2 text-sm font-semibold text-brand transition hover:border-brand hover:bg-brand/10 dark:border-brand/40 dark:bg-brand/10 dark:text-brand-light dark:hover:border-brand"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        Live demo
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand dark:border-slate-600 dark:bg-ink-900 dark:text-slate-200 dark:hover:border-brand dark:hover:text-brand-light"
                      >
                        <GitHubIcon className="h-4 w-4" aria-hidden="true" />
                        Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
