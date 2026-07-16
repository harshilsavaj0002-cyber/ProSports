import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Match Analysis',
  description:
    'How to read a game like an analyst — tactics, key moments, statistics, and the ideas behind winning and losing performances.',
  keywords: ['match analysis', 'sports tactics', 'game analysis', 'sports strategy'],
  ogType: 'website',
  url: '/match-analysis',
  author: 'ProSports Team',
});

export default function MatchAnalysisLayout({ children }: { children: React.ReactNode }) {
  return children;
}
