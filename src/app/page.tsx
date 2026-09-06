import { SectionCard } from "@/components/ui/SectionCard";
import { sectionCards } from "@/data/sectionCards";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 md:py-16">
      <section className="max-w-2xl border-l-2 border-brand-400 bg-surface-secondary rounded-r-lg p-6 md:p-8">
        <p className="font-mono text-sm text-brand-500 tracking-wide">
          Dr. Carlos Mauricio Peredo
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-text-primary leading-tight">
          Lead AI &amp; Data Architect
        </h1>
        <p className="mt-6 text-text-secondary leading-relaxed">
          I architect and ship production AI systems, with a specialty in regulated
          industries. Products include enterprise data platforms, RAG-powered knowledge
          systems, and predictive business forecasting, as well as voice AI agents and
          the governance tooling that lets teams adopt AI safely. I help companies build
          and maintain their data and intelligence layers, generating over $350,000
          annually in signed AI engagements. In my free time, I&apos;m an active
          paleontology researcher, storyteller, and martial arts instructor.
        </p>
      </section>

      <section className="mt-10">
        <p className="font-mono text-sm text-text-tertiary uppercase tracking-wider">
          Explore
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectionCards.map((card) => (
            <SectionCard key={card.href} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
}
