import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "AI Room Style Visualizer — Dr. Carlos M. Peredo",
  description:
    "Full-stack AI app that generates photorealistic room redesigns from a single photo in under 60 seconds.",
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
          AI-Powered Room Style Visualizer
        </h1>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Upload a room photo, pick a design style, and see photorealistic AI
          renders in under 60 seconds.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "React",
            "Vite",
            "TypeScript",
            "Express",
            "Azure AI Foundry",
            "gpt-image-1.5",
            "FLUX.1-Kontext-pro",
            "Puppeteer",
            "Sharp",
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
          High-end residential remodelers struggle to help clients visualize what
          a redesigned room will actually look like. Mood boards and material
          samples only go so far — clients need to see their room transformed,
          not a generic stock photo. The hard part was making AI-generated
          renders convincing enough to use in a live client consultation, while
          preserving the room&apos;s actual architecture (walls, windows, doors,
          proportions).
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-text-primary">
          The Approach
        </h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          I built a full-stack web app where a remodeler uploads a room photo,
          selects from a curated library of design styles (Island Chic, Japandi,
          Warm Industrial, etc.), and gets back 2–3 photorealistic variations of
          that room in the chosen style. The core of the system is a style prompt
          library — each style is a carefully crafted transformation instruction
          that tells the AI model exactly what materials, colors, lighting, and
          furniture to apply while anchoring the room&apos;s original layout.
        </p>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Both gpt-image-1.5 and FLUX.1-Kontext-pro are wired up through Azure
          AI Foundry with a UI toggle so the remodeler can A/B compare models per
          render. Variations are generated via parallel API calls, and the app
          includes a one-click PDF deck generator (Puppeteer, server-side) so the
          remodeler walks out of the consultation with a branded before/after
          leave-behind.
        </p>
      </section>

      <section className="mt-10">
        <div className="rounded-lg border border-surface-border overflow-hidden">
          <Image
            src="/assets/images/portfolio/design-app/design-app-projects.png"
            alt="Project dashboard showing active builds with budgets, timelines, and subcontractor counts"
            width={1200}
            height={675}
            unoptimized
            className="w-full"
          />
        </div>
        <p className="mt-2 font-mono text-xs text-text-tertiary">
          Project dashboard — active builds with budgets, timelines, and
          subcontractor tracking
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
            alt="Design Studio showing AI-generated room renders in different styles with publish workflow"
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
              Sub-60-second render pipeline
            </p>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">
              2–3 photorealistic variations generated in parallel from a single
              room photo.
            </p>
          </li>
          <li className="border-l-2 border-brand-200 pl-4">
            <p className="font-medium text-text-primary">
              Dual-model A/B comparison
            </p>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">
              gpt-image-1.5 and FLUX.1-Kontext-pro running side-by-side,
              selectable per request, letting us validate which model produces
              more convincing results.
            </p>
          </li>
          <li className="border-l-2 border-brand-200 pl-4">
            <p className="font-medium text-text-primary">
              Zero-design-effort PDF decks
            </p>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">
              Automated before/after leave-behind generated server-side, ready to
              hand a client in seconds.
            </p>
          </li>
          <li className="border-l-2 border-brand-200 pl-4">
            <p className="font-medium text-text-primary">
              Blueprint Intelligence feature
            </p>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">
              Floor plan upload with GPT vision-powered room extraction, editable
              scope lists, and budget import for full project planning.
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
