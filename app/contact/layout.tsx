import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Contact Us - ProSports',
  description: 'Get in touch with ProSports. Send us story tips, partnership inquiries, or advertising requests. We&apos;re here to help.',
  keywords: ['contact', 'story tips', 'partnership', 'advertising', 'support'],
  ogImage: 'https://sportsoffer.shop/og-contact.jpg',
  ogType: 'website',
  url: '/contact',
  author: 'ProSports Team',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
