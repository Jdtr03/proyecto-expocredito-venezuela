"use client"

import Image from "next/image"

// Íconos generales desde lucide-react
import { ChevronUp } from "lucide-react"

// Íconos de redes sociales desde react-icons
import { FaInstagram, FaFacebook, FaWhatsapp, FaTiktok } from "react-icons/fa6"

const socialLinks = [
  { label: "WhatsApp", href: "#", Icon: FaWhatsapp },
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "Facebook", href: "#", Icon: FaFacebook },
  { label: "TikTok", href: "#", Icon: FaTiktok },
]

const bottomLinks = [
  "Contacto",
  "Política de Privacidad",
  "Declaración de Responsabilidad",
  "Términos y Condiciones",
]

/* Componente de Logo SVG de gran tamaño */
function ExpoLogo() {
  return (
    <a
      href="#inicio"
      className="flex items-center transition-opacity hover:opacity-90"
      aria-label="Expo Créditos Venezuela 2026 - Inicio"
    >
      <Image
        src="/images/logos/expo-credi-2.svg"
        alt="Expo Créditos Venezuela 2026"
        width={450}
        height={160}
        className="h-28 w-auto max-w-[280px] object-contain sm:h-36 sm:max-w-none md:h-40 lg:h-44"
        priority
      />
    </a>
  )
}

export default function SiteFooter() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-[#0a1a4f] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-r from-green-700 via-green-900 to-[#0a1a4f]">
        {/* Top block */}
        <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-3 md:items-center">
          {/* Logo Oficial SVG prominente */}
          <div className="flex justify-center md:justify-start">
            <ExpoLogo />
          </div>

          {/* Company info */}
          <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
            <button
              type="button"
              className="rounded-full bg-yellow-400 px-5 py-2 text-sm font-bold text-[#0a1a4f] transition-colors hover:bg-yellow-300"
            >
              Quiero ser Sponsor
            </button>
            <div className="text-sm text-white/85">
              <p className="font-semibold text-white">Creando Nortes</p>
              <p className="mt-1">RIF: J-50762986-4</p>
              <p className="mt-1 max-w-xs text-pretty">
                Torre Mega, Piso 2 Oficina 28. Las Delicias. Caracas, Venezuela
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center gap-3 md:items-end">
            <div className="text-center text-sm text-white/85 md:text-right">
              <p>@expocreditosvenezuela</p>
              <p className="mt-1">expocreditosvenezuela@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Lime divider */}
        <div className="h-1 w-full bg-gradient-to-r from-green-400 to-lime-300" />

        {/* Bottom bar */}
        <div className="relative flex flex-col items-center gap-2 px-8 py-6 text-center">
          <p className="text-xs font-semibold text-white/90">
            Creando Nortes {"\u00A9"} 2026 | Creamos tu Negocio con Nortes Inteligentes
          </p>
          <nav aria-label="Enlaces legales">
            <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] text-white/75">
              {bottomLinks.map((link, i) => (
                <li key={link} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  <a href="#" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="mt-2 text-[10px] text-white/50">
            Todos los Derechos Reservados. Creando Nortes C.A
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}