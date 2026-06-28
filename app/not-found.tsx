'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="text-8xl font-bold text-primary mb-4">404</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
            </p>
          </div>

          <div className="space-y-4 mb-12">
            <p className="text-lg text-muted-foreground">
              Here are some helpful links instead:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition">
                Back to Home
              </Link>
              <Link href="/news" className="px-6 py-3 bg-card text-foreground border border-border rounded-lg font-bold hover:bg-card/80 transition">
                Latest News
              </Link>
              <Link href="/contact" className="px-6 py-3 bg-card text-foreground border border-border rounded-lg font-bold hover:bg-card/80 transition">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/stories" className="p-6 bg-card rounded-lg hover:shadow-lg transition">
              <div className="text-3xl mb-2">📚</div>
              <h3 className="font-bold mb-2">Latest Stories</h3>
              <p className="text-sm text-muted-foreground">Explore in-depth sports features and analysis</p>
            </Link>
            <Link href="/match-analysis" className="p-6 bg-card rounded-lg hover:shadow-lg transition">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-bold mb-2">Match Analysis</h3>
              <p className="text-sm text-muted-foreground">Expert tactical breakdown and statistics</p>
            </Link>
            <Link href="/tournaments" className="p-6 bg-card rounded-lg hover:shadow-lg transition">
              <div className="text-3xl mb-2">🏆</div>
              <h3 className="font-bold mb-2">Tournaments</h3>
              <p className="text-sm text-muted-foreground">Major sporting events and competitions</p>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
