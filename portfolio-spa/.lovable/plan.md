
# Boomika Nallasivam — Developer Portfolio

A single-page dark portfolio built on the existing TanStack Start setup. All sections live on the home route (`src/routes/index.tsx`) with smooth-scroll anchor navigation and a fixed top nav.

## Design system (src/styles.css)
- Background `#0f0f0f` (deep near-black), surface `#16161a`, border `rgba(255,255,255,0.08)`
- Accent: violet `#7c3aed` with glow `#a78bfa`; gradient `linear-gradient(135deg, #7c3aed, #a78bfa)`
- Typography: Space Grotesk (display) + Inter (body), loaded via `<link>` in `__root.tsx`, registered in `@theme`
- Tokens for `--shadow-glow`, `--gradient-primary`, `--surface-glass` (glassmorphism: bg + backdrop-blur + border)
- Update light/dark oklch tokens so shadcn primitives match the dark palette
- Reusable utilities: `.glass-card`, `.glow-hover`, `.text-gradient`

## Sections (src/components/portfolio/*)
1. **Nav** — fixed top, blurred bg, anchor links (About, Skills, Projects, Education, Contact)
2. **Hero** — name, animated typing roles (custom hook cycling through 3 titles), subtitle, two CTAs (`View Projects` smooth-scrolls; `GitHub` external link), subtle background radial gradient + grid pattern
3. **About** — circular avatar placeholder + bio paragraph, two-column on desktop
4. **Skills** — grouped badges (Frontend, Backend, Database, AI/ML, Tools, Languages) using shadcn Badge with category icons from lucide-react
5. **Projects** — 4 glass-morphism cards in responsive grid; QueryGenie marked Featured (spans 2 cols on desktop); each card: title, badge chips, description, tech stack row, GitHub/Live links; hover glow shadow
6. **Education** — single card with institution, degree, dates
7. **Contact** — GitHub/email links + shadcn form (Name, Email, Message) using react-hook-form + zod; submit shows sonner toast (frontend-only, no backend)
8. **Footer** — "Built with ❤️ by Boomika Nallasivam · 2026"

## Animations
- Scroll reveal hook (`useInView` via IntersectionObserver) toggling `animate-fade-in` / translate-y on each section
- Typing effect: custom `useTypewriter` hook cycling the three roles
- Smooth scroll via `scroll-behavior: smooth` on html
- Hover scale + glow on project cards and CTAs

## SEO (root + index head)
- Title: "Boomika Nallasivam — Full Stack Developer & AI Enthusiast"
- Meta description, og:title/description/type, twitter:card
- Single H1 (name in hero), semantic `<section>` with ids, alt text on avatar

## Files to create
- `src/components/portfolio/Nav.tsx`
- `src/components/portfolio/Hero.tsx`
- `src/components/portfolio/About.tsx`
- `src/components/portfolio/Skills.tsx`
- `src/components/portfolio/Projects.tsx`
- `src/components/portfolio/Education.tsx`
- `src/components/portfolio/Contact.tsx`
- `src/components/portfolio/Footer.tsx`
- `src/hooks/use-typewriter.ts`
- `src/hooks/use-reveal.ts`

## Files to edit
- `src/styles.css` — tokens, fonts, dark palette, utilities
- `src/routes/__root.tsx` — Google Fonts `<link>`, default `dark` class on html, updated meta
- `src/routes/index.tsx` — compose portfolio sections, update head meta
