import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'About Us',
  description:
    'Learn about ProSports — who we are, what we cover, and our commitment to clear, accurate sports journalism and guides.',
  keywords: ['about prosports', 'sports website', 'sports journalism', 'our team'],
  ogType: 'website',
  url: '/about',
  author: 'ProSports Team',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
