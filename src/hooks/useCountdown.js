import { useEffect, useState } from 'react'

function getRemaining(targetDate) {
  const diff = Math.max(0, targetDate.getTime() - Date.now())

  return {
    total: diff,
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isComplete: diff === 0,
  }
}

export function useCountdown(targetDate) {
  const [remaining, setRemaining] = useState(() => getRemaining(targetDate))

  useEffect(() => {
    const tick = () => setRemaining(getRemaining(targetDate))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [targetDate])

  return remaining
}

export function padTime(value) {
  return String(value).padStart(2, '0')
}
