import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Blog',
  description:
    'The latest sports stories, analysis, and opinion pieces from ProSports, covering football, basketball, tennis, cricket and more.',
  keywords: ['sports blog', 'sports analysis', 'sports opinion', 'sports articles'],
  ogType: 'website',
  url: '/blog',
  author: 'ProSports Team',
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
