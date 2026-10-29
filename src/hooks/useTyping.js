import { useEffect, useState } from 'react'

/**
 * Typing effect: types each role, pauses, deletes it, moves to the next.
 * Respects prefers-reduced-motion by showing the first role statically.
 */
export default function useTyping(roles, { typeSpeed = 75, deleteSpeed = 40, pause = 1600 } = {}) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (!roles.length) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(roles[0])
      return undefined
    }

    let word = 0
    let char = 0
    let deleting = false
    let timer

    const tick = () => {
      const current = roles[word]
      setText(current.slice(0, char))

      let delay = deleting ? deleteSpeed : typeSpeed
      if (!deleting && char === current.length) {
        deleting = true
        delay = pause
      } else if (deleting && char === 0) {
        deleting = false
        word = (word + 1) % roles.length
        delay = 350
      }
      char += deleting ? -1 : 1
      timer = setTimeout(tick, delay)
    }
    timer = setTimeout(tick, 400)
    return () => clearTimeout(timer)
  }, [roles.join('|'), typeSpeed, deleteSpeed, pause])

  return text
}
