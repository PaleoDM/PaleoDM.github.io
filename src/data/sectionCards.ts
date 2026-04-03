export interface SectionCardData {
  title: string;
  description: string;
  href: string;
}

export const sectionCards: SectionCardData[] = [
  {
    title: "Portfolio",
    description:
      "AI products, computer vision pipelines, A/B testing frameworks, and geospatial tools — built to put machine learning in people's hands.",
    href: "/portfolio",
  },
  {
    title: "Publications",
    description:
      "Peer-reviewed papers on whale evolution, mammal phylogenetics, and the fossil record — spanning over a decade of scientific research.",
    href: "/publications",
  },
  {
    title: "Research",
    description:
      "The scientific thread running through everything: how mammals adapted to ocean life, and what the fossil record can teach us about deep-time change.",
    href: "/research",
  },
  {
    title: "Martial Arts",
    description:
      "Tai Chuan Do — a martial art rooted in discipline, respect, and continuous growth. Teaching and training since 2004.",
    href: "/martial-arts",
  },
  {
    title: "Storytelling",
    description:
      "Worldbuilding, tabletop games, and educational design — from the World of Astoria to interactive learning experiences.",
    href: "/storytelling",
  },
];
