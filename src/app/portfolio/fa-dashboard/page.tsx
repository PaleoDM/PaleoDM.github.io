import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Financial Aid & Retention Dashboard — Dr. Carlos Mauricio Peredo",
  description:
    "Interactive tool quantifying WGU scholarship impact across 931K students and 12 demographic dimensions.",
};

export default function FADashboardPage() {
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
          Financial Aid &amp; Retention Dashboard
        </h1>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Interactive tool that quantifies how WGU scholarships impact retention
          across 931K students and 12 demographic dimensions.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Python", "pandas", "NumPy", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Bash"].map(
            (tag) => (
              <span
                key={tag}
                className="font-mono text-xs text-brand-500 bg-brand-50 border border-brand-200 rounded px-2 py-0.5"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-text-primary">
          The Challenge
        </h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          WGU awards scholarships to roughly 5% of its nearly one million
          students, but the scholarship team had no way to see which students
          benefit most — or by how much. Population averages masked critical
          subgroup differences: a $3,000 award has a very different proportional
          impact on a first-generation student than a non-first-gen student, and
          a group that looks strong at 7-month retention can diverge sharply by
          the 36-month mark. The combinatorial space — 12 demographic variables,
          6 retention timepoints, 12 scholarship tiers — was too large for
          spreadsheets or static reports.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-text-primary">
          The Approach
        </h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          I built an end-to-end pipeline that takes three institutional source
          systems (enrollment, demographics, financial aid), deduplicates them to
          one row per student, cleans and bins 12 independent variables, and
          computes baselines, subgroup retention rates, and
          scholarship-by-demographic cross-tabulations. The key metric is
          proportional impact — (Subgroup&nbsp;Rate&nbsp;&minus;&nbsp;Baseline)&nbsp;/&nbsp;Baseline — which
          normalizes comparisons across groups with very different base rates.
        </p>
        <p className="mt-4 text-text-secondary leading-relaxed">
          The pipeline outputs two static CSVs that feed a React + TypeScript
          frontend with two views: a subpopulation baselines table and a
          scholarship &times; demographics heatmap with deviation color-coding.
          The whole thing ships as a single self-contained HTML file and rebuilds
          from raw data with one command.
        </p>
      </section>

      <section className="mt-10">
        <div className="rounded-lg border border-surface-border overflow-hidden">
          <Image
            src="/assets/images/portfolio/fa-dashboard/fa-dashboard-baselines.png"
            alt="Subpopulation baselines view showing retention rates by marital status across six timepoints"
            width={1200}
            height={675}
            unoptimized
            className="w-full"
          />
        </div>
        <p className="mt-2 font-mono text-xs text-text-tertiary">
          Subpopulation baselines — retention rates sliced by demographic
          variable with proportional impact indicators
        </p>
      </section>

      <section className="mt-10">
        <div className="rounded-lg border border-surface-border overflow-hidden">
          <Image
            src="/assets/images/portfolio/fa-dashboard/fa-dashboard-heatmap.png"
            alt="Scholarship amount by age group heatmap showing graduation rates with deviation color-coding"
            width={1200}
            height={675}
            unoptimized
            className="w-full"
          />
        </div>
        <p className="mt-2 font-mono text-xs text-text-tertiary">
          Scholarship &times; demographics heatmap — deviation from baseline
          encoded as color, amber rings flag cells with N&nbsp;&lt;&nbsp;30
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-text-primary">
          Key Results
        </h2>
        <ul className="mt-4 space-y-4">
          <li className="border-l-2 border-brand-200 pl-4">
            <p className="font-medium text-text-primary">
              Any scholarship outperforms no scholarship
            </p>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">
              The 839K students with $0 in aid drag the baseline down. Every
              scholarship tier beats it at all six timepoints. At graduation:
              39.7% ($0) vs. 41.4% (baseline).
            </p>
          </li>
          <li className="border-l-2 border-brand-200 pl-4">
            <p className="font-medium text-text-primary">
              Even $1–500 makes an outsized impact
            </p>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">
              That tier lifts 7-month retention from 74% to 86% (+13%
              proportional) and graduation from 39.7% to 50.4% (+22%
              proportional). The biggest step is from nothing to any award at
              all.
            </p>
          </li>
          <li className="border-l-2 border-brand-200 pl-4">
            <p className="font-medium text-text-primary">
              7-month retention predicts graduation — except for age
            </p>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">
              Ages 28–32 are #1 at 7 months (86%) but #7 in graduation (49%).
              Ages 51–60 are #9 at 7 months (77%) but #1 in graduation (58%).
            </p>
          </li>
          <li className="border-l-2 border-brand-200 pl-4">
            <p className="font-medium text-text-primary">
              Adopted as a primary decision-making tool
            </p>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">
              Delivered to senior stakeholders for regular use in scholarship
              strategy and aid targeting.
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
