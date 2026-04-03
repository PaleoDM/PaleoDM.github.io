"use client";

import { useState } from "react";
import type { Publication } from "@/data/publications";
import { publicationYears } from "@/data/publications";

function boldAuthorName(authors: string): React.ReactNode {
  const parts = authors.split(/(C\.M\. Peredo|Peredo, C\.M\.)/);
  return parts.map((part, i) =>
    part === "C.M. Peredo" || part === "Peredo, C.M." ? (
      <strong key={i} className="font-semibold text-text-primary">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

function PublicationCard({ pub }: { pub: Publication }) {
  const linkHref =
    pub.type === "report" && pub.href
      ? pub.href
      : pub.doi
        ? `https://doi.org/${pub.doi}`
        : undefined;

  return (
    <article className="group rounded-lg border border-surface-border bg-surface-secondary p-5 transition-colors hover:border-brand-400 hover:bg-brand-50">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className="font-mono text-xs text-text-tertiary">{pub.year}</p>
            {pub.type === "report" && (
              <span className="font-mono text-xs text-brand-500 bg-brand-50 border border-brand-200 rounded px-1.5 py-0.5">
                Institutional Report
              </span>
            )}
          </div>
          <h3 className="mt-1 text-base font-medium leading-snug">
            {linkHref ? (
              <a
                href={linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:text-brand-500 transition-colors"
              >
                {pub.title}
              </a>
            ) : (
              pub.title
            )}
          </h3>
          <p className="mt-2 text-sm text-text-secondary leading-relaxed">
            {boldAuthorName(pub.authors)}
          </p>
          <p className="mt-1 text-sm italic text-text-tertiary">
            {pub.journal}
            {pub.volume && ` ${pub.volume}`}
            {pub.pages && `, ${pub.pages}`}
          </p>
          {pub.doi && (
            <div className="mt-3">
              <div
                data-badge-popover="right"
                data-badge-type="1"
                data-doi={pub.doi}
                className="altmetric-embed"
              />
            </div>
          )}
        </div>
        <span className="shrink-0 font-mono text-sm font-medium text-text-tertiary">
          #{pub.id}
        </span>
      </div>
    </article>
  );
}

export function PublicationList({ publications }: { publications: Publication[] }) {
  const [yearFilter, setYearFilter] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const filtered = publications
    .filter((pub) => {
      if (yearFilter && pub.year !== yearFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          pub.title.toLowerCase().includes(q) ||
          pub.authors.toLowerCase().includes(q) ||
          pub.journal.toLowerCase().includes(q)
        );
      }
      return true;
    })
    .sort((a, b) => b.year - a.year || b.id - a.id);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search publications..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-lg border border-surface-border bg-surface-primary px-4 py-2 text-sm text-text-primary placeholder:text-text-tertiary focus:border-brand-400 focus:outline-none transition-colors"
        />
        <select
          value={yearFilter ?? ""}
          onChange={(e) =>
            setYearFilter(e.target.value ? Number(e.target.value) : null)
          }
          className="rounded-lg border border-surface-border bg-surface-primary px-4 py-2 text-sm text-text-secondary focus:border-brand-400 focus:outline-none transition-colors"
        >
          <option value="">All years</option>
          {publicationYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <p className="mt-4 font-mono text-xs text-text-tertiary">
        {filtered.length} publication{filtered.length !== 1 && "s"}
      </p>

      <div className="mt-4 flex flex-col gap-4">
        {filtered.map((pub) => (
          <PublicationCard key={pub.id} pub={pub} />
        ))}
        {filtered.length === 0 && (
          <p className="py-8 text-center text-sm text-text-tertiary">
            No publications match your search.
          </p>
        )}
      </div>
    </>
  );
}
