import Header from "@/components/Header";

export default function Page() {
  return (
    <>
      <div className="bg-gradient-to-r from-brand-600 to-blue-600 text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 text-center">
          🚀 Limited openings this month — book a free 30‑min discovery call.
          <a href="#contact" className="underline font-semibold">Get started</a>
        </div>
      </div>

      <Header />

      {/* Hero */}
      <section id="home" className="gradient relative">
        <div className="mx-auto max-w-7xl px-4 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
                Available for new projects
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                We design, build & scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-400">modern web apps</span>
              </h1>
              <p className="text-slate-300 text-lg max-w-2xl">
                CodeQube is a product & engineering consultancy helping startups and enterprises ship faster — from MVP to enterprise‑grade platforms. React, Java/Spring, Node, AWS/GCP, CI/CD and beyond.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#contact" className="px-5 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-slate-900 font-semibold">Book a call</a>
                <a href="#work" className="px-5 py-3 rounded-xl border border-slate-800 hover:border-slate-700">See our work</a>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="text-3xl font-extrabold">30+</div>
                <div className="text-sm text-slate-400">Projects delivered across fintech, e‑commerce, health, and SaaS.</div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-4 shadow-2xl">
                <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 grid place-items-center">
                  <div className="text-center">
                    <svg className="mx-auto mb-4" width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16v12H4z" stroke="#38bdf8" strokeWidth="1.2"/><path d="M4 17h16v2H4z" fill="#0ea5e9"/><circle cx="8" cy="9" r="1" fill="#38bdf8"/><rect x="10" y="8" width="8" height="2" fill="#38bdf8"/><rect x="6" y="12" width="12" height="2" fill="#38bdf8"/></svg>
                    <p className="text-sm text-slate-400">Clean, fast, and scalable by default</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 opacity-70">
            <div className="flex items-center justify-center">AWS</div>
            <div className="flex items-center justify-center">GCP</div>
            <div className="flex items-center justify-center">React</div>
            <div className="flex items-center justify-center">Java</div>
            <div className="flex items-center justify-center">Spring</div>
            <div className="flex items-center justify-center">Kubernetes</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="md:col-span-2 lg:col-span-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-extrabold">What we do</h2>
            <p className="text-slate-300 mt-2 max-w-2xl">End‑to‑end delivery across product, engineering, and cloud. Pick a package or mix‑and‑match.</p>
          </div>
          <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="rounded-xl bg-brand-500/10 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path dName="M12 6v12M6 12h12"/></svg>
              </div>
              <h3 className="text-xl font-bold">MVP in 4–8 weeks</h3>
            </div>
            <p className="text-slate-300">Validate your idea quickly with a production‑ready MVP. Design, frontend, backend, CI/CD, and cloud hosting.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300 list-disc list-inside">
              <li>React / Next.js, Tailwind</li>
              <li>Java/Spring Boot or Node/Express APIs</li>
              <li>PostgreSQL, MongoDB, or Firebase</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="rounded-xl bg-brand-500/10 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path dName="M4 6h16M4 12h10M4 18h7"/></svg>
              </div>
              <h3 className="text-xl font-bold">Product Engineering</h3>
            </div>
            <p className="text-slate-300">Feature development, refactors, performance, accessibility — embedded with your team or as a squad.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300 list-disc list-inside">
              <li>Design systems, component libraries</li>
              <li>API design, event‑driven systems</li>
              <li>Observability and SRE best practices</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="rounded-xl bg-brand-500/10 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path dName="M12 3l8 4v6c0 4.418-3.582 8-8 8s-8-3.582-8-8V7l8-4z"/></svg>
              </div>
              <h3 className="text-xl font-bold">Cloud & DevOps</h3>
            </div>
            <p className="text-slate-300">Infrastructure as code, secure CI/CD, and scalable deployments on AWS or GCP.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300 list-disc list-inside">
              <li>Terraform, GitHub Actions, ArgoCD</li>
              <li>ECS/EKS, Cloud Run/GKE, Lambda</li>
              <li>Cost optimization and security hardening</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold">Selected work</h2>
            <p className="text-slate-300 mt-2 max-w-2xl">A few representative projects. Details available on request.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
              <div className="aspect-video rounded-xl bg-slate-800/60 grid place-items-center mb-4 text-slate-400">Fintech Risk Engine</div>
              <h3 className="font-bold">Risk Scoring Platform</h3>
              <p className="text-sm text-slate-300 mt-1">Migrated Excel models to a web platform using React + Spring Boot; added audit trails & RBAC; 0‑downtime deployments on AWS ECS.</p>
              <div className="mt-3 text-xs text-slate-400">React • Spring Boot • Postgres • ECS • Terraform</div>
            </article>
            <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
              <div className="aspect-video rounded-xl bg-slate-800/60 grid place-items-center mb-4 text-slate-400">E‑commerce</div>
              <h3 className="font-bold">Headless Storefront</h3>
              <p className="text-sm text-slate-300 mt-1">Next.js storefront with Stripe integration and CMS; Lighthouse 95+; shipped in 6 weeks.</p>
              <div className="mt-3 text-xs text-slate-400">Next.js • Stripe • Vercel • GraphQL</div>
            </article>
            <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
              <div className="aspect-video rounded-xl bg-slate-800/60 grid place-items-center mb-4 text-slate-400">HealthTech</div>
              <h3 className="font-bold">Telemedicine Portal</h3>
              <p className="text-sm text-slate-300 mt-1">HIPAA‑friendly portal with WebRTC video, e‑prescriptions, and role‑based access.</p>
              <div className="mt-3 text-xs text-slate-400">React • Node • WebRTC • GCP</div>
            </article>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold">How we work</h2>
          <p className="text-slate-300 mt-2 max-w-2xl">Transparent, predictable delivery using an agile cadence and strong engineering fundamentals.</p>
        </div>
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <li className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="text-sm text-slate-400">01</div>
            <h3 className="font-bold mt-2">Discover</h3>
            <p className="text-slate-300 text-sm mt-1">Deep‑dive on goals, constraints, and success metrics; draft a lightweight proposal.</p>
          </li>
          <li className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="text-sm text-slate-400">02</div>
            <h3 className="font-bold mt-2">Design</h3>
            <p className="text-slate-300 text-sm mt-1">Architecture, UX flows, and backlog. We plan for observability and scale day one.</p>
          </li>
          <li className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="text-sm text-slate-400">03</div>
            <h3 className="font-bold mt-2">Build</h3>
            <p className="text-slate-300 text-sm mt-1">Iterative delivery in weekly sprints with previews, demos, and clear status reports.</p>
          </li>
          <li className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="text-sm text-slate-400">04</div>
            <h3 className="font-bold mt-2">Launch & Scale</h3>
            <p className="text-slate-300 text-sm mt-1">Harden, ship, and optimize. Handover or ongoing partnership — your call.</p>
          </li>
        </ol>
      </section>

      {/* About */}
      <section id="about" className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 py-20 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Your fractional product & platform team</h2>
            <p className="text-slate-300 mt-3">We’re senior engineers and product folks with experience across banking, retail, and SaaS. We’ve shipped monoliths and microservices, migrated clouds, and tamed legacy codebases. We meet you where you are.</p>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm list-disc list-inside">
              <li>Strong Java/Spring, Node, and React expertise</li>
              <li>AWS & GCP certified practitioners</li>
              <li>Security‑first: auth, audit, compliance in mind</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-extrabold">95%</div>
                <div className="text-xs text-slate-400">On‑time milestones</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold">$2.1M</div>
                <div className="text-xs text-slate-400">Client revenue enabled</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold">24/7</div>
                <div className="text-xs text-slate-400">On‑call availability</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold">A+</div>
                <div className="text-xs text-slate-400">Security posture</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Tell us about your project</h2>
            <p className="text-slate-300 mt-2">Drop a note — we’ll reply within one business day.</p>
            <div className="mt-6 space-y-4 text-slate-300 text-sm">
              <div className="flex items-center gap-3"><span className="rounded-lg bg-slate-800 p-2">📧</span> <a className="hover:underline" href="mailto:hello@codeqube.io">hello@codeqube.io</a></div>
              <div className="flex items-center gap-3"><span className="rounded-lg bg-slate-800 p-2">📍</span> Toronto · Remote‑first</div>
            </div>
          </div>
          <form action="https://formspree.io/f/your-form-id" method="POST" className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm mb-1" htmlFor="name">Name</label>
                <input id="name" name="name" required className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="budget">Budget</label>
                <select id="budget" name="budget" className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500">
                  <option value="">Select…</option>
                  <option>Under $10k</option>
                  <option>$10k–$25k</option>
                  <option>$25k–$50k</option>
                  <option>$50k+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="message">Project details</label>
                <textarea id="message" name="message" rows={5} className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="What are you building? Timelines? Tech stack preferences?"></textarea>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-400">
                <input id="nda" type="checkbox" name="nda" className="mt-1" />
                <label htmlFor="nda">I’d like to sign an NDA before sharing details.</label>
              </div>
              <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3 font-semibold text-slate-900 hover:bg-brand-400" type="submit">
                Send message
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M3 12l18-9-9 18-2-7-7-2z"/></svg>
              </button>
              <p className="text-xs text-slate-500">By submitting, you agree to our privacy policy.</p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 py-10 grid gap-6 md:grid-cols-3 items-center">
          <div className="text-sm text-slate-400">© {new Date().getFullYear()} CodeQube. All rights reserved.</div>
          <nav className="flex justify-center gap-6 text-sm">
            <a href="#services" className="hover:text-brand-300">Services</a>
            <a href="#work" className="hover:text-brand-300">Work</a>
            <a href="#contact" className="hover:text-brand-300">Contact</a>
          </nav>
          <div className="flex md:justify-end gap-4 text-sm">
            <a href="#" className="hover:text-brand-300">Privacy</a>
            <a href="#" className="hover:text-brand-300">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}
