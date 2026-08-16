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
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[2rem] bg-slate-900">
        <Image
          src="/images/app.jpeg"
          alt="Captura de pantalla de la app de la expo"
          fill
          sizes="280px"
          priority
          className="object-cover object-top"
        />
        {/* Dynamic Island / Notch */}
        <div className="absolute top-2 left-1/2 z-10 h-3 w-16 -translate-x-1/2 rounded-full bg-black/80" />
      </div>
    </div>
  )
}

export default function AppPromoSection() {
  return (
    <section className="bg-[#0f1e3d] px-4 py-10 md:py-14 lg:py-16">
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
        <div className="grid items-center gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">

          {/* Columna Izquierda: App Oficial */}
          <div className="order-2 flex flex-col items-center text-center md:order-1 md:col-span-2 lg:col-span-1 lg:order-1 lg:items-end lg:pr-6 lg:text-right xl:pr-12">
            <div className="lg:max-w-xs">
              <h3 className="text-3xl font-semibold text-white">App oficial</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                El principal diferenciador de este evento es su integración tecnológica.
              </p>
            </div>

            {/* Logo de Venexpo */}
            <div className="mt-6 inline-flex items-center justify-center rounded-3xl bg-white p-1.5 shadow-lg">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/logos/web-expo.webp"
                  alt="Logo Venexpo oficial"
                  width={140}
                  height={60}
                  style={{ width: "auto", height: "auto" }}
                  className="h-12 object-contain"
                />
              </div>
            </div>

            {/* Botones de Tiendas */}
            <div className="mt-6 flex scale-110 items-center justify-center gap-3 lg:justify-end">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform active:scale-95 hover:opacity-90"
              >
                <Image
                  src="/Ven-expo-app.webp"
                  alt="Descargar en App Store"
                  width={135}
                  height={40}
                  style={{ width: "auto", height: "auto" }}
                  className="h-10 object-contain"
                />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform active:scale-95 hover:opacity-90"
              >
                <Image
                  src="/Venexpo-app.webp"
                  alt="Disponible en Google Play"
                  width={135}
                  height={40}
                  style={{ width: "auto", height: "auto" }}
                  className="h-10 object-contain"
                />
              </a>
            </div>

            {/* Cuadro de aviso para adquirir entradas */}
            <div className="mt-8 w-full max-w-xs rounded-2xl border border-white/10 bg-slate-800/60 p-4 text-center shadow-lg backdrop-blur-sm lg:text-right">
              <h4 className="text-lg font-bold text-white">
                Adquiere tus entradas en Venexpo
              </h4>
              <p className="mt-1 text-xs text-gray-300">
                Descarga la app para poder adquirir tus entradas
              </p>
            </div>
          </div>

          {/* Columna Central: Mockup del Teléfono */}
          <div className="order-1 md:order-2 md:col-span-1 lg:order-2">
            <PhoneMockup />
          </div>

          {/* Columna Derecha: Beneficios */}
          <div className="order-3 space-y-8 md:col-span-1 lg:order-3">
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