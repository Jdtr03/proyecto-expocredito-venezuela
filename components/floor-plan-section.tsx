import Image from "next/image" // Asumiendo que usas Next.js.

export default function FloorPlanSection() {
  return (
    // Sección completa con el fondo azul oscuro original
    <section className="laptop-fit bg-[#0a1a3f] py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 flex flex-col items-center">

        {/* Contenedor de la Imagen: Ahora es el elemento central */}
        <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl overflow-hidden rounded-2xl border-4 border-[#008135] shadow-2xl bg-white/5 p-1">
          <Image
            src="/images/plano.png"
            alt="Plano de distribución de stands Expo Créditos Venezuela 2026"
            width={1200}
            height={900}
            className="w-full h-auto object-contain rounded-xl"
            priority
          />
        </div>

        {/* Pie de página de la sección (el texto de cierre original) */}
        <div className="mt-6 text-center md:mt-8">
          <a
            href="#sponsor"
            className="inline-block rounded-full bg-red-600 px-8 py-3 text-xs font-semibold text-white shadow-lg transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:px-10 sm:py-3.5 sm:text-sm"
          >
            Reservar mi Stand
          </a>
        </div>

      </div>
    </section>
  )
}