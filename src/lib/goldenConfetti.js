import confetti from 'canvas-confetti'

const COLORS = ['#FDE047', '#FACC15', '#EAB308', '#CA8A04', '#FEF3C7', '#F59E0B']

/** Confeti dorado liviano, pensado para móviles (pocas partículas, motion-safe). */
export function fireGoldenConfetti() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) return

  const burst = (origin) =>
    confetti({
      particleCount: 28,
      spread: 70,
      startVelocity: 28,
      gravity: 0.85,
      ticks: 180,
      origin,
      colors: COLORS,
      scalar: 0.85,
      disableForReducedMotion: true,
    })

  burst({ x: 0.5, y: 0.35 })

  window.setTimeout(() => {
    confetti({
      particleCount: 18,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.25 },
      colors: COLORS,
      gravity: 0.9,
      scalar: 0.8,
      disableForReducedMotion: true,
    })
    confetti({
      particleCount: 18,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.25 },
      colors: COLORS,
      gravity: 0.9,
      scalar: 0.8,
      disableForReducedMotion: true,
    })
  }, 220)
}
