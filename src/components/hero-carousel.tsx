'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import Image from 'next/image';

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const slides = [
  {
    image:
      'https://minn.co/wp-content/uploads/2024/08/FOTT7870_HDR-FULL-WEB.jpg',
    title: 'Creamos Momentos Inolvidables',
    description: 'Diseñamos y planificamos bodas únicas y personalizadas',
  },
  {
    image: 'https://minn.co/wp-content/uploads/2024/08/DSC03154_HDR-WEB.jpg',
    title: 'Tu Día Perfecto',
    description: 'Cada detalle cuenta en el día más especial de tu vida',
  },
  {
    image:
      'https://minn.co/wp-content/uploads/2024/08/FOTT7870_HDR-FULL-WEB.jpg',
    title: 'Experiencia y Dedicación',
    description: 'Más de 10 años creando bodas memorables',
  },
  {
    image: 'https://minn.co/wp-content/uploads/2024/08/DSC03154_HDR-WEB.jpg',
    title: 'Tu Día Perfecto',
    description: 'Cada detalle cuenta en el día más especial de tu vida',
  },
];

export default function HeroCarousel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='relative w-full h-[calc(100vh-5rem)]'>
      {' '}
      {/* Altura total menos altura del header */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect='fade'
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        fadeEffect={{ crossFade: true }}
        speed={1500}
        loop={true}
        className='w-full h-full'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className='relative w-full h-full overflow-hidden'>
              {/* Imagen de fondo usando Next.js Image con efecto de zoom out continuo */}
              <div className='absolute inset-0'>
                <Image
                  src={slide.image || '/placeholder.svg'}
                  alt={slide.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index === 0}
                  quality={90}
                  className='transform scale-105 animate-slow-zoom-out'
                />
              </div>
              {/* Overlay oscuro para mejorar legibilidad del texto */}
              <div className='absolute inset-0 bg-black/50' />
              {/* Contenido superpuesto */}
              <div className='relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4'>
                <h2 className='text-4xl md:text-6xl font-bold mb-4 opacity-0 translate-y-4 animate-fade-up'>
                  {slide.title}
                </h2>
                <p className='text-xl md:text-2xl max-w-2xl opacity-0 translate-y-4 animate-fade-up animation-delay-300'>
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
