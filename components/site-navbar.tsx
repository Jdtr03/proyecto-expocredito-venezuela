"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "Expo", href: "#la-expo" },
  { label: "Congreso", href: "#congreso" },
  { label: "Información", href: "#medios" },
  { label: "App", href: "#app" },
  { label: "Stands", href: "#sponsor" },
  { label: "Contacto", href: "#contacto" },
]

const CTA_BUTTONS = [
  { label: "Entradas Pre-venta", href: "#app", className: "bg-red-600 hover:bg-red-700" },
  { label: "Ser Expositor", href: "#sponsor", className: "bg-green-600 hover:bg-green-700" },
  { label: "Ser Speaker", className: "bg-blue-800 hover:bg-blue-900", isSpeakerModal: true },
]

export function Logo() {
  return (
    <a
      href="#inicio"
      className="flex items-center transition-opacity hover:opacity-90"
      aria-label="Expo Créditos Venezuela 2026 - Inicio"
    >
      <img
        src="/images/LOGO-EXPO-CREDITOS-HORIZONTAL-01.webp"
        alt="Expo Créditos Venezuela 2026"
        className="h-9 w-auto object-contain sm:h-10 lg:h-11 xl:h-12"
      />
    </a>
  )
}

export default function SiteNavbar() {
  const [open, setOpen] = useState(false)
  const [isSpeakerModalOpen, setIsSpeakerModalOpen] = useState(false)

  // Prevenir el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isSpeakerModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isSpeakerModalOpen])

  // Estado para los datos del formulario de Speaker
  const [speakerFormData, setSpeakerFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
    areaConocimiento: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setSpeakerFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSpeakerSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { nombre, apellido, telefono, correo, areaConocimiento } = speakerFormData

    // Construcción del mensaje amigable para WhatsApp
    const message =
      `¡Buenas tardes! 👋

Me comunico porque estoy interesado en ser *Speaker* en la Expo Créditos Venezuela.

*Mis datos de postulación:*
👤 *Nombre:* ${nombre} ${apellido}
📱 *Teléfono:* ${telefono}
✉️ *Correo:* ${correo}
🎓 *Cargo / Área de conocimiento:* ${areaConocimiento}

Quedo atento a sus comentarios. ¡Muchas gracias!`

    const whatsappNumber = "584242316420"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")

    // Limpiar formulario y cerrar modal
    setSpeakerFormData({
      nombre: "",
      apellido: "",
      telefono: "",
      correo: "",
      areaConocimiento: "",
    })
    setIsSpeakerModalOpen(false)
  }

  const handleOpenSpeakerModal = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setOpen(false)
    setIsSpeakerModalOpen(true)
  }

  return (
    <>
      {/* Barra de navegación fija superior */}
      <header className="fixed top-0 left-0 z-40 w-full shadow-sm">
        {/* Promotional topbar */}
        <div className="w-full bg-gradient-to-r from-[#118B35] via-[#0038E2] to-[#118B35] py-2 px-4">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
            20% de descuento en planes de patrocinio en pre-venta
          </p>
        </div>

        {/* Main navigation bar */}
        <nav className="w-full border-b border-gray-200 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
            <Logo />

            {/* Desktop nav links */}
            <ul className="hidden items-center gap-3 lg:flex xl:gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs font-bold text-gray-800 transition-colors hover:text-green-600 xl:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA buttons */}
            <div className="hidden items-center gap-1.5 lg:flex xl:gap-2">
              {CTA_BUTTONS.map((btn) =>
                btn.isSpeakerModal ? (
                  <button
                    key={btn.label}
                    type="button"
                    onClick={handleOpenSpeakerModal}
                    className={`inline-flex items-center justify-center rounded-full px-2.5 py-1.5 text-[11px] font-semibold text-white transition-colors xl:px-3 xl:text-xs cursor-pointer ${btn.className}`}
                  >
                    {btn.label}
                  </button>
                ) : (
                  <a
                    key={btn.label}
                    href={btn.href}
                    className={`inline-flex items-center justify-center rounded-full px-2.5 py-1.5 text-[11px] font-semibold text-white transition-colors xl:px-3 xl:text-xs ${btn.className}`}
                  >
                    {btn.label}
                  </a>
                )
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-100 lg:hidden"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>

          {/* Mobile menu panel */}
          {open && (
            <div id="mobile-menu" className="border-t border-gray-200 bg-white px-4 py-4 lg:hidden">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-2 py-2 text-sm font-bold text-gray-800 transition-colors hover:bg-gray-100 hover:text-green-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-col gap-2">
                {CTA_BUTTONS.map((btn) =>
                  btn.isSpeakerModal ? (
                    <button
                      key={btn.label}
                      type="button"
                      onClick={handleOpenSpeakerModal}
                      className={`inline-flex items-center justify-center w-full rounded-full px-4 py-2.5 text-sm font-semibold text-white transition-colors cursor-pointer ${btn.className}`}
                    >
                      {btn.label}
                    </button>
                  ) : (
                    <a
                      key={btn.label}
                      href={btn.href}
                      onClick={() => setOpen(false)}
                      className={`inline-flex items-center justify-center w-full rounded-full px-4 py-2.5 text-sm font-semibold text-white transition-colors ${btn.className}`}
                    >
                      {btn.label}
                    </a>
                  )
                )}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Relleno fantasma para mantener la altura exacta del layout */}
      <div className="h-[98px] sm:h-[102px] lg:h-[110px] w-full" aria-hidden="true" />

      {/* Modal / Formulario Emergente para "Ser Speaker" */}
      {isSpeakerModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={() => setIsSpeakerModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              type="button"
              onClick={() => setIsSpeakerModalOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
              aria-label="Cerrar ventana"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Encabezado del Modal */}
            <div className="mb-6">
              <h3 className="text-2xl font-extrabold text-blue-950">Postúlate como Speaker</h3>
              <p className="text-xs text-gray-600 mt-1">
                Completa tus datos y te redirigiremos a WhatsApp para enviar tu postulación.
              </p>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSpeakerSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="nombre" className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={speakerFormData.nombre}
                    onChange={handleInputChange}
                    placeholder="Ej. Juan"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-800"
                  />
                </div>

                <div>
                  <label htmlFor="apellido" className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    required
                    value={speakerFormData.apellido}
                    onChange={handleInputChange}
                    placeholder="Ej. Pérez"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="telefono" className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    value={speakerFormData.telefono}
                    onChange={handleInputChange}
                    placeholder="+58 412 1234567"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-800"
                  />
                </div>

                <div>
                  <label htmlFor="correo" className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    required
                    value={speakerFormData.correo}
                    onChange={handleInputChange}
                    placeholder="ejemplo@correo.com"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-800"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="areaConocimiento" className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Estudio, Cargo o Área de Conocimiento *
                </label>
                <textarea
                  id="areaConocimiento"
                  name="areaConocimiento"
                  required
                  rows={3}
                  value={speakerFormData.areaConocimiento}
                  onChange={handleInputChange}
                  placeholder="Ej. Director de Finanzas / Especialista en Microcréditos"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-800 resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsSpeakerModalOpen(false)}
                  className="rounded-full px-4 py-2 text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-green-600 px-5 py-2 text-xs font-bold text-white hover:bg-green-700 transition-colors shadow-md flex items-center gap-1.5"
                >
                  Enviar por WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}