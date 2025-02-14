import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'My Project',
  description: 'Página web escalable con Next.js 15 y Tailwind',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className='antialiased bg-secondary text-accent'>{children}</body>
    </html>
  );
}
