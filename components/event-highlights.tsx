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

      {/* CARRUSEL DE ANCHO COMPLETO CON DRAG Y BUCLE AUTOMÁTICO */}
      <div className="relative w-full overflow-hidden py-4 cursor-grab active:cursor-grabbing">
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
          className="flex w-max gap-6"
        >
          {duplicatedImages.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              onClick={() => handleCardClick(item)}
              className="group/card relative h-auto w-[240px] shrink-0 overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl sm:w-[280px] md:w-[360px] aspect-[3/4] select-none"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 360px"
                className="object-cover transition-transform duration-500 group-hover/card:scale-105 pointer-events-none"
                priority={index < 4}
              />

              {/* Overlay en Hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover/card:opacity-100">
                <span className="rounded-full bg-white/90 px-5 py-2.5 text-xs font-bold text-gray-900 shadow-md">
                  Ver Detalles
                </span>
              </div>
            </div>
          ))}
        </motion.div>
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

            {/* Contenedor de la Imagen Modal */}
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