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

## Phase 3: Home Page
- [ ] Hero section with Seattle boat image + text overlay
- [ ] Intro paragraph
- [ ] 4-card section grid (Research, Portfolio, Storytelling, Martial Arts) with icons
- [ ] Button component (blue #0070F0, pill shape, hover darkens + scale)

**Success**: Home page renders hero, intro, and 4 clickable section cards.

## Phase 4: Research Page
- [ ] Structured publications data in src/data/publications.ts (23 papers)
- [ ] Publication list component (DOI links, bold author name)
- [ ] Altmetric badge integration (script + embed divs)
- [ ] CV and Resume download buttons
- [ ] Lab overview image

**Success**: All 23 publications render with working DOI links and Altmetric badges.

## Phase 5: Portfolio Section
- [ ] Portfolio grid page (4 case study cards with thumbnails)
- [ ] Comp Vision sub-page (ResNet18 skull identifier, challenge/solution format)
- [ ] A/B Testing sub-page (Code.org prototype testing, stats)
- [ ] RELIC Bot sub-page (Discord bot, tabletop gaming)
- [ ] Geospatial sub-page (PaleoDB fossil prediction, GIS)

**Success**: All 4 case studies render with images, expandable sections, and full content.

## Phase 6: Remaining Sections
- [ ] Storytelling page (Critters & Catastrophes PDF download)
- [ ] Martial Arts / TCD page (lineage chart, Code of Ethics, dojo info)

**Success**: Both pages render with all content and downloadable assets.

## Phase 7: Polish & Deploy
- [ ] Responsive design pass (mobile, tablet, desktop)
- [ ] Accessibility audit (alt text, keyboard nav, contrast ratios)
- [ ] Performance pass (image compression, lazy loading)
- [ ] SEO metadata (title, description, OG tags per page)
- [ ] Final GitHub Pages deployment
- [ ] Verify www.peredocm.com serves the new site

**Success**: Site is live, fast, accessible, and looks great on all devices.
