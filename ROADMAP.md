# Development Roadmap

## Phase 0: Archive & Clean Slate — COMPLETE
- [x] Commit all unstaged changes
- [x] Create archive/quarto-site branch
- [x] Push archive branch to remote
- [x] Clear working tree on main
- [x] Preserve CNAME

**Success**: `archive/quarto-site` exists on remote; `main` is clean.

## Phase 1: Next.js Scaffold — COMPLETE
- [x] Scaffold Next.js 16 with App Router, TypeScript, Tailwind v4
- [x] Configure static export for GitHub Pages
- [x] Set up route structure for all sections
- [x] Migrate assets from archive to public/assets/
- [x] Create CLAUDE.md and ROADMAP.md
- [x] Verify build works (npm run build produces out/)

**Success**: `npm run build` produces `out/` with all routes, CNAME, and assets.

## Phase 2: Layout Shell — COMPLETE
- [x] Root layout with dark navy theme (#001731)
- [x] Navbar component (Libre Baskerville, white links, responsive hamburger on mobile)
- [x] Footer component (Google Scholar, Project Inquiries, Request Reference links)
- [x] Global typography (Libre Baskerville headers, Montserrat body via Google Fonts)
- [x] Tailwind v4 design tokens in globals.css (@theme directive)
- [x] Deploy to GitHub Pages, verify CNAME works

**Success**: All pages share nav + footer, correct fonts load, dark theme applies, site is live at www.peredocm.com.

## Phase 3: Home Page — COMPLETE
- [x] Text-forward intro section (career arc, no hero photo)
- [x] 5-card section grid (Portfolio, Publications, Research, Martial Arts, Storytelling)
- [x] SectionCard component with teal hover states
- [x] Section cards data in src/data/sectionCards.ts

**Success**: Home page renders text-forward intro and 5 clickable section cards.

## Phase 4: Publications Page — COMPLETE
- [x] Structured publications data in src/data/publications.ts (23 papers)
- [x] Publication list component (DOI links, bold author name)
- [x] Altmetric badge integration (script + embed divs)
- [x] CV and Resume download buttons
- [x] Search and year filter
- [x] Merged Research into Publications — /research redirects to /publications
- [x] Removed Research from Navbar

**Success**: All 23 publications render with working DOI links and Altmetric badges.

## Phase 5: Portfolio Section — COMPLETE
- [x] Portfolio grid page (4 case study cards with thumbnails)
- [x] FA Dashboard sub-page (React advisor dashboard, challenge/solution format)
- [x] Blueprint Analyzer sub-page (computer vision floor plan analysis)
- [x] Design App sub-page (Code.org prototype testing)
- [x] Data Lake sub-page (ETL pipeline and advisor dashboard)

**Success**: All 4 case studies render with images, tech tags, and full content.

## Phase 6: Remaining Sections — COMPLETE
- [x] Storytelling page (Critters & Catastrophes + Arlowe's Culinary Quest PDF downloads)
- [x] Martial Arts / TCD page (lineage chart, Code of Ethics, dojo info)

**Success**: Both pages render with all content and downloadable assets.

## Phase 7: Polish & Deploy
- [ ] Responsive design pass (mobile, tablet, desktop)
- [ ] Accessibility audit (alt text, keyboard nav, contrast ratios)
- [ ] Performance pass (image compression, lazy loading)
- [ ] SEO metadata (title, description, OG tags per page)
- [ ] Final GitHub Pages deployment
- [ ] Verify www.peredocm.com serves the new site

**Success**: Site is live, fast, accessible, and looks great on all devices.
