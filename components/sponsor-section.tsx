"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { FileText, X, Send, CheckCircle2, Building, User, Phone, Mail, Globe } from "lucide-react"
import { motion, useMotionValue, animate, AnimatePresence } from "framer-motion"

// Número oficial de contacto WhatsApp (código de país incluido)
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
🌐 *Página Web / Redes:* ${formData.web || "No especificado"}

Deseo recibir el dossier comercial.`

    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`

    setIsSubmitted(true)

    setTimeout(() => {
      window.open(whatsappUrl, "_blank")
    }, 1200)
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
      id="sponsor"
      aria-labelledby="sponsor-heading"
      className="scroll-mt-24 sm:scroll-mt-28 laptop-fit relative flex min-h-[50vh] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-[#008135] via-blue-900 to-[#008135] py-6 sm:min-h-[60vh] sm:py-8 md:py-10 lg:py-12"
    >
      {/* Encabezado */}
      <header className="mx-auto mb-3 max-w-4xl space-y-1 px-4 text-center sm:mb-5">
        <h2
          id="sponsor-heading"
          className="text-balance text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl xl:text-5xl"
        >
          Tu Marca Aquí
        </h2>
        <p className="text-pretty text-xs font-medium text-white/90 sm:text-sm md:text-base">
          Con planes de Financiamiento Pre-Venta{" "}
          <span className="font-bold text-white">30% de Descuento</span>
        </p>
      </header>

      {/* Carrusel Infinito */}
      <div className="relative my-2 w-full cursor-grab overflow-hidden py-2 active:cursor-grabbing sm:my-3 sm:py-3">
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
          onPointerDown={() => setIsDragging(false)}
          className="flex w-max gap-3.5 sm:gap-5"
        >
          {duplicatedImages.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              onClick={() => handleCardClick(item)}
              className="group/card relative aspect-[16/10] h-auto w-[230px] shrink-0 select-none overflow-hidden rounded-2xl bg-white/10 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl sm:w-[300px] sm:rounded-[2rem] md:w-[350px] lg:w-[410px] xl:w-[480px] 2xl:w-[540px]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 230px, (max-width: 768px) 300px, (max-width: 1024px) 350px, (max-width: 1280px) 410px, 480px"
                className="pointer-events-none object-cover transition-transform duration-500 group-hover/card:scale-105"
                priority={index < 3}
              />

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
      <div className="mt-4 flex flex-col items-center justify-center gap-3.5 px-4 sm:mt-6 sm:flex-row sm:gap-6">
        <a
          href="/Catalogo-Expo-Credito.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-medium text-white transition hover:text-gray-200 sm:text-sm md:text-base"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          Solicita Dossier Comercial
        </a>

        <button
          onClick={() => setIsFormOpen(true)}
          type="button"
          className="inline-flex items-center justify-center rounded-full bg-[#00A859] px-6 py-3 text-xs font-bold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-[#008f4c] focus:outline-none focus:ring-2 focus:ring-[#00A859] focus:ring-offset-2 sm:px-8 sm:py-3.5 sm:text-sm md:text-base"
        >
          Ser Sponsor de Expo Créditos VE
        </button>
      </div>

      {/* MODAL FORMULARIO ESTILO 'RESERVA DE CUPOS' */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={handleCloseForm}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-white p-7 sm:p-8 text-slate-800 shadow-2xl scrollbar-thin"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón Cerrar */}
              <button
                onClick={handleCloseForm}
                type="button"
                className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Cerrar formulario"
              >
                <X className="h-5 w-5" />
              </button>

              {!isSubmitted ? (
                <>
                  <div className="mb-6 pr-6">
                    <h3 className="text-2xl font-bold text-[#1E0B4B] tracking-tight sm:text-3xl">
                      Ser Sponsor
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                      Expo Créditos Venezuela es la vitrina comercial perfecta. Ingresa tus datos para continuar por WhatsApp.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 tracking-wider uppercase mb-1.5">
                        NOMBRE DE LA EMPRESA <span className="text-slate-400">*</span>
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          name="empresa"
                          required
                          value={formData.empresa}
                          onChange={handleChange}
                          placeholder="Ej. Banco o Empresa C.A."
                          className="w-full min-h-[48px] rounded-2xl bg-white border border-slate-200 pl-10 pr-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-[#00A859] focus:outline-none focus:ring-1 focus:ring-[#00A859] transition shadow-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 tracking-wider uppercase mb-1.5">
                        PERSONA DE CONTACTO <span className="text-slate-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          name="contacto"
                          required
                          value={formData.contacto}
                          onChange={handleChange}
                          placeholder="Ej. María Gómez"
                          className="w-full min-h-[48px] rounded-2xl bg-white border border-slate-200 pl-10 pr-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-[#00A859] focus:outline-none focus:ring-1 focus:ring-[#00A859] transition shadow-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 tracking-wider uppercase mb-1.5">
                        TELÉFONO <span className="text-slate-400">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="tel"
                          name="telefono"
                          required
                          value={formData.telefono}
                          onChange={handleChange}
                          placeholder="+58 412 1234567"
                          className="w-full min-h-[48px] rounded-2xl bg-white border border-slate-200 pl-10 pr-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-[#00A859] focus:outline-none focus:ring-1 focus:ring-[#00A859] transition shadow-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 tracking-wider uppercase mb-1.5">
                        CORREO ELECTRÓNICO <span className="text-slate-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="ejemplo@correo.com"
                          className="w-full min-h-[48px] rounded-2xl bg-white border border-slate-200 pl-10 pr-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-[#00A859] focus:outline-none focus:ring-1 focus:ring-[#00A859] transition shadow-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 tracking-wider uppercase mb-1.5">
                        PÁGINA WEB / REDES <span className="text-slate-400">(OPCIONAL)</span>
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          name="web"
                          value={formData.web}
                          onChange={handleChange}
                          placeholder="www.empresa.com / @empresa"
                          className="w-full min-h-[48px] rounded-2xl bg-white border border-slate-200 pl-10 pr-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-[#00A859] focus:outline-none focus:ring-1 focus:ring-[#00A859] transition shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Acciones del formulario (Cancelar y Enviar) */}
                    <div className="pt-4 flex items-center justify-end gap-4">
                      <button
                        type="button"
                        onClick={handleCloseForm}
                        className="text-sm font-semibold text-slate-600 hover:text-slate-800 transition-colors px-3 py-2"
                      >
                        Cancelar
                      </button>

                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00A859] px-6 py-3 text-sm font-bold text-white shadow-md transition duration-200 hover:bg-[#008f4c] focus:outline-none focus:ring-2 focus:ring-[#00A859] focus:ring-offset-2 min-h-[46px]"
                      >
                        <Send className="h-4 w-4" />
                        Continuar por WhatsApp
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                /* MENSAJE DE CONFIRMACIÓN */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-3"
                >
                  <CheckCircle2 className="mx-auto h-16 w-16 text-[#00A859]" />
                  <h3 className="text-2xl font-bold text-[#1E0B4B]">
                    ¡Gracias por tus datos!
                  </h3>
                  <p className="text-sm text-slate-600">
                    Te estamos redirigiendo a WhatsApp para completar tu solicitud...
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LIGHTBOX STANDS */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-h-[90vh] max-w-7xl overflow-y-auto rounded-2xl bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                type="button"
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/90 focus:outline-none sm:right-5 sm:top-5 sm:h-12 sm:w-12"
                aria-label="Cerrar ventana"
              >
                <X className="h-6 w-6 sm:h-7 sm:w-7" />
              </button>

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
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}