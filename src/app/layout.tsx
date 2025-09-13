import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WhollyHer - Redefining Womanhood Through Healing, Purpose, and Faith',
  description: 'A sacred space for women becoming whole in heart, clear in purpose, and rooted in truth. We prioritize healing, spiritual clarity, emotional strength, and divine alignment.',
  keywords: 'women empowerment, healing, faith, purpose, community, spiritual growth, women support',
  authors: [{ name: 'WhollyHer Team' }],
  creator: 'WhollyHer',
  publisher: 'WhollyHer',
  metadataBase: new URL('https://whollyher.com'),
  openGraph: {
    title: 'WhollyHer - Redefining Womanhood',
    description: 'A sacred space for women becoming whole in heart, clear in purpose, and rooted in truth.',
    url: 'https://whollyher.com',
    siteName: 'WhollyHer',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WhollyHer - Empowering Women',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhollyHer - Redefining Womanhood',
    description: 'A sacred space for women becoming whole in heart, clear in purpose, and rooted in truth.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
