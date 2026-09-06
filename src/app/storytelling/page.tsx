import Link from "next/link";

export const metadata = {
  title: "Storytelling — Dr. Carlos Mauricio Peredo",
  description:
    "Tabletop storytelling games for classroom education. Download Critters & Catastrophes and Arlowe's Culinary Quest for free.",
};

export default function StorytellingPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 md:py-16">
      <section className="border-l-2 border-brand-400 bg-surface-secondary rounded-r-lg p-6 md:p-8">
        <p className="font-mono text-sm text-brand-500 tracking-wide">
          Storytelling
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-text-primary leading-tight">
          Tabletop Games for the Classroom
        </h1>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Telling stories is one of the oldest forms of disseminating
          information, and it sits at the heart of the human experience. My
          research, teaching, and service all emphasize storytelling as a tool
          for crafting deep and intimate narratives. By telling stories, we build
          long-lasting, personal connections between our work and its core
          audience.
        </p>
        <p className="mt-4 text-text-secondary leading-relaxed">
          In pursuit of these efforts, I&apos;ve collaborated to write and
          publish storytelling games for use in the classroom. These games
          facilitate education via narrative-based inquiry and discovery. Download
          a copy for free using the links below.
        </p>
      </section>

      <section className="mt-10">
        <div className="rounded-lg border border-surface-border bg-surface-secondary p-6 md:p-8">
          <p className="font-mono text-sm text-brand-500 tracking-wide">
            Game 01
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-text-primary">
            Critters &amp; Catastrophes
          </h2>
          <p className="mt-1 text-sm text-text-tertiary">
            by Carlos Mauricio Peredo &amp; Molly Peredo
          </p>
          <p className="mt-4 text-text-secondary leading-relaxed">
            The local forest is under threat by The Logging Corporation. Only you
            and your team of heroes stand in their way. The catch? You&apos;re
            all woodland critters. The denizens of the forest are counting on
            you!
          </p>
          <Link
            href="/assets/documents/critters-and-catastrophes.pdf"
            target="_blank"
            className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-white bg-brand-500 hover:bg-brand-600 transition-colors rounded px-4 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </Link>
        </div>
      </section>

      <section className="mt-6">
        <div className="rounded-lg border border-surface-border bg-surface-secondary p-6 md:p-8">
          <p className="font-mono text-sm text-brand-500 tracking-wide">
            Game 02
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-text-primary">
            Arlowe&apos;s Culinary Quest
          </h2>
          <p className="mt-1 text-sm text-text-tertiary">
            by Carlos Mauricio Peredo &amp; Molly Peredo
          </p>
          <p className="mt-4 text-text-secondary leading-relaxed">
            A game of dungeon delving and monster cuisine. You&apos;re an
            unlikely group of adventurers braving the dungeon in the hopes of
            filling your bellies and your coffers. Roll for flavor stats, pick
            your expertise, and cook your way through perilous quests — but watch
            your Hunger, or the dungeon wins.
          </p>
          <Link
            href="/assets/documents/arlowes-culinary-quest.pdf"
            target="_blank"
            className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-white bg-brand-500 hover:bg-brand-600 transition-colors rounded px-4 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </Link>
        </div>
      </section>
    </div>
  );
}
