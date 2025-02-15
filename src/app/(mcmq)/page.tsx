import AboutSection from '@/components/AboutSection';
import HeroCarousel from '@/components/hero-carousel';
import ProjectsGallery from '@/components/ProjectsGallery';
import ServicesSection from '@/components/ServicesSection';
import React from 'react';

const services = [
  {
    title: '¡Transformamos tu casa!',
    description:
      '¿Quieres transformar tus espacios pero no sabes por dónde empezar, qué comprar ni cómo te va a quedar?',
    details:
      'Con nuestras asesorías de diseño escoge el número de espacios que quieres transformar y nosotros nos encargamos de entregarte un espacio en el que soñabas vivir.',
    image: 'https://minn.co/wp-content/uploads/2024/08/1-1.png',
    buttonText: '¡Quiero empezar ya!',
  },
  {
    title: "Diseñamos Airbnb's y Apartamentos Modelo",
    description:
      '¿Quieres que tu Airbnb se convierta en ese apartamento en el que todo el mundo se quisiera quedar?',
    details:
      "Con nuestras asesorías hemos logrado incrementar el índice de ocupación de los Airbnb's a más del 70%.",
    image: 'https://minn.co/wp-content/uploads/2024/08/1-1.png',
    buttonText: '¡Quiero empezar ya!',
  },
  {
    title: "Diseñamos Airbnb's y Apartamentos Modelo",
    description:
      '¿Quieres que tu Airbnb se convierta en ese apartamento en el que todo el mundo se quisiera quedar?',
    details:
      "Con nuestras asesorías hemos logrado incrementar el índice de ocupación de los Airbnb's a más del 70%.",
    image: 'https://minn.co/wp-content/uploads/2024/08/1-1.png',
    buttonText: '¡Quiero empezar ya!',
  },
];

const projectImages = [
  'https://minn.co/wp-content/uploads/2024/08/DSC00119.jpg',
  'https://minn.co/wp-content/uploads/2024/08/DSC06869-WEB-1.jpg',
  'https://minn.co/wp-content/uploads/2024/08/DSC00119.jpg',
];

const page = () => {
  return (
    <div className='text-primary'>
      <HeroCarousel />
      <ServicesSection services={services} />
      <ProjectsGallery images={projectImages} />
      <AboutSection />
    </div>
  );
};

export default page;
