import Link from "next/link";
import { portfolioItems } from "@/data/portfolioItems";

export const metadata = {
  title: "Portfolio — Dr. Carlos M. Peredo",
  description:
    "AI products, data infrastructure, and analytics case studies.",
};

export default function PortfolioPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 md:py-16">
      <section className="border-l-2 border-brand-400 bg-surface-secondary rounded-r-lg p-6 md:p-8">
        <p className="font-mono text-sm text-brand-500 tracking-wide">
          Portfolio
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-text-primary leading-tight">
          Case Studies
        </h1>
        <p className="mt-4 text-text-secondary leading-relaxed">
          AI products, data infrastructure, and analytics — built and shipped
          end-to-end.
        </p>
      </section>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group block rounded-lg border border-surface-border bg-surface-secondary p-6 transition-colors hover:border-brand-400 hover:bg-brand-50"
          >
            <h2 className="text-lg font-semibold text-text-primary group-hover:text-brand-500 transition-colors">
              {item.title}
            </h2>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              {item.tagline}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-brand-500 bg-brand-50 border border-brand-200 rounded px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-4 font-mono text-sm text-brand-500">
              View case study &rarr;
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}
