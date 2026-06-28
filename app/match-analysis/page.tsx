'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function MatchAnalysisPage() {
  const recentMatches = [
    {
      id: 1,
      title: 'Championship Finals: Tactical Breakdown',
      sport: 'Basketball',
      date: '2025-06-20',
      excerpt: 'Complete tactical analysis of the championship-winning strategy that led to victory.',
    },
    {
      id: 2,
      title: 'Record-Breaking Performance Analysis',
      sport: 'Football',
      date: '2025-06-18',
      excerpt: 'Breaking down how the athlete achieved a historic performance record.',
    },
    {
      id: 3,
      title: 'Grand Slam Semifinals: Technique Review',
      sport: 'Tennis',
      date: '2025-06-16',
      excerpt: 'Detailed analysis of the key moments and techniques in this thrilling match.',
    },
    {
      id: 4,
      title: 'International Tournament Finals Report',
      sport: 'Football',
      date: '2025-06-10',
      excerpt: 'Comprehensive breakdown of the tournament final with tactical insights.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/20 to-accent/20 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Match Analysis</h1>
            <p className="text-xl text-muted-foreground">
              Deep-dive tactical breakdowns and expert analysis of today's biggest matchups
            </p>
          </div>
        </section>

        {/* Analysis Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-2">Recent Match Analyses</h2>
              <p className="text-muted-foreground text-lg">
                Professional tactical breakdowns and performance analysis from our expert team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentMatches.map((match) => (
                <div key={match.id} className="bg-card rounded-lg p-6 hover:shadow-lg transition">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                      {match.sport}
                    </span>
                    <span className="text-sm text-muted-foreground">{match.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{match.title}</h3>
                  <p className="text-muted-foreground mb-6">{match.excerpt}</p>
                  <Link href={`/article/${match.id}`} className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition">
                    Read Analysis <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analysis Types */}
        <section className="py-16 bg-card">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Types of Analysis We Provide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Tactical Breakdown</h3>
                <p className="text-muted-foreground">
                  Detailed analysis of team strategies, formations, and key tactical decisions that influenced match outcomes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Player Performance</h3>
                <p className="text-muted-foreground">
                  Individual player evaluations including statistics, technique, and impact on team performance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Statistical Analysis</h3>
                <p className="text-muted-foreground">
                  Advanced metrics and statistical insights that reveal performance patterns and competitive advantages.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Turning Points</h3>
                <p className="text-muted-foreground">
                  Identification and analysis of crucial moments that determined match outcomes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Injury Impact</h3>
                <p className="text-muted-foreground">
                  Analysis of how player absences and injuries influenced team strategy and performance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Future Outlook</h3>
                <p className="text-muted-foreground">
                  Implications of match results for upcoming competitions and season trajectories.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Our Analysis Methodology</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Expert Review</h3>
                <p className="text-lg text-muted-foreground">
                  Our analysts review multiple angles and camera perspectives to identify key moments and tactical nuances.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Statistical Validation</h3>
                <p className="text-lg text-muted-foreground">
                  Performance metrics and official statistics validate observations and support analytical conclusions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Professional Experience</h3>
                <p className="text-lg text-muted-foreground">
                  Analysis draws from years of professional sports experience and insider knowledge of competitive dynamics.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Unbiased Assessment</h3>
                <p className="text-lg text-muted-foreground">
                  Analysis focuses on competitive factors and technical elements rather than team loyalty or fan preference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Get Expert Analysis Delivered</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Subscribe to our newsletter for in-depth match analysis and exclusive insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 bg-background text-foreground rounded border border-border focus:outline-none focus:border-primary transition"
              />
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded font-bold hover:bg-primary/90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
