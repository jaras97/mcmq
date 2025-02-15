'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <motion.section
      id='about'
      className='py-12 bg-gray-100'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className='container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        <div className='relative w-full h-96'>
          <Image
            src='https://minn.co/wp-content/uploads/2023/05/DSC06481.jpg'
            alt='Nosotros'
            fill
            className='object-cover rounded-lg shadow-lg'
          />
        </div>
        <div className='text-left'>
          <h2 className='text-3xl font-bold text-accent mb-4'>
            Sobre Nosotros
          </h2>
          <p className='text-gray-600 leading-relaxed'>
            En nuestra empresa, nos apasiona crear espacios inolvidables y
            diseñar experiencias únicas. Con años de experiencia, transformamos
            sueños en realidad a través de un diseño excepcional y atención al
            detalle.
          </p>
          <p className='text-gray-600 mt-4'>
            Nuestro equipo está compuesto por expertos en arquitectura e
            interiorismo que trabajan en conjunto para brindar soluciones
            personalizadas y adaptadas a cada cliente.
          </p>
          <button className='mt-6 bg-primary text-white px-6 py-2 rounded-full font-semibold hover:opacity-80 transition-opacity'>
            Conoce más
          </button>
        </div>
      </div>
    </motion.section>
  );
}
