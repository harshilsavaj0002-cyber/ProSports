import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function EditorialPolicyPage() {
return ( <div className="min-h-screen bg-background text-foreground flex flex-col"> <Header />

  <main className="flex-1">
    <section className="py-24 border-b border-border">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">
          Editorial Policy
        </h1>

        <p className="text-xl text-muted-foreground">
          Our commitment to accuracy, fairness, transparency, and
          responsible sports journalism.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 space-y-12">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Our Mission
          </h2>

          <p className="text-lg leading-8 text-muted-foreground">
            ProSports is dedicated to delivering accurate, reliable,
            and engaging sports journalism. Our goal is to inform,
            educate, and inspire sports fans through high-quality
            reporting, analysis, and storytelling.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Accuracy and Verification
          </h2>

          <p className="text-lg leading-8 text-muted-foreground">
            Every article published on ProSports is reviewed for
            accuracy before publication. We verify information using
            official league announcements, governing bodies, athlete
            interviews, press conferences, and trusted sources.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Independence
          </h2>

          <p className="text-lg leading-8 text-muted-foreground">
            Our editorial decisions are made independently and are not
            influenced by advertisers, sponsors, or commercial partners.
            We maintain a clear distinction between editorial content
            and advertising.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Corrections Policy
          </h2>

          <p className="text-lg leading-8 text-muted-foreground">
            If factual errors are identified, we review and correct
            them promptly. Significant corrections may be noted within
            the article to ensure transparency.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Content Standards
          </h2>

          <p className="text-lg leading-8 text-muted-foreground">
            We strive to provide balanced coverage of teams, athletes,
            competitions, and sporting organizations while maintaining
            professionalism and journalistic integrity.
          </p>
        </div>

      </div>
    </section>
  </main>

  <Footer />
</div>

);
}
