'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { ArticleCard } from '@/components/article-card';
import { getFeaturedArticles, getAllArticles, categories } from '@/lib/articles';
import { OrganizationSchema, WebSiteSchema } from '@/components/schema-markup';
import Link from 'next/link';
import { TrendingUp } from 'lucide-react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const featured = getFeaturedArticles(1)[0];
  const latestArticles = getAllArticles().slice(0, 8);
  const trendingArticles = getAllArticles().slice(0, 5);
  const filteredArticles = selectedCategory === 'All'
    ? latestArticles
    : latestArticles.filter((article) => article.category === selectedCategory);
  const categoryStats = ['Basketball', 'Football', 'Tennis'].map((category) => ({
    category,
    count: latestArticles.filter((article) => article.category === category).length,
  }));

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <OrganizationSchema />
      <WebSiteSchema />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        {featured && <Hero article={featured} />}


        {/* About Website Section */}
<section className="py-20 bg-background border-b border-border">
  <div className="max-w-5xl mx-auto px-4">
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold mb-4">
        Your Ultimate Sports News Destination
      </h2>
      <p className="text-lg text-muted-foreground">
        Stay informed with breaking sports news, match reports,
        player updates, tournament coverage, and expert analysis.
      </p>
    </div>

    <div className="space-y-6 text-muted-foreground leading-8 text-lg">
      <p>
        Welcome to All Sports Offer, your trusted source for the
        latest developments from the world of sports. We provide
        comprehensive coverage across football, basketball,
        tennis, cricket, and major international sporting events.
      </p>

      <p>
        Our editorial team works to deliver accurate news,
        detailed match analysis, player performance reviews,
        tournament previews, transfer updates, and expert
        commentary. Whether you are following domestic leagues
        or global championships, we aim to keep you informed
        with reliable and engaging content.
      </p>

      <p>
        Sports fans deserve more than headlines. That's why we
        focus on providing deeper insights into games, teams,
        athletes, and emerging stories. Our content is designed
        to help readers understand the context behind the news
        while staying connected to their favorite sports.
      </p>

      <p>
        Every article published on our platform is carefully
        reviewed to ensure quality and relevance. From breaking
        news coverage to in-depth feature stories, we are
        committed to creating a valuable experience for sports
        enthusiasts around the world.
      </p>
    </div>
  </div>
</section>


        <section className="py-16 bg-background border-b border-border">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Header */}
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-primary/10">
          <TrendingUp className="w-5 h-5 text-primary" />
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Trending Now
          </h2>
          <p className="text-sm text-muted-foreground">
            Most popular articles this week
          </p>
        </div>
      </div>
    </div>


    

    {/* Cards */}
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {trendingArticles.map((article, index) => (
        <Link
          key={article.id}
          href={`/article/${article.id}`}
          className="group"
        >
          <article className="relative h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">

            {/* Ranking */}
            <div className="absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-lg">
              #{index + 1}
            </div>

            {/* Category */}
            <div className="mb-4 pt-4">
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="line-clamp-3 text-lg font-semibold leading-snug transition-colors group-hover:text-primary">
              {article.title}
            </h3>

          </article>
        </Link>
      ))}
    </div>
  </div>
</section>

        {/* Latest Stories Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Latest Stories</h2>
              <p className="text-muted-foreground text-lg">
                Stay updated with the hottest sports news and exclusive coverage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>



        {/* Newsletter Section */}
        <section className="py-16 bg-card border-y border-border">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay In The Game</h2>
            <p className="text-muted-foreground mb-8">
              Get breaking news, expert analysis, and exclusive updates delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background text-foreground rounded border border-border focus:outline-none focus:border-primary transition"
              />
              <button
                className="px-6 py-3 bg-primary text-primary-foreground rounded font-bold hover:bg-primary/90 transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Featured Tournaments Section */}
        <section className="py-16 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Featured Tournaments</h2>
              <p className="text-muted-foreground">Major sporting events happening now</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Link href="/tournaments" className="bg-background rounded-lg p-6 hover:shadow-lg transition">
                <div className="text-3xl mb-3">🏀</div>
                <h3 className="text-xl font-bold mb-2">Championship Finals</h3>
                <p className="text-muted-foreground text-sm mb-4">Basketball - June-August</p>
                <span className="text-primary font-semibold text-sm">View Details →</span>
              </Link>
              <Link href="/tournaments" className="bg-background rounded-lg p-6 hover:shadow-lg transition">
                <div className="text-3xl mb-3">🎾</div>
                <h3 className="text-xl font-bold mb-2">Grand Slam</h3>
                <p className="text-muted-foreground text-sm mb-4">Tennis - Throughout Year</p>
                <span className="text-primary font-semibold text-sm">View Details →</span>
              </Link>
              <Link href="/tournaments" className="bg-background rounded-lg p-6 hover:shadow-lg transition">
                <div className="text-3xl mb-3">⚽</div>
                <h3 className="text-xl font-bold mb-2">International Cup</h3>
                <p className="text-muted-foreground text-sm mb-4">Soccer - June-July 2025</p>
                <span className="text-primary font-semibold text-sm">View Details →</span>
              </Link>
              <Link href="/tournaments" className="bg-background rounded-lg p-6 hover:shadow-lg transition">
                <div className="text-3xl mb-3">🏈</div>
                <h3 className="text-xl font-bold mb-2">Pro League</h3>
                <p className="text-muted-foreground text-sm mb-4">Football - Sep-Feb 2025</p>
                <span className="text-primary font-semibold text-sm">View Details →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Categories Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">Popular Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryStats.map(({ category, count }) => (
                <div
                  key={category}
                  className="bg-card rounded-lg p-6 hover:shadow-lg transition cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category}</h3>
                  <p className="text-muted-foreground mb-4">
                    {count} articles
                  </p>
                  <button className="text-primary font-semibold hover:text-primary/80 transition">
                    Explore →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
