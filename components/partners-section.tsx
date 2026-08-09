const partners = [
  { name: "Venexpo", accent: "text-blue-700" },
  { name: "Click Productions", accent: "text-orange-500" },
  { name: "C.C. Líder", subtitle: "Nivel Evento, Caracas", accent: "text-cyan-600" },
  { name: "Espacio", accent: "text-slate-900" },
  { name: "Promueve", accent: "text-pink-600" },
  { name: "Produ", accent: "text-slate-800" },
]

export default function PartnersSection() {
  return (
    <section className="bg-slate-50 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900 md:text-4xl text-balance">
          Aliados Comerciales
        </h2>

        <ul className="mt-10 grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-10 sm:grid-cols-3 md:mt-14 lg:grid-cols-6">
          {partners.map((partner) => (
            <li key={partner.name} className="flex w-full justify-center">
              <div className="group flex flex-col items-center text-center">
                <span
                  className={`text-lg font-black tracking-tight opacity-70 transition-opacity duration-300 group-hover:opacity-100 md:text-xl ${partner.accent}`}
                >
                  {partner.name}
                </span>
                {partner.subtitle ? (
                  <span className="mt-1 text-[10px] font-medium uppercase tracking-wide text-slate-500">
                    {partner.subtitle}
                  </span>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
