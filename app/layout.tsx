import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sportsoffer.shop"),
  title: {
    default: "ProSports - Sports News, Analysis & Guides",
    template: "%s | ProSports",
  },
  description:
    "ProSports is your source for clear sports news, expert analysis, and beginner-friendly guides across football, basketball, tennis and more.",
  keywords: [
    "sports news",
    "basketball",
    "football",
    "tennis",
    "sports analysis",
    "sports guides",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ProSports - Sports News, Analysis & Guides",
    description:
      "Clear sports news, expert analysis, and beginner-friendly guides across all major sports.",
    url: "https://sportsoffer.shop",
    type: "website",
    siteName: "ProSports",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProSports - Sports News, Analysis & Guides",
    description:
      "Clear sports news, expert analysis, and beginner-friendly guides across all major sports.",
    creator: "@prosports",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a1a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased bg-background">
        {/* Google AdSense */}
        <Script
          id="google-adsense"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6755991999371634"
          crossOrigin="anonymous"
        />

        {children}

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
