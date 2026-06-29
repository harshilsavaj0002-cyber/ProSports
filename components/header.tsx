// import Link from 'next/link';
// import { Search, Menu } from 'lucide-react';

// export function Header() {
//   return (
//     <header className="sticky top-0 z-50 bg-background border-b border-border">
//       <div className="max-w-7xl mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           <Link href="/" className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
//               <span className="text-primary-foreground font-bold text-lg">⚡</span>
//             </div>
//             <span className="text-xl font-bold text-foreground hidden sm:inline">ProSports</span>
//           </Link>
          
//         <nav className="hidden md:flex gap-8">
//   <Link href="/">Home</Link>
//   <Link href="/blog">Blog</Link>
//   <Link href="/news">News</Link>
//   <Link href="/stories">Stories</Link>
//   <Link href="/match-analysis">Analysis</Link>
//   <Link href="/categories">Categories</Link>
//   <Link href="/authors">Authors</Link>
//   <Link href="/archive">Archive</Link>
//   <Link href="/about">About</Link>
//   <Link href="/contact">Contact</Link>
// </nav>
//           <div className="flex items-center gap-4">
//             <button className="p-2 hover:bg-card rounded-lg transition hidden sm:block">
//               <Search className="w-5 h-5 text-foreground" />
//             </button>
//             <button className="md:hidden p-2 hover:bg-card rounded-lg transition">
//               <Menu className="w-5 h-5 text-foreground" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }



"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "News", href: "/news" },
    { name: "Stories", href: "/stories" },
    { name: "Analysis", href: "/match-analysis" },
    { name: "Categories", href: "/categories" },
    { name: "Authors", href: "/authors" },
    { name: "Archive", href: "/archive" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded bg-red-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>

            <span className="hidden sm:block text-xl font-bold">
              ProSports
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium hover:text-blue-600 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2">

            <button className="hidden sm:flex p-2 rounded hover:bg-gray-100">
              <Search className="w-5 h-5" />
            </button>

            <button
              className="xl:hidden p-2 rounded hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

          </div>
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-background border-t border-border shadow-lg absolute top-full left-0 w-full z-50">

          <nav className="flex flex-col">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-5 py-4 border-b hover:bg-gray-100"
              >
                {item.name}
              </Link>
            ))}

          </nav>

        </div>
      )}
    </header>
  );
}