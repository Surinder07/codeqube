# CodeQube (Next.js + Tailwind)

A Next.js App Router site for CodeQube, an engineering-led consultancy. Content is driven by a small data layer so pages stay consistent and easy to extend.

## Pages
| Route | Description |
| --- | --- |
| `/` | Homepage — hero, company overview, services (vertical tabs), industries, featured case studies, technology expertise, impact, careers & contact CTAs |
| `/services`, `/services/[slug]` | Service index and detail pages (overview, problems, solutions, technologies, approach, benefits, related projects, FAQ) |
| `/projects`, `/projects/[slug]` | Filterable case-study index and full engineering case studies |
| `/careers`, `/careers/[slug]` | Careers overview with searchable/filterable job board, job detail pages and application form |
| `/team` | Leadership, engineering team, values and offices |
| `/quote` | Multi-step quote request form |

## Project structure
- `app/` — routes and `globals.css` (shared utility classes: `.btn-*`, `.card`, `.eyebrow`, `.section`, `.container-x`, …)
- `components/` — page sections (`Hero`, `AboutUs`, `ServicesShowcase`, `Industries`, `Projects`, `TechExpertise`, `Impact`, …) and chrome (`Header`, `Footer`, `PageHero`, `CTASection`)
- `components/ui/` — primitives: `Reveal`/`Stagger` (scroll animations), `Tabs`, `Accordion`, `Counter`, `SectionHeading`, `Icons`
- `lib/data/` — single source of content: `company.ts`, `services.ts`, `projects.ts`, `jobs.ts`

To add a service, project or job, add an entry to the matching file in `lib/data/`; index, detail and related pages update automatically.

## Local dev
```bash
npm i
npm run dev
```
Visit http://localhost:3000

## Deploy to Vercel
1. Create a new Vercel project and import this repo.
2. Vercel auto-detects **Next.js**; default build command `next build`.
3. Set up your domain (e.g., `codeqube.io`).

## Customize
- Forms (`components/ContactSection.tsx`, `components/ApplyForm.tsx`, `app/quote/page.tsx`) currently simulate submission. Replace the `setTimeout` in each `handleSubmit` with a `fetch` to your endpoint (e.g. Formspree or an API route).
- Colors & fonts: `tailwind.config.js` and `app/layout.tsx`.
- Company details, offices and stats: `lib/data/company.ts`.
