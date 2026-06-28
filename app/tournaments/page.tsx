'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Calendar, Trophy, Users } from 'lucide-react';

export default function TournamentsPage() {
  const tournaments = [
    {
      id: 1,
      name: 'Championship Series Finals',
      sport: 'Basketball',
      format: 'Best-of-7 Series',
      prizePool: '$50 Million',
      dates: 'June - August 2025',
    },
    {
      id: 2,
      name: 'Grand Slam Tournament',
      sport: 'Tennis',
      format: 'Single Elimination',
      prizePool: '$75 Million',
      dates: 'Throughout Year',
    },
    {
      id: 3,
      name: 'International Cup',
      sport: 'Soccer',
      format: 'Group Stage + Knockout',
      prizePool: '$100 Million',
      dates: 'June-July 2025',
    },
    {
      id: 4,
      name: 'Professional League',
      sport: 'Football',
      format: '16-Week Regular Season',
      prizePool: '$40 Million',
      dates: 'September - February',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/20 to-accent/20 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Major Tournaments</h1>
            <p className="text-xl text-muted-foreground">
              Complete coverage of the world's biggest sporting events and competitions
            </p>
          </div>
        </section>

        {/* Upcoming Tournaments */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-2">Featured Tournaments</h2>
              <p className="text-muted-foreground text-lg">
                Upcoming major events you won't want to miss
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tournaments.map((tournament) => (
                <div key={tournament.id} className="bg-card rounded-lg p-6 hover:shadow-lg transition border border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded text-sm font-semibold mb-2">
                        {tournament.sport}
                      </span>
                      <h3 className="text-2xl font-bold">{tournament.name}</h3>
                    </div>
                    <Trophy className="w-8 h-8 text-primary flex-shrink-0" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">Dates</p>
                        <p className="font-semibold">{tournament.dates}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">Format</p>
                        <p className="font-semibold">{tournament.format}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Prize Pool</p>
                      <p className="text-xl font-bold text-primary">{tournament.prizePool}</p>
                    </div>
                  </div>

                  <button className="w-full mt-6 px-4 py-2 bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/90 transition">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tournament Types */}
        <section className="py-16 bg-card">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Types of Tournaments</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Single Elimination</h3>
                <p className="text-muted-foreground text-lg">
                  Losers are eliminated immediately. Winners advance until a champion is crowned.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Round Robin</h3>
                <p className="text-muted-foreground text-lg">
                  All competitors play each other once. Winner determined by accumulated points.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Group Stage</h3>
                <p className="text-muted-foreground text-lg">
                  Competitors divided into groups with knockout stages following group play.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Double Elimination</h3>
                <p className="text-muted-foreground text-lg">
                  Teams must lose twice to be eliminated, providing more opportunities to advance.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">League Format</h3>
                <p className="text-muted-foreground text-lg">
                  Extended regular season followed by playoffs for championship determination.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Seeding System</h3>
                <p className="text-muted-foreground text-lg">
                  Top-ranked competitors receive favorable bracket placements and rest advantages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tournament Formats */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Understanding Tournament Formats</h2>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-3">Seeding and Rankings</h3>
                <p className="text-lg text-muted-foreground">
                  Tournaments use player rankings to determine competitive matchups. Higher seeded players receive advantages like favorable draws and potential byes in early rounds.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-3">Bracket Structures</h3>
                <p className="text-lg text-muted-foreground">
                  Tournament brackets are designed to determine champions efficiently while providing fair opportunities. Different formats serve different purposes and sports.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-3">Tiebreakers</h3>
                <p className="text-lg text-muted-foreground">
                  Complex tiebreaker procedures ensure consistency and fairness when teams have equal records or performances in group stages.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-3">Qualification Systems</h3>
                <p className="text-lg text-muted-foreground">
                  Many major tournaments require qualification events. Athletes and teams must meet specific criteria to earn tournament entry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Historical Records */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Tournament Milestones</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-lg">Multiple Championships</p>
                  <p className="text-muted-foreground">Rare achievements when competitors win same tournament multiple times</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-lg">Back-to-Back Titles</p>
                  <p className="text-muted-foreground">Consecutive victories demonstrating sustained excellence</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-lg">Grand Slam Wins</p>
                  <p className="text-muted-foreground">Winning all major tournaments in same year or season</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated on Tournament News</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get live updates, schedules, and results from all major tournaments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 bg-card text-foreground rounded border border-border focus:outline-none focus:border-primary transition"
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
