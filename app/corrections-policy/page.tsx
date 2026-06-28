import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function CorrectionsPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-24 border-b border-border">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">
              Corrections Policy
            </h1>

            <p className="text-xl text-muted-foreground">
              ProSports is committed to accuracy and transparency in all
              published content. When errors are identified, we correct them
              promptly and clearly.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-3">
                Accuracy Commitment
              </h2>

              <p className="text-muted-foreground leading-8">
                Our editorial team strives to provide accurate and reliable
                sports news, analysis, and reporting. We verify information
                before publication whenever possible.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">
                Reporting Errors
              </h2>

              <p className="text-muted-foreground leading-8">
                Readers who discover factual errors or inaccuracies may contact
                our editorial team through our contact page.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">
                Correction Process
              </h2>

              <p className="text-muted-foreground leading-8">
                Once an error is confirmed, we update the article as quickly as
                possible and make reasonable efforts to ensure that readers are
                informed of significant corrections.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">
                Editorial Transparency
              </h2>

              <p className="text-muted-foreground leading-8">
                We value transparency and maintain editorial standards that
                prioritize accuracy, fairness, and accountability.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}