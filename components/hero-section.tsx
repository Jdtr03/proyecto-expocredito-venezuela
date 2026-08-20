'use client';

import { ReactNode, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const marqueeItems = [
  "Entradas 20% Desc. en VENEXPO APP",
  "Adquiere Créditos y Financiamientos en Productos y Servicios",
  "Gana Fabulosos Premios",
  "El Networking Crediticio del Año",
];

interface HeroSlide {
  id: number;
  tagline: string;
  title: ReactNode;
  highlightText: string;
  badgeText?: string;
  dateLocationText?: ReactNode;
  footerText?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image: {
    src: string;
    alt: string;
    // Opciones para ajustar la vista por cada imagen
    objectFit?: 'cover' | 'contain';
    objectPosition?: string;
    padding?: string;
  };
  styles: {
    cardBg: string;
    leftColumnBg: string;
    taglineColor: string;
    highlightColor: string;
    primaryBtn: string;
    secondaryBtn?: string;
    overlayGradient?: string;
  };
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    tagline: "1er Congreso de Conexiones Crediticias",
    title: <>Expo Créditos <br className="hidden sm:inline" /> Venezuela <br className="hidden sm:inline" />Únete a la Expo</>,
    highlightText: "Más esperada de Venezuela",
    footerText: "Ruta del Crédito 2026 - Expo Créditos Venezuela 2026-2027",
    primaryCta: { label: "Adquiere tus entradas", href: "#entradas" },
    secondaryCta: { label: "Ser Expositor", href: "#sponsor" },
    image: {
      src: "/images/expo-creditos-hero.png",
      alt: "Expo Créditos Venezuela 2026 - Banner 1",
      objectFit: "cover",
      objectPosition: "center 20%",
    },
    styles: {
      cardBg: "bg-[#0c2a71]",
      leftColumnBg: "bg-gradient-to-r from-[#0d8736] via-[#095759] to-[#0c2a71]",
      taglineColor: "text-white/90",
      highlightColor: "text-[#f2c14e]",
      primaryBtn: "bg-[#ea202d] hover:bg-[#c4141f] text-white rounded-full font-medium px-5 xl:px-6 min-h-[44px] xl:min-h-[48px] inline-flex items-center justify-center shadow-md text-xs xl:text-sm transition-transform active:scale-95",
      secondaryBtn: "bg-[#ea202d] hover:bg-[#c4141f] text-white rounded-full font-medium px-5 xl:px-6 min-h-[44px] xl:min-h-[48px] inline-flex items-center justify-center shadow-md text-xs xl:text-sm transition-transform active:scale-95",
      overlayGradient: "from-[#0c2a71] via-[#0c2a71]/50 to-transparent",
    },
  },
  {
    id: 2,
    tagline: "1ER SEMINARIO",
    title: <>Créditos para <br /> Emprendedores</>,
    highlightText: "Conoce la ruta exacta para obtener créditos de emprendimiento",
    badgeText: "Presencial",
    dateLocationText: <>Caracas, Sábado 29 de Agosto, 2026 <br /> inicio 10:00 AM en Minds Co-work, piso 4 Centro Galipan el rosal</>,
    primaryCta: { label: "Reserva tu participación", href: "#entradas" },
    image: {
      src: "/images/1er-seminario.png",
      alt: "Seminario Créditos para Emprendedores",
      // Ajuste para visualizar afiche/volante completo sin recortar
      objectFit: "contain",
      objectPosition: "center",
      padding: "p-3 sm:p-5",
    },
    styles: {
      cardBg: "bg-[#210053]",
      leftColumnBg: "bg-gradient-to-r from-[#170072] via-[#4d0092] to-[#8000b2]",
      taglineColor: "text-white font-extrabold tracking-wider",
      highlightColor: "text-white font-normal non-italic",
      primaryBtn: "bg-[#ff2038] hover:bg-[#d91227] text-white font-medium rounded-full shadow-md px-6 xl:px-7 min-h-[44px] xl:min-h-[48px] inline-flex items-center justify-center text-xs xl:text-sm transition-transform active:scale-95",
      overlayGradient: "from-[#8000b2] via-[#8000b2]/1 to-transparent"
    },
  },
  {
    id: 3,
    tagline: "1ER SEMINARIO",
    title: <>Créditos para <br /> Emprendedores</>,
    highlightText: "Conoce la ruta exacta para obtener créditos de emprendimiento",
    badgeText: "Presencial",
    dateLocationText: <>Caracas, Sábado 29 de Agosto, 2026 <br /> inicio 10:00 AM en Minds Co-work, piso 4 Centro Galipan el rosal</>,
    primaryCta: { label: "Reserva tu participación", href: "#entradas" },
    image: {
      src: "/images/banner-2.jpg",
      alt: "Seminario Créditos para Emprendedores",
      objectFit: "cover",
      objectPosition: "center",
    },
    styles: {
      cardBg: "bg-[#320078]",
      leftColumnBg: "bg-gradient-to-r from-[#170072] via-[#4d0092] to-[#8000b2]",
      taglineColor: "text-white font-extrabold tracking-wider",
      highlightColor: "text-white font-normal non-italic",
      primaryBtn: "bg-[#ff2038] hover:bg-[#d91227] text-white font-medium rounded-full shadow-md px-6 xl:px-7 min-h-[44px] xl:min-h-[48px] inline-flex items-center justify-center text-xs xl:text-sm transition-transform active:scale-95",
      overlayGradient: "from-[#8000b2] via-[#8000b2]/50 to-transparent",
    },
  },
];

export default function HeroSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 25 },
    [
      Autoplay({
        delay: 4500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="inicio" className="relative overflow-hidden bg-[url('/images/b-a.png')] bg-cover bg-center pt-4 sm:pt-6 xl:pt-8 pb-0">
      <div className="relative mx-auto flex w-full max-w-5xl xl:max-w-7xl flex-col px-4 sm:px-6 lg:px-8">

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex w-full">
            {heroSlides.map((slide, slideIndex) => {
              const { styles, image } = slide;
              const isActiveSlide = slideIndex === selectedIndex;
              const isContain = image.objectFit === 'contain';

              return (
                <div key={slide.id} className="flex-[0_0_100%] min-w-0 pr-0">
                  <div
                    className={`grid w-full grid-cols-1 items-stretch overflow-hidden rounded-2xl shadow-xl sm:rounded-3xl md:grid-cols-2 md:max-h-[450px] xl:max-h-[520px] ${styles.cardBg}`}
                  >
                    {/* Columna Izquierda */}
                    <div className={`relative z-10 flex h-full flex-col justify-between ${styles.leftColumnBg} p-5 sm:p-7 lg:p-8 xl:p-10`}>
                      <div>
                        <p className={`text-xs xl:text-sm font-bold uppercase tracking-widest ${styles.taglineColor}`}>
                          {slide.tagline}
                        </p>

                        <h1 className="mt-2 font-sans text-3xl font-black leading-tight text-white sm:text-4xl lg:text-4xl xl:text-6xl">
                          {slide.title}
                        </h1>

                        <div className="mt-4 xl:mt-6 flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center sm:gap-4">
                          <a href={slide.primaryCta.href} className={`transition ${styles.primaryBtn}`}>
                            {slide.primaryCta.label}
                          </a>
                          {slide.secondaryCta && styles.secondaryBtn && (
                            <a href={slide.secondaryCta.href} className={`transition ${styles.secondaryBtn}`}>
                              {slide.secondaryCta.label}
                            </a>
                          )}
                        </div>

                        {slide.badgeText && (
                          <p className="mt-3 xl:mt-4 text-xs xl:text-sm font-semibold text-white/90">
                            {slide.badgeText}
                          </p>
                        )}

                        <p className={`mt-3 xl:mt-4 text-sm xl:text-lg font-medium leading-snug ${styles.highlightColor}`}>
                          {slide.highlightText}
                        </p>
                      </div>

                      <div className="mt-6 xl:mt-8 flex flex-col gap-1 text-xs xl:text-sm font-medium text-white/80 sm:flex-row sm:items-center sm:justify-between">
                        {slide.footerText && <span>{slide.footerText}</span>}
                        {slide.dateLocationText && (
                          <span className="text-left font-semibold text-white/90 sm:text-right">
                            {slide.dateLocationText}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Columna Derecha - Marco de la Imagen Mejorado */}
                    <div className={`relative flex items-center justify-center w-full aspect-[4/3] sm:aspect-video md:aspect-auto md:h-full min-h-[260px] overflow-hidden ${styles.cardBg} ${image.padding || ''}`}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={isActiveSlide}
                        style={{
                          objectFit: image.objectFit || 'cover',
                          objectPosition: image.objectPosition || 'center',
                        }}
                        className="select-none transition-transform duration-500 hover:scale-105"
                        draggable={false}
                      />

                      {/* Gradiente sutil solo si está configurado para no solapar afiches completos */}
                      {styles.overlayGradient && (
                        <div className={`pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-1/3 bg-gradient-to-r ${styles.overlayGradient} md:block`} />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicadores */}
        <div className="relative z-20 mt-4 xl:mt-6 flex justify-center space-x-1 sm:mt-5">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              className="group flex h-10 w-10 items-center justify-center focus:outline-none"
              aria-label={`Ir al Banner ${index + 1}`}
            >
              <span
                className={`block h-2.5 xl:h-3 rounded-full transition-all duration-300 ${index === selectedIndex
                  ? 'w-8 xl:w-10 bg-[#f2c14e]'
                  : 'w-2.5 xl:w-3 bg-white/40 group-hover:bg-white/70'
                  }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Marquee Inferior */}
      <div className="mt-3 xl:mt-4 w-full bg-[#0e8031] py-2.5 sm:py-3">
        <div className="relative flex overflow-hidden">
          <div className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center whitespace-nowrap">
            {marqueeItems.concat(marqueeItems).map((item, i) => (
              <span key={i} className="flex items-center text-xs xl:text-sm font-medium text-white">
                <span className="px-5 sm:px-6 xl:px-8">{item}</span>
                <span className="text-[#f2c14e] opacity-70" aria-hidden="true">•</span>
              </span>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center whitespace-nowrap"
          >
            {marqueeItems.concat(marqueeItems).map((item, i) => (
              <span key={`dup-${i}`} className="flex items-center text-xs xl:text-sm font-medium text-white">
                <span className="px-5 sm:px-6 xl:px-8">{item}</span>
                <span className="text-[#f2c14e] opacity-70">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}