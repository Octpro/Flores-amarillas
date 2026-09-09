// =============================================================================
// PERSONALIZA AQUÍ fechas, nombres y textos de la sorpresa.
// =============================================================================

/** Fecha de desbloqueo del Capítulo 2 (2 años y 6 meses). */
export const UNLOCK_DATE = new Date('2026-09-29T00:00:00')

/** Nombre que aparece en la bienvenida y en la carta. */
export const HER_NAME = 'mi amor'

export const PHASE_ONE = {
  kicker: '21 de septiembre',
  title: 'Flores amarillas',
  subtitle: 'Para el inicio de la primavera, y para vos.',
  cta: 'Toca para ver florecer tu sorpresa',
  letterTitle: 'Una carta para vos',
  // Editá el cuerpo de la carta (párrafos separados).
  letter: [
    'Hoy empieza la primavera, y con ella esta costumbre linda de buscar el amarillo más cálido para decírtelo sin tantas palabras.',
    'Las flores amarillas no son solo un gesto de septiembre: son luz, son el color de lo que empieza otra vez, y son la forma más simple que encontré de recordarte que elegirte sigue siendo mi estación favorita.',
    'Que este ramito digital te encuentre con la misma calidez con la que pensé en vos al armarlo. Te quiero.',
  ],
  closing: 'Con todo mi cariño',
}

export const PHASE_TWO = {
  title: 'Capítulo 2: 2 Años y 6 Meses',
  lockedSubtitle: 'Desbloqueable el 29 de septiembre',
  unlockCta: 'Desbloquear recuerdo',
  // Títulos placeholder para cuando armes el 29.
  timelineHeading: 'Nuestra línea de tiempo',
  galleryHeading: 'Recuerdos en fotos',
  finaleHeading: 'El mensaje final',
  finaleBody:
    'Acá va el mensaje del 29. Reemplazalo cuando cargues las fotos y los recuerdos de estos dos años y medio.',
}

/**
 * Placeholders del Capítulo 2.
 * Reemplazá `image` por rutas en /public o imports desde src/assets.
 */
export const ANNIVERSARY_TIMELINE = [
  {
    date: '29 de marzo',
    title: 'El comienzo',
    body: 'Un hito para recordar cómo empezó todo. Completá esta tarjeta.',
  },
  {
    date: 'Un día cualquiera',
    title: 'Un momento nuestro',
    body: 'Una anécdota, un viaje o una costumbre que solo entendemos nosotras/nosotros.',
  },
  {
    date: '29 de septiembre',
    title: 'Dos años y medio',
    body: 'El capítulo que se abre hoy. Escribí acá lo que quieras que lea ese día.',
  },
]

export const ANNIVERSARY_PHOTOS = [
  {
    src: '',
    alt: 'Recuerdo 1',
    caption: 'Foto 1 — agregá la ruta de la imagen',
  },
  {
    src: '',
    alt: 'Recuerdo 2',
    caption: 'Foto 2 — agregá la ruta de la imagen',
  },
  {
    src: '',
    alt: 'Recuerdo 3',
    caption: 'Foto 3 — agregá la ruta de la imagen',
  },
]
