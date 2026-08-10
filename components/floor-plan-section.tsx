import Image from "next/image" // Asumiendo que usas Next.js.

export default function FloorPlanSection() {
  return (
    // Sección completa con el fondo azul oscuro original
    <section className="bg-[#0a1a3f] py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 flex flex-col items-center">

        {/* Contenedor de la Imagen: Ahora es el elemento central */}
        {/* Le damos un ancho máximo responsivo, un borde verde esmeralda y sombra */}
        <div className="w-full max-w-6xl overflow-hidden rounded-2xl border-4 border-emerald-500 shadow-2xl bg-white/5 p-1">
          <Image
            // 🔑 RUTA EXACTA según tu captura: /public/images/plano.png
            src="/images/plano.png"
            alt="Plano de distribución de stands Expo Créditos Venezuela 2026"
            width={1200} // Ancho sugerido para la imagen (ajustable)
            height={900}  // Alto sugerido para la imagen (ajustable)
            className="w-full h-auto object-contain rounded-xl"
            priority // Carga esta imagen con prioridad por ser el elemento principal de la sección
          />
        </div>

        {/* Pie de página de la sección (el texto de cierre original) */}
        <div className="mt-8 text-center md:mt-16">
          <div className="mt-6 md:mt-10">
            <a
              href="#contacto"
              className="inline-block rounded-full bg-red-600 px-10 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Reservar mi Stand
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}