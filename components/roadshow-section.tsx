import Image from "next/image"

export default function RoadshowSection() {
  return (
    <section className="w-full bg-white">
      {/* Título superior centrado, más grande y con logo */}
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 py-8 sm:px-6 lg:px-8">
        <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16 md:h-20 md:w-20">
          <Image
            src="/images/pin1.svg" // Cambia esta ruta por la de tu logo
            alt="Logo La Ruta del Crédito"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h2 className="text-center text-2xl font-black tracking-tight text-gray-950 sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          La Ruta del Crédito Venezuela 2026
        </h2>
      </div>

      {/* Card principal azul */}
      <div className="relative overflow-hidden bg-gradient-to-tr from-[#010928] via-[#031766] to-[#003ce7]">
        {/* Detalle de líneas/gráfico decorativo */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.15) 100%), repeating-linear-gradient(90deg, transparent, transparent 48px, rgba(56,189,248,0.12) 49px)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-8 lg:py-10 xl:py-14">
          {/* Columna izquierda */}
          <div className="order-2 flex flex-col items-start pl-0 sm:pl-4 lg:order-1 lg:pl-12">
            <h3 className="text-3xl font-light text-white sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl">Únete a la Ruta</h3>

            <div className="mt-6 space-y-1">
              <p className="text-sm text-blue-100">Mind Work - El Rosal Caracas</p>
              <p className="text-lg font-bold italic text-yellow-400 sm:text-xl">La Ruta del Crédito</p>
              <p className="text-xl font-bold tracking-wide text-white sm:text-2xl">PARA EMPRENDEDORES</p>
            </div>

            <a
              href="#registro"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950"
            >
              Entrada Libre / Regístrate
            </a>

            {/* Logos de aliados */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              {["EXPO Créditos", "Creando Nortes", "Nataly B", "La Ruta del Crédito"].map((name) => (
                <span
                  key={name}
                  className="text-xs font-semibold uppercase tracking-wide text-blue-200/70"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Columna derecha */}
          <div className="order-1 lg:order-2">
            <p className="mb-4 text-right text-lg font-bold text-white sm:text-xl lg:text-2xl">
              Sábado 15 de Agosto 2026
            </p>

            <div className="ml-auto max-w-md overflow-hidden rounded-lg shadow-2xl ring-1 ring-white/10">
              <img
                src="/images/roadshow-businessmen.png"
                alt="Dos emprendedores en la Expo Créditos Venezuela 2026"
                className="max-h-56 sm:max-h-64 lg:max-h-72 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}