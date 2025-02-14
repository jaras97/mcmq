// 'use client';

// import Image from 'next/image';

// export default function Header() {
//   return (
//     <header className=' w-full bg-white shadow-md py-4 px-8 flex justify-between items-center z-50'>
//       <div>
//         <Image
//           src='/logo/LOGO_MCMQ_RO.svg'
//           alt='Logo'
//           width={70}
//           height={50}
//           unoptimized
//         />
//       </div>
//       <nav>
//         <ul className='flex space-x-6 text-accent'>
//           <li className='font-semibold'>HOME</li>
//           <li className='hover:text-primary transition-colors'>SERVICIOS</li>
//           <li className='hover:text-primary transition-colors'>PROYECTOS</li>
//           <li className='hover:text-primary transition-colors'>NOSOTROS</li>
//         </ul>
//       </nav>
//       <button className='bg-primary text-white px-4 py-2 rounded-full font-semibold hover:opacity-80 transition-opacity'>
//         AGENDA TU LLAMADA
//       </button>
//     </header>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-md py-2' : 'py-4'
      } px-4 md:px-8 flex justify-between items-center z-50`}
    >
      <div className='h-16 w-16'>
        <Logo color='text-primary' />
      </div>
      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden'
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:static md:h-auto md:w-auto md:shadow-none md:translate-x-0`}
      >
        <ul className='flex flex-col h-full justify-center space-y-6 p-8 md:flex-row md:space-y-0 md:space-x-6 md:p-0'>
          <li className='font-semibold text-accent'>
            <Link href='/'>HOME</Link>
          </li>
          <li className='hover:text-primary transition-colors'>
            <Link href='/servicios'>SERVICIOS</Link>
          </li>
          <li className='hover:text-primary transition-colors'>
            <Link href='/proyectos'>PROYECTOS</Link>
          </li>
          <li className='hover:text-primary transition-colors'>
            <Link href='/nosotros'>NOSOTROS</Link>
          </li>
        </ul>
      </nav>
      <div className='flex items-center space-x-4'>
        <button className='hidden md:block bg-primary text-white px-4 py-2 rounded-full font-semibold hover:opacity-80 transition-opacity'>
          AGENDA TU LLAMADA
        </button>
        <button
          className='md:hidden text-accent z-50'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
