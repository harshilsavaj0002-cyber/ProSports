import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "The mission behind ProSports: to make sport easier to understand with clear, accurate guides, analysis, and news for fans of every level.",
  alternates: { canonical: "/our-mission" },
};

export default function OurMissionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1">

        <section className="py-24 border-b border-border">
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">
              Our Mission
            </h1>

            <p className="text-xl text-muted-foreground">
              Delivering accurate sports news, insightful analysis,
              and trusted reporting for fans around the world.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 space-y-12">

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Why We Exist
              </h2>

              <p className="text-lg leading-8 text-muted-foreground">
                ProSports was created to provide sports fans with reliable,
                informative, and engaging coverage across a wide range of
                competitions and events. Our mission is to help readers stay
                informed while enjoying deeper insight into the world of sports.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Our Coverage
              </h2>

              <p className="text-lg leading-8 text-muted-foreground">
                We cover football, basketball, tennis, athletics, motorsports,
                cricket, and other major sporting events. Our content includes
                match reports, player profiles, tournament previews, breaking
                news, and expert analysis.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Editorial Standards
              </h2>

              <p className="text-lg leading-8 text-muted-foreground">
                Every article follows strict editorial guidelines designed to
                ensure fairness, accuracy, transparency, and responsible
                journalism. We strive to verify information before publication
                and promptly correct errors when necessary.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Reader First Approach
              </h2>

              <p className="text-lg leading-8 text-muted-foreground">
                Our readers are at the center of everything we do. We aim to
                provide useful information, meaningful context, and engaging
                storytelling that helps sports fans better understand the games,
                athletes, and events they care about.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Looking Ahead
              </h2>

              <p className="text-lg leading-8 text-muted-foreground">
                As sports continue to evolve, we remain committed to expanding
                our coverage, improving our reporting, and delivering trusted
                journalism for a global audience.
              </p>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}