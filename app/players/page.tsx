'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Award, TrendingUp, Globe } from 'lucide-react';

export default function PlayersPage() {
  const evaluationFactors = [
    {
      title: 'Statistical Output',
      sport: 'All Sports',
      summary: 'Measurable production',
      detail:
        'Numbers such as points, goals, assists, or wickets give an objective record of what a player contributes. But raw totals must be read in context: era, level of competition, and role all shape what the numbers mean.',
    },
    {
      title: 'Efficiency & Consistency',
      sport: 'All Sports',
      summary: 'Doing it repeatedly',
      detail:
        'A great player performs at a high level not once but season after season. Efficiency metrics, which measure output relative to opportunities, help separate players who produce sustainably from those who simply take a high volume of attempts.',
    },
    {
      title: 'Impact on Winning',
      sport: 'All Sports',
      summary: 'Beyond the box score',
      detail:
        'The hardest thing to measure is how much a player helps their team win. Defence, leadership, decision-making, and the ability to raise a level in decisive moments often matter as much as headline statistics.',
    },
    {
      title: 'Longevity & Legacy',
      sport: 'All Sports',
      summary: 'The test of time',
      detail:
        'Careers are judged over their full span. Sustained excellence, influence on how the game is played, and the respect of peers all feed into how history remembers a player long after they retire.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/20 to-accent/20 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Understanding Elite Athletes</h1>
            <p className="text-xl text-muted-foreground">
              A guide to how players are evaluated, what their statistics mean, and
              what separates good professionals from all-time greats.
            </p>
          </div>
        </section>

        {/* How Players Are Evaluated */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-2">How Players Are Evaluated</h2>
              <p className="text-muted-foreground text-lg">
                Comparing athletes is one of sport&apos;s great debates. These are the
                factors analysts, coaches, and fans weigh when judging a player&apos;s quality.
              </p>
            </div>

            <div className="space-y-6">
              {evaluationFactors.map((factor, i) => (
                <div key={i} className="bg-card rounded-lg p-6 hover:shadow-lg transition">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{i + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className="text-2xl font-bold mb-2">{factor.title}</h3>
                        <div className="flex gap-4 flex-wrap">
                          <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded text-sm font-semibold">
                            {factor.sport}
                          </span>
                          <span className="text-muted-foreground font-semibold">{factor.summary}</span>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground leading-8">{factor.detail}</p>
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
            <h2 className="text-3xl font-bold mb-12 text-center">Stages of a Playing Career</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <TrendingUp className="w-16 h-16 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Rising Stars</h3>
                <p className="text-muted-foreground text-lg">
                  Young athletes emerging from academies and development systems, earning
                  their first professional opportunities and beginning to establish themselves.
                </p>
              </div>
              <div className="text-center">
                <Award className="w-16 h-16 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Peak Performers</h3>
                <p className="text-muted-foreground text-lg">
                  Established professionals in their prime, competing for major honours and
                  producing the consistent, high-level performances that define a career.
                </p>
              </div>
              <div className="text-center">
                <Globe className="w-16 h-16 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Enduring Legends</h3>
                <p className="text-muted-foreground text-lg">
                  Athletes whose sustained excellence and influence extend beyond results,
                  shaping how their sport is played and inspiring future generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Player Statistics */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Understanding Player Statistics</h2>
            <p className="text-muted-foreground text-lg mb-12">
              Every sport has its own language of numbers. Here is what some of the most
              common metrics actually measure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Basketball Metrics</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Points Per Game (PPG)</p>
                    <p className="text-muted-foreground">Average points a player scores per game.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Assists Per Game (APG)</p>
                    <p className="text-muted-foreground">Average passes leading directly to a teammate&apos;s score.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Rebounds Per Game (RPG)</p>
                    <p className="text-muted-foreground">Average missed shots a player recovers per game.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Football (Soccer) Metrics</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Goals & Assists</p>
                    <p className="text-muted-foreground">Direct contributions to scoring, the headline attacking numbers.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Expected Goals (xG)</p>
                    <p className="text-muted-foreground">A modern metric estimating the quality of chances created or taken.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Pass Completion %</p>
                    <p className="text-muted-foreground">The share of a player&apos;s passes that reach a teammate.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Milestones */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Milestones That Define a Career</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-2xl font-bold mb-2">Championship Victories</h3>
                <p className="text-lg text-muted-foreground">
                  Winning a major title is the goal that shapes most careers, and success on the
                  biggest stage often defines how a player is remembered.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-2xl font-bold mb-2">Records Broken</h3>
                <p className="text-lg text-muted-foreground">
                  Setting or breaking a long-standing record places a player in the historical
                  record of their sport and marks a rare level of achievement.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-2xl font-bold mb-2">Hall of Fame Recognition</h3>
                <p className="text-lg text-muted-foreground">
                  Induction into a sport&apos;s hall of fame is a lasting honour, reserved for those
                  whose careers had exceptional and lasting significance.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-2xl font-bold mb-2">Lasting Influence</h3>
                <p className="text-lg text-muted-foreground">
                  Some athletes change how their sport is played or perceived, an influence that
                  endures long after they have retired.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Explore More Sports Analysis</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Read our in-depth guides and explainers covering players, tactics, and the
              stories behind the games across every major sport.
            </p>
            <a href="/news" className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/90 transition">
              Read Our Articles
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
