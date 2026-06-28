import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'ProSports - Premier Sports News & Analysis',
  description: 'Your go-to source for breaking sports news, expert analysis, and exclusive coverage of all major sports.',
  keywords: ['sports news', 'basketball', 'football', 'tennis', 'soccer', 'sports analysis', 'breaking news', 'sports coverage'],
  metadataBase: new URL('https://prosports.com'),
  alternates: {
    canonical: 'https://prosports.com',
  },
  openGraph: {
    title: 'ProSports - Premier Sports News & Analysis',
    description: 'Your go-to source for breaking sports news, expert analysis, and exclusive coverage of all major sports.',
    url: 'https://prosports.com',
    type: 'website',
    images: [
      {
        url: 'https://prosports.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ProSports - Sports News and Analysis',
      },
    ],
    siteName: 'ProSports',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProSports - Premier Sports News & Analysis',
    description: 'Your go-to source for breaking sports news, expert analysis, and exclusive coverage of all major sports.',
    images: ['https://prosports.com/og-image.jpg'],
    creator: '@prosports',
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
