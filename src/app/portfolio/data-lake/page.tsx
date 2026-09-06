import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Financial Advisor Datalake — Dr. Carlos Mauricio Peredo",
  description:
    "Nightly ETL pipeline and live advisor dashboard turning two disconnected financial platforms into actionable client intelligence.",
};

export default function DataLakePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 md:py-16">
      <Link
        href="/portfolio"
        className="font-mono text-sm text-brand-500 hover:text-brand-600 transition-colors"
      >
        &larr; Back to Portfolio
      </Link>

      <section className="mt-6 border-l-2 border-brand-400 bg-surface-secondary rounded-r-lg p-6 md:p-8">
        <p className="font-mono text-sm text-brand-500 tracking-wide">
          Case Study
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-text-primary leading-tight">
          Financial Advisor Datalake
        </h1>
        <p className="mt-4 text-text-secondary leading-relaxed">
          A nightly ETL pipeline and live advisor dashboard turning two
          disconnected financial platforms into actionable client intelligence.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Python",
            "Azure Functions",
            "Azure Data Lake",
            "Azure SQL",
            "pandas",
            "pyarrow",
            "ijson",
            "React 18",
            "Vite",
            "Tailwind CSS",
            "Recharts",
            "Express.js",
            "Entra ID",
            "Azure OpenAI",
          ].map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-brand-500 bg-brand-50 border border-brand-200 rounded px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-text-primary">
          The Challenge
        </h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          The firm ran their practice across two systems —
          Wealthbox (CRM) and Black Diamond (portfolio management) — with no
          unified view of client engagement or portfolio risk. Advisors
          couldn&apos;t answer basic questions: Which clients haven&apos;t been
          contacted in 6 months? Where is bank concentration too high in
          structured note portfolios? The data existed but was siloed behind
          separate APIs with no shared schema, and the Black Diamond accounts
          payload alone runs 400MB+.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-text-primary">
          The Approach
        </h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          I built an end-to-end data platform on Azure: a Python-based ETL
          pipeline running as timer-triggered Azure Functions on a nightly
          schedule, feeding a React dashboard secured with Entra ID. The pipeline
          follows a medallion architecture — Bronze (raw JSON snapshots to Data
          Lake), Silver (cleaned and typed Parquet), Gold (bulk MERGE upsert into
          Azure SQL) — processing Wealthbox and Black Diamond data across 15+
          scheduled functions between midnight and 4:45&nbsp;AM&nbsp;EST.
        </p>
        <p className="mt-4 text-text-secondary leading-relaxed">
          For the 400MB Black Diamond accounts file, I used streaming JSON
          parsing with ijson across five separate passes to stay within Azure
          Functions memory limits. The dashboard is a read-only Express + React
          app with 13 API routes serving two audiences: a main advisor dashboard
          (stale client alerts, engagement heatmaps, client segmentation,
          outreach calendar, client dossier with AI summaries) and a specialized
          POPS dashboard for the structured notes team (concentration alerts,
          trade scenario planning across 98 accounts and ~2,100 holdings). A hard
          rule throughout: the dashboard never writes to existing pipeline
          tables.
        </p>
      </section>

      <section className="mt-10">
        <div className="rounded-lg border border-surface-border overflow-hidden">
          <Image
            src="/assets/images/portfolio/data-lake/data-lake-stale-clients.png"
            alt="Client segmentation scatter plot — AUM vs. engagement frequency with quadrant classification: Core Relationships, At Risk, Over-Serviced, and Dormant"
            width={1200}
            height={675}
            unoptimized
            className="w-full"
          />
        </div>
        <p className="mt-2 font-mono text-xs text-text-tertiary">
          Client segmentation — AUM vs. engagement frequency with quadrant
          classification (Core, At Risk, Over-Serviced, Dormant) across 927
          households
        </p>
      </section>

      <section className="mt-10">
        <div className="rounded-lg border border-surface-border overflow-hidden">
          <Image
            src="/assets/images/portfolio/data-lake/data-lake-segmentation.png"
            alt="POPS dashboard overview showing total AUM, maturity ladder, strategy allocation, protection types, and risk alerts"
            width={1200}
            height={675}
            unoptimized
            className="w-full"
          />
        </div>
        <p className="mt-2 font-mono text-xs text-text-tertiary">
          POPS dashboard — structured notes overview with maturity ladder,
          strategy allocation, protection types, and real-time risk alerts
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-text-primary">
          Key Results
        </h2>
        <ul className="mt-4 space-y-4">
          <li className="border-l-2 border-brand-200 pl-4">
            <p className="font-medium text-text-primary">
              2 platforms &rarr; 1 unified SQL layer
            </p>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">
              17 Gold tables auto-synced nightly with schema evolution handled
              automatically.
            </p>
          </li>
          <li className="border-l-2 border-brand-200 pl-4">
            <p className="font-medium text-text-primary">
              Stale client visibility
            </p>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">
              2,775 active contacts scored by engagement recency — advisors
              immediately identified 1,104 clients with zero notes or reviews.
            </p>
          </li>
          <li className="border-l-2 border-brand-200 pl-4">
            <p className="font-medium text-text-primary">
              POPS risk monitoring
            </p>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">
              Real-time concentration alerts (&gt;25% single bank exposure)
              across $37.3M in structured notes, replacing manual spreadsheet
              tracking.
            </p>
          </li>
          <li className="border-l-2 border-brand-200 pl-4">
            <p className="font-medium text-text-primary">
              Zero-downtime pipeline
            </p>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">
              Bronze/Silver/Gold layers with date fallback logic and incremental
              loading — no missed syncs from UTC midnight crossover.
            </p>
          </li>
        </ul>
      </section>

      <section className="mt-10 mb-4">
        <Link
          href="/portfolio"
          className="font-mono text-sm text-brand-500 hover:text-brand-600 transition-colors"
        >
          &larr; Back to Portfolio
        </Link>
      </section>
    </div>
  );
}
