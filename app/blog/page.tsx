'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ArticleCard } from '@/components/article-card';
import { CategoryFilter } from '@/components/category-filter';
import { getAllArticles } from '@/lib/articles';

const PAGE_SIZE = 18;

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const allArticles = getAllArticles();
  const filteredArticles = selectedCategory === 'All'
    ? allArticles
    : allArticles.filter((article) => article.category === selectedCategory);
  const visibleArticles = filteredArticles.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, filteredArticles.length));
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Stay up to date with the latest sports stories, analysis, and opinion pieces from ProSports.
            </p>
          </div>
        </section>

        <section className="py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Filter by Sport</h2>
            <CategoryFilter
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            {filteredArticles.length > 0 ? (
              <>
                <div className="mb-8">
                  <p className="text-muted-foreground">
                    Showing {Math.min(visibleCount, filteredArticles.length)} of {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} in {selectedCategory === 'All' ? 'all categories' : selectedCategory}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {visibleArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>

                {visibleCount < filteredArticles.length && (
                  <div className="mt-12 text-center">
                    <button
                      type="button"
                      onClick={handleLoadMore}
                      className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
                    >
                      Load more articles
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No blog articles found in this category.</p>
              </div>
            )}
          </div>
        </section>

      
      </main>

      <Footer />
    </div>
  );
}
