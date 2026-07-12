import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArticleCard } from "@/components/article-card";
import { articles } from "@/lib/articles";

export default function NewsPage() {
const latestArticles = articles.slice(0, 9);

return ( <div className="min-h-screen bg-background text-foreground flex flex-col"> <Header />

  <main className="flex-1">
    {/* Hero */}
    <section className="py-24 border-b border-border">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">
          Sports News & Updates
        </h1>

        <p className="text-xl text-muted-foreground">
          Breaking sports news, tournament coverage, athlete stories,
          transfer updates, match analysis, and expert commentary from
          around the sporting world.
        </p>
      </div>
    </section>

    {/* Long Content */}
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">
          Latest Developments in Global Sports
        </h2>

        <div className="space-y-6 text-lg leading-8 text-muted-foreground">
          <p>
            Sports continue to unite millions of fans across the globe,
            delivering unforgettable moments, fierce competition, and
            inspiring stories of determination. Every season brings new
            records, emerging talents, and dramatic championship battles
            that shape the future of professional sports.
          </p>

          <p>
            From football and basketball to athletics and tennis, the
            sporting landscape evolves rapidly. Teams constantly adapt
            strategies, athletes push physical limits, and organizations
            invest heavily in performance technology and analytics.
          </p>

          <p>
            Modern sports journalism plays an essential role in helping
            fans understand these developments. Match reports, player
            interviews, injury updates, tactical analysis, and transfer
            news provide valuable insight beyond the final score.
          </p>

          <p>
            Major tournaments remain the centerpiece of the sporting
            calendar. International competitions attract global audiences,
            while domestic leagues continue to grow through digital
            streaming and social media engagement.
          </p>

          <p>
            Technology has transformed how athletes train and compete.
            Advanced data tracking, wearable devices, performance
            monitoring systems, and artificial intelligence tools now
            influence decision-making at every level of competition.
          </p>

          <p>
            Fans today expect deeper analysis and more detailed coverage.
            Beyond highlights and results, they seek context, strategy,
            historical perspective, and expert opinions that explain why
            certain performances stand out.
          </p>

          <p>
            At ProSports, our goal is to provide accurate reporting,
            comprehensive analysis, and engaging storytelling across a
            wide range of sports. We focus on delivering reliable
            information while highlighting the human stories behind every
            major sporting event.
          </p>

          <p>
            Whether following a championship race, a record-breaking
            performance, or a rising young athlete, sports continue to
            inspire audiences worldwide. Through dedicated reporting and
            expert analysis, we help readers stay informed about the most
            important developments in global sports.
          </p>
        </div>
      </div>
    </section>

    {/* Latest Articles */}
    <section className="py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10">
          Latest News Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
            />
          ))}
        </div>
      </div>
    </section>

  </main>

  <Footer />
</div>
);
}
