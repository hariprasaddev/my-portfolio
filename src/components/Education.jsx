import { GraduationCap } from 'lucide-react'
import { education } from '../data/portfolio.js'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Img from './Img.jsx'

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I'm graduating from">
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-stretch gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand/50 sm:flex-row sm:p-8 dark:border-slate-800 dark:bg-ink-800">
            {/* College photo with the profile photo overlapping its corner */}
            <div className="relative mx-auto w-full max-w-[240px] shrink-0 sm:w-48">
              <Img
                src={education.collegeImage}
                alt={`${education.college} campus`}
                initials={education.collegeInitials}
                className="aspect-square w-full rounded-2xl"
                imgClass="aspect-square w-full rounded-2xl object-cover"
              />
              <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-full bg-gradient-to-br from-brand to-teal-500 p-0.5 ring-4 ring-white dark:ring-ink-800">
                <Img
                  src={education.profileImage}
                  alt={education.profileInitials}
                  initials={education.profileInitials}
                  className="h-full w-full rounded-full"
                  imgClass="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>

            <div className="pt-2 sm:pt-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs font-semibold text-slate-500 dark:border-slate-700 dark:bg-ink-900 dark:text-slate-400">
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
                2026 Graduate
              </span>
              <h3 className="mt-3 text-lg font-bold leading-snug">{education.degree}</h3>
              <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">{education.college}</p>
              <p className="mt-3 flex flex-wrap items-center gap-3 font-mono text-sm">
                <span className="text-slate-500 dark:text-slate-400">{education.period}</span>
                <span className="text-emerald-600 dark:text-emerald-400">CGPA {education.cgpa}</span>
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
