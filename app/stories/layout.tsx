import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'In-Depth Stories - ProSports',
  description: 'Long-form features, athlete profiles, historical analyses, and investigative journalism from the world of sports.',
  keywords: ['sports features', 'athlete profiles', 'sports analysis', 'investigative journalism', 'long-form journalism'],
  ogImage: 'https://sportsoffer.shop/og-stories.jpg',
  ogType: 'website',
  url: '/stories',
  author: 'ProSports Team',
});

export default function StoriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
