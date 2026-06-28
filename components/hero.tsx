// import { Article } from '@/lib/articles';
// import Link from 'next/link';

// interface HeroProps {
//   article: Article;
// }

// export function Hero({ article }: HeroProps) {
//   return (
//     <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
//       <div 
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `linear-gradient(135deg, #ff6b35 0%, #004e89 50%, #1a1a1a 100%)`,
//           backgroundAttachment: 'fixed'
//         }}
//       >
//         <div className="absolute inset-0 bg-black/40" />
//       </div>

//       <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
//         <div className="mb-6">
//           <span className="inline-block bg-primary/90 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
//             Featured Story
//           </span>
//         </div>
        
//         <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
//           {article.title}
//         </h1>

//         <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto text-balance">
//           {article.excerpt}
//         </p>

//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
//           <Link 
//             href={`/article/${article.id}`}
//             className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded font-bold transition-all duration-200 transform hover:scale-105"
//           >
//             Read Full Story
//           </Link>
//           <div className="flex items-center gap-4 text-gray-300">
//             <span>{article.author}</span>
//             <span>•</span>
//             <span>{article.date}</span>
//           </div>
//         </div>

//         <div className="flex justify-center animate-bounce">
//           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// }



import { Article } from '@/lib/articles';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  article: Article;
}

export function Hero({ article }: HeroProps) {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Bottom gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        
        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-block bg-primary/90 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance drop-shadow-lg">
          {article.title}
        </h1>

        {/* Excerpt */}
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto text-balance drop-shadow">
          {article.excerpt}
        </p>

        {/* Author, Date & CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href={`/article/${article.id}`}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded font-bold transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Read Full Story
          </Link>
          <div className="flex items-center gap-3 text-gray-300 text-sm">
            <span className="font-medium">{article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime} min read</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center animate-bounce">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Featured Story label - bottom left */}
      <div className="absolute bottom-8 left-6 z-10">
        <span className="text-xs text-white/60 uppercase tracking-widest font-semibold">
          Featured Story
        </span>
      </div>

      {/* Read time indicator - bottom right */}
      <div className="absolute bottom-8 right-6 z-10">
        <span className="text-xs text-white/60 uppercase tracking-widest font-semibold">
          {article.readTime} min read
        </span>
      </div>

    </section>
  );
}