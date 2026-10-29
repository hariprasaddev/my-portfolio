/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        brand: { DEFAULT: '#2563eb', dark: '#1d4ed8', light: '#60a5fa' },
        ink: { 900: '#0b1220', 800: '#111a2e', 700: '#1a2540' },
      },
    },
  },
  plugins: [],
}
