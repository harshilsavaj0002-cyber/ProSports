import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArticleCard } from "@/components/article-card";
import { articles } from "@/lib/articles";

export default function StoriesPage() {
const featuredStories = articles.slice(0, 9);

return ( <div className="min-h-screen bg-background text-foreground flex flex-col"> <Header />
  <main className="flex-1">
    {/* Hero */}
    <section className="py-24 border-b border-border">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">
          Sports Stories
        </h1>

        <p className="text-xl text-muted-foreground">
          Inspiring athlete journeys, historic victories, unforgettable
          matches, championship moments, and the human stories behind sports.
        </p>
      </div>
    </section>

    {/* Long Content */}
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">
          The Stories That Define Sports
        </h2>

        <div className="space-y-6 text-lg leading-8 text-muted-foreground">
          <p>
            Sports are more than scores, statistics, and championships.
            Behind every victory lies a story of sacrifice, determination,
            resilience, and countless hours of preparation.
          </p>

          <p>
            Throughout history, athletes have inspired generations by
            overcoming adversity and achieving what once seemed impossible.
            From underdog victories to record-breaking performances,
            sports stories connect with fans on a deeply personal level.
          </p>

          <p>
            Some of the most memorable moments in sports history occurred
            when athletes faced overwhelming challenges. Injuries,
            setbacks, defeats, and personal struggles often become the
            foundation for remarkable comebacks.
          </p>

          <p>
            Team sports provide another unique form of storytelling.
            Championship-winning teams are often built through years of
            development, strategic planning, and collective effort.
            Their journeys demonstrate the importance of teamwork,
            leadership, and perseverance.
          </p>

          <p>
            Olympic Games, World Cups, Grand Slam tournaments, and major
            championships continue to create unforgettable moments that
            inspire audiences around the world. These events showcase
            both individual brilliance and the unifying power of sport.
          </p>

          <p>
            Sports also play an important role in society. Athletes often
            become role models, advocates, and leaders whose influence
            extends beyond competition. Their stories can inspire positive
            change and motivate future generations.
          </p>

          <p>
            At ProSports, we believe that every great sporting achievement
            deserves thoughtful storytelling. Our feature articles explore
            the people, moments, and events that shape the sporting world.
          </p>

          <p>
            Through in-depth reporting and analysis, we aim to preserve
            the stories that make sports one of the most powerful forms of
            entertainment and inspiration across the globe.
          </p>
        </div>
      </div>
    </section>

    {/* Featured Stories */}
    <section className="py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10">
          Featured Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStories.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
            />
          ))}
        </div>
      </div>
    </section>

    {/* Why Readers Trust Us */}
    <section className="py-16 border-t border-border">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">
          Why Readers Trust ProSports
        </h2>

        <div className="space-y-4 text-muted-foreground text-lg leading-8">
          <p>
            Our editorial team focuses on accuracy, transparency, and
            in-depth reporting. Every article is researched using reliable
            sources and reviewed before publication.
          </p>

          <p>
            We strive to provide balanced coverage of sporting events,
            athletes, teams, and competitions while maintaining high
            journalistic standards.
          </p>
        </div>
      </div>
    </section>

  </main>

  <Footer />
</div>


);
}
