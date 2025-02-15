'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  details: string;
  image: string;
  buttonText: string;
}

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <motion.section
      id='services'
      className='py-12 bg-gray-100'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className='container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch'>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className='text-center flex flex-col items-center'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className='w-60 h-60 relative rounded-full'>
              <Image
                src={service.image}
                alt={service.title}
                layout='fill'
                objectFit='cover'
                className='rounded-full'
              />
            </div>
            <div className='flex flex-col flex-grow'>
              <h2 className='text-2xl font-bold text-accent mt-4'>
                {service.title}
              </h2>
              <p className='text-gray-600 mt-2 flex-grow'>
                {service.description}
              </p>
              <p className='text-gray-500 mt-2 flex-grow'>{service.details}</p>
              <button className='mt-4 bg-primary text-white px-6 py-2 rounded-full font-semibold hover:opacity-80 transition-opacity'>
                {service.buttonText}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
