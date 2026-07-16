import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Understanding Elite Athletes',
  description:
    'How players are evaluated, what their statistics mean, and what separates good professionals from all-time greats across every major sport.',
  keywords: ['athlete evaluation', 'player statistics', 'sports greats', 'player analysis'],
  ogType: 'website',
  url: '/players',
  author: 'ProSports Team',
});

export default function PlayersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
