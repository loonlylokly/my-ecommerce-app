import { Header } from '@/widgets/header/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-commerce Product Listing',
  description: 'Browse our amazing products'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <main className='container mx-auto px-4 pt-20'>{children}</main>
      </body>
    </html>
  );
}
