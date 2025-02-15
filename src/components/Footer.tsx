'use client';

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className='bg-gray-100 py-8 border-t border-primary'>
      <div className='container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left'>
        {/* Logo y Derechos */}
        <div className='flex flex-col items-center md:items-start'>
          <div className='h-20 mb-2'>
            <Logo color='text-primary' />
          </div>
          <p className='text-gray-600'>
            © {new Date().getFullYear()} | All Rights Reserved
          </p>
        </div>

        {/* Menú rápido */}
        <div className='flex flex-col items-center md:items-start'>
          <h3 className='text-lg font-semibold text-accent mb-2'>
            Menú rápido
          </h3>
          <ul className='text-gray-700 space-y-1'>
            <li>
              <Link
                href='#hero'
                className='hover:text-primary transition-colors'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='#services'
                className='hover:text-primary transition-colors'
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href='#projects'
                className='hover:text-primary transition-colors'
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                href='#about'
                className='hover:text-primary transition-colors'
              >
                Nosotros
              </Link>
            </li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div className='flex flex-col items-center md:items-start'>
          <h3 className='text-lg font-semibold text-accent mb-2'>Síguenos</h3>
          <div className='flex space-x-4'>
            <Link
              href='https://facebook.com'
              target='_blank'
              className='text-gray-700 hover:text-primary transition-colors'
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href='https://instagram.com'
              target='_blank'
              className='text-gray-700 hover:text-primary transition-colors'
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href='https://pinterest.com'
              target='_blank'
              className='text-gray-700 hover:text-primary transition-colors'
            >
              <FaPinterestP size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
