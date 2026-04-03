import { SectionCard } from "@/components/ui/SectionCard";
import { sectionCards } from "@/data/sectionCards";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <section className="max-w-2xl">
        <p className="font-mono text-sm text-brand-500 tracking-wide">
          Dr. Carlos M. Peredo
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-text-primary leading-tight">
          Paleobiologist turned AI product developer.
        </h1>
        <p className="mt-6 text-text-secondary leading-relaxed">
          I spent a decade studying whale evolution — extracting signal from
          fragmentary fossils, building phylogenies, and piecing together how
          mammals conquered the ocean. That work taught me to find structure in
          messy, incomplete data, a skill that translates directly to machine
          learning.
        </p>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Today I build AI products: computer vision pipelines, recommendation
          systems, and tools that put predictive models into the hands of people
          who need them. I still publish scientific research and review for
          journals — the scientific rigor never left.
        </p>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Outside of tech and science, I teach and train Tai Chuan Do, a martial
          art I have practiced for over twenty years. Discipline, patience,
          continuous improvement — it shapes how I approach everything else.
        </p>
      </section>

      <section className="mt-16">
        <p className="font-mono text-sm text-text-tertiary uppercase tracking-wider">
          Explore
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectionCards.map((card) => (
            <SectionCard key={card.href} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
}
