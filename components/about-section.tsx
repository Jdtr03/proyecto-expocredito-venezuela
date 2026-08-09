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
    <section className="relative overflow-hidden bg-white pt-8 md:pt-12">
      {/* Contenedor principal */}
      <div className="mx-auto max-w-6xl px-4">

        {/* Cambiamos grid-cols-2 por grid-cols-12 para controlar proporciones exactas */}
        <div className="relative z-0 grid items-end gap-6 md:grid-cols-12 md:gap-8 pb-10">

          {/* 
            COLUMNA IZQUIERDA: 5 de 12 columnas (~41.6% del ancho)
            Si prefieres 35%, cambia md:col-span-5 por md:col-span-4
          */}
          <div className="relative overflow-hidden rounded-t-3xl rounded-b-none bg-[#030140] p-0 shadow-lg md:col-span-5">
            <Image
              src="/images/about-portrait.png"
              alt="Vocera principal de Expo Créditos Venezuela"
              width={520}
              height={560}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          {/* 
            COLUMNA DERECHA: 7 de 12 columnas (~58.3% del ancho)
            Si usaste col-span-4 a la izquierda, usa md:col-span-8 aquí (~66.6%)
          */}
          <div className="flex flex-col justify-center self-stretch py-4 md:col-span-7">
            {/* Título */}
            <h2 className="mb-6 text-2xl font-extrabold leading-tight tracking-tight text-gray-950 md:text-3xl lg:text-[1.8rem]">
              La primera Expo en Venezuela que reúne a las líneas de{" "}
              <span className="text-[#159b48]">Créditos y Financiamientos</span>
            </h2>

            {/* Imagen Tarima centrada y sin bordes redondeados */}
            <div className="relative my-auto aspect-[16/9] w-full overflow-hidden rounded-none shadow-sm">
              <Image
                src="/images/about-expo-hall.png"
                alt="Tarima central de Expo Créditos Venezuela"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Cinta Verde Inferior */}
      <div className="relative z-10 -mt-10 w-full bg-gradient-to-r from-[#219929] via-[#0003ef] to-[#219929] py-5 shadow-md">
        <div className="mx-auto max-w-7xl px-4">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-xs font-semibold text-white md:text-sm lg:text-base">
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