"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Building2, Mic, Globe } from "lucide-react"

type Stat = {
  icon: typeof Users
  value: number
  prefix: string
  suffix?: string
  label: string
}

const stats: Stat[] = [
  { icon: Users, value: 10, prefix: "+", suffix: "K", label: "Asistentes" },
  { icon: Building2, value: 180, prefix: "+", label: "Empresas participantes" },
  { icon: Mic, value: 20, prefix: "+", label: "Oradores" },
  { icon: Globe, value: 9, prefix: "+", label: "Estados a nivel nacional" },
]

function useCountUp(target: number, start: boolean, duration = 1600) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let frame = 0
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setCount(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, start, duration])

  return count
}

function StatCard({ stat, start }: { stat: Stat; start: boolean }) {
  const count = useCountUp(stat.value, start)
  const Icon = stat.icon

  return (
    <div className="group flex flex-col items-start gap-2.5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-amber-300 ring-1 ring-white/15 transition-transform group-hover:scale-110">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <p className="text-3xl font-extrabold tracking-tight text-white tabular-nums lg:text-4xl">
        {stat.prefix}
        {count}
        {stat.suffix}
      </p>
      <p className="text-xs font-medium leading-snug text-white/80 text-pretty">
        {stat.label}
      </p>
    </div>
  )
}

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="congreso"
      ref={sectionRef}
      className="scroll-mt-24 sm:scroll-mt-28 relative w-full border-t-4 border-[#16a34a] bg-gradient-to-br from-[#0f52ba] via-[#3b2beb] to-[#0a18a8] py-8 md:py-10"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Layout en 1 fila con 5 columnas en pantallas md/lg */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-4 items-center">

          {/* Columna 1: Título "Congreso 2026-2027" */}
          <div className="col-span-2 md:col-span-1 pr-2">
            <h2
              id="stats-heading"
              className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-3xl lg:text-4xl"
            >
              Congreso <br className="hidden md:block" />
              2026-2027
            </h2>
          </div>

          {/* Columnas 2 a 5: Tarjetas con Hover interactivo */}
          {stats.map((stat, idx) => (
            <StatCard key={idx} stat={stat} start={inView} />
          ))}

        </div>
      </div>
    </section>
  )
}