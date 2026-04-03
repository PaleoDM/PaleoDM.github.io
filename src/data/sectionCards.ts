export interface SectionCardData {
  title: string;
  description: string;
  href: string;
}

export const sectionCards: SectionCardData[] = [
  {
    title: "Portfolio",
    description:
      "AI products. ML infrastructure. A/B testing. See what I've built.",
    href: "/portfolio",
  },
  {
    title: "Publications",
    description:
      "Research articles. White papers. Institutional reports. View my bibliography.",
    href: "/publications",
  },
  {
    title: "Martial Arts",
    description:
      "Student. Sensei. Scholar. Follow me on the warrior's path.",
    href: "/martial-arts",
  },
  {
    title: "Storytelling",
    description:
      "Worldbuilding. Stories. Game design. Let's tell a story together.",
    href: "/storytelling",
  },
];
