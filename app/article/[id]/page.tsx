  import { getArticleById, articles } from '@/lib/articles';
  import { Header } from '@/components/header';
  import { Footer } from '@/components/footer';
  import { ArticleCard } from '@/components/article-card';
  import { Breadcrumb } from '@/components/breadcrumb';
  import Link from 'next/link';
  import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
  import { notFound } from 'next/navigation';
import {
  generateMetadata as generateSEOMetadata,
} from '@/lib/seo';
  import type { Metadata } from 'next';
  import { NewsArticleSchema } from '@/components/schema-markup';
  import Image from "next/image";

  interface ArticlePageProps {
    params: Promise<{
      id: string;
    }>;
  }

  export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {

  const { id } = await params;
  const article = getArticleById(id);

  if (!article) {
    return {};
  }

  return generateSEOMetadata({
    title: `${article.title} - ProSports`,
    description: article.excerpt,
    keywords: [article.category, 'sports', 'article', 'news'],
    ogImage: article.image,
    ogType: 'article',
    url: `/article/${article.id}`,
    author: article.author,
    publishedDate: article.date,
  });
}

  export default async function ArticlePage({ params }: ArticlePageProps) {
    const { id } = await params;
    const article = getArticleById(id);

    if (!article) {
      notFound();
    }

    // Get related articles
    const relatedArticles = articles
      .filter(a => a.category === article.category && a.id !== article.id)
      .slice(0, 3);

    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <NewsArticleSchema
          headline={article.title}
          description={article.excerpt}
          image={article.image}
          datePublished={article.date}
          author={article.author}
        />
        <Header />

        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: article.category, href: '/' },
          { label: article.title, href: `/article/${article.id}`, current: true }
        ]} />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative w-full h-96 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
                unoptimized
              />

              <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>

              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-200">
                <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">
                  {article.category}
                </span>
                <div className="flex items-center gap-4">
                  <span className="font-semibold">{article.author}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </div>
          </section>



          {/* Article Content */}
          <section className="py-16 bg-background">
            <div className="max-w-3xl mx-auto px-4">
              <article className="prose prose-invert max-w-none">
                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-border mb-8">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime} min read</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                </div>

                {/* Main Image */}
                <div className="relative w-full h-96 rounded-lg overflow-hidden mb-8">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>


{/* Table of Contents */}
<div className="mb-8 p-6 bg-card rounded-xl border border-border">
  <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
  <ul className="space-y-2">
    <li>Overview</li>
    <li>Analysis</li>
    <li>Impact</li>
    <li>Conclusion</li>
  </ul>
</div>

                <div className="mb-8 p-6 bg-card rounded-xl border border-border">
  <h2 className="text-xl font-bold mb-4">
    Key Highlights
  </h2>

  <ul className="list-disc pl-6 space-y-2">
    <li>World record attempt nearly failed at mile 23.</li>
    <li>Coach's tactical decision prevented collapse.</li>
    <li>Record secured by just four seconds.</li>
  </ul>
</div>

                <div className="text-lg text-foreground leading-relaxed space-y-6">
    {article.content.split('\n\n').map((paragraph, idx) => (
      <p key={idx}>{paragraph}</p>
    ))}
  </div>

  <div className="mt-8">


  <div className="flex flex-wrap gap-2">
    <span className="px-3 py-1 bg-card border rounded-full">
      {article.category}
    </span>
  </div>
</div>

  {/* Author Bio */}
  <div className="mt-12 p-8 bg-card rounded-xl border border-border">
    <h3 className="text-2xl font-bold mb-4">
      About {article.author}
    </h3>

    <p className="text-muted-foreground leading-7">
      {article.author} is a sports journalist covering {article.category}
      and major international sporting events. Their work focuses on
      analysis, athlete performance, tournament coverage, and breaking
      sports news.
    </p>
  </div>

            <section className="mt-12 border-t border-border pt-8">
    <h3 className="text-2xl font-bold mb-4">
      Sources
    </h3>

    <ul className="list-disc pl-6 text-muted-foreground">
      <li>Official sporting event data</li>
      <li>Post-event interviews</li>
      <li>Sports federation records</li>
    </ul>

    {/* Tags */}
<div className="mt-8">
  <h3 className="text-xl font-bold mb-4">
    Tags
  </h3>

  <div className="flex flex-wrap gap-3">
    <span className="px-4 py-2 bg-card border border-border rounded-full text-sm">
      {article.category}
    </span>

    <span className="px-4 py-2 bg-card border border-border rounded-full text-sm">
      Sports
    </span>

    <span className="px-4 py-2 bg-card border border-border rounded-full text-sm">
      Analysis
    </span>

    <span className="px-4 py-2 bg-card border border-border rounded-full text-sm">
      News
    </span>
  </div>
</div>
  </section>
                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="text-lg font-semibold mb-4">Share this article</h3>
                  <div className="flex gap-4">
                    <button className="px-4 py-2 bg-card hover:bg-primary/10 border border-border rounded transition">
                      Twitter
                    </button>
                    <button className="px-4 py-2 bg-card hover:bg-primary/10 border border-border rounded transition">
                      Facebook
                    </button>
                    <button className="px-4 py-2 bg-card hover:bg-primary/10 border border-border rounded transition">
                      LinkedIn
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </section>


  <div className="max-w-7xl mx-auto px-4">
          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section className="py-16 bg-card border-y border-border">
              <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedArticles.map((relatedArticle) => (
                    <ArticleCard key={relatedArticle.id} article={relatedArticle} />
                  ))}
                </div>
              </div>
            </section>
          )}




  </div>
          


{/* Newsletter */}
<section className="py-20 bg-card border-t border-border">
  <div className="max-w-3xl mx-auto px-4 text-center">

    <h2 className="text-4xl font-bold mb-4">
      Stay Ahead of the Game
    </h2>

    <p className="text-muted-foreground text-lg mb-8">
      Get breaking sports news, expert analysis, and exclusive stories
      delivered directly to your inbox.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
      <input
        type="email"
        placeholder="Enter your email address"
        className="flex-1 px-5 py-4 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
      />

      <button
        className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
      >
        Subscribe
      </button>
    </div>

    <p className="text-xs text-muted-foreground mt-4">
      No spam. Unsubscribe anytime.
    </p>
  </div>
</section>
        </main>

        <Footer />
      </div>
    );
  }
