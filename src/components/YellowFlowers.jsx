import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import { HER_NAME, PHASE_ONE } from '../constants/content'
import { fireGoldenConfetti } from '../lib/goldenConfetti'
import BloomingBouquet from './BloomingBouquet'

export default function YellowFlowers() {
  const [bloomed, setBloomed] = useState(false)

  const handleBloom = () => {
    if (bloomed) return
    setBloomed(true)
    fireGoldenConfetti()
  }

  return (
    <section className="flex min-h-[88svh] flex-col items-center justify-center px-5 pb-10 pt-14 text-center sm:min-h-[80svh]">
      <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-botanical/80">
        {PHASE_ONE.kicker}
      </p>
      <h1 className="mt-3 font-serif text-[2.35rem] font-medium leading-[1.1] text-ink sm:text-5xl">
        {PHASE_ONE.title}
      </h1>
      <p className="mt-3 max-w-sm font-sans text-[15px] leading-relaxed text-ink/70">
        {PHASE_ONE.subtitle}
      </p>
      {HER_NAME ? (
        <p className="mt-1 font-serif text-lg italic text-amber-800/80">Para {HER_NAME}</p>
      ) : null}

      <div className="mt-8 w-full">
        <BloomingBouquet blooming={bloomed} />
      </div>

      {!bloomed ? (
        <button
          type="button"
          onClick={handleBloom}
          className="mt-4 inline-flex min-h-12 items-center gap-2 rounded-full border border-amber-300/80 bg-white/70 px-6 py-3 font-sans text-sm font-medium text-amber-900 shadow-[0_8px_30px_-12px_rgba(202,138,4,0.55)] backdrop-blur-sm transition active:scale-[0.98] sm:hover:border-amber-400 sm:hover:bg-white"
        >
          <Sparkles className="h-4 w-4 text-amber-500" aria-hidden />
          {PHASE_ONE.cta}
        </button>
      ) : (
        <article
          className="letter-enter mt-6 w-full max-w-md rounded-3xl border border-amber-200/80 bg-white/75 p-6 text-left shadow-[0_20px_50px_-24px_rgba(120,80,20,0.35)] backdrop-blur-md sm:p-8"
        >
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-botanical/70">
            {PHASE_ONE.letterTitle}
          </p>
          <div className="mt-4 space-y-3 font-serif text-[1.05rem] leading-relaxed text-ink/90">
            {PHASE_ONE.letter.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-5 font-serif text-base italic text-amber-900/80">{PHASE_ONE.closing}</p>
        </article>
      )}
    </section>
  )
}
