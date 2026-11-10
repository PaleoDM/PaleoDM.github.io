import Image from "next/image";
import Link from "next/link";
import { HandsDivider } from "@/components/ui/HandsDivider";

export const metadata = {
  title: "Tai Chuan Do — Dr. Carlos Mauricio Peredo",
  description:
    "Sensei Carlos Mauricio Peredo — 4th Dan in Tai Chuan Do Karate. Lineage, Code of Ethics, and dojo information.",
};

export default function TaiChuanDoPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 md:py-16">
      <Link
        href="/martial-arts"
        className="font-mono text-sm text-brand-500 hover:text-brand-600 transition-colors"
      >
        &larr; Back to Martial Arts
      </Link>

      <section className="mt-6 border-l-2 border-brand-400 bg-surface-secondary rounded-r-lg p-6 md:p-8">
        <p className="font-mono text-sm text-brand-500 tracking-wide">
          Martial Arts
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-text-primary leading-tight">
          Tai Chuan Do Karate
        </h1>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="font-mono text-xs text-brand-500 bg-brand-50 border border-brand-200 rounded px-2 py-0.5">
            4th Dan
          </span>
          <span className="font-mono text-xs text-brand-500 bg-brand-50 border border-brand-200 rounded px-2 py-0.5">
            Since 1999
          </span>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-text-primary">
          About Tai Chuan Do
        </h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Tai Chuan Do Karate was founded by Grand Master Ken Champ on September
          30, 1977. Grand Master Champ sought to combine the myriad of different
          styles into a combat art form that emphasized the grace and discipline
          of traditional martial styles with the combat utility of the fighting
          styles emerging in the 1970s.
        </p>
      </section>

      <HandsDivider />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-text-primary">
          Sensei Lineage
        </h2>
        <div className="mt-4 rounded-lg border border-surface-border overflow-hidden">
          <Image
            src="/assets/images/general/tcd-lineage.jpg"
            alt="Tai Chuan Do sensei lineage chart — from Grand Master Ken Champ through Master Jeremy Ephraim to Sensei Carlos Peredo"
            width={1200}
            height={800}
            unoptimized
            className="w-full"
          />
        </div>
      </section>

      <HandsDivider />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-text-primary">
          Code of Ethics
        </h2>
        <div className="mt-4 space-y-4">
          <p className="text-text-secondary leading-relaxed">
            As a martial artist, my fundamental duty is to serve GOD and MANKIND;
            to safeguard lives and property; to protect the innocent against
            deception; the weak against oppression or intimidation; the peaceful
            against violence or disorder; and to respect the Constitutional
            Rights of all men to liberty, equality, and justice.
          </p>
          <p className="text-text-secondary leading-relaxed">
            I promise, I will keep my private life unsullied as an example to
            all; maintain courageous calm in the face of danger, scorn, or
            ridicule; develop self-restraint; and be constantly mindful of the
            welfare of others, honest in thought and deed in my personal life. I
            will be exemplary in observing the laws of the land and the
            regulations of Tai Chuan Do Schools, respectful of the other students
            and instructors.
          </p>
          <p className="text-text-secondary leading-relaxed">
            As a Tai Chuan Do student/instructor, I shall regard the discharge of
            my training. Recognizing my responsibilities as a trust; I shall
            study diligently and pay sincere attention to self-improvement; shall
            strive to make the best possible application of science to the art of
            self-defense; and shall strive for effective leadership and personal
            happiness in the field of human relationships. I shall appreciate the
            importance and responsibility of my rank and training and hold it to
            the most honorable high standards.
          </p>
        </div>
      </section>

      <div className="mt-12 mb-4 flex justify-center">
        <Image
          src="/assets/images/general/tiger.png"
          alt="Tiger — Tai Chuan Do symbol"
          width={120}
          height={120}
          unoptimized
          className="w-20"
        />
      </div>
    </div>
  );
}
