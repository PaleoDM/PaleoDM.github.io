export interface PortfolioItem {
  title: string;
  tagline: string;
  href: string;
  tags: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Financial Aid & Retention Dashboard",
    tagline: "Quantifying scholarship impact across 931K students and 12 demographic dimensions.",
    href: "/portfolio/fa-dashboard",
    tags: ["Python", "React", "Analytics", "Dashboard"],
  },
  {
    title: "Blueprint Analyzer",
    tagline: "Dual-engine CV + LLM pipeline that detects rooms, extracts scale, and generates demolition takeoff reports from architectural drawings.",
    href: "/portfolio/blueprint-analyzer",
    tags: ["OpenCV", "GPT-5.2", "FastAPI", "React"],
  },
  {
    title: "AI Room Style Visualizer",
    tagline: "Full-stack platform for high-end remodelers — AI renders, subcontractor management, and blueprint intelligence.",
    href: "/portfolio/design-app",
    tags: ["Generative AI", "React", "Azure AI Foundry", "Full-Stack"],
  },
  {
    title: "Legacy Financial Datalake",
    tagline: "Nightly ETL pipeline and live advisor dashboard turning two disconnected financial platforms into actionable client intelligence.",
    href: "/portfolio/data-lake",
    tags: ["Azure", "Python", "React", "Data Engineering"],
  },
];
