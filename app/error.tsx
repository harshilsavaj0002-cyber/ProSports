'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="text-8xl font-bold text-red-500 mb-4">500</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Server Error</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Something went wrong on our end. Our team has been notified and is working to fix the issue.
            </p>
          </div>

          <div className="space-y-4 mb-12">
            <p className="text-lg text-muted-foreground">
              In the meantime, you can:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={reset}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition"
              >
                Try Again
              </button>
              <Link href="/" className="px-6 py-3 bg-card text-foreground border border-border rounded-lg font-bold hover:bg-card/80 transition">
                Back to Home
              </Link>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 mb-8">
            <p className="text-sm text-muted-foreground mb-4">
              Error ID: {error.digest || 'unknown'}
            </p>
            {error.message && (
              <p className="text-sm font-mono text-muted-foreground">
                {error.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/news" className="p-6 bg-card rounded-lg hover:shadow-lg transition">
              <div className="text-3xl mb-2">📰</div>
              <h3 className="font-bold mb-2">Latest News</h3>
              <p className="text-sm text-muted-foreground">Check out the latest sports updates</p>
            </Link>
            <Link href="/players" className="p-6 bg-card rounded-lg hover:shadow-lg transition">
              <div className="text-3xl mb-2">⭐</div>
              <h3 className="font-bold mb-2">Players</h3>
              <p className="text-sm text-muted-foreground">Explore player profiles and stats</p>
            </Link>
            <Link href="/contact" className="p-6 bg-card rounded-lg hover:shadow-lg transition">
              <div className="text-3xl mb-2">💬</div>
              <h3 className="font-bold mb-2">Contact Us</h3>
              <p className="text-sm text-muted-foreground">Report this issue to our team</p>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
