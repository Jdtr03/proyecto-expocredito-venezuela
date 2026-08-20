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
    <div className="mx-auto w-full max-w-[230px] sm:max-w-[270px] md:max-w-[290px] xl:max-w-[310px] rounded-[2.5rem] border-[6px] border-slate-700 bg-white shadow-2xl transition-all duration-300">
      {/* Pantalla con relación de aspecto adaptativa */}
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[2rem] bg-slate-900">
        <Image
          src="/images/app.jpeg"
          alt="Captura de pantalla de la app de la expo"
          fill
          sizes="(max-width: 640px) 230px, (max-width: 768px) 270px, (max-width: 1280px) 290px, 310px"
          priority
          className="object-cover object-top"
        />
        {/* Notch / Dynamic Island */}
        <div className="absolute top-2 left-1/2 z-10 h-3 w-16 -translate-x-1/2 rounded-full bg-black/80" />
      </div>
    </div>
  )
}

export default function AppPromoSection() {
  return (
    <section className="bg-[#0f1e3d] px-4 py-10 sm:px-6 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      {/* Contenedor fluido con límite max-w-7xl para pantallas ultranchan (14", 16"+) */}
      <div className="mx-auto max-w-7xl">

        {/* Encabezado Principal */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Únete a la Expo{" "}
            <span className="block text-base font-normal text-gray-300 sm:inline sm:text-lg md:text-xl lg:text-2xl">
              más esperada en Venezuela
            </span>
          </h2>
          <p className="mt-3 text-pretty text-xs font-normal leading-relaxed text-gray-300 sm:mt-4 sm:text-sm md:text-base lg:text-lg">
            Espacios exclusivos para empresas, organizaciones y marcas reconocidas en el mercado con
            alto perfil de créditos y financiamientos en sus productos y servicios.
          </p>
        </div>

        {/* Layout Adaptativo */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-12">

          {/* Columna Izquierda: App Oficial */}
          <div className="order-2 flex flex-col items-center text-center md:order-1 md:col-span-1 lg:order-1 lg:items-end lg:text-right">
            <div className="w-full max-w-xs sm:max-w-sm">
              <h3 className="text-xl font-semibold text-white sm:text-2xl md:text-3xl">
                App oficial
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-400 sm:text-sm">
                El principal diferenciador de este evento es su integración tecnológica.
              </p>
            </div>

            {/* Logo de Venexpo - Más notorio con sombra y padding mejorado */}
            <div className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white p-3 sm:p-4 shadow-xl ring-1 ring-black/5 sm:rounded-3xl transition-transform hover:scale-105 duration-300">
              <Image
                src="/images/logos/web-expo.webp"
                alt="Logo Venexpo oficial"
                width={180}
                height={80}
                className="h-14 w-auto object-contain sm:h-16 md:h-20"
              />
            </div>

            {/* Botones de Tiendas - Incrementados de tamaño uniformemente */}
            <div className="mt-7 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-4 lg:flex-col lg:items-end">

              {/* Google Play Store */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Disponible en Google Play"
                className="group relative flex h-14 w-52 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-black/50 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/70 hover:border-white/30 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 active:scale-95 sm:h-16 sm:w-56"
              >
                <div className="relative h-10 w-40 sm:h-11 sm:w-44">
                  <Image
                    src="/Venexpo-app.webp"
                    alt="Disponible en Google Play"
                    fill
                    sizes="(max-width: 640px) 160px, 176px"
                    className="object-contain transition-transform duration-300 group-hover:scale-105 pointer-events-none"
                  />
                </div>
              </a>

              {/* Apple App Store */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Descargar en App Store"
                className="group relative flex h-14 w-52 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-black/50 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/70 hover:border-white/30 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 active:scale-95 sm:h-16 sm:w-56"
              >
                <div className="relative h-10 w-40 sm:h-11 sm:w-44">
                  <Image
                    src="/Ven-expo-app.webp"
                    alt="Descargar en App Store"
                    fill
                    sizes="(max-width: 640px) 160px, 176px"
                    className="object-contain transition-transform duration-300 group-hover:scale-105 pointer-events-none"
                  />
                </div>
              </a>

            </div>

            {/* Cuadro de aviso para adquirir entradas */}
            <div className="mt-8 w-full max-w-xs sm:max-w-sm rounded-2xl border border-white/10 bg-slate-800/60 p-4 text-center shadow-lg backdrop-blur-sm lg:text-right">
              <h4 className="text-sm font-bold text-white sm:text-base md:text-lg">
                Adquiere tus entradas en Venexpo
              </h4>
              <p className="mt-1 text-xs text-gray-300">
                Descarga la app para poder adquirir tus entradas
              </p>
            </div>
          </div>

          {/* Columna Central: Mockup del Teléfono */}
          <div className="order-1 flex justify-center md:order-2 md:col-span-1 lg:order-2">
            <PhoneMockup />
          </div>

          {/* Columna Derecha: Beneficios */}
          <div className="order-3 space-y-6 md:col-span-2 lg:col-span-1 lg:order-3 sm:space-y-8">
            <div>
              <h3 className="mb-3 text-lg font-bold text-orange-500 sm:mb-4 sm:text-xl">
                Para los asistentes
              </h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {attendeePoints.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-orange-400 sm:h-5 sm:w-5" aria-hidden="true" />
                    <span className="text-xs leading-relaxed text-gray-300 sm:text-sm">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-bold text-orange-500 sm:mb-4 sm:text-xl">
                Para los sponsor
              </h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {sponsorPoints.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-orange-400 sm:h-5 sm:w-5" aria-hidden="true" />
                    <span className="text-xs leading-relaxed text-gray-300 sm:text-sm">{text}</span>
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