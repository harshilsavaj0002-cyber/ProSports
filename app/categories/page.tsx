import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { articles } from "@/lib/articles";

export default function CategoriesPage() {
  const categories = [...new Set(articles.map((a) => a.category))];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-24 border-b border-border">
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">
              Sports Categories
            </h1>

            <p className="text-xl text-muted-foreground">
              Explore articles by sport.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <div
                  key={category}
                  className="p-6 border rounded-xl"
                >
                  {category}
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