import Image from "next/image"

const partners = [
  {
    name: "Venexpo",
    logo: "/images/logos/aliados/web-expo-2.webp",
    accent: "text-blue-700",
    scale: "scale-100", // Escala normal (100%)
  },
  {
    name: "Click Productions",
    logo: "/images/logos/aliados/click-productions.png",
    accent: "text-orange-500",
    scale: "scale-[1]", // Agranda un 20%
  },
  {
    name: "C.C. Líder",
    logo: "/images/logos/aliados/lider.png",
    accent: "text-cyan-600",
    scale: "scale-[1.5]", // Reduce un 10%
  },
  {
    name: "Espacio",
    logo: "/images/logos/aliados/espacio.webp",
    accent: "text-slate-900",
    scale: "scale-[1.2]",
  },
  {
    name: "Promueve",
    logo: "/images/logos/aliados/LOGO PROMUEVE.png",
    accent: "text-pink-600",
    scale: "scale-[1.5]", // Agranda un 30% si el logo es muy pequeño
  },
  {
    name: "Produ",
    logo: "/images/logos/aliados/producciones24.webp",
    accent: "text-slate-800",
    scale: "scale-[1.5]", // Reduce un 5%
  },
]

export default function PartnersSection() {
  return (
    <section className="bg-slate-50 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-balance text-center text-2xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          Aliados Comerciales
        </h2>

        <ul className="mt-10 grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-10 sm:grid-cols-3 md:mt-14 lg:grid-cols-6">
          {partners.map((partner) => (
            <li key={partner.name} className="flex w-full justify-center">
              <div className="group flex flex-col items-center text-center">
                {partner.logo ? (
                  /* El contenedor mantiene el efecto hover y centrado */
                  <div className="relative flex h-16 w-32 items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110">
                    <Image
                      src={partner.logo}
                      alt={`Logo de ${partner.name}`}
                      width={128}
                      height={64}
                      /* Aplicamos partner.scale aquí para ajustar solo ese logo */
                      className={`max-h-16 w-auto object-contain transition-transform duration-300 ${partner.scale || "scale-100"}`}
                    />
                  </div>
                ) : (
                  <span
                    className={`text-lg font-black tracking-tight transition-transform duration-300 ease-in-out group-hover:scale-110 md:text-xl ${partner.accent}`}
                  >
                    {partner.name}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}