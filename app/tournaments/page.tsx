'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Calendar, Trophy, Users } from 'lucide-react';

export default function TournamentsPage() {
  const tournaments = [
    {
      id: 1,
      name: 'FIFA World Cup',
      sport: 'Football',
      format: 'Group Stage + Knockout',
      frequency: 'Every 4 years',
      about: 'The biggest event in football, contested by national teams that qualify through regional competitions.',
    },
    {
      id: 2,
      name: 'The Olympic Games',
      sport: 'Multi-Sport',
      format: 'Varies by event',
      frequency: 'Every 4 years',
      about: 'The foremost multi-sport competition in the world, bringing together athletes across dozens of disciplines.',
    },
    {
      id: 3,
      name: 'The Tennis Grand Slams',
      sport: 'Tennis',
      format: 'Single Elimination',
      frequency: 'Four majors each year',
      about: 'The Australian Open, French Open, Wimbledon, and US Open, the four most prestigious tournaments in tennis.',
    },
    {
      id: 4,
      name: 'The Cricket World Cup',
      sport: 'Cricket',
      format: 'Group Stage + Knockout',
      frequency: 'Every 4 years',
      about: 'The premier one-day international tournament, crowning the world champions of cricket.',
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
              <h2 className="text-3xl font-bold mb-2">The World&apos;s Premier Competitions</h2>
              <p className="text-muted-foreground text-lg">
                A look at some of the most important tournaments in global sport and how they work
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
                        <p className="text-sm text-muted-foreground">Frequency</p>
                        <p className="font-semibold">{tournament.frequency}</p>
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
                      <p className="text-sm text-muted-foreground mb-1">About</p>
                      <p className="text-muted-foreground">{tournament.about}</p>
                    </div>
                  </div>
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
            <h2 className="text-3xl font-bold mb-6">Read More Tournament Coverage</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our in-depth guides and articles explaining how the world&apos;s biggest
              competitions are structured and decided.
            </p>
            <a href="/news" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded font-bold hover:bg-primary/90 transition">
              Read Our Articles
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
