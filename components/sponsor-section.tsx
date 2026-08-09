import Image from "next/image"
import { FileText } from "lucide-react"

export default function SponsorSection() {
  return (
    <section
      aria-labelledby="sponsor-heading"
      /* Degradado tricolor: Verde -> Azul Centro -> Verde */
      className="relative flex min-h-[90vh] w-full items-center justify-center bg-gradient-to-r from-emerald-600 via-blue-900 to-emerald-600 px-4 py-8 md:py-12"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center text-center">

        {/* Encabezado */}
        <header className="mb-6 space-y-2">
          <h2
            id="sponsor-heading"
            className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Tu Marca Aquí
          </h2>
          <p className="text-pretty text-sm font-medium text-white/90 sm:text-base">
            Con planes de Financiamiento Pre-Venta{" "}
            <span className="font-bold text-white">30% de Descuento</span>
          </p>
        </header>

        {/* Mockup de Stands (Bordes muy redondeados como la foto) */}
        <div className="relative my-2 w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white/10 shadow-2xl backdrop-blur-sm sm:rounded-[2.5rem]">
          <Image
            src="/images/sponsor-booth-mockup.png"
            alt="Mockup de stands de exposición Expo Créditos Venezuela para patrocinadores"
            width={1200}
            height={620}
            className="max-h-[50vh] w-full object-cover sm:max-h-[55vh]"
            priority
          />
        </div>

        {/* Botones de Acción */}
        <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-10">
          <a
            href="#dossier"
            className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-gray-200 sm:text-base"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            Solicita Dossier Comercial
          </a>

          <a
            href="#ser-sponsor"
            className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:text-base"
          >
            Ser Exponsor de Expo Créditos Ve
          </a>
        </div>

      </div>
    </section>
  )
}