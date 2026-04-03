import Link from "next/link";
import type { SectionCardData } from "@/data/sectionCards";

export function SectionCard({ title, description, cta, href }: SectionCardData) {
  return (
    <Link
      href={href}
      className="group block rounded-lg border border-surface-border bg-surface-secondary p-6 transition-colors hover:border-brand-400 hover:bg-brand-50"
    >
      <h3 className="text-lg font-semibold text-text-primary group-hover:text-brand-500 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm text-text-secondary leading-relaxed">
        {description}
      </p>
      <p className="mt-3 font-mono text-sm text-brand-500">
        {cta} &rarr;
      </p>
    </Link>
  );
}
