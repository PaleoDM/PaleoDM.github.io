import { HandsDivider } from "@/components/ui/HandsDivider";
import { SectionCard } from "@/components/ui/SectionCard";
import {
  DAN_ORDINALS,
  DAN_RANKS,
  credentials,
  highestDan,
  martialArtsPaths,
  type StyleCredential,
} from "@/data/martialArts";

function currentRank(credential: StyleCredential) {
  const earned = DAN_RANKS.filter((rank) => credential.ranks[rank]);
  return earned[earned.length - 1];
}

export const metadata = {
  title: "Martial Arts — Dr. Carlos Mauricio Peredo",
  description:
    "Sensei Carlos Mauricio Peredo — 4th Dan black belt in Tai Chuan Do Karate and 3rd Dan black belt in Hakutsuru-Tatsu Shorin-Ryu.",
};

const about = [
  {
    label: "Student",
    text: "Sensei Carlos began training in Tai Chuan Do Karate at nine years old, when he chanced upon free classes offered as a community service. As he transitioned from student to instructor and earned his Sensei Certification, he began actively looking to broaden his range as an instructor. This led to cross training in a number of different styles, and eventually another black belt in Hakutsuru-Tatsu Shorin-Ryu. Sensei Carlos has also cross-trained in a variety of styles, including Kobudo (with expertise in tonfa), Aikido, Tae Kwon Do, and Wing Chun. When not practicing martial arts, he enjoys reading fantasy and playing tabletop roleplaying games.",
  },
  {
    label: "Sensei",
    text: "In 2017, Sensei Carlos founded a dojo in Columbia, Maryland, teaching Tai Chuan Do and Kobudo. He served as its lead instructor for five years. In 2022, he stepped into the role of supervising instructor, passing day-to-day instruction to a junior sensei. Under his leadership, the school produced three shodans. Sensei Carlos has also served as a senior member and advisor on the Maryland Tai Chuan Do governing board since 2016.",
  },
];

export default function MartialArtsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 md:py-16">
      <section className="border-l-2 border-brand-400 bg-surface-secondary rounded-r-lg p-6 md:p-8">
        <p className="font-mono text-sm text-brand-500 tracking-wide">
          Martial Arts
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-text-primary leading-tight">
          Sensei Carlos Mauricio Peredo
        </h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {credentials.map((credential) => (
            <span
              key={credential.style}
              className="font-mono text-xs text-brand-500 bg-brand-50 border border-brand-200 rounded px-2 py-0.5"
            >
              {highestDan(credential)} — {credential.style}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-text-primary">
          About Sensei Carlos
        </h2>
        <div className="mt-4 space-y-6">
          {about.map(({ label, text }) => (
            <div key={label}>
              <p className="font-mono text-sm text-brand-500 tracking-wide">
                {label}
              </p>
              <p className="mt-2 text-text-secondary leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <HandsDivider />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-text-primary">
          Rank History
        </h2>
        <div className="mt-4 overflow-x-auto rounded-lg border border-surface-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-secondary">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold text-text-primary">
                  Rank
                </th>
                {credentials.map((credential) => (
                  <th key={credential.style} scope="col" className="px-4 py-3 text-center">
                    <span className="block font-semibold text-text-primary">
                      {credential.style}
                    </span>
                    <span className="block font-mono text-xs font-normal text-text-tertiary">
                      Since {credential.since}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DAN_RANKS.map((rank, i) => (
                <tr key={rank} className="border-t border-surface-border">
                  <th scope="row" className="px-4 py-3 font-normal">
                    <span className="block font-medium text-text-primary">
                      {rank}
                    </span>
                    <span className="block font-mono text-xs text-text-tertiary">
                      {DAN_ORDINALS[i]} Dan
                    </span>
                  </th>
                  {credentials.map((credential) => {
                    const year = credential.ranks[rank];
                    return (
                      <td
                        key={credential.style}
                        className={`px-4 py-3 text-center font-mono ${
                          rank === currentRank(credential)
                            ? "font-medium text-brand-500"
                            : year
                              ? "text-text-secondary"
                              : "text-text-tertiary"
                        }`}
                      >
                        {year ?? "—"}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <HandsDivider />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-text-primary">
          Styles &amp; Training
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {martialArtsPaths.map((path) => (
            <SectionCard key={path.href} {...path} centered />
          ))}
        </div>
      </section>
    </div>
  );
}
