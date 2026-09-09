const PETAL_ANGLES = [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5]

function Sunflower({ className = '', delay = 0, size = 180 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 160 180"
      fill="none"
      aria-hidden="true"
      style={{ '--bloom-delay': `${delay}ms` }}
    >
      <g className="origin-center stem-grow" style={{ transformOrigin: '80px 170px' }}>
        <path
          d="M80 92 C78 118 74 140 80 170"
          stroke="#4A5D4E"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          className="leaf-left"
          d="M78 132 C58 124 48 138 62 146 C70 150 78 144 78 132Z"
          fill="#5C7A62"
        />
        <path
          className="leaf-right"
          d="M82 148 C102 140 112 154 98 162 C90 166 82 158 82 148Z"
          fill="#6B8F71"
        />
      </g>

      <g className="origin-center bloom-head" style={{ transformOrigin: '80px 78px' }}>
        {PETAL_ANGLES.map((angle) => (
          <ellipse
            key={angle}
            className="petal"
            cx="80"
            cy="42"
            rx="10"
            ry="28"
            fill={angle % 45 === 0 ? '#FACC15' : '#FDE047'}
            stroke="#EAB308"
            strokeWidth="0.6"
            transform={`rotate(${angle} 80 78)`}
          />
        ))}
        <circle cx="80" cy="78" r="22" fill="#A16207" />
        <circle cx="80" cy="78" r="18" fill="#854D0E" />
        <circle cx="80" cy="78" r="14" fill="#713F12" />
        <g fill="#FDE68A" opacity="0.45">
          {Array.from({ length: 12 }, (_, i) => {
            const a = (i / 12) * Math.PI * 2
            return <circle key={i} cx={80 + Math.cos(a) * 8} cy={78 + Math.sin(a) * 8} r="1.4" />
          })}
        </g>
      </g>
    </svg>
  )
}

export default function BloomingBouquet({ blooming }) {
  return (
    <div
      className={`relative mx-auto flex h-[260px] w-full max-w-md items-end justify-center ${blooming ? 'is-blooming' : ''}`}
    >
      <div className="pointer-events-none absolute inset-x-8 bottom-6 h-10 rounded-[100%] bg-amber-900/10 blur-md" />
      <Sunflower className="flower flower-left absolute bottom-2 left-0 z-[1]" delay={80} size={132} />
      <Sunflower
        className="flower flower-mid-left absolute bottom-2 left-[14%] z-[5]"
        delay={40}
        size={156}
      />
      <Sunflower className="flower flower-center relative z-10" delay={0} size={188} />
      <Sunflower
        className="flower flower-mid-right absolute bottom-2 right-[14%] z-[5]"
        delay={110}
        size={156}
      />
      <Sunflower className="flower flower-right absolute bottom-2 right-0 z-[1]" delay={140} size={132} />
    </div>
  )
}
