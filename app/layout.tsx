import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { SmoothScrollProvider } from "@/components/providers";
import { ContactModalProvider } from "@/components/providers/contact-modal-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.melwyn.co.in'),
  title: {
    default: 'Melwyn Titus | Full Stack Developer & Product Engineer',
    template: '%s | Melwyn Titus'
  },
  description: 'Full Stack Developer & Product Engineer specializing in modern web technologies, scalable applications, and user-centric products. Expertise in React, Next.js, Node.js, and cloud architecture.',
  keywords: [
    'Full Stack Developer',
    'Product Engineer',
    'React Developer',
    'Next.js',
    'Node.js',
    'Web Development',
    'Melwyn Titus',
    'Software Engineer',
    'JavaScript',
    'TypeScript',
    'Portfolio'
  ],
  authors: [{ name: 'Melwyn Titus', url: 'https://www.melwyn.co.in' }],
  creator: 'Melwyn Titus',
  publisher: 'Melwyn Titus',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.melwyn.co.in',
    title: 'Melwyn Titus | Full Stack Developer & Product Engineer',
    description: 'Full Stack Developer & Product Engineer specializing in modern web technologies and scalable applications.',
    siteName: 'Melwyn Titus Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Melwyn Titus - Full Stack Developer & Product Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Melwyn Titus | Full Stack Developer & Product Engineer',
    description: 'Full Stack Developer & Product Engineer specializing in modern web technologies and scalable applications.',
    images: ['/twitter-image.png'],
    creator: '@melwyntitus',
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon.png',
      },
    ],
  },
  manifest: '/manifest.json',
};

import { PersonSchema, WebsiteSchema } from "@/app/components/structured-data";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative`}
        suppressHydrationWarning={true}
      >
        <PersonSchema />
        <WebsiteSchema />
        <SmoothScrollProvider>
          <ContactModalProvider>{children}</ContactModalProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
