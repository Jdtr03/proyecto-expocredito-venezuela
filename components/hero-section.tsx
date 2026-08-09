const marqueeItems = [
  "Entradas 20% Desc. en VENEXPO APP",
  "Adquiere Créditos y Financiamientos en Productos y Servicios",
  "Gana Fabulosos Premios",
  "El Networking Crediticio del Año",
]

export default function HeroSection() {
  return (
    /* pb-0 asegura que NADA dentro del section tenga espacio azul abajo */
    <section className="relative overflow-hidden bg-[#031338] pt-8 sm:pt-10 lg:pt-12 pb-0">

      {/* Contenedor Flotante Centrado */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch overflow-hidden rounded-3xl shadow-2xl lg:grid-cols-2">

          {/* Columna Izquierda: Copy & CTAs */}
          <div className="relative flex flex-col justify-between bg-gradient-to-r from-[#0d8736] via-[#095759] to-[#0c2a71] px-6 py-10 sm:px-10 lg:py-14">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/90 sm:text-xs">
                1er Congreso de Conexiones Crediticias
              </p>

              <h1 className="mt-4 font-sans text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                Expo Créditos <br className="hidden sm:inline" />
                Venezuela Únete <br className="hidden sm:inline" />
                a la Expo
              </h1>

              <p className="mt-3 text-base font-bold italic text-[#f2c14e] sm:text-lg">
                más esperada de Venezuela
              </p>

              {/* Botones de Acción */}
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-full bg-[#ea202d] px-6 py-2.5 text-xs font-extrabold text-white shadow-lg transition hover:bg-[#c4141f] sm:text-sm"
                >
                  Adquiere tus entradas
                </button>
                <button
                  type="button"
                  className="rounded-full bg-[#ea202d] px-6 py-2.5 text-xs font-extrabold text-white shadow-lg transition hover:bg-[#c4141f] sm:text-sm"
                >
                  Ser Expositor
                </button>
              </div>
            </div>

            <p className="mt-8 text-xs font-medium text-white/80 sm:text-sm">
              Ruta del Crédito 2026 <span className="mx-1 text-white/40">-</span> Expo Créditos Venezuela 2026
            </p>
          </div>

          {/* Columna Derecha: Foto */}
          <div className="relative min-h-[300px] overflow-hidden lg:min-h-full">
            <img
              src="/images/expo-creditos-hero.png"
              alt="Expo Créditos Venezuela 2026"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0c2a71]/60 via-transparent to-transparent lg:from-[#0c2a71]/80" />
          </div>

        </div>
      </div>

      {/* Marquee Banner Inferior (Pegado al borde inferior absoluto) */}
      <div className="mt-8 w-full bg-[#0e8031] py-2.5">
        <div className="relative flex overflow-hidden">
          <div className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center whitespace-nowrap">
            {marqueeItems.concat(marqueeItems).map((item, i) => (
              <span key={i} className="flex items-center text-xs font-extrabold text-white sm:text-sm">
                <span className="px-4">{item}</span>
                <span className="text-[#f2c14e]" aria-hidden="true">|</span>
              </span>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center whitespace-nowrap"
          >
            {marqueeItems.concat(marqueeItems).map((item, i) => (
              <span key={i} className="flex items-center text-xs font-extrabold text-white sm:text-sm">
                <span className="px-4">{item}</span>
                <span className="text-[#f2c14e]">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}