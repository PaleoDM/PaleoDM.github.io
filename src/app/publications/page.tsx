import Script from "next/script";
import { publications, articleCount, reportCount, whitepaperCount } from "@/data/publications";
import { PublicationList } from "@/components/ui/PublicationList";

export const metadata = {
  title: "Publications — Dr. Carlos M. Peredo",
  description:
    "Peer-reviewed publications in paleobiology, marine mammal evolution, and machine learning.",
};

export default function PublicationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 md:py-16">
      <Script
        src="https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js"
        strategy="lazyOnload"
      />

      <section className="border-l-2 border-brand-400 bg-surface-secondary rounded-r-lg p-6 md:p-8">
        <p className="font-mono text-sm text-brand-500 tracking-wide">
          Publications
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-text-primary leading-tight">
          Research &amp; Publications
        </h1>
        <p className="mt-4 text-text-secondary leading-relaxed">
          {articleCount} Peer Reviewed Research | {reportCount} Institutional{" "}
          {reportCount === 1 ? "Report" : "Reports"} | {whitepaperCount} White{" "}
          {whitepaperCount === 1 ? "Paper" : "Papers"}
        </p>
      </section>

      <section className="mt-8 flex flex-wrap gap-3">
        <a
          href="/assets/documents/peredo-resume.pdf"
          download="Peredo, Carlos Mauricio Resume.pdf"
          className="inline-flex items-center gap-2 rounded-lg border border-brand-400 bg-brand-50 px-5 py-2.5 font-mono text-sm text-brand-600 transition-colors hover:bg-brand-100"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Resume
        </a>
        <a
          href="/assets/documents/peredo-cv.pdf"
          download
          className="inline-flex items-center gap-2 rounded-lg border border-surface-border bg-surface-secondary px-5 py-2.5 font-mono text-sm text-text-secondary transition-colors hover:border-brand-400 hover:text-brand-600"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download CV
        </a>
      </section>

      <section className="mt-10">
        <PublicationList publications={publications} />
      </section>
    </div>
  );
}
