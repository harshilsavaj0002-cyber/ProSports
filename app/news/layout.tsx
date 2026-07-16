import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Latest News',
  description: 'Breaking sports news, real-time updates, and in-depth coverage of the biggest sports stories from around the world.',
  keywords: ['sports news', 'breaking news', 'basketball news', 'football news', 'tennis news', 'real-time updates'],
  ogImage: 'https://sportsoffer.shop/og-news.jpg',
  ogType: 'website',
  url: '/news',
  author: 'ProSports Team',
});

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
