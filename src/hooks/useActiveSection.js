import { useEffect, useState } from 'react'

/**
 * Tracks which section id is currently in the viewport so the
 * navbar can highlight the matching link.
 */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] || '')

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) setActive(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids.join('|')])

  return active
}
