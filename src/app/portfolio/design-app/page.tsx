import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Remodeling Project Portal — Dr. Carlos M. Peredo",
  description:
    "Full-stack construction management portal with AI-powered design visualization and client-facing dashboards.",
};

export default function DesignAppPage() {
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
          Remodeling Project Portal
        </h1>
        <p className="mt-4 text-text-secondary leading-relaxed">
          A full-stack construction management portal with AI-powered design
          visualization and client-facing dashboards.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "React 19",
            "Vite",
            "TypeScript",
            "Express 5",
            "Azure AI Foundry",
            "gpt-image-1.5",
            "GPT-5.2 Vision",
            "React Router",
            "Multer",
            "Node.js",
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
          High-end residential remodelers manage million-dollar projects across
          dozens of subcontractors, but their clients have zero visibility into
          progress, budget, or design direction. The remodeler needed a single
          tool where staff could manage the full project lifecycle — subs,
          budgets, progress updates, AI room renders — while selectively
          publishing a curated view to clients. The hard part was building dual
          visibility: staff see everything, clients see only what&apos;s been
          approved for sharing, all controlled by simple toggles.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-text-primary">
          The Approach
        </h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          I built a dual-portal system — a staff dashboard and a PIN-gated
          client portal — backed by a shared data layer with publish/draft
          controls on every piece of content. Staff manage projects across six
          tabs: overview, subcontractors, budget, Design Studio, blueprints, and
          progress timeline. The Design Studio integrates Azure AI
          Foundry&apos;s gpt-image-1.5 to transform uploaded room photos into
          styled renders across five curated design styles.
        </p>
        <p className="mt-4 text-text-secondary leading-relaxed">
          A Blueprint Intelligence feature uses GPT vision to analyze uploaded
          floor plans, extract rooms with square footage estimates, and import
          them directly into the project budget. On the client side, a 4-digit
          PIN unlocks a read-only portal showing only published renders, progress
          updates, and a filtered budget that hides internal markup and overhead
          lines. Two seed projects with realistic Naples/Miami luxury renovation
          data make the demo immediately compelling.
        </p>
      </section>

      <section className="mt-10">
        <div className="rounded-lg border border-surface-border overflow-hidden">
          <Image
            src="/assets/images/portfolio/design-app/design-app-projects.png"
            alt="Staff dashboard showing active projects with status badges, contract values, and subcontractor counts"
            width={1200}
            height={675}
            unoptimized
            className="w-full"
          />
        </div>
        <p className="mt-2 font-mono text-xs text-text-tertiary">
          Staff dashboard — project grid with status badges, contract values,
          timelines, and subcontractor counts
        </p>
      </section>

      <section className="mt-10">
        <div className="rounded-lg border border-surface-border overflow-hidden">
          <Image
            src="/assets/images/portfolio/design-app/design-app-subs.png"
            alt="Subcontractor management view with trade assignments, contacts, budgets, and status tracking"
            width={1200}
            height={675}
            unoptimized
            className="w-full"
          />
        </div>
        <p className="mt-2 font-mono text-xs text-text-tertiary">
          Subcontractor management — trade assignments, budgets, and status
          tracking across the full project
        </p>
      </section>

      <section className="mt-10">
        <div className="rounded-lg border border-surface-border overflow-hidden">
          <Image
            src="/assets/images/portfolio/design-app/design-app-studio.png"
            alt="Design Studio showing AI-generated room renders with style selection and publish workflow"
            width={1200}
            height={675}
            unoptimized
            className="w-full"
          />
        </div>
        <p className="mt-2 font-mono text-xs text-text-tertiary">
          Design Studio — AI-generated room renders with style selection,
          draft/publish workflow, and client-facing gallery
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-text-primary">
          Key Results
        </h2>
        <ul className="mt-4 space-y-4">
          <li className="border-l-2 border-brand-200 pl-4">
            <p className="font-medium text-text-primary">
              Dual-portal architecture
            </p>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">
              Staff see full project data; clients see only published content,
              controlled per-item with a single toggle.
            </p>
          </li>
          <li className="border-l-2 border-brand-200 pl-4">
            <p className="font-medium text-text-primary">
              AI Design Studio
            </p>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">
              Upload a room photo, select a style, get a photorealistic render in
              under 60 seconds, then publish it to the client portal.
            </p>
          </li>
          <li className="border-l-2 border-brand-200 pl-4">
            <p className="font-medium text-text-primary">
              Blueprint-to-budget pipeline
            </p>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">
              Upload a floor plan, AI extracts rooms and square footage, one
              click imports scope items into the project budget.
            </p>
          </li>
          <li className="border-l-2 border-brand-200 pl-4">
            <p className="font-medium text-text-primary">
              Zero-auth client access
            </p>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">
              PIN-gated portal with a copyable share link, no accounts or
              passwords needed.
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
