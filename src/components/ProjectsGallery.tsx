'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectsGallery({ images }: ProjectGalleryProps) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <motion.section
      id='projects'
      className='py-12 bg-white'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className='container mx-auto text-center'>
        <h2 className='text-2xl font-bold text-accent mb-6'>
          Algo de nuestro trabajo
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {images.map((image, index) => (
            <motion.div
              key={index}
              className='relative cursor-pointer overflow-hidden'
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={image}
                alt={`Project Image ${index + 1}`}
                width={400}
                height={400}
                className='w-full h-auto object-cover'
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((src) => ({ src }))}
        index={currentIndex}
      />
    </motion.section>
  );
}
