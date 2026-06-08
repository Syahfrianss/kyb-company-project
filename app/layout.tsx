import { Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  icons: {
    icon: '/images/logkyb.png',
  },
  title: {
    default: 'Karya Babatan | Kontraktor Sipil Terpercaya',
    template: '%s | Karya Babatan',
  },
  description:
    'CV Karya Babatan - Kontraktor sipil terpercaya di Indonesia. Mewujudkan visi arsitektur Anda dengan presisi tinggi. Konstruksi sipil, desain arsitektur, MEP, dan renovasi.',
  keywords: ['kontraktor', 'konstruksi sipil', 'arsitektur', 'Surabaya', 'Malang', 'Jawa Timur', 'Karya Babatan'],
  authors: [{ name: 'CV Karya Babatan' }],
  openGraph: {
    title: 'Karya Babatan | Kontraktor Sipil Terpercaya',
    description: 'Mewujudkan visi arsitektur Anda dengan presisi tinggi.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${manrope.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="blueprint-grid bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary-fixed">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
