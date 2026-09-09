import { useCallback, useEffect, useRef, useState } from 'react'
import { UNLOCK_DATE } from '../constants/content'

const REQUIRED_CLICKS = 5
const CLICK_WINDOW_MS = 1800

/**
 * Combina el desbloqueo por fecha real con un bypass de 5 toques rápidos
 * sobre el candado (solo estado local, no altera el reloj del sistema).
 */
export function usePhaseUnlock() {
  const [now, setNow] = useState(() => Date.now())
  const [forcedUnlock, setForcedUnlock] = useState(false)
  const clicksRef = useRef([])

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const dateUnlocked = now >= UNLOCK_DATE.getTime()
  const isUnlocked = dateUnlocked

  const registerLockClick = useCallback(() => {}, [])

  return {
    isUnlocked,
    dateUnlocked,
    forcedUnlock,
    registerLockClick,
    unlockDate: UNLOCK_DATE,
  }
}
