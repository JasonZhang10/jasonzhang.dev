import { Geist, Geist_Mono } from 'next/font/google';
import ThemeProvider from '@/components/basic/ThemeProvider';
import LayoutStructure from '@/app/LayoutStructure';
import './globals.css';

const siteMetaData = require('@/data/siteMetaData.js');

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export async function generateMetadata() {
  return {
    metadataBase: new URL(siteMetaData.siteUrl),
    title: {
      default: siteMetaData.title,
      template: `%s | ${siteMetaData.title}`,
    },
    description: siteMetaData.description,
    openGraph: {
      title: siteMetaData.title,
      description: siteMetaData.description,
      url: './',
      siteName: siteMetaData.title,
      images: [siteMetaData.socialBanner],
      locale: siteMetaData.locale,
      type: 'website',
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
  };
}

export default function RootLayout({ children }) {
  return (
    <html
      lang={siteMetaData.locale}
      className={`${geistSans.variable} ${geistMono.variable}  scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="pl-[calc(100vw-100%)] text-black antialiased bg-[url('/grid-black.svg')] dark:bg-zinc-800 dark:bg-[url('/grid.svg')] bg-top bg-repeat dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system">
          <LayoutStructure className="bg-white dark:bg-zinc-800 dark:border-x dark:border-x-zinc-100/20">
            {children}
          </LayoutStructure>
        </ThemeProvider>
      </body>
    </html>
  );
}
