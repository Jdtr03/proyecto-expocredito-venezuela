"use client"

import { useState } from "react"
import Image from "next/image"
import { FileText, X } from "lucide-react"

// Carga las imágenes de los stands desde la carpeta public
const STAND_IMAGES = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  src: `/images/stand-${i + 1}.png`,
  alt: `Modelado 3D de Stand tipo ${i + 1} - Expo Créditos Venezuela`,
}))

type StandImage = (typeof STAND_IMAGES)[number]

export default function SponsorSection() {
  const [selectedImage, setSelectedImage] = useState<StandImage | null>(null)

  return (
    <section
      aria-labelledby="sponsor-heading"
      className="relative flex min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-emerald-600 via-blue-900 to-emerald-600 py-10 sm:min-h-[70vh] md:py-14 lg:min-h-[75vh]"
    >
      {/* Encabezado */}
      <header className="mx-auto mb-6 max-w-4xl space-y-2 px-4 text-center">
        <h2
          id="sponsor-heading"
          className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Tu Marca Aquí
        </h2>
        <p className="text-pretty text-sm font-medium text-white/90 sm:text-base">
          Con planes de Financiamiento Pre-Venta{" "}
          <span className="font-bold text-white">30% de Descuento</span>
        </p>
      </header>

      {/* CARRUSEL INFINITO DE ANCHO COMPLETO (100% SCREEN WIDTH) */}
      <div className="group relative my-4 w-full overflow-hidden py-4">
        <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
          {[...STAND_IMAGES, ...STAND_IMAGES].map((item, index) => (
            <button
              key={`${item.id}-${index}`}
              onClick={() => setSelectedImage(item)}
              type="button"
              className="group/card relative aspect-[16/10] h-auto w-[300px] shrink-0 overflow-hidden rounded-[2rem] bg-white/10 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-emerald-400/50 sm:w-[400px] md:w-[480px] lg:w-[540px]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 400px, 540px"
                className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                priority={index < 3}
              />

              {/* Overlay en Hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover/card:opacity-100">
                <span className="rounded-full bg-white/90 px-5 py-2.5 text-xs font-bold text-gray-900 shadow-md">
                  Ver Stand Completo
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Botones de Acción */}
      <div className="mt-8 flex flex-col items-center justify-center gap-5 px-4 sm:flex-row sm:gap-10">
        <a
          href="#dossier"
          className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-gray-200 sm:text-base"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          Solicita Dossier Comercial
        </a>

        <a
          href="#ser-sponsor"
          className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:text-base"
        >
          Ser Sponsor de Expo Créditos VE
        </a>
      </div>

      {/* LIGHTBOX / MODAL POP-UP */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[95vh] max-w-7xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              onClick={() => setSelectedImage(null)}
              type="button"
              className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/90 focus:outline-none"
              aria-label="Cerrar ventana"
            >
              <X className="h-7 w-7" />
            </button>

            {/* Contenedor de la Imagen Modal */}
            <div className="relative h-[80vh] w-[90vw] max-w-6xl">
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