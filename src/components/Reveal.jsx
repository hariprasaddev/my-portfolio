import { motion, useReducedMotion } from 'framer-motion'

/** Scroll-reveal wrapper. Fades/slides in when it enters the viewport; static when reduced motion is on. */
export default function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const Tag = as
  if (useReducedMotion()) return <Tag className={className}>{children}</Tag>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
