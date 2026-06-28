'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Award, TrendingUp, Globe } from 'lucide-react';

export default function PlayersPage() {
  const topPlayers = [
    {
      rank: 1,
      name: 'Elite Basketball Star',
      sport: 'Basketball',
      position: 'Shooting Guard',
      achievements: '3× Champion, MVP Award Winner',
      stats: '28.5 PPG | 6.2 APG | 4.8 RPG',
    },
    {
      rank: 2,
      name: 'Football Legend',
      sport: 'Football',
      position: 'Quarterback',
      achievements: '2× Super Bowl Champion, 5× Pro Bowl',
      stats: '312 YDS/Game | 68% Completion',
    },
    {
      rank: 3,
      name: 'Tennis Dominant',
      sport: 'Tennis',
      position: 'Competing Singles',
      achievements: '18 Grand Slams, World #1 Ranking',
      stats: '245 consecutive matches, 89% Win Rate',
    },
    {
      rank: 4,
      name: 'Baseball Record Holder',
      sport: 'Baseball',
      position: 'Outfielder',
      achievements: 'Record Hitting Streak, 3× MVP',
      stats: '45-game streak, .395 AVG',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/20 to-accent/20 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Elite Players Database</h1>
            <p className="text-xl text-muted-foreground">
              Profiles, stats, and insights on the world's greatest athletes
            </p>
          </div>
        </section>

        {/* Top Players */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-2">Top Ranked Players</h2>
              <p className="text-muted-foreground text-lg">
                Leading athletes across all major sports ranked by performance and impact
              </p>
            </div>

            <div className="space-y-6">
              {topPlayers.map((player) => (
                <div key={player.rank} className="bg-card rounded-lg p-6 hover:shadow-lg transition">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">#{player.rank}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{player.name}</h3>
                          <div className="flex gap-4 flex-wrap">
                            <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded text-sm font-semibold">
                              {player.sport}
                            </span>
                            <span className="text-muted-foreground font-semibold">{player.position}</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Major Achievements</p>
                          <p className="text-lg font-semibold">{player.achievements}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Season Stats</p>
                          <p className="text-lg font-semibold">{player.stats}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Player Development */}
        <section className="py-16 bg-card">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Player Development Levels</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <TrendingUp className="w-16 h-16 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Rising Stars</h3>
                <p className="text-muted-foreground text-lg">
                  Young talented athletes making their mark and establishing themselves at professional levels.
                </p>
              </div>
              <div className="text-center">
                <Award className="w-16 h-16 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Elite Performers</h3>
                <p className="text-muted-foreground text-lg">
                  Established superstars consistently delivering championship-caliber performances.
                </p>
              </div>
              <div className="text-center">
                <Globe className="w-16 h-16 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Global Icons</h3>
                <p className="text-muted-foreground text-lg">
                  Worldwide legends who have transcended sports to become cultural icons.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Player Statistics */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">Understanding Player Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Basketball Metrics</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Points Per Game (PPG)</p>
                    <p className="text-muted-foreground">Average points scored per game</p>
                  </div>
                  <div>
                    <p className="font-semibold">Assists Per Game (APG)</p>
                    <p className="text-muted-foreground">Average assists per game</p>
                  </div>
                  <div>
                    <p className="font-semibold">Rebounds Per Game (RPG)</p>
                    <p className="text-muted-foreground">Average rebounds per game</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Football Metrics</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Passing Yards Per Game</p>
                    <p className="text-muted-foreground">Average yards gained through passes</p>
                  </div>
                  <div>
                    <p className="font-semibold">Completion Percentage</p>
                    <p className="text-muted-foreground">Percentage of successful pass attempts</p>
                  </div>
                  <div>
                    <p className="font-semibold">Touchdowns</p>
                    <p className="text-muted-foreground">Scoring plays resulting from player action</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Milestones */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Notable Career Milestones</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-2xl font-bold mb-2">Championship Victories</h3>
                <p className="text-lg text-muted-foreground">
                  Players compete throughout careers to achieve the ultimate goal of championship titles
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-2xl font-bold mb-2">Record Achievements</h3>
                <p className="text-lg text-muted-foreground">
                  Breaking previously established records represents historical significance
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-2xl font-bold mb-2">Hall of Fame Induction</h3>
                <p className="text-lg text-muted-foreground">
                  Recognition of lifetime achievements through induction into prestigious halls of fame
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-2xl font-bold mb-2">International Recognition</h3>
                <p className="text-lg text-muted-foreground">
                  Achievement of global icon status through exceptional performances and cultural impact
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Follow Your Favorite Players</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Subscribe to get exclusive player profiles, career updates, and performance insights
            </p>
            <a href="/contact" className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/90 transition">
              Subscribe Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
