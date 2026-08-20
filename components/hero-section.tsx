'use client';

import { ReactNode, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { X } from 'lucide-react';

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
  primaryCta: { label: string; href?: string; isModal?: boolean };
  secondaryCta?: { label: string; href: string };
  image: {
    src: string;
    alt: string;
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
    primaryCta: { label: "Adquiere tus entradas", href: "#app" },
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
    primaryCta: { label: "Reserva tu participación", isModal: true },
    image: {
      src: "/images/1er-seminario.png",
      alt: "Seminario Créditos para Emprendedores",
      objectFit: "contain",
      objectPosition: "center",
      padding: "p-3 sm:p-5",
    },
    styles: {
      cardBg: "bg-[#210053]",
      leftColumnBg: "bg-gradient-to-r from-[#170072] via-[#4d0092] to-[#8000b2]",
      taglineColor: "text-white font-extrabold tracking-wider",
      highlightColor: "text-white font-normal non-italic",
      primaryBtn: "bg-[#ff2038] hover:bg-[#d91227] text-white font-medium rounded-full shadow-md px-6 xl:px-7 min-h-[44px] xl:min-h-[48px] inline-flex items-center justify-center text-xs xl:text-sm transition-transform active:scale-95 cursor-pointer",
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
    primaryCta: { label: "Reserva tu participación", isModal: true },
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
      primaryBtn: "bg-[#ff2038] hover:bg-[#d91227] text-white font-medium rounded-full shadow-md px-6 xl:px-7 min-h-[44px] xl:min-h-[48px] inline-flex items-center justify-center text-xs xl:text-sm transition-transform active:scale-95 cursor-pointer",
      overlayGradient: "from-[#8000b2] via-[#8000b2]/50 to-transparent",
    },
  },
];

export default function HeroSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);

  // Formulario para Reserva de Cupos
  const [reserveFormData, setReserveFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
  });

  // Evita el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isReserveModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isReserveModalOpen]);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReserveFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReserveSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { nombre, apellido, telefono, correo } = reserveFormData;

    // Mensaje para WhatsApp
    const message =
      `Hola, estoy interesado en la reserva de cupos para el 1er seminario. 

*Mis datos:*
👤 *Nombre:* ${nombre} ${apellido}
📱 *Teléfono:* ${telefono}
✉️ *Correo:* ${correo}

¡Quedo atento a la información de pago y registro!`;

    const whatsappNumber = "584226464926";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    // Reiniciar formulario y cerrar modal
    setReserveFormData({
      nombre: "",
      apellido: "",
      telefono: "",
      correo: "",
    });
    setIsReserveModalOpen(false);
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-[url('/images/b-a.png')] bg-cover bg-center pt-4 sm:pt-6 xl:pt-8 pb-0">
      <div className="relative mx-auto flex w-full max-w-5xl xl:max-w-7xl flex-col px-4 sm:px-6 lg:px-8">

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex w-full">
            {heroSlides.map((slide, slideIndex) => {
              const { styles, image } = slide;
              const isActiveSlide = slideIndex === selectedIndex;

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
                          {slide.primaryCta.isModal ? (
                            <button
                              type="button"
                              onClick={() => setIsReserveModalOpen(true)}
                              className={`transition ${styles.primaryBtn}`}
                            >
                              {slide.primaryCta.label}
                            </button>
                          ) : (
                            <a href={slide.primaryCta.href} className={`transition ${styles.primaryBtn}`}>
                              {slide.primaryCta.label}
                            </a>
                          )}

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

                    {/* Columna Derecha */}
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

      {/* Modal / Formulario Emergente para Reserva de Cupos (Slides 2 y 3) */}
      {isReserveModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={() => setIsReserveModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              type="button"
              onClick={() => setIsReserveModalOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
              aria-label="Cerrar ventana"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Encabezado */}
            <div className="mb-6">
              <h3 className="text-2xl font-extrabold text-[#210053]">Reserva de Cupos</h3>
              <p className="text-xs text-gray-600 mt-1">
                1er Seminario: Créditos para Emprendedores. Ingresa tus datos para continuar por WhatsApp.
              </p>
            </div>

            {/* Formulario */}
            <form onSubmit={handleReserveSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="nombre" className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={reserveFormData.nombre}
                    onChange={handleInputChange}
                    placeholder="Ej. María"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-[#4d0092] focus:outline-none focus:ring-1 focus:ring-[#4d0092]"
                  />
                </div>

                <div>
                  <label htmlFor="apellido" className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    required
                    value={reserveFormData.apellido}
                    onChange={handleInputChange}
                    placeholder="Ej. Gómez"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-[#4d0092] focus:outline-none focus:ring-1 focus:ring-[#4d0092]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="telefono" className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  value={reserveFormData.telefono}
                  onChange={handleInputChange}
                  placeholder="+58 412 1234567"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-[#4d0092] focus:outline-none focus:ring-1 focus:ring-[#4d0092]"
                />
              </div>

              <div>
                <label htmlFor="correo" className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  required
                  value={reserveFormData.correo}
                  onChange={handleInputChange}
                  placeholder="ejemplo@correo.com"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-[#4d0092] focus:outline-none focus:ring-1 focus:ring-[#4d0092]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsReserveModalOpen(false)}
                  className="rounded-full px-4 py-2 text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-green-600 px-5 py-2 text-xs font-bold text-white hover:bg-green-700 transition-colors shadow-md flex items-center gap-1.5"
                >
                  Reservar por WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}