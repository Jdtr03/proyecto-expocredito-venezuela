"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { FileText, X, Send, CheckCircle2 } from "lucide-react"
import { motion, useMotionValue, animate } from "framer-motion"

// Cambia este número por el teléfono oficial con código de país
const WHATSAPP_PHONE = "584120000000"

const STAND_IMAGES = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  src: `/images/stand/stand-${i + 1}.png`,
  alt: `Modelado 3D de Stand tipo ${i + 1} - Expo Créditos Venezuela`,
}))

type StandImage = (typeof STAND_IMAGES)[number]

interface FormData {
  empresa: string
  contacto: string
  telefono: string
  email: string
  web: string
}

export default function SponsorSection() {
  const [selectedImage, setSelectedImage] = useState<StandImage | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const [formData, setFormData] = useState<FormData>({
    empresa: "",
    contacto: "",
    telefono: "",
    email: "",
    web: "",
  })

  // Duplicamos el array para lograr el bucle continuo e infinito
  const duplicatedImages = [...STAND_IMAGES, ...STAND_IMAGES]

  const xTranslation = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)

  // Calcula el ancho de la mitad del contenido (un ciclo de tarjetas)
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

    if (!isDragging) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: 35 * (1 - Math.abs(xTranslation.get()) / contentWidth),
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onUpdate: (latest) => {
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

  // Abre el modal de la tarjeta solo si no se estaba arrastrando
  const handleCardClick = (item: StandImage) => {
    if (!isDragging) {
      setSelectedImage(item)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `¡Hola! Me interesa formar parte de Expo Créditos Venezuela.

🏢 *Nombre de la Empresa:* ${formData.empresa}
👤 *Persona de Contacto:* ${formData.contacto}
📱 *Teléfono / WhatsApp:* ${formData.telefono}
📧 *Correo Electrónico:* ${formData.email}
🌐 *Página Web y Redes:* ${formData.web || "No especificado"}

Deseo recibir el dossier comercial.`

    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`

    setIsSubmitted(true)

    setTimeout(() => {
      window.open(whatsappUrl, "_blank")
    }, 1000)
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        empresa: "",
        contacto: "",
        telefono: "",
        email: "",
        web: "",
      })
    }, 300)
  }

  return (
    <section
      aria-labelledby="sponsor-heading"
      className="relative flex min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-[#008135] via-blue-900 to-[#008135] py-8 sm:min-h-[70vh] sm:py-10 md:py-12 lg:min-h-[75vh]"
    >
      {/* Encabezado */}
      <header className="mx-auto mb-4 max-w-4xl space-y-1.5 px-4 text-center sm:mb-6">
        <h2
          id="sponsor-heading"
          className="text-balance text-2xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Tu Marca Aquí
        </h2>
        <p className="text-pretty text-xs font-medium text-white/90 sm:text-base">
          Con planes de Financiamiento Pre-Venta{" "}
          <span className="font-bold text-white">30% de Descuento</span>
        </p>
      </header>

      {/* CARRUSEL INFINITO CON DRAG Y MOVIMIENTO AUTOMÁTICO */}
      <div className="relative my-2 w-full overflow-hidden py-2 sm:my-4 sm:py-4 cursor-grab active:cursor-grabbing">
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
              className="group/card relative aspect-[16/10] h-auto w-[260px] shrink-0 overflow-hidden rounded-2xl bg-white/10 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl sm:w-[360px] sm:rounded-[2rem] md:w-[440px] lg:w-[500px] xl:w-[540px] select-none"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 260px, (max-width: 768px) 360px, (max-width: 1024px) 440px, 540px"
                className="object-cover transition-transform duration-500 group-hover/card:scale-105 pointer-events-none"
                priority={index < 3}
              />

              {/* Overlay en Hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover/card:opacity-100">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-gray-900 shadow-md sm:px-5 sm:py-2.5">
                  Ver Stand Completo
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Botones de Acción */}
      <div className="mt-6 flex flex-col items-center justify-center gap-4 px-4 sm:mt-8 sm:flex-row sm:gap-8">
        <a
          href="/Catalogo-Expo-Credito.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-medium text-white transition hover:text-gray-200 sm:text-base"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          Solicita Dossier Comercial
        </a>

        <button
          onClick={() => setIsFormOpen(true)}
          type="button"
          className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-xs font-bold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:px-8 sm:py-3.5 sm:text-base"
        >
          Ser Sponsor de Expo Créditos VE
        </button>
      </div>

      {/* MODAL FORMULARIO DE CAPTACIÓN */}
      {isFormOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleCloseForm}
        >
          <div
            className="relative w-full max-w-lg max-h-[96vh] overflow-y-auto rounded-3xl bg-slate-900 p-5 sm:p-6 text-white shadow-2xl border border-white/10 scrollbar-thin"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              onClick={handleCloseForm}
              type="button"
              className="absolute right-3 top-3 text-gray-400 transition-colors hover:text-white z-10"
              aria-label="Cerrar formulario"
            >
              <X className="h-6 w-6" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="mb-4 text-center pr-6">
                  <h3 className="text-lg font-bold sm:text-xl text-[#008135]">
                    ¡Nos encanta tu presencia, tu marca tiene que estar aquí!
                  </h3>
                  <p className="mt-1 text-xs text-gray-300 sm:text-sm leading-relaxed">
                    Expo Créditos Venezuela es la vitrina comercial perfecta para conectar la demanda con la oferta crediticia.
                  </p>
                  <p className="mt-2 text-xs font-semibold text-white/90">
                    Déjanos saber tus datos para enviarte el dossier comercial.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      🏢 Nombre de la Empresa <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      required
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Ej: Banco o Empresa C.A."
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2 text-xs sm:text-sm text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      👤 Persona de Contacto <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="contacto"
                      required
                      value={formData.contacto}
                      onChange={handleChange}
                      placeholder="Ej: María Pérez"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2 text-xs sm:text-sm text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      📱 Teléfono / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="Ej: +58 412 1234567"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2 text-xs sm:text-sm text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      📧 Correo Electrónico <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="contacto@empresa.com"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2 text-xs sm:text-sm text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">
                      🌐 Página Web y Redes <span className="text-gray-500">(Opcional)</span>
                    </label>
                    <input
                      type="text"
                      name="web"
                      value={formData.web}
                      onChange={handleChange}
                      placeholder="Ej: www.empresa.com / @empresa"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2 text-xs sm:text-sm text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#008135] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  >
                    <Send className="h-4 w-4" />
                    Enviar datos por WhatsApp
                  </button>
                </form>
              </>
            ) : (
              /* MENSAJE DE CONFIRMACIÓN */
              <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-400" />
                <h3 className="text-2xl font-bold text-white">
                  Gracias por contactarnos.
                </h3>
                <p className="text-lg font-medium text-emerald-300">
                  ¡Bienvenidos al ecosistema de Expo Créditos Venezuela!
                </p>
                <p className="text-xs text-gray-400">
                  Redirigiendo a WhatsApp...
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* LIGHTBOX / MODAL STANDS */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-7xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
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