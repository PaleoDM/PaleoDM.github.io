import Link from "next/link";

interface ComingSoonProps {
  eyebrow: string;
  title: string;
  backHref: string;
  backLabel: string;
  badges?: string[];
}

export function ComingSoon({
  eyebrow,
  title,
  backHref,
  backLabel,
  badges = [],
}: ComingSoonProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 md:py-16">
      <Link
        href={backHref}
        className="font-mono text-sm text-brand-500 hover:text-brand-600 transition-colors"
      >
        &larr; {backLabel}
      </Link>

      <section className="mt-6 border-l-2 border-brand-400 bg-surface-secondary rounded-r-lg p-6 md:p-8">
        <p className="font-mono text-sm text-brand-500 tracking-wide">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-text-primary leading-tight">
          {title}
        </h1>
        {badges.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="font-mono text-xs text-brand-500 bg-brand-50 border border-brand-200 rounded px-2 py-0.5"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
        <p className="mt-4 text-text-secondary leading-relaxed">Coming soon.</p>
      </section>
    </div>
  );
}
