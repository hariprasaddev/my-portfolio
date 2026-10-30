import { ArrowRight, Download, FolderGit2, Mail } from 'lucide-react'
import { profile, typingRoles, badge, heroTagline, heroButtons, stats } from '../data/portfolio.js'
import useTyping from '../hooks/useTyping.js'
import Reveal from './Reveal.jsx'
import Img from './Img.jsx'
import { GitHubIcon, LinkedInIcon } from './icons.jsx'

/** Social + link icons are hidden while their URL is an empty string. */
const socials = [
  { label: 'GitHub', url: profile.socials.github, Icon: GitHubIcon },
  { label: 'LinkedIn', url: profile.socials.linkedin, Icon: LinkedInIcon },
]

export default function Hero() {
  const typed = useTyping(typingRoles)

  return (
    <section id="hero" className="relative overflow-hidden pb-16 pt-28 md:pt-36">
      {/* soft background wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand/5 to-transparent dark:from-brand/10"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          {/* Left: intro */}
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 font-mono text-xs font-semibold text-teal-700 dark:text-teal-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-teal-500" aria-hidden="true" />
                {badge}
              </span>

              <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-brand to-teal-500 bg-clip-text text-transparent">
                  {profile.displayName}
                </span>
                .
              </h1>

              <p className="mt-3 flex min-h-8 items-center font-mono text-lg text-brand dark:text-brand-light sm:text-xl">
                <span>{typed}</span>
                <span aria-hidden="true" className="caret ml-0.5 animate-pulse font-light text-slate-400">
                  |
                </span>
              </p>
              <p className="sr-only">{profile.role}</p>

              <p className="mt-5 max-w-xl text-base leading-relaxed sm:text-lg">{heroTagline}</p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {heroButtons.map(({ label, href, kind }) => {
                  const isDownload = href === 'RESUME'
                  const url = isDownload ? profile.resume : href
                  const Icon = kind === 'primary' ? FolderGit2 : isDownload ? Download : ArrowRight
                  return (
                    <a
                      key={label}
                      href={url}
                      {...(isDownload
                        ? { download: 'Hariprasad_Mukkera_Resume.pdf', target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                        kind === 'primary' &&
                        'bg-brand text-white shadow-sm shadow-brand/30 hover:-translate-y-0.5 hover:bg-brand-dark'
                      } ${
                        kind === 'outline' &&
                        'border border-slate-300 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-brand hover:text-brand dark:border-slate-600 dark:bg-ink-800 dark:text-slate-200'
                      } ${
                        kind === 'ghost' &&
                        'text-slate-700 hover:text-brand dark:text-slate-300 dark:hover:text-brand-light'
                      }`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {label}
                    </a>
                  )
                })}
              </div>

              <div className="mt-7 flex items-center gap-4">
                {socials
                  .filter((s) => s.url)
                  .map(({ label, url, Icon }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-slate-500 transition hover:text-brand dark:text-slate-400 dark:hover:text-brand-light"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                <a
                  href={`mailto:${profile.email}`}
                  aria-label={`Email ${profile.displayName}`}
                  className="text-slate-500 transition hover:text-brand dark:text-slate-400 dark:hover:text-brand-light"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <span className="font-mono text-xs text-slate-400">{profile.location}</span>
              </div>
            </div>
          </Reveal>

          {/* Right: profile photo */}
          <Reveal delay={0.15}>
            <div className="mx-auto w-52 md:w-64">
              <div className="rounded-full bg-gradient-to-br from-brand to-teal-500 p-1 shadow-lg shadow-brand/20">
                <Img
                  src={profile.profileImage}
                  alt={`Portrait of ${profile.fullName}`}
                  initials="HP"
                  className="aspect-square w-full rounded-full"
                  imgClass="aspect-square w-full rounded-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stat tiles */}
        <dl className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand/50 dark:border-slate-800 dark:bg-ink-800">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-mono text-2xl font-bold text-brand dark:text-brand-light">{s.value}</dd>
                <dd className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">{s.label}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
