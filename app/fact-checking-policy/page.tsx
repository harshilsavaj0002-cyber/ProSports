import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function FactCheckingPolicyPage() {
return ( <div className="min-h-screen bg-background text-foreground flex flex-col"> <Header />


  <main className="flex-1">
    <section className="py-24 border-b border-border">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">
          Fact-Checking Policy
        </h1>

        <p className="text-xl text-muted-foreground">
          Our commitment to publishing accurate, trustworthy, and
          verified sports content.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 space-y-12">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Our Fact-Checking Process
          </h2>

          <p className="text-lg leading-8 text-muted-foreground">
            Accuracy is one of the core principles of ProSports.
            Before publication, our editorial team reviews information
            from reliable and authoritative sources to ensure factual
            correctness.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Sources We Use
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground">
            <li>Official sports organizations and governing bodies</li>
            <li>League and tournament announcements</li>
            <li>Press conferences and interviews</li>
            <li>Official athlete and team statements</li>
            <li>Verified statistical databases</li>
            <li>Accredited news agencies</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Review Procedure
          </h2>

          <p className="text-lg leading-8 text-muted-foreground">
            Writers and editors review statistics, quotations,
            dates, records, and event information before articles
            are published. Additional verification may be performed
            for breaking news and developing stories.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Corrections and Updates
          </h2>

          <p className="text-lg leading-8 text-muted-foreground">
            If inaccuracies are discovered after publication, we
            update the article as quickly as possible. Significant
            corrections may be disclosed within the article to
            maintain transparency.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Reader Feedback
          </h2>

          <p className="text-lg leading-8 text-muted-foreground">
            We welcome feedback from readers. If you believe an
            article contains an error, please contact us through
            our Contact page so our editorial team can investigate.
          </p>
        </div>

      </div>
    </section>
  </main>

  <Footer />
</div>

);
}
