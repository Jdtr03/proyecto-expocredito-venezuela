import Image from "next/image"

const activities = [
  "1er Congreso de Conexiones Crediticias",
  "Networking de Créditos y Financiamientos",
  "Lanzamiento de Productos",
  "Ruedas de Negocios B2B",
  "Zona de Finanzas Kids",
  "Área Médica",
  "Zona de Prensa",
]

export default function AboutSection() {
  return (
    <section className="laptop-fit relative overflow-hidden bg-white pt-5 sm:pt-6 md:pt-8 lg:pt-10">
      {/* Contenedor principal */}
      <div className="mx-auto max-w-5xl lg:max-w-6xl px-4">

        {/* Cambiamos grid-cols-2 por grid-cols-12 para controlar proporciones exactas */}
        <div className="relative z-0 grid items-end gap-5 pb-6 sm:pb-8 md:grid-cols-12 md:gap-6 lg:gap-8">

          {/* 
            COLUMNA IZQUIERDA: 5 de 12 columnas (~41.6% del ancho)
          */}
          <div className="relative overflow-hidden rounded-3xl md:rounded-t-3xl md:rounded-b-none bg-[#030140] p-0 shadow-lg md:col-span-5">
            <Image
              src="/images/Norelys.png"
              alt="Vocera principal de Expo Créditos Venezuela"
              width={520}
              height={560}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          {/* 
            COLUMNA DERECHA: 7 de 12 columnas (~58.3% del ancho)
          */}
          <div className="flex flex-col justify-center self-stretch py-3 md:col-span-7 md:py-4">
            {/* Título */}
            <h2 className="mb-3 sm:mb-4 text-xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              La primera Expo en Venezuela que reúne a las líneas de{" "}
              <span className="text-[#159b48]">Créditos y Financiamientos</span>
            </h2>

            {/* Imagen Tarima centrada y sin bordes redondeados en desktop */}
            <div className="relative my-auto aspect-[16/9] w-full overflow-hidden rounded-2xl md:rounded-none shadow-sm">
              <Image
                src="/images/TARIMA.png"
                alt="Tarima central de Expo Créditos Venezuela"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Cinta Verde Inferior */}
      <div className="relative z-10 -mt-6 sm:-mt-8 md:-mt-10 w-full bg-gradient-to-r from-[#219929] via-[#0003ef] to-[#219929] py-3.5 sm:py-4 md:py-5 shadow-md">
        <div className="mx-auto max-w-7xl px-4">
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-xs font-semibold text-white md:text-xs lg:text-sm xl:text-base">
            {activities.map((activity, i) => (
              <li key={activity} className="flex items-center gap-x-3">
                <span className="whitespace-nowrap">{activity}</span>
                {i < activities.length - 1 && (
                  <span className="font-light text-white/70" aria-hidden="true">|</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}