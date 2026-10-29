import { useState, useEffect } from 'react'

/**
 * Image with graceful fallback.
 * If the file is missing or fails to load, show a colored gradient block with
 * initials so the page never looks broken. A custom `fallback` node (e.g. the
 * inline microservices SVG diagram) can replace the initials block.
 */
export default function Img({ src, alt, initials = 'HP', className = '', imgClass = '', fallback = null }) {
  const [failed, setFailed] = useState(false)

  // If the browser already cached an error for this src (e.g. dev reload), detect it.
  useEffect(() => {
    setFailed(false)
  }, [src])

  if (!src || failed) {
    return (
      <div className={`overflow-hidden ${className}`} role="img" aria-label={alt}>
        {fallback ?? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand via-blue-500 to-teal-500 font-extrabold text-white">
            <span className="text-lg tracking-wider">{initials}</span>
          </div>
        )}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={imgClass || className}
    />
  )
}
