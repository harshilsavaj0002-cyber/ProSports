// export function Footer() {
//   return (
//     <footer className="bg-card border-t border-border">
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
//                 <span className="text-primary-foreground font-bold">⚡</span>
//               </div>
//               <span className="text-lg font-bold">ProSports</span>
//             </div>
//             <p className="text-muted-foreground text-sm">
//               Your go-to source for breaking sports news and in-depth analysis.
//             </p>
//           </div>

//           <div>
//             <h4 className="font-bold mb-4 text-foreground">Quick Links</h4>
//             <ul className="space-y-2 text-muted-foreground text-sm">
//               <li><a href="/" className="hover:text-primary transition">Home</a></li>
//               <li><a href="/news" className="hover:text-primary transition">News</a></li>
//               <li><a href="/stories" className="hover:text-primary transition">Stories</a></li>
//               <li><a href="/about" className="hover:text-primary transition">About</a></li>
//               <li><a href="/players" className="hover:text-primary transition">Players</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-bold mb-4 text-foreground">Resources</h4>
//             <ul className="space-y-2 text-muted-foreground text-sm">
//               <li><a href="/match-analysis" className="hover:text-primary transition">Match Analysis</a></li>
//               <li><a href="/tournaments" className="hover:text-primary transition">Tournaments</a></li>
//               <li><a href="/contact" className="hover:text-primary transition">Contact</a></li>
//               <li><a href="/privacy" className="hover:text-primary transition">Privacy</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-bold mb-4 text-foreground">Newsletter</h4>
//             <p className="text-muted-foreground text-sm mb-3">
//               Get the latest sports updates delivered to your inbox.
//             </p>
//             <form className="flex flex-col gap-2">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="px-3 py-2 bg-background text-foreground rounded text-sm border border-border focus:outline-none focus:border-primary transition"
//               />
//               <button
//                 type="submit"
//                 className="px-3 py-2 bg-primary text-primary-foreground rounded text-sm font-semibold hover:bg-primary/90 transition"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         <div className="border-t border-border pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-muted-foreground text-sm">
//               © 2025 ProSports Blog. All rights reserved.
//             </p>
//             <div className="flex gap-6 text-sm flex-wrap">
//               <a href="/privacy" className="text-muted-foreground hover:text-primary transition">Privacy</a>
//               <a href="/terms" className="text-muted-foreground hover:text-primary transition">Terms</a>
//               <a href="/disclaimer" className="text-muted-foreground hover:text-primary transition">Disclaimer</a>
//               <a href="/cookies" className="text-muted-foreground hover:text-primary transition">Cookies</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }





import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold">⚡</span>
              </div>
              <span className="text-lg font-bold">ProSports</span>
            </div>

            <p className="text-muted-foreground text-sm">
              Your trusted source for sports news, match analysis,
              player stories, and tournament updates.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/news">News</Link></li>
              <li><Link href="/stories">Stories</Link></li>
              <li><Link href="/match-analysis">Analysis</Link></li>
              <li><Link href="/players">Players</Link></li>
            </ul>
          </div>

          {/* Content */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/categories">Categories</Link></li>
              <li><Link href="/authors">Authors</Link></li>
              <li><Link href="/archive">Archive</Link></li>
              <li><Link href="/tournaments">Tournaments</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/sitemap">Sitemap</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-bold mb-4">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
              <li><Link href="/cookies">Cookie Policy</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
              <li><Link href="/editorial-policy">Editorial Policy</Link></li>
              <li><Link href="/fact-checking-policy">Fact Check Policy</Link></li>
              <li><Link href="/corrections-policy">Corrections Policy</Link></li>
              <li><Link href="/our-mission">Our Mission</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 ProSports. All rights reserved.
          </p>

          <div className="flex gap-4 text-sm mt-4 md:mt-0">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}