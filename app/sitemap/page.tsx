import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const pages = [
  { title: "Home", href: "/" },
  { title: "News", href: "/news" },
  { title: "Stories", href: "/stories" },
  { title: "Authors", href: "/authors" },
  { title: "About Us", href: "/about" },
  { title: "Contact Us", href: "/contact" },
  { title: "Our Mission", href: "/our-mission" },
  { title: "Editorial Policy", href: "/editorial-policy" },
  { title: "Fact Checking Policy", href: "/fact-checking-policy" },
  { title: "Corrections Policy", href: "/corrections-policy" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms & Conditions", href: "/terms" },
  { title: "Disclaimer", href: "/disclaimer" },
  { title: "Cookie Policy", href: "/cookie" },
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-24 border-b border-border">
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">
              Website Sitemap
            </h1>

            <p className="text-xl text-muted-foreground">
              Browse all important sections of ProSports from one place.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {pages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="p-5 bg-card border border-border rounded-xl hover:border-primary transition"
                >
                  <h2 className="font-semibold text-lg">
                    {page.title}
                  </h2>
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