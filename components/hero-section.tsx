'use client';

import { useState, useEffect, ReactNode } from 'react';
import Image from 'next/image';

const marqueeItems = [
  "Entradas 20% Desc. en VENEXPO APP",
  "Adquiere Créditos y Financiamientos en Productos y Servicios",
  "Gana Fabulosos Premios",
  "El Networking Crediticio del Año",
];

// Tipado explícito para flexibilidad de botones y datos
interface HeroSlide {
  id: number;
  tagline: string;
  title: ReactNode;
  highlightText: string;
  badgeText?: string;
  dateLocationText?: string;
  footerText?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string }; // Opcional
  image: { src: string; alt: string };
  styles: {
    cardBg: string;
    leftColumnBg: string;
    taglineColor: string;
    highlightColor: string;
    primaryBtn: string;
    secondaryBtn?: string;
    overlayGradient: string; // Fusión dinámica según el tono del banner
  };
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    tagline: "1er Congreso de Conexiones Crediticias",
    title: <>Expo Créditos <br className="hidden sm:inline" /> Venezuela Únete <br className="hidden sm:inline" /> a la Expo</>,
    highlightText: "Más esperada de Venezuela",
    footerText: "Ruta del Crédito 2026 - Expo Créditos Venezuela 2026-2027",
    primaryCta: { label: "Adquiere tus entradas", href: "#entradas" },
    secondaryCta: { label: "Ser Expositor", href: "#expositor" },
    image: { src: "/images/expo-creditos-hero.png", alt: "Expo Créditos Venezuela 2026 - Banner 1" },
    styles: {
      cardBg: "bg-[#0c2a71]",
      leftColumnBg: "bg-gradient-to-r from-[#0d8736] via-[#095759] to-[#0c2a71]",
      taglineColor: "text-white/90",
      highlightColor: "text-[#f2c14e]",
      primaryBtn: "bg-[#ea202d] hover:bg-[#c4141f] text-white rounded-full font-normal px-6 py-2.5 shadow-md",
      secondaryBtn: "bg-[#ea202d] hover:bg-[#c4141f] text-white rounded-full font-normal px-6 py-2.5 shadow-md",
      overlayGradient: "from-[#0c2a71] via-[#0c2a71]/60 to-transparent",
    },
  },
  {
    id: 2,
    tagline: "1ER SEMINARIO",
    title: <>Créditos para <br /> Emprendedores</>,
    highlightText: "Conoce la ruta exacta para obtener créditos de emprendimiento",
    badgeText: "Presencial",
    dateLocationText: "Caracas 22 Agosto, 2026",
    primaryCta: { label: "Reserva tu participación", href: "#reserva" },
    image: { src: "/images/banner-2.jpg", alt: "Seminario Créditos para Emprendedores" },
    styles: {
      cardBg: "bg-[#320078]",
      leftColumnBg: "bg-gradient-to-r from-[#170072] via-[#4d0092] to-[#8000b2]",
      taglineColor: "text-white font-extrabold tracking-wider",
      highlightColor: "text-white font-normal non-italic",
      primaryBtn: "bg-[#ff2038] hover:bg-[#d91227] text-white font-medium rounded-full shadow-md px-7 py-2.5",
      overlayGradient: "from-[#8000b2] via-[#8000b2]/60 to-transparent",
    },
  },
];

export default function HeroSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 7000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[url('/images/b-a.png')] bg-cover bg-center pt-8 sm:pt-10 lg:pt-12 pb-0">

      {/* Contenedor Flotante Centrado */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative min-h-[480px] sm:min-h-[420px] lg:min-h-[400px]">

        {heroSlides.map((slide, slideIndex) => {
          const isActiveSlide = slideIndex === currentSlideIndex;
          const { styles } = slide;

          return (
            <div
              key={slide.id}
              className={`grid grid-cols-1 items-stretch overflow-hidden rounded-2xl shadow-2xl sm:rounded-3xl lg:grid-cols-2 ${styles.cardBg} transition-all duration-700 ease-in-out ${isActiveSlide
                  ? "opacity-100 relative z-10 translate-x-0"
                  : "opacity-0 absolute inset-x-4 sm:inset-x-6 lg:inset-x-8 top-0 pointer-events-none translate-x-4"
                }`}
            >
              {/* Columna Izquierda */}
              <div className={`relative flex flex-col justify-between ${styles.leftColumnBg} px-6 py-8 sm:px-10 sm:py-10 lg:py-12 xl:py-14 z-10`}>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest ${styles.taglineColor} sm:text-sm`}>
                    {slide.tagline}
                  </p>

                  <h1 className="mt-2 font-sans text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                    {slide.title}
                  </h1>

                  {/* Renderizado de Botón Único o Múltiple */}
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={slide.primaryCta.href}
                      className={`inline-block text-xs sm:text-sm transition ${styles.primaryBtn}`}
                    >
                      {slide.primaryCta.label}
                    </a>

                    {slide.secondaryCta && styles.secondaryBtn && (
                      <a
                        href={slide.secondaryCta.href}
                        className={`inline-block text-xs sm:text-sm transition ${styles.secondaryBtn}`}
                      >
                        {slide.secondaryCta.label}
                      </a>
                    )}
                  </div>

                  {/* Texto Presencial si existe */}
                  {slide.badgeText && (
                    <p className="mt-2 text-xs font-semibold text-white/90">
                      {slide.badgeText}
                    </p>
                  )}

                  <p className={`mt-5 text-sm font-medium ${styles.highlightColor} sm:text-base lg:text-lg`}>
                    {slide.highlightText}
                  </p>
                </div>

                {/* Footer o Fecha/Ubicación Inferior */}
                <div className="mt-6 flex items-center justify-between text-xs font-medium text-white/80 sm:text-sm">
                  {slide.footerText && <span>{slide.footerText}</span>}
                  {slide.dateLocationText && (
                    <span className="ml-auto text-right text-xs font-semibold text-white/90">
                      {slide.dateLocationText}
                    </span>
                  )}
                </div>
              </div>

              {/* Columna Derecha: Imagen con Overlay Dinámico */}
              <div className={`relative min-h-[280px] sm:min-h-[360px] lg:min-h-full w-full overflow-hidden ${styles.cardBg}`}>
                <Image
                  src={slide.image.src}
                  alt={slide.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={isActiveSlide}
                  className="object-cover object-center"
                />

                {/* Capa de degradado adaptativa (solo visible en pantallas lg+) */}
                <div
                  className={`pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 bg-gradient-to-r ${styles.overlayGradient} z-10 lg:block`}
                />

                {/* Capa de degradado adaptativa superior para dispositivos móviles */}
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b ${styles.overlayGradient.replace('to-r', 'to-b')} z-10 lg:hidden`}
                />
              </div>
            </div>
          );
        })}

        {/* Indicadores */}
        <div className="mt-4 flex justify-center space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlideIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${index === currentSlideIndex ? 'w-9 bg-[#f2c14e]' : 'w-3 bg-white/40 hover:bg-white/70'
                }`}
              aria-label={`Ver Banner ${index + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Marquee Banner Inferior */}
      <div className="mt-8 w-full bg-[#0e8031] py-2.5">
        <div className="relative flex overflow-hidden">
          <div className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center whitespace-nowrap">
            {marqueeItems.concat(marqueeItems).map((item, i) => (
              <span key={i} className="flex items-center text-xs font-normal text-white sm:text-sm">
                <span className="px-4">{item}</span>
                <span className="text-[#f2c14e]" aria-hidden="true">|</span>
              </span>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center whitespace-nowrap"
          >
            {marqueeItems.concat(marqueeItems).map((item, i) => (
              <span key={i} className="flex items-center text-xs font-normal text-white sm:text-sm">
                <span className="px-4">{item}</span>
                <span className="text-[#f2c14e]">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}