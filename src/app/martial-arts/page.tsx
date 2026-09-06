import Image from "next/image";

export const metadata = {
  title: "Tai Chuan Do — Dr. Carlos Mauricio Peredo",
  description:
    "Sensei Carlos Mauricio Peredo — 4th degree black belt in Tai Chuan Do Karate. Lineage, Code of Ethics, and dojo information.",
};

function HandsDivider() {
  return (
    <div className="mt-10 flex flex-col items-center gap-4">
      <Image
        src="/assets/images/general/hands.png"
        alt=""
        width={80}
        height={80}
        unoptimized
        className="w-16"
      />
      <hr className="w-full border-brand-400" />
    </div>
  );
}

export default function MartialArtsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 md:py-16">
      <section className="border-l-2 border-brand-400 bg-surface-secondary rounded-r-lg p-6 md:p-8">
        <p className="font-mono text-sm text-brand-500 tracking-wide">
          Martial Arts
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-text-primary leading-tight">
          Tai Chuan Do Karate
        </h1>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="font-mono text-xs text-brand-500 bg-brand-50 border border-brand-200 rounded px-2 py-0.5">
            4th Degree Black Belt — Tai Chuan Do Karate
          </span>
          <span className="font-mono text-xs text-brand-500 bg-brand-50 border border-brand-200 rounded px-2 py-0.5">
            3rd Degree Black Belt — Hakutsuru-Tatsu Shorin-Ryu
          </span>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-text-primary">
          About Sensei Carlos
        </h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Sensei Carlos began his martial arts journey in 1999, training under
          Master Jeremy Ephraim. In the years since, Sensei Carlos has dedicated
          himself to perfecting his craft and his mastery of Tai Chuan Do, while
          training broadly to better understand the origins and inspirations for
          the style. In 2017, he founded a dojo in Columbia, Maryland. Now living
          in Cincinnati, Sensei Carlos hopes to continue his martial arts journey
          by bringing Tai Chuan Do to Ohio.
        </p>
      </section>

      <HandsDivider />

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
