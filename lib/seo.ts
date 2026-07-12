import { Metadata } from 'next';

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  url: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

export function generateMetadata(seo: SEOMetadata): Metadata {
  const baseUrl = 'https://sportsoffer.shop';
  const url = `${baseUrl}${seo.url}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: url,
      type: (seo.ogType as 'website' | 'article') || 'website',
      images: seo.ogImage
        ? [
            {
              url: seo.ogImage,
              width: 1200,
              height: 630,
              alt: seo.title,
            },
          ]
        : [],
      siteName: 'ProSports',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: seo.ogImage ? [seo.ogImage] : [],
      creator: '@prosports',
    },
    authors: seo.author ? [{ name: seo.author }] : [],
    ...(seo.publishedDate && {
      publishedTime: seo.publishedDate,
    }),
    ...(seo.modifiedDate && {
      modifiedTime: seo.modifiedDate,
    }),
  };
}

export function generateJsonLd(type: string, data: any): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  });
}

export const SITE_NAME = 'ProSports';
export const SITE_URL = 'https://sportsoffer.shop';
export const SITE_DESCRIPTION = 'Your go-to source for breaking sports news, expert analysis, and exclusive coverage of all major sports.';
