import YellowFlowers from './components/YellowFlowers'
import CountdownLock from './components/CountdownLock'
import { usePhaseUnlock } from './hooks/usePhaseUnlock'

export default function App() {
  const { isUnlocked, forcedUnlock, registerLockClick, unlockDate } = usePhaseUnlock()

  return (
    <div className="relative min-h-svh overflow-x-hidden bg-cream text-ink">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(253,224,71,0.28),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(90,122,96,0.08),_transparent_50%)]" />
      <div className="relative mx-auto flex min-h-svh max-w-lg flex-col">
        <YellowFlowers />
        <CountdownLock
          isUnlocked={isUnlocked}
          forcedUnlock={forcedUnlock}
          unlockDate={unlockDate}
          onLockClick={registerLockClick}
        />
      </div>
    </div>
  )
}
