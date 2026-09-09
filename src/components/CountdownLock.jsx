import { useState } from 'react'
import { Lock, Unlock } from 'lucide-react'
import { PHASE_TWO } from '../constants/content'
import { padTime, useCountdown } from '../hooks/useCountdown'
import AnniversarySection from './AnniversarySection'

function TimeCell({ label, value }) {
  return (
    <div className="flex min-w-[3.4rem] flex-col items-center rounded-2xl bg-white/70 px-2 py-3 shadow-sm">
      <span className="font-serif text-2xl tabular-nums text-ink">{padTime(value)}</span>
      <span className="mt-1 font-sans text-[10px] uppercase tracking-[0.14em] text-ink/50">
        {label}
      </span>
    </div>
  )
}

export default function CountdownLock({
  isUnlocked,
  forcedUnlock,
  unlockDate,
  onLockClick,
}) {
  const remaining = useCountdown(unlockDate)
  const [chapterOpen, setChapterOpen] = useState(false)

  return (
    <footer className="mx-auto w-full max-w-md px-5 pb-12 pt-2">
      <div className="rounded-[1.75rem] border border-amber-200/70 bg-white/55 p-6 shadow-[0_18px_40px_-28px_rgba(80,60,20,0.45)] backdrop-blur-md">
        <div className="flex items-start gap-4">
          <button
            type="button"
            data-lock-egg
            onClick={onLockClick}
            aria-label={isUnlocked ? 'Capítulo desbloqueado' : 'Capítulo bloqueado'}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-amber-200 bg-cream text-amber-800 transition active:scale-95"
          >
            {isUnlocked ? <Unlock className="h-5 w-5" /> : <Lock className="h-5 w-5" />}
          </button>

          <div className="min-w-0 pt-0.5">
            <h2 className="font-serif text-xl leading-snug text-ink">{PHASE_TWO.title}</h2>
            <p className="mt-1 font-sans text-sm text-ink/60">
              {isUnlocked
                ? forcedUnlock
                  ? 'Vista previa de desarrollo (bypass activo)'
                  : 'El recuerdo ya está listo para vos'
                : PHASE_TWO.lockedSubtitle}
            </p>
          </div>
        </div>

        {!isUnlocked ? (
          <div className="mt-6 flex justify-between gap-2" aria-live="polite">
            <TimeCell label="Días" value={remaining.days} />
            <TimeCell label="Horas" value={remaining.hours} />
            <TimeCell label="Min" value={remaining.minutes} />
            <TimeCell label="Seg" value={remaining.seconds} />
          </div>
        ) : !chapterOpen ? (
          <button
            type="button"
            onClick={() => setChapterOpen(true)}
            className="mt-6 flex w-full min-h-12 items-center justify-center rounded-full bg-amber-400 px-5 py-3 font-sans text-sm font-semibold text-amber-950 shadow-[0_10px_24px_-12px_rgba(202,138,4,0.9)] transition active:scale-[0.99]"
          >
            {PHASE_TWO.unlockCta}
          </button>
        ) : (
          <AnniversarySection />
        )}
      </div>
    </footer>
  )
}
