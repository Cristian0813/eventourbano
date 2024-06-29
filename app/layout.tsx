import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/style/globals.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Urban Event',
  description: 'Aquí encontraras toda clase de eventos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <body className={`bg-gray-100 text-black ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
