import type { Metadata } from 'next';
import { Figtree, PT_Serif } from 'next/font/google';
import './globals.css';

const figtree = Figtree({
  variable: '--font-kitsch-sans',
  subsets: ['latin'],
});

const ptSerif = PT_Serif({
  variable: '--font-kitsch-display',
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Kitsch Marketing Operations + Chief of Staff — Demo',
  description:
    'A public-data marketing operations demo that turns observable Kitsch signals into executive questions, launch readiness and accountable decisions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${ptSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
