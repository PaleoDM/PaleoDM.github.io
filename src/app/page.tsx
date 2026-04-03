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
          AI Product &amp; Research Leader
        </h1>
        <p className="mt-6 text-text-secondary leading-relaxed">
          AI product developer. Senior data scientist. Paleobiologist. I tackle
          complex problems across large institutions and even larger scales, from
          production ML pipelines to the fossil record. I help companies build
          and maintain their data and intelligence layers. In my free time, I
          tell stories and teach martial arts.
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
