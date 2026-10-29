import { ArrowUp, Mail } from 'lucide-react'
import { profile } from '../data/portfolio.js'
import { GitHubIcon, LinkedInIcon } from './icons.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 sm:px-8">
        <div className="flex items-center gap-3">
          <p className="font-mono text-sm font-bold text-slate-900 dark:text-white">
            Hari<span className="text-brand dark:text-brand-light">.dev</span>
          </p>
          <span className="no-print text-slate-300 dark:text-slate-600" aria-hidden="true">
            ·
          </span>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} {profile.fullName}
          </p>

          {/* GitHub / LinkedIn / Email next to the copyright text */}
          {profile.socials.github && (
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition hover:text-brand dark:hover:text-brand-light"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
          )}
          {profile.socials.linkedin && (
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition hover:text-brand dark:hover:text-brand-light"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            aria-label={`Email ${profile.displayName}`}
            className="text-slate-400 transition hover:text-brand dark:hover:text-brand-light"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>

        <a
          href="#hero"
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-brand hover:text-brand dark:border-slate-700 dark:text-slate-300"
        >
          Back to top <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
