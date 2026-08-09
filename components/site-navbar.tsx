"use client"

import { useState } from "react"
import { BarChart3, Menu, X } from "lucide-react"


const NAV_LINKS = [
  { label: "La Expo", href: "#la-expo" },
  { label: "Congreso", href: "#congreso" },
  { label: "Medios", href: "#medios" },
  { label: "Ruta del Crédito", href: "#ruta-del-credito" },
  { label: "Contacto", href: "#contacto" },
]

const CTA_BUTTONS = [
  { label: "Entradas Pre-venta", className: "bg-red-600 hover:bg-red-700" },
  { label: "Ser Expositor", className: "bg-green-600 hover:bg-green-700" },
  { label: "Ser Speaker", className: "bg-blue-800 hover:bg-blue-900" },
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
        className="h-10 w-auto object-contain sm:h-12"
      />
    </a>
  );
}

export default function SiteNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Promotional topbar */}
      <div className="w-full bg-gradient-to-r from-[#118B35] via-[#0038E2] to-[#118B35] py-2 px-4">
        <p className="text-center text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
          20% de descuento en planes de patrocinio en pre-venta
        </p>
      </div>

      {/* Main navigation bar */}
      <nav className="w-full border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
          <Logo />

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-6 xl:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-bold text-gray-800 transition-colors hover:text-green-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA buttons */}
          <div className="hidden items-center gap-2 lg:flex">
            {CTA_BUTTONS.map((btn) => (
              <button
                key={btn.label}
                type="button"
                className={`rounded-full px-3 py-1.5 text-xs font-semibold text-white transition-colors ${btn.className}`}
              >
                {btn.label}
              </button>
            ))}
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
              {CTA_BUTTONS.map((btn) => (
                <button
                  key={btn.label}
                  type="button"
                  className={`w-full rounded-full px-4 py-2.5 text-sm font-semibold text-white transition-colors ${btn.className}`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
