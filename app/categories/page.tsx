import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Sports Categories",
  description:
    "Browse ProSports articles by sport — football, basketball, tennis, cricket, athletics and more. Guides, analysis and news organised by category.",
  alternates: { canonical: "/categories" },
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  FIFA: "World Cup coverage, qualifiers, and the biggest moments in international football.",
  Football:
    "Tactics, rules, and analysis of the world's most popular sport, from the basics to the big leagues.",
  Basketball:
    "Scoring, strategy, and the players and games that define the sport on both sides of the Atlantic.",
  Tennis:
    "Grand Slams, playing styles, and what separates the greats in singles and doubles.",
  Athletics:
    "Sprints, distance running, field events, and the science of human performance.",
  Cricket:
    "Formats, techniques, and the tournaments that crown world champions.",
  Cycling:
    "Road racing, grand tours, and the endurance and tactics behind the sport.",
  Motorsport:
    "Racing formats, machinery, and the strategy that decides races on track.",
  Swimming:
    "Strokes, events, and the training that produces record-breaking swimmers.",
  "American Football":
    "Rules, positions, and the strategy behind one of the most complex team sports.",
  Wellness:
    "Fitness, recovery, and healthy habits that keep athletes and fans performing.",
  Gymnastics:
    "Disciplines, scoring, and the artistry and power behind elite routines.",
  Surfing: "Waves, competition formats, and the culture of the sport.",
  Boxing: "Weight classes, styles, and the fundamentals of the ring.",
  Golf: "Formats, majors, and the skills that shape the modern game.",
  Rugby: "Codes, positions, and how the game is won.",
  Badminton: "Rules, shots, and the fastest racket sport in the world.",
  Volleyball: "Rules, positions, and how points are won at the net.",
  "Ice Hockey": "Rules, positions, and the pace that defines the game.",
  "Horse Racing": "Formats, terms, and how races are run and read.",
  Rowing: "Boat classes, technique, and endurance on the water.",
  Skiing: "Disciplines, courses, and the skills behind alpine and nordic events.",
  Esports: "Titles, formats, and the rise of competitive gaming.",
};

export default function CategoriesPage() {
  const counts = articles.reduce<Record<string, number>>((acc, a) => {
    acc[a.category] = (acc[a.category] || 0) + 1;
    return acc;
  }, {});

  const categories = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-24 border-b border-border">
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">Sports Categories</h1>
            <p className="text-xl text-muted-foreground">
              Explore our {articles.length} articles across {categories.length}{" "}
              sports. Pick a category to read guides, analysis, and news for that
              sport.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link
                  key={category}
                  href="/blog"
                  className="group p-6 border border-border rounded-xl hover:border-primary hover:shadow-lg transition flex flex-col"
                >
                  <div className="flex items-baseline justify-between mb-3">
                    <h2 className="text-2xl font-bold group-hover:text-primary transition">
                      {category}
                    </h2>
                    <span className="text-sm text-muted-foreground">
                      {counts[category]}{" "}
                      {counts[category] === 1 ? "article" : "articles"}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {CATEGORY_DESCRIPTIONS[category] ||
                      `Articles, guides, and analysis covering ${category}.`}
                  </p>
                  <span className="mt-4 text-primary font-semibold text-sm">
                    Read {category} articles →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
