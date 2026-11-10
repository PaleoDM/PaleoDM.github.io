import type { SectionCardData } from "@/data/sectionCards";

export const DAN_RANKS = ["Shodan", "Nidan", "Sandan", "Yondan"] as const;
export const DAN_ORDINALS = ["1st", "2nd", "3rd", "4th"] as const;

export type DanRank = (typeof DAN_RANKS)[number];

export interface StyleCredential {
  style: string;
  since: number;
  /** Year each dan rank was earned */
  ranks: Partial<Record<DanRank, number>>;
}

export const credentials: StyleCredential[] = [
  {
    style: "Tai Chuan Do Karate",
    since: 1999,
    ranks: { Shodan: 2001, Nidan: 2007, Sandan: 2014, Yondan: 2020 },
  },
  {
    style: "Hakutsuru-Tatsu Shorin-Ryu",
    since: 2015,
    ranks: { Shodan: 2016, Nidan: 2018, Sandan: 2019 },
  },
];

/** Highest dan held in a style, e.g. "4th Dan" */
export function highestDan(credential: StyleCredential): string {
  const earned = DAN_RANKS.filter((rank) => credential.ranks[rank]).length;
  return `${DAN_ORDINALS[earned - 1]} Dan`;
}

export const martialArtsPaths: SectionCardData[] = [
  {
    title: "Tai Chuan Do\nKarate",
    description: "Since 1999",
    cta: "Learn More",
    href: "/martial-arts/tai-chuan-do",
  },
  {
    title: "Hakutsuru-Tatsu\nShorin-Ryu",
    description: "Since 2015",
    cta: "Learn More",
    href: "/martial-arts/shorin-ryu",
  },
  {
    title: "Other\nTrainings",
    description: "Cross trainings",
    cta: "Learn More",
    href: "/martial-arts/other-training",
  },
];
