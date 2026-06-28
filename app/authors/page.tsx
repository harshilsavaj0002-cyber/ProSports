import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const authors = [
{
id: 1,
name: "David Okafor",
role: "Athletics Analyst",
image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
articles: 28,
expertise: "Athletics, Olympics, Marathon Racing",
bio: "David Okafor is an experienced sports journalist specializing in athletics, marathon competitions, and Olympic events. He has covered major international championships and provides detailed performance analysis."
},
{
id: 2,
name: "James Carter",
role: "Football Reporter",
image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
articles: 34,
expertise: "Football, Transfers, Tactics",
bio: "James Carter covers football leagues, transfer news, and tactical analysis. His reporting focuses on major domestic and international competitions."
},
{
id: 3,
name: "Sarah Johnson",
role: "Basketball Writer",
image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
articles: 22,
expertise: "NBA, College Basketball, Player Analysis",
bio: "Sarah Johnson specializes in basketball coverage, player development, and championship analysis across professional and collegiate competitions."
},
{
id: 4,
name: "Michael Reynolds",
role: "Tennis Correspondent",
image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
articles: 19,
expertise: "Grand Slams, ATP, WTA",
bio: "Michael Reynolds reports on major tennis tournaments, player rankings, and emerging talent in the professional tennis circuit."
}
];

export default function AuthorsPage() {
return ( <div className="min-h-screen bg-background text-foreground flex flex-col"> <Header />

  <main className="flex-1">

    <section className="py-24 border-b border-border">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">
          Meet Our Authors
        </h1>

        <p className="text-xl text-muted-foreground">
          Our editorial team consists of experienced sports journalists,
          analysts, and reporters dedicated to delivering accurate,
          insightful, and engaging sports coverage.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {authors.map((author) => (
            <div
              key={author.id}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <div className="md:flex">

                <div className="relative w-full md:w-64 h-80">
                  <img
  src={author.image}
  alt={author.name}
  className="w-full h-full object-cover"
/>
                </div>

                <div className="p-6 flex-1">
                  <h2 className="text-3xl font-bold mb-2">
                    {author.name}
                  </h2>

                  <p className="text-primary font-medium mb-4">
                    {author.role}
                  </p>

                  <p className="text-muted-foreground mb-4 leading-7">
                    {author.bio}
                  </p>

                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Expertise:</strong> {author.expertise}
                    </p>

                    <p>
                      <strong>Articles Published:</strong> {author.articles}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>

    <section className="py-16 border-t border-border">
      <div className="max-w-4xl mx-auto px-4">

        <h2 className="text-3xl font-bold mb-6">
          Our Editorial Commitment
        </h2>

        <p className="text-lg text-muted-foreground leading-8">
          Every author at ProSports follows strict editorial standards,
          fact-checking procedures, and ethical journalism practices.
          Our goal is to provide readers with reliable information,
          insightful analysis, and high-quality sports storytelling.
        </p>

      </div>
    </section>

  </main>

  <Footer />
</div>

);
}
