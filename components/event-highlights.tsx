"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { motion, useMotionValue, animate } from "framer-motion"

const PRESENTATION_IMAGES = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  src: `/images/presentacion/${i + 1}-img.png`,
  alt: `Lámina de presentación ${i + 1} - Expo Créditos Venezuela`,
}))

type PresentationImage = (typeof PRESENTATION_IMAGES)[number]

export default function EventHighlights() {
  const [selectedImage, setSelectedImage] = useState<PresentationImage | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  // Duplicamos el array para lograr el bucle infinito sin saltos
  const duplicatedImages = [...PRESENTATION_IMAGES, ...PRESENTATION_IMAGES]

  const xTranslation = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)

  // Calcula el ancho real de la mitad del contenido (un set completo de imágenes)
  useEffect(() => {
    if (containerRef.current) {
      const totalWidth = containerRef.current.scrollWidth
      setContentWidth(totalWidth / 2)
    }
  }, [])

  // Controla la animación continua de desplazamiento
  useEffect(() => {
    if (contentWidth === 0) return

    let controls: ReturnType<typeof animate>

    const finalPosition = -contentWidth

    // Si el usuario no está arrastrando, inicia el movimiento automático
    if (!isDragging) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: 35 * (1 - Math.abs(xTranslation.get()) / contentWidth), // Mantiene velocidad constante
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onUpdate: (latest) => {
          // Bucle infinito: si sobrepasa la mitad, reinicia la posición suavemente
          if (latest <= -contentWidth) {
            xTranslation.set(0)
          } else if (latest > 0) {
            xTranslation.set(-contentWidth)
          }
        },
      })
    }

    return () => controls?.stop()
  }, [contentWidth, isDragging, xTranslation])

  // Abre el modal solo si el usuario hizo clic y no un gesto de arrastre
  const handleCardClick = (item: PresentationImage) => {
    if (!isDragging) {
      setSelectedImage(item)
    }
  }

  return (
    <section id="medios" className="scroll-mt-24 sm:scroll-mt-28 laptop-fit overflow-hidden bg-gray-50 py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-4">
        {/* Encabezado Principal */}
        <header className="mx-auto mb-6 max-w-2xl text-center md:mb-8">
          <h2 className="text-balance text-2xl font-extrabold tracking-tight text-blue-950 sm:text-3xl lg:text-4xl">
            Expo Créditos Venezuela
          </h2>
          <p className="mt-2.5 text-pretty text-xs leading-relaxed text-gray-600 sm:text-sm md:text-base">
            Es el evento de mayor impacto: reunimos a las empresas y organizaciones que otorgan créditos y
            financiamientos en sus productos y servicios.
          </p>
        </header>
      </div>

      {/* CARRUSEL DE ANCHO COMPLETO CON DRAG Y BUCLE AUTOMÁTICO */}
      <div className="relative w-full overflow-hidden py-3 sm:py-4 cursor-grab active:cursor-grabbing">
        <motion.div
          ref={containerRef}
          style={{ x: xTranslation }}
          drag="x"
          dragConstraints={{
            left: -contentWidth,
            right: 0,
          }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          className="flex w-max gap-4 sm:gap-6"
        >
          {duplicatedImages.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              onClick={() => handleCardClick(item)}
              className="group/card relative h-auto w-[220px] shrink-0 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl sm:w-[250px] sm:rounded-3xl md:w-[270px] lg:w-[300px] xl:w-[340px] 2xl:w-[360px] aspect-[3/4] select-none"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 220px, (max-width: 768px) 250px, (max-width: 1024px) 270px, (max-width: 1280px) 300px, 340px"
                className="object-cover transition-transform duration-500 group-hover/card:scale-105 pointer-events-none"
                priority={index < 4}
              />

              {/* Overlay en Hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover/card:opacity-100">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-gray-900 shadow-md sm:px-5 sm:py-2.5">
                  Ver Detalles
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Botón CTA Inferior */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-8 flex justify-center md:mt-12">
          <a
            href="#sponsor"
            className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3 text-xs font-bold text-white shadow-lg transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:px-10 sm:py-3.5 sm:text-sm"
          >
            Ser Sponsor de Expo Créditos VE
          </a>
        </div>
      </div>

      {/* MODAL POP-UP (Lightbox) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-7xl overflow-y-auto rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar (X) */}
            <button
              onClick={() => setSelectedImage(null)}
              type="button"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/90 focus:outline-none sm:right-5 sm:top-5 sm:h-12 sm:w-12"
              aria-label="Cerrar ventana"
            >
              <X className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>

            {/* Contenedor de la Imagen Modal */}
            <div className="relative h-[70vh] w-[88vw] max-w-6xl sm:h-[80vh] sm:w-[90vw]">
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