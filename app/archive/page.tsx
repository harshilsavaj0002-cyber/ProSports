    import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Article Archive",
  description:
    "Browse the full ProSports archive of sports articles, guides, and analysis organised by month.",
  alternates: { canonical: "/archive" },
};

    export default function ArchivePage() {
    const groupedArticles = articles.reduce((acc, article) => {
        const date = new Date(article.date);
        const monthYear = date.toLocaleString("en-US", {
        month: "long",
        year: "numeric",
        });

        if (!acc[monthYear]) {
        acc[monthYear] = [];
        }

        acc[monthYear].push(article);

        return acc;
    }, {} as Record<string, typeof articles>);

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />

        <main className="flex-1">
            <section className="py-24 border-b border-border">
            <div className="max-w-5xl mx-auto px-4">
                <h1 className="text-5xl font-bold mb-6">
                Article Archive
                </h1>

                <p className="text-xl text-muted-foreground">
                Browse all published sports news, stories, and analysis.
                </p>
            </div>
            </section>

            <section className="py-16">
            <div className="max-w-5xl mx-auto px-4">

                {Object.entries(groupedArticles).map(([month, posts]) => (
                <div key={month} className="mb-12">

                    <h2 className="text-3xl font-bold mb-6">
                    {month} ({posts.length} Articles)
                    </h2>

                    <div className="space-y-4">

                    {posts.map((article) => (
                        <Link
                        key={article.id}
                        href={`/article/${article.id}`}
                        className="block p-5 bg-card border border-border rounded-xl hover:border-primary transition"
                        >
                        <h3 className="text-xl font-semibold mb-2">
                            {article.title}
                        </h3>

                        <p className="text-muted-foreground">
                            {article.excerpt}
                        </p>

                        <p className="text-sm text-muted-foreground mt-2">
                            {article.date}
                        </p>
                        </Link>
                    ))}

                    </div>
                </div>
                ))}

            </div>
            </section>
        </main>

        <Footer />
        </div>
    );
    }