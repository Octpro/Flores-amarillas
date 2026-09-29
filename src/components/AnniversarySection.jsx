import { useState } from 'react'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import {
  ANNIVERSARY_PHOTOS,
  ANNIVERSARY_TIMELINE,
  PHASE_TWO,
} from '../constants/content'

export default function AnniversarySection() {
  const [photoIndex, setPhotoIndex] = useState(0)
  const photo = ANNIVERSARY_PHOTOS[photoIndex]
  const total = ANNIVERSARY_PHOTOS.length

  const go = (delta) => {
    setPhotoIndex((current) => (current + delta + total) % total)
  }

  return (
    <section className="mt-6 space-y-8 text-left">
      <header>
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-botanical/70">
          29 de septiembre
        </p>
        <h3 className="mt-1 font-serif text-2xl text-ink">{PHASE_TWO.timelineHeading}</h3>
      </header>

      <ol className="relative space-y-5 border-l border-amber-200 pl-5">
        {ANNIVERSARY_TIMELINE.map((item) => (
          <li key={item.title} className="relative">
            <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-amber-400 shadow-sm" />
            <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-amber-800/70">
              {item.date}
            </p>
            <h4 className="mt-0.5 font-serif text-lg text-ink">{item.title}</h4>
            <p className="mt-1 font-sans text-sm leading-relaxed text-ink/70">{item.body}</p>
          </li>
        ))}
      </ol>

      <div>
        <h3 className="font-serif text-2xl text-ink">{PHASE_TWO.galleryHeading}</h3>
        <div className="mt-4 overflow-hidden rounded-2xl border border-amber-100 bg-cream-deep/80">
          <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-amber-50 to-stone-100">
            {photo.src ? (
              <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" />
            ) : (
              <div className="px-6 text-center">
                <Heart className="mx-auto h-8 w-8 text-amber-400" aria-hidden />
                <p className="mt-3 font-serif text-lg text-ink/80">{photo.alt}</p>
              </div>
            )}
          </div>
          {photo.caption?.trim() && (
            <p className="mt-3 px-4 text-center font-sans text-sm leading-relaxed text-stone-700">
              {photo.caption}
            </p>
          )}
          <div className="flex items-center justify-between px-3 py-3">
            <button
              type="button"
              onClick={() => go(-1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-200 bg-white text-ink"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <p className="font-sans text-xs tracking-wide text-ink/60">
              {photoIndex + 1} / {total}
            </p>
            <button
              type="button"
              onClick={() => go(1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-200 bg-white text-ink"
              aria-label="Foto siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white/70 p-5">
        <h3 className="font-serif text-2xl text-ink">{PHASE_TWO.finaleHeading}</h3>
        <p className="mt-3 font-serif text-base leading-relaxed text-ink/80">{PHASE_TWO.finaleBody}</p>
      </div>
    </section>
  )
}
