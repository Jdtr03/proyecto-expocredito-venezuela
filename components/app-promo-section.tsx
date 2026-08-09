import Image from "next/image"
import { Users, Ticket, Bell, Map, ScanLine, BarChart3, Flame, PieChart } from "lucide-react"

const attendeePoints = [
  { icon: Ticket, text: "Compra tus entradas directamente desde la app." },
  { icon: Users, text: "Encuentra la galería completa de expositores." },
  { icon: Bell, text: "Recibe notificaciones push del evento." },
  { icon: Map, text: "Explora un mapa interactivo de la expo." },
  { icon: ScanLine, text: "Escanea los stands para ganar fabulosos premios." },
]

const sponsorPoints = [
  { icon: BarChart3, text: "Métricas de asistentes en tiempo real." },
  { icon: Flame, text: "Mapas de calor de las zonas más visitadas." },
  { icon: PieChart, text: "Análisis de datos de asistencia segmentados para promocionar tu marca." },
]

function PhoneMockup() {
  return (
    <div className="mx-auto w-full max-w-[280px] rounded-[2.5rem] border-[6px] border-slate-700 bg-white shadow-2xl">
      {/* Screen */}
      <div className="overflow-hidden rounded-[2rem]">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
          <span aria-hidden className="text-lg text-gray-400">
            {"\u00D7"}
          </span>
          <span className="text-sm font-semibold text-gray-900">Último paso</span>
        </div>

        <div className="space-y-4 px-4 py-4">
          {/* Payment method */}
          <div>
            <p className="mb-2 text-sm font-medium text-gray-700">¿Cómo quieres pagar?</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                className="rounded-lg bg-slate-800 px-3 py-2 text-left text-xs font-semibold text-white"
              >
                Bancos
                <br />
                Nacionales
              </button>
              <button
                type="button"
                className="rounded-lg bg-orange-500 px-3 py-2 text-left text-xs font-semibold text-white"
              >
                Agregar
                <br />
                Tarjeta
              </button>
            </div>
          </div>

          {/* Billing */}
          <div>
            <p className="mb-2 text-xs font-medium text-gray-500">Datos de facturación</p>
            <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-2">
              <span className="h-8 w-1.5 rounded-full bg-orange-500" aria-hidden />
              <div>
                <p className="text-xs font-semibold text-gray-900">Creando Nortes</p>
                <p className="text-[10px] text-gray-400">ID J-309296484</p>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <p className="mb-2 text-xs font-medium text-gray-500">Resumen de Compra</p>
            <div className="space-y-1 text-[11px] text-gray-600">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">DÍA 2</span>
                <span />
              </div>
              <div className="flex justify-between">
                <span>General Día 2 Parte</span>
                <span>$16.00</span>
              </div>
              <div className="flex justify-between">
                <span>Fee (10%)</span>
                <span>$1.40</span>
              </div>
            </div>
            <div className="mt-2 flex justify-between border-t border-gray-100 pt-2 text-sm font-bold text-gray-900">
              <span>TOTAL A PAGAR</span>
              <span>$17.40</span>
            </div>
          </div>

          {/* Pay button */}
          <button
            type="button"
            className="w-full rounded-lg bg-slate-900 py-3 text-sm font-semibold text-white"
          >
            PAGAR
          </button>
        </div>

        {/* Nav bar */}
        <div className="flex items-center justify-center gap-10 border-t border-gray-100 py-2 text-gray-300">
          <span className="h-3 w-3 rounded-sm border border-current" aria-hidden />
          <span className="h-3 w-3 rounded-full border border-current" aria-hidden />
          <span className="text-xs" aria-hidden>
            {"\u2039"}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function AppPromoSection() {
  return (
    <section className="bg-[#0f1e3d] px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Encabezado Principal */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Únete a la Expo{" "}
            <span className="text-lg font-normal text-gray-300 md:text-xl">
              más esperada en Venezuela
            </span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-gray-300 md:text-lg">
            Espacios exclusivos para empresas, organizaciones y marcas reconocidas en el mercado con
            alto perfil de créditos y financiamientos en sus productos y servicios.
          </p>
        </div>

        {/* Layout de 3 columnas */}
        <div className="grid items-center gap-10 lg:grid-cols-3 lg:gap-4">

          {/* Columna Izquierda: App Oficial (Alineada a la derecha y pegada al celular) */}
          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-end lg:pr-12 lg:text-right">
            <div className="lg:max-w-xs">
              <h3 className="text-3xl font-semibold text-white">App oficial</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                El principal diferenciador de este evento es su integración tecnológica.
              </p>
            </div>

            {/* Logo de Venexpo dentro del contenedor blanco */}
            <div className="mt-6 inline-flex items-center justify-center rounded-3xl bg-white p-5 shadow-lg">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/logos/web-expo.webp"
                  alt="Logo Venexpo oficial"
                  width={140}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Columna Central: Mockup del Teléfono */}
          <div className="order-1 lg:order-2">
            <PhoneMockup />
          </div>

          {/* Columna Derecha: Beneficios */}
          <div className="order-3 space-y-8 lg:order-3">
            <div>
              <h3 className="mb-4 text-xl font-bold text-orange-500">Para los asistentes</h3>
              <ul className="space-y-3">
                {attendeePoints.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" aria-hidden />
                    <span className="text-sm leading-relaxed text-gray-300">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-orange-500">Para los sponsor</h3>
              <ul className="space-y-3">
                {sponsorPoints.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" aria-hidden />
                    <span className="text-sm leading-relaxed text-gray-300">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}