"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

// Íconos generales desde lucide-react
import { ChevronUp, X, ShieldCheck, FileText, Scale } from "lucide-react"

// Íconos de redes sociales desde react-icons/fa
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa"

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/584242316420",
    Icon: FaWhatsapp,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/expocreditosvenezuela?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    Icon: FaInstagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@expocreditosvenezuela?_r=1&_t=ZS-993DHoat6nK",
    Icon: FaTiktok,
  },
]

const bottomLinks = [
  "Contacto",
  "Política de Privacidad",
  "Declaración de Responsabilidad",
  "Términos y Condiciones",
]

/* Información Legal para los Modales Emergentes */
const legalModalData: Record<
  string,
  { title: string; category: string; icon: React.ReactNode; content: React.ReactNode }
> = {
  "Política de Privacidad": {
    title: "POLÍTICA DE PRIVACIDAD, TRATAMIENTO DE DATOS Y SEGURIDAD DIGITAL",
    category: "Protección de Datos & CRM",
    icon: <ShieldCheck className="h-5 w-5 text-[#008135]" />,
    content: (
      <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-300">
        <section className="rounded-xl bg-emerald-950/40 p-4 sm:p-5 border border-emerald-500/30">
          <h4 className="font-bold text-white text-sm sm:text-base mb-1">Quiénes somos</h4>
          <p className="text-slate-200">Somos un producto llamado Expo Créditos Venezuela.</p>
        </section>

        <section className="space-y-1.5">
          <h4 className="font-bold text-[#008135] border-b border-slate-800 pb-1 text-xs sm:text-sm uppercase tracking-wider">
            PRIMERO: Responsable del Tratamiento de Datos
          </h4>
          <p>
            El portal web <span className="font-semibold text-white">expocreditosvenezuela.com</span> y la plataforma tecnológica/aplicación móvil <span className="font-semibold text-white">Venexpo</span> son operados y administrados bajo la titularidad exclusiva de la entidad organizadora <strong className="text-white">Creando Nortes C.A</strong> (en lo sucesivo, «La Empresa»).
          </p>
        </section>

        <section className="space-y-1.5">
          <h4 className="font-bold text-[#008135] border-b border-slate-800 pb-1 text-xs sm:text-sm uppercase tracking-wider">
            SEGUNDO: Base Técnica de Captura y Procesamiento
          </h4>
          <p>
            Los datos de identificación básica, contacto y preferencias sectoriales suministrados de forma voluntaria por el usuario (Titular de los Datos) serán capturados mediante protocolos seguros (HTTPS/SSL) e integrados de forma automatizada mediante Webhooks/API hacia un sistema de Gestión de Relaciones con Clientes (CRM) privado. Los procesos de autenticación de usuario dentro de la aplicación se realizarán mediante pasarelas de inicio de sesión federadas (v.gr., Google OAuth), garantizando el cifrado de credenciales de acceso.
          </p>
        </section>

        <section className="space-y-1.5">
          <h4 className="font-bold text-[#008135] border-b border-slate-800 pb-1 text-xs sm:text-sm uppercase tracking-wider">
            TERCERO: Finalidad Limitada del Tratamiento
          </h4>
          <p>
            La recopilación de información responde strictly al Principio de Limitación de la Finalidad. Los datos serán utilizados únicamente para:
          </p>
          <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-slate-300 marker:text-[#008135]">
            <li>Gestionar la lista de acceso anticipado a la plataforma Venexpo App.</li>
            <li>Segmentar perfiles e intereses comerciales (Automotriz, Inmobiliario, PyMEs, Retail, etc.) para la optimización de las mesas de negociación B2B y B2C durante el evento físico.</li>
            <li>Remisión de comunicaciones corporativas, actualizaciones operativas y materiales de carácter informativo/educativo sobre recaudos financieros.</li>
            <li>
              Integración de datos de captación temprana (Nombre, Apellido y Correo Electrónico) para campañas automatizadas de Email Marketing de preventas, lanzamiento en tiendas digitales y promociones exclusivas de marcas y bancos aliados participantes en la Expo Créditos Venezuela 2026.
            </li>
          </ul>
        </section>

        <section className="space-y-1.5">
          <h4 className="font-bold text-[#008135] border-b border-slate-800 pb-1 text-xs sm:text-sm uppercase tracking-wider">
            CUARTO: Cláusula de Exclusión de Datos Financieros Sensibles (Cumplimiento Regulatorio SUDEBAN)
          </h4>
          <p>
            Se declara taxativamente que este portal web no actúa como entidad de intermediación financiera, corredores de créditos, ni almacenan, solicitan o procesan datos patrimoniales sensibles, tales como: historiales de crédito de burós de información, balances contables integrales, números de cuentas bancarias, claves de acceso o datos confidenciales protegidos por el Secreto Bancario de la legislación venezolana vigente.
          </p>
        </section>

        <section className="space-y-1.5">
          <h4 className="font-bold text-[#008135] border-b border-slate-800 pb-1 text-xs sm:text-sm uppercase tracking-wider">
            QUINTO: Filtros de Seguridad y Validaciones Corporativas (Prevención de Fraude)
          </h4>
          <p>
            Para los perfiles registrados bajo la categoría de «Empresas», «Expositores» o «Sponsors», La Empresa se reserva el derecho de someter la información suministrada a un proceso de debida diligencia legal (verificación de RIF, Documentos Constitutivos-Estatutarios vigentes) para mitigar riesgos de suplantación de identidad (phishing) o fraudes digitales.
          </p>
        </section>

        <div className="rounded-lg bg-slate-800/80 p-3 text-xs italic text-slate-400 border-l-4 border-[#008135]">
          <strong className="text-white not-italic">Fundamento legal:</strong> Basado en el derecho constitucional al Habeas Data (Art. 60 de la CRBV) y normativas conexas.
        </div>
      </div>
    ),
  },
  "Declaración de Responsabilidad": {
    title: "DECLARACIÓN DE EXENCIÓN Y DESCARGO DE RESPONSABILIDAD JURÍDICO-FINANCIERA",
    category: "Aviso Legal & Alcance",
    icon: <Scale className="h-5 w-5 text-amber-400" />,
    content: (
      <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-300">
        <section className="space-y-1.5">
          <h4 className="font-bold text-amber-400 border-b border-slate-800 pb-1 text-xs sm:text-sm uppercase tracking-wider">
            PRIMERO: Delimitación del Rol Institucional (Vitrina Comercial)
          </h4>
          <p>
            La Expo Créditos Venezuela 2026 y la aplicación Venexpo App actúan única y exclusivamente como canales de difusión, vitrinas comerciales y espacios de encuentro de redes de negocios (Networking B2B y B2C). Su propósito es acercar la oferta informativa de productos acreditados en el mercado venezolano hacia el público general, emprendedores y MiPyMEs.
          </p>
        </section>

        <section className="space-y-1.5">
          <h4 className="font-bold text-amber-400 border-b border-slate-800 pb-1 text-xs sm:text-sm uppercase tracking-wider">
            SEGUNDO: Ausencia de Responsabilidad Solidaria o Subsidiaria
          </h4>
          <p>
            Creando Nortes no ejerce funciones regulatorias, evaluadoras ni de intermediación financiera. La recopilación de guías de recaudos tiene fines didácticos y organizativos. En consecuencia, La Empresa declina toda responsabilidad legal o civil respecto a:
          </p>
          <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-slate-300 marker:text-amber-400">
            <li>La veracidad, vigencia o modificación de las políticas de riesgo implementadas por los expositores (banca, retail, concesionarios, fintech, aseguradoras, etc.).</li>
            <li>La aprobación, precalificación, denegación o liquidación de cualquier facilidad de pago o línea de crédito solicitada.</li>
            <li>El cumplimiento contractual o litigios derivados de los acuerdos comerciales suscritos entre los usuarios y las marcas expositoras.</li>
          </ul>
        </section>

        <section className="space-y-1.5">
          <h4 className="font-bold text-amber-400 border-b border-slate-800 pb-1 text-xs sm:text-sm uppercase tracking-wider">
            TERCERO: Autonomía de las Entidades Participantes
          </h4>
          <p>
            Cada institución bancaria, comercial o fintech opera de forma autónoma bajo sus propios manuales de cumplimiento y normativas de los órganos reguladores del Estado venezolano (SUDEBAN, Sudeaseg, entre otros). La consecución de un crédito depende exclusivamente de la capacidad de pago del usuario y de las exigencias internas de la institución financiera elegida.
          </p>
        </section>

        <div className="rounded-lg bg-amber-950/40 p-3 text-xs italic text-amber-200 border-l-4 border-amber-500">
          <strong className="not-italic font-bold text-amber-400">Nota legal:</strong> Este documento delimita expresamente la responsabilidad de la empresa organizadora frente a negociaciones privadas entre asistentes y marcas.
        </div>
      </div>
    ),
  },
  "Términos y Condiciones": {
    title: "TÉRMINOS Y CONDICIONES GENERALES DE USO Y CONTRATACIÓN POR ADHESIÓN",
    category: "Condiciones Comerciales",
    icon: <FileText className="h-5 w-5 text-blue-400" />,
    content: (
      <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-300">
        <section className="space-y-1.5">
          <h4 className="font-bold text-blue-400 border-b border-slate-800 pb-1 text-xs sm:text-sm uppercase tracking-wider">
            PRIMERO: Objeto y Ámbito de Aplicación
          </h4>
          <p>
            Regulan el acceso, navegación y compras celebradas para el evento Expo Créditos Venezuela 2026 (09, 10 y 11 de Octubre de 2026 en el Centro Comercial Líder, Caracas) y la marca Venexpo App. El uso de este sitio implica la aceptación total de estos términos.
          </p>
        </section>

        <section className="space-y-2">
          <h4 className="font-bold text-blue-400 border-b border-slate-800 pb-1 text-xs sm:text-sm uppercase tracking-wider">
            SEGUNDO: Estructura Tarifaria de Boletería y Preventa
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
              <span className="font-bold text-[#008135] block mb-1">Tarifas de Preventa Especial:</span>
              <ul className="space-y-1 text-slate-300">
                <li>• <strong>General:</strong> $15.00 USD (o equivalente BCV) - 1 día expo.</li>
                <li>• <strong>Plus:</strong> $25.00 USD (o equivalente BCV) - 1 día expo + congreso/networking.</li>
                <li>• <strong>Elite:</strong> $35.00 USD (o equivalente BCV) - 3 días expo + 1 día congreso.</li>
              </ul>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
              <span className="font-bold text-yellow-400 block mb-1">Tarifas Regulares / Puerta:</span>
              <ul className="space-y-1 text-slate-300">
                <li>• <strong>General:</strong> $20.00 USD - 1 día expo.</li>
                <li>• <strong>Plus:</strong> $30.00 USD - 1 día expo + congreso/networking.</li>
                <li>• <strong>Elite All Day:</strong> $45.00 USD - 3 días expo + congreso.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-1.5">
          <h4 className="font-bold text-blue-400 border-b border-slate-800 pb-1 text-xs sm:text-sm uppercase tracking-wider">
            TERCERO: Política de No Reembolso
          </h4>
          <p>
            Toda adquisición de entradas en preventa o fase regular es un contrato definitivo. No se admitirán devoluciones ni reembolsos de dinero, salvo en el supuesto de cancelación definitiva y total del evento por causas imputables directamente a la organización.
          </p>
        </section>

        <section className="space-y-1.5">
          <h4 className="font-bold text-blue-400 border-b border-slate-800 pb-1 text-xs sm:text-sm uppercase tracking-wider">
            CUARTO: Propiedad Intelectual
          </h4>
          <p>
            Las marcas «Expo Créditos Venezuela 2026», Venexpo App y «Creando Nortes», junto con sus dominios web e interfaces tecnológicas, están protegidas bajo las leyes de Propiedad Industrial y Derechos de Autor. Queda prohibida su reproducción sin autorización por escrito.
          </p>
        </section>
      </div>
    ),
  },
}

/* Componente de Logo */
function ExpoLogo() {
  return (
    <a
      href="#inicio"
      className="flex items-center pl-2 transition-opacity hover:opacity-90 sm:pl-8 md:pl-12"
      aria-label="Expo Créditos Venezuela 2026 - Inicio"
    >
      <Image
        src="/images/logos/EXPO CREDITOS NEGATIVO.png"
        alt="Expo Créditos Venezuela 2026"
        width={320}
        height={100}
        style={{ height: "auto" }}
        className="h-16 w-auto max-w-[180px] object-contain sm:h-20 sm:max-w-[220px] md:h-24 md:max-w-[260px]"
        priority
      />
    </a>
  )
}

export default function SiteFooter() {
  const [activeModalKey, setActiveModalKey] = useState<string | null>(null)

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalKey(null)
      }
    }

    if (activeModalKey) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeModalKey])

  const activeModalData = activeModalKey ? legalModalData[activeModalKey] : null

  return (
    <>
      <footer id="contacto" className="scroll-mt-24 bg-[#0a1a4f] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-r from-green-700 via-green-900 to-[#0a1a4f]">
          {/* Top block */}
          <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-3 md:items-center">
            {/* Logo Oficial */}
            <div className="flex justify-center md:justify-start">
              <ExpoLogo />
            </div>

            {/* Company info */}
            <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
              <a
                href="#sponsor"
                className="rounded-full bg-yellow-400 px-5 py-2 text-sm font-bold text-[#0a1a4f] transition-colors hover:bg-yellow-300"
              >
                Quiero ser Sponsor
              </a>
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
                    target="_blank"
                    rel="noopener noreferrer"
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
                    {legalModalData[link] ? (
                      <button
                        type="button"
                        onClick={() => setActiveModalKey(link)}
                        className="cursor-pointer transition-colors hover:text-white hover:underline font-medium"
                      >
                        {link}
                      </button>
                    ) : (
                      <a href="#contacto" className="transition-colors hover:text-white">
                        {link}
                      </a>
                    )}
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

      {/* Modal Emergente con Estilo Oscuro Original y Totalmente Responsivo */}
      {activeModalData && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 p-0 sm:p-4 backdrop-blur-md transition-all animate-in fade-in duration-200"
          onClick={() => setActiveModalKey(null)}
        >
          <div
            className="relative flex h-[90vh] sm:h-auto sm:max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-[1.5rem] sm:rounded-2xl border border-slate-700 bg-slate-900 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del Modal */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-[#0a1a4f] px-4 sm:px-6 py-3.5 sm:py-4">
              <div className="flex items-center gap-3 pr-2">
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800/80 border border-slate-700">
                  {activeModalData.icon}
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#008135] block">
                    {activeModalData.category}
                  </span>
                  <h3 className="text-xs sm:text-base font-bold text-white truncate leading-snug">
                    {activeModalData.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalKey(null)}
                aria-label="Cerrar ventana"
                className="shrink-0 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Contenido con Scroll Responsivo */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-5 text-justify selection:bg-emerald-500 selection:text-slate-950">
              {activeModalData.content}
            </div>

            {/* Footer del Modal */}
            <div className="flex items-center justify-between border-t border-slate-800 bg-slate-900/90 px-4 sm:px-6 py-3">
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium truncate pr-2">
                Expo Créditos Venezuela 2026
              </span>
              <button
                type="button"
                onClick={() => setActiveModalKey(null)}
                className="shrink-0 rounded-xl bg-[#008135] px-4 sm:px-5 py-2 text-xs font-bold text-slate-950 transition-colors hover:bg-[#008135]/80 active:scale-95"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}