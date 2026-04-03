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
- **Primary background**: #001731 (dark navy)
- **Accent / buttons**: #0070F0 (blue)
- **Button hover**: #005BB5
- **Header font**: Libre Baskerville (400, 700)
- **Body font**: Montserrat (300, 600)
- **Theme**: Dark, clean, techy
- **Forbidden**: Gradient backgrounds, blog features, gradient text effects, decorative gradients of any kind

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
| `/` | Home — hero image, intro, 4 section cards |
| `/research` | 23 publications with DOI links + Altmetric badges |
| `/portfolio` | Grid of 4 case study cards |
| `/portfolio/comp-vision` | AI Skull Identifier case study |
| `/portfolio/ab-testing` | A/B Prototype Testing case study |
| `/portfolio/relic-bot` | RELIC Bot case study |
| `/portfolio/geospatial` | Geospatial Analyses case study |
| `/storytelling` | Storytelling section |
| `/martial-arts` | Tai Chuan Do / TCD section |

## Footer Links
- Google Scholar: https://scholar.google.com/citations?user=IZRnfS0AAAAJ&hl=en
- Project Inquiries: https://docs.google.com/forms/d/e/1FAIpQLSdxbH03CpaKTalBdizuW275xrO2VZ2KYM1sM98b5XTWRyxAhg/viewform?usp=header
- Request Reference: https://docs.google.com/forms/d/e/1FAIpQLSeFxmpSRlH2oiHq5F6XDiFLehMtkKtf9iciqByCT1w2DkPVjA/viewform?usp=header
