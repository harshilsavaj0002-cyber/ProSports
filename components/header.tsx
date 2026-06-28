import Link from 'next/link';
import { Search, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">⚡</span>
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:inline">ProSports</span>
          </Link>
          
        <nav className="hidden md:flex gap-8">
  <Link href="/">Home</Link>
  <Link href="/blog">Blog</Link>
  <Link href="/news">News</Link>
  <Link href="/stories">Stories</Link>
  <Link href="/match-analysis">Analysis</Link>
  <Link href="/categories">Categories</Link>
  <Link href="/authors">Authors</Link>
  <Link href="/archive">Archive</Link>
  <Link href="/about">About</Link>
  <Link href="/contact">Contact</Link>
</nav>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-card rounded-lg transition hidden sm:block">
              <Search className="w-5 h-5 text-foreground" />
            </button>
            <button className="md:hidden p-2 hover:bg-card rounded-lg transition">
              <Menu className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
