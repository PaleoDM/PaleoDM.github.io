import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blueprint Analyzer — Dr. Carlos Mauricio Peredo",
  description:
    "AI-powered blueprint analysis that turns architectural drawings into demolition takeoff data in seconds.",
};

export default function BlueprintAnalyzerPage() {
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
          Blueprint Analyzer
        </h1>
        <p className="mt-4 text-text-secondary leading-relaxed">
          AI-powered blueprint analysis that turns architectural drawings into
          demolition takeoff data in seconds.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Python",
            "FastAPI",
            "OpenCV",
            "Pydantic",
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "Azure OpenAI",
            "GPT-5.2",
            "HTML5 Canvas",
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
          Environmental Demolition Group (EDG) was manually tracing vector points
          on architectural blueprints to calculate square footage, wall lengths,
          and material quantities for demolition scoping. It&apos;s slow,
          error-prone, and doesn&apos;t scale. The hard part: blueprints are
          messy — furniture overlaps walls, dashed lines sit on solid ones,
          hallways bleed into rooms through open doorways, and the drawing scale
          is buried in fine print.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-text-primary">
          The Approach
        </h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          I built a dual-engine pipeline that pairs computer vision with AI
          reasoning — OpenCV handles geometry, Azure OpenAI&apos;s GPT-5.2
          handles understanding. The backend ingests a blueprint image, runs it
          through a multi-stage preprocessing pipeline (green line removal,
          adaptive thresholding, intensity filtering to separate walls from
          furniture), then detects room contours and calculates pixel areas.
          Simultaneously, the LLM reads the drawing scale text and infers room
          types from fixtures and layout context.
        </p>
        <p className="mt-4 text-text-secondary leading-relaxed">
          The frontend renders the blueprint on a canvas with colored room
          overlays, a live data table, and a full demolition takeoff summary —
          all recalculating instantly when the user adjusts the scale slider,
          drags a room boundary, or adds/deletes rooms. The key design decision
          was keeping humans in the loop: AI accelerates the workflow, but the
          user always has final say.
        </p>
      </section>

      <section className="mt-10">
        <div className="rounded-lg border border-surface-border overflow-hidden">
          <Image
            src="/assets/images/portfolio/blueprint-analyzer/blueprint-app-overview.png"
            alt="Blueprint upload interface showing file processing settings with scale detection and room detection options"
            width={1200}
            height={675}
            unoptimized
            className="w-full"
          />
        </div>
        <p className="mt-2 font-mono text-xs text-text-tertiary">
          Upload interface — blueprint ingestion with configurable CV and AI
          detection settings
        </p>
      </section>

      <section className="mt-10">
        <div className="rounded-lg border border-surface-border overflow-hidden">
          <Image
            src="/assets/images/portfolio/blueprint-analyzer/blueprint-takeoff.png"
            alt="Blueprint canvas with colored room overlays and numbered room detection, sidebar showing detected rooms table with areas and perimeters"
            width={1200}
            height={675}
            unoptimized
            className="w-full"
          />
        </div>
        <p className="mt-2 font-mono text-xs text-text-tertiary">
          Room detection — 30 rooms identified with colored overlays, live area
          and perimeter calculations, draggable boundaries
        </p>
      </section>

      <section className="mt-10">
        <div className="rounded-lg border border-surface-border overflow-hidden">
          <Image
            src="/assets/images/portfolio/blueprint-analyzer/blueprint-editing.png"
            alt="Demolition takeoff report showing room schedule, line-item cost estimates by category, and grand total"
            width={1200}
            height={675}
            unoptimized
            className="w-full"
          />
        </div>
        <p className="mt-2 font-mono text-xs text-text-tertiary">
          Demolition takeoff — room schedule with line-item cost estimates across
          flooring, walls, doors, ceiling, and totals
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-text-primary">
          Key Results
        </h2>
        <ul className="mt-4 space-y-4">
          <li className="border-l-2 border-brand-200 pl-4">
            <p className="font-medium text-text-primary">
              43 rooms detected, 339 wall segments identified in under 0.1s
            </p>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">
              CV processing only — geometry extraction is near-instant on
              standard architectural drawings.
            </p>
          </li>
          <li className="border-l-2 border-brand-200 pl-4">
            <p className="font-medium text-text-primary">
              18 rooms auto-labeled by type from fixtures alone
            </p>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">
              Bedroom, bathroom, kitchen, etc. — inferred purely from fixture
              layout, no text on the blueprint required.
            </p>
          </li>
          <li className="border-l-2 border-brand-200 pl-4">
            <p className="font-medium text-text-primary">
              Scale extraction + room labeling in ~17s end-to-end
            </p>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">
              Replacing what took manual tracers significantly longer per
              blueprint.
            </p>
          </li>
          <li className="border-l-2 border-brand-200 pl-4">
            <p className="font-medium text-text-primary">
              Instant client-side recalculation
            </p>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">
              Adjusting scale or boundaries updates all square footage, linear
              feet, and takeoff costs with zero backend round-trips.
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
