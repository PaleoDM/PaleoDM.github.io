# CLAUDE.md — Architecture Rules

## Project
Personal website for Dr. Carlos Mauricio Peredo
- URL: www.peredocm.com
- Hosted on GitHub Pages (static export)
- Repo: taichuandoaddct/taichuandoaddct.github.io

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 (CSS-based config, NOT JS config)
- **Deployment**: Static export (`output: 'export'`) to GitHub Pages
- **Package manager**: npm

## Design System
- **Theme**: Light, clean, subtly techy. White backgrounds, near-black text, muted teal accent.
- **Background**: #ffffff (white primary), #f8f9fa (light gray secondary/cards)
- **Text**: #1a1a2e (primary), #4a4a5a (secondary), #7a7a8a (tertiary)
- **Accent (brand)**: Muted teal — #3d9295 (links/hover), #2a7a7d (darker), full scale from brand-50 to brand-900
- **Borders**: #e2e4e8
- **Body font**: Inter (400, 500, 600)
- **Mono accent font**: JetBrains Mono (400, 500) — used for labels, tags, dates, footer links
- **Forbidden**: Gradient backgrounds, blog features, gradient text effects, dark themes, purple anything, "vibe coded" aesthetics, hero photo bars, particle effects

## Architecture Rules
1. All pages use App Router file-system routing under `src/app/`
2. No `use client` unless the component genuinely needs browser APIs or interactivity
3. Prefer Server Components by default
4. Static assets live in `public/assets/` with kebab-case filenames (no spaces)
5. Structured data (publications, portfolio items) lives in `src/data/` as typed TypeScript arrays
6. Shared layout components (Navbar, Footer) live in `src/components/layout/`
7. Reusable UI primitives live in `src/components/ui/`
8. Import alias: `@/*` maps to `src/*`
9. No external UI component libraries (no shadcn, no MUI) — build from Tailwind
10. Images use Next.js `<Image>` with `unoptimized` (static export, no server optimization)

## Build & Deploy
- `npm run dev` — local development server
- `npm run build` — produces static export in `out/`
- The `out/` directory is deployed to GitHub Pages
- `public/CNAME` ensures custom domain survives deployment

## Current Phase
Phase 3: Home Page (next up)

## Phase Status
| Phase | Name | Status |
|-------|------|--------|
| 0 | Archive & Clean Slate | Complete |
| 1 | Next.js Scaffold | Complete |
| 2 | Layout Shell | Complete |
| 3 | Home Page | Next |
| 4 | Research Page | Pending |
| 5 | Portfolio Section | Pending |
| 6 | Remaining Sections | Pending |
| 7 | Polish & Deploy | Pending |

## Sections
| Route | Content |
|-------|---------|
| `/` | Landing page — text-forward intro, career arc, section cards |
| `/portfolio` | AI product portfolio (collaborative build) |
| `/publications` | Filterable list of publications — data-driven from src/data/publications.ts |
| `/research` | Scientific background — biographical, not programmatic |
| `/martial-arts` | Tai Chuan Do — dojo, lineage, philosophy, code of ethics |
| `/storytelling` | Gateway — World of Astoria (D&D) + educational games |

## Footer Links
- Google Scholar: https://scholar.google.com/citations?user=IZRnfS0AAAAJ&hl=en
- Project Inquiries: https://docs.google.com/forms/d/e/1FAIpQLSdxbH03CpaKTalBdizuW275xrO2VZ2KYM1sM98b5XTWRyxAhg/viewform?usp=header
- Request Reference: https://docs.google.com/forms/d/e/1FAIpQLSeFxmpSRlH2oiHq5F6XDiFLehMtkKtf9iciqByCT1w2DkPVjA/viewform?usp=header
