import { useEffect, useState } from 'react'

/** Read the current theme from the <html> class (it is set before React loads, so there is no flash). */
function getInitialDark() {
  if (typeof document === 'undefined') return false
  return document.documentElement.classList.contains('dark')
}

/** Dark/light theme saved in localStorage ("dark" | "light"). */
export default function useTheme() {
  const [dark, setDark] = useState(getInitialDark)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch {
      /* storage unavailable — theme still works for the session */
    }
  }, [dark])

  return [dark, () => setDark((d) => !d)]
}
