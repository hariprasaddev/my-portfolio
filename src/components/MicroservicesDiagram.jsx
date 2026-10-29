/**
 * Fallback shown when microservices.png is missing:
 * Eureka registry on top, Product / User / Cart / Order in a row, and
 * RabbitMQ at the bottom connected to Order.
 */
export default function MicroservicesDiagram() {
  const box = 'fill-ink-800/10'
  return (
    <svg
      viewBox="0 0 320 220"
      className="h-full w-full bg-slate-100 dark:bg-ink-700"
      role="img"
      aria-label="Microservices architecture: Eureka registry on top, Product, User, Cart and Order services in a row, RabbitMQ messaging connected to the Order service"
    >
      {/* Eureka */}
      <rect x="110" y="12" width="100" height="34" rx="8" className={box} stroke="#2563eb" strokeWidth="1.5" />
      <text x="160" y="33" textAnchor="middle" fontSize="13" fontWeight="700" fill="#2563eb">Eureka</text>
      <text x="160" y="60" textAnchor="middle" fontSize="9" fill="currentColor" className="text-slate-500">service discovery</text>

      {/* lines from Eureka to the four services */}
      <path d="M160 46 V 88" stroke="#94a3b8" strokeWidth="1.2" />
      <path d="M56 88 V 66 H 160 M160 66 H 264 V 88" stroke="#94a3b8" strokeWidth="1.2" fill="none" />

      {/* Services row */}
      {[
        { x: 20, label: 'Product', y: 88 },
        { x: 97, label: 'User', y: 88 },
        { x: 174, label: 'Cart', y: 88 },
        { x: 251, label: 'Order', y: 88 },
      ].map((s) => (
        <g key={s.label}>
          <rect x={s.x} y={s.y} width="49" height="34" rx="8" className={box} stroke="#2563eb" strokeWidth="1.5" fill="#e0ecff66" />
          <text x={s.x + 24.5} y={s.y + 21} textAnchor="middle" fontSize="11" fontWeight="600" fill="#2563eb">{s.label}</text>
        </g>
      ))}

      {/* RabbitMQ */}
      <rect x="110" y="168" width="100" height="34" rx="8" className={box} stroke="#0d9488" strokeWidth="1.5" fill="#ccfbf166" />
      <text x="160" y="189" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0d9488">RabbitMQ</text>

      {/* messages flow into Order via RabbitMQ */}
      <path d="M160 122 V 168" stroke="#0d9488" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="196" y="148" fontSize="9" fill="#0d9488">order events (async)</text>
    </svg>
  )
}
