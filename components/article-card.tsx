import Link from 'next/link';
import { Article } from '@/lib/articles';
import { Clock, ArrowRight } from 'lucide-react';
import Image from "next/image";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  if (featured) {
    return (
      <Link href={`/article/${article.id}`}>
        <article className="group relative bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
          <div className="relative h-96">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
            <div className="mb-3">
              <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-semibold">
                {article.category}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition">
              {article.title}
            </h2>
            <p className="text-muted-foreground mb-4">{article.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{article.author}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/article/${article.id}`}>
      <article className="group bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
       <div className="relative h-48">
  <Image
    src={article.image}
    alt={article.title}
    fill
    className="object-cover"
    unoptimized
  />
</div>
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">
              {article.category}
            </span>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} min</span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition line-clamp-2">
            {article.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-2">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-sm text-muted-foreground">{article.date}</span>
            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition" />
          </div>
        </div>
      </article>
    </Link>
  );
}
