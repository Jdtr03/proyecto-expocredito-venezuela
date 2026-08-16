"use client"

// Fila 1: 7 Bancos e Instituciones
const ROW_1 = [
  { name: "BDV", logo: "/images/logos/bdv.png", scale: "scale-100" },
  { name: "Banesco", logo: "/images/logos/banesco.png", scale: "scale-100" },
  { name: "Banco del Tesoro", logo: "/images/logos/banco-tesoro.png", scale: "scale-100" },
  { name: "Banco Plaza", logo: "/images/logos/banco-plaza.jpg", scale: "scale-[1.6]" },
  { name: "Bancamiga", logo: "/images/logos/bancamiga.jpg", scale: "scale-[1.6]" },
  { name: "BNC", logo: "/images/logos/bnc.png", scale: "scale-100" },
  { name: "Damasco", logo: "/images/logos/damasco.svg", scale: "scale-100" },
]

// Fila 2: 6 Marcas Comerciales
const ROW_2 = [
  { name: "Venelectronics", logo: "/images/logos/venelectronics.png", scale: "scale-[1.1]" },
  { name: "IVOO", logo: "/images/logos/ivoo.svg", scale: "scale-[0.9]" },
  { name: "SoyTechno", logo: "/images/logos/soy-techno.webp", scale: "scale-[2.6]" },
  { name: "MultiMax", logo: "/images/logos/multimax.png", scale: "scale-100" },
  { name: "Toyota", logo: "/images/logos/toyota.svg", scale: "scale-[1.1]" },
  { name: "Kia", logo: "/images/logos/kia.webp", scale: "scale-100" },
]

interface Sponsor {
  name: string
  logo: string
  scale: string
}

function SponsorLogo({ sponsor }: { sponsor: Sponsor }) {
  const isScaled = sponsor.scale !== "scale-100" && sponsor.scale !== "scale-[0.9]";
  return (
    <div className={`flex h-12 items-center justify-center ${isScaled ? 'w-32 sm:w-36 mx-1 sm:mx-2' : 'w-24 sm:w-28'} md:h-14 md:w-36 md:mx-0`}>
      {/* El div interno aplica la escala personalizada fija */}
      <div className={`flex h-full w-full items-center justify-center ${sponsor.scale}`}>
        {/* La imagen aplica el efecto zoom leve (+10%) en hover sin romper la escala base */}
        <img
          src={sponsor.logo}
          alt={`Logo ${sponsor.name}`}
          className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default function SponsorsMarquee() {
  return (
    <section aria-labelledby="sponsors-heading" className="w-full bg-white py-10 md:py-14 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <h2
          id="sponsors-heading"
          className="mb-10 text-center text-2xl font-black tracking-tight text-black md:text-3xl"
        >
          Bancos y Marcas Invitadas
        </h2>

        <div className="flex flex-col gap-8 md:gap-10">
          {/* PRIMERA FILA (7 Logos) */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {ROW_1.map((sponsor) => (
              <SponsorLogo key={sponsor.name} sponsor={sponsor} />
            ))}
          </div>

          {/* SEGUNDA FILA (6 Logos centrados) */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {ROW_2.map((sponsor) => (
              <SponsorLogo key={sponsor.name} sponsor={sponsor} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}