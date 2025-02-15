'use client';

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
  return (
    <div className='relative w-full h-[calc(100vh-5rem)]'>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect='fade'
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        fadeEffect={{ crossFade: true }}
        speed={1000}
        loop={true}
        className='w-full h-full'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className='relative w-full h-full overflow-hidden'>
                <div className='absolute inset-0'>
                  <Image
                    src={slide.image || '/placeholder.svg'}
                    alt={slide.title}
                    fill
                    sizes='100vw'
                    style={{ objectFit: 'cover' }}
                    priority={index === 0}
                    quality={90}
                    className={`transform transition-transform duration-[5000ms] ease-out ${
                      isActive ? 'scale-100' : 'scale-110'
                    }`}
                  />
                </div>
                <div className='absolute inset-0 bg-black/50' />
                <div className='relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4'>
                  <h2
                    className={`text-4xl md:text-6xl font-bold mb-4 transition-all duration-1000 ease-out ${
                      isActive
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {slide.title}
                  </h2>
                  <p
                    className={`text-xl md:text-2xl max-w-2xl transition-all duration-1000 ease-out delay-300 ${
                      isActive
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {slide.description}
                  </p>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
