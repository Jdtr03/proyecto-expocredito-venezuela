"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

// Carga las 11 láminas de la carpeta /public/images/presentacion/
const PRESENTATION_IMAGES = Array.from({ length: 13 }, (_, i) => ({
  id: i + 1,
  src: `/images/presentacion/${i + 1}-img.png`,
  alt: `Lámina de presentación ${i + 1} - Expo Créditos Venezuela`,
}))

type PresentationImage = (typeof PRESENTATION_IMAGES)[number]

export default function EventHighlights() {
  const [selectedImage, setSelectedImage] = useState<PresentationImage | null>(null)

  return (
    <section className="overflow-hidden bg-gray-50 py-10 md:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Encabezado Principal */}
        <header className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-blue-950 md:text-4xl">
            Expo Créditos Venezuela
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-gray-600 md:text-base">
            Es el evento de mayor impacto: reunimos a las empresas y organizaciones que otorgan créditos y
            financiamientos en sus productos y servicios.
          </p>
        </header>
      </div>

      {/* CARRUSEL DE ANCHO COMPLETO */}
      <div className="group relative w-full overflow-hidden py-4">
        {/* Track animado continuo de derecha a izquierda */}
        <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
          {[...PRESENTATION_IMAGES, ...PRESENTATION_IMAGES].map((item, index) => (
            <button
              key={`${item.id}-${index}`}
              onClick={() => setSelectedImage(item)}
              type="button"
              /* 
                🔑 CAMBIOS CLAVE AQUÍ:
                - h-auto: La altura la define la proporción.
                - w-[280px] sm:w-[320px] md:w-[360px]: Anchos fijos responsivos.
                - aspect-[3/4]: Define una proporción rectangular alta (tipo póster).
                - overflow-hidden + rounded-3xl: Asegura que la imagen siga la forma redondeada.
                - Sin bg-slate-900: Eliminamos el fondo para que no haya bordes de otro color.
              */
              className="group/card relative h-auto w-[240px] shrink-0 overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/50 sm:w-[280px] md:w-[360px] aspect-[3/4]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 360px"
                /* 🔑 Volvemos a object-cover para que llene la tarjeta perfectamente */
                className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                priority={index < 4} // Prioridad de carga para las primeras imágenes
              />

              {/* Overlay en Hover (con ligero desenfoque) */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover/card:opacity-100">
                <span className="rounded-full bg-white/90 px-5 py-2.5 text-xs font-bold text-gray-900 shadow-md">
                  Ver Detalles
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Botón CTA Inferior */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-10 flex justify-center md:mt-16">
          <button
            type="button"
            className="rounded-full bg-red-600 px-10 py-3.5 text-sm font-bold text-white shadow-lg transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Ser Sponsor de Expo Créditos VE
          </button>
        </div>
      </div>

      {/* MODAL POP-UP (Lightbox) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[95vh] max-w-7xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar (X) */}
            <button
              onClick={() => setSelectedImage(null)}
              type="button"
              className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/90 focus:outline-none"
              aria-label="Cerrar ventana"
            >
              <X className="h-7 w-7" />
            </button>

            {/* Contenedor de la Imagen Modal (más grande) */}
            <div className="relative h-[85vh] w-[90vw] max-w-6xl">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}