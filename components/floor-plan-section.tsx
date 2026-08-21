import Image from "next/image" // Asumiendo que usas Next.js.

export default function FloorPlanSection() {
  return (
    // Sección completa con el fondo azul oscuro original
    <section className="laptop-fit bg-[#0a1a3f] py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 flex flex-col items-center">

        {/* Contenedor del Mapa: Reducido al 75% de su ancho máximo */}
        <div className="w-full sm:w-3/4 max-w-3xl lg:max-w-4xl overflow-hidden rounded-2xl border-4 border-[#008135] shadow-2xl bg-white/5 p-1">
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
            className="inline-block rounded-full bg-[#E50914] px-7 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-200 hover:bg-red-700 hover:scale-105 active:scale-95 sm:px-9 sm:py-3 sm:text-sm"
          >
            Reservar mi Stand
          </a>
        </div>

      </div>
    </section>
  )
}