import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Major Tournaments',
  description:
    'A guide to the world\'s biggest sporting events — the FIFA World Cup, the Olympics, the tennis Grand Slams, the Cricket World Cup and more.',
  keywords: ['sports tournaments', 'world cup', 'olympics', 'grand slams', 'sports competitions'],
  ogType: 'website',
  url: '/tournaments',
  author: 'ProSports Team',
});

export default function TournamentsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
