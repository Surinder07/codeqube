# CodeQube (Next.js + Tailwind)

A production-ready Next.js App Router project for the CodeQube consulting landing page.

## Deploy to Vercel
1. Create a new Vercel project, import this repo (or drag-and-drop the zip).
2. Vercel auto-detects **Next.js**.
3. Build command: `next build` (default). Output: `.vercel/output` (automatic).
4. Set up your domain (e.g., `codeqube.io`).

## Local dev
```bash
npm i
npm run dev
```
Visit http://localhost:3000

## Customize
- Contact form: replace `https://formspree.io/f/your-form-id` in `app/page.tsx` with your endpoint.
- Colors & fonts: `tailwind.config.js` and `app/layout.tsx`.
