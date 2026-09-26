import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PageHero from '../../../components/PageHero';
import CTASection from '../../../components/CTASection';
import ProjectCard from '../../../components/ProjectCard';
import SectionHeading from '../../../components/ui/SectionHeading';
import Reveal, { Stagger, StaggerItem } from '../../../components/ui/Reveal';
import Accordion from '../../../components/ui/Accordion';
import Tabs from '../../../components/ui/Tabs';
import { ArrowRight, Check, Cloud, Code, Database, Layers, Server, Shield, TrendingUp } from '../../../components/ui/Icons';
import { getProject, projects } from '../../../lib/data/projects';
import { services } from '../../../lib/data/services';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const p = getProject(params.slug);
  if (!p) return {};
  return { title: `${p.title} — Case Study`, description: p.summary };
}

const toc = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Business problem' },
  { id: 'solution', label: 'Proposed solution' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'stack', label: 'Technology stack' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'implementation', label: 'Implementation' },
  { id: 'security', label: 'Security & scalability' },
  { id: 'results', label: 'Results & impact' },
];

const stackMeta = {
  frontend: { label: 'Frontend', Icon: Code },
  backend: { label: 'Backend', Icon: Server },
  data: { label: 'Data', Icon: Database },
  cloud: { label: 'Cloud & infra', Icon: Cloud },
  tooling: { label: 'Tooling & QA', Icon: Layers },
} as const;

export default function ProjectDetailPage({ params }: Params) {
  const p = getProject(params.slug);
  if (!p) notFound();

  const relatedServices = services.filter((s) => p.services.includes(s.slug));
  const more = projects.filter((x) => x.slug !== p.slug && (x.industrySlug === p.industrySlug || x.services.some((s) => p.services.includes(s)))).slice(0, 2);

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow={`Case study · ${p.industry}`}
          title={p.title}
          description={p.summary}
          crumbs={[
            { href: '/projects', label: 'Case Studies' },
            { href: `/projects/${p.slug}`, label: p.industry },
          ]}
          aside={
            <dl className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              {[
                ['Client', p.client],
                ['Industry', p.industry],
                ['Year', p.year],
                ['Duration', p.duration],
                ['Team', p.teamSize],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-gray-100 py-2.5 text-sm last:border-b-0">
                  <dt className="font-mono text-xs uppercase tracking-wider text-gray-400">{k}</dt>
                  <dd className="text-right font-medium text-gray-900">{v}</dd>
                </div>
              ))}
              <div className="pt-4">
                <dt className="mb-2 font-mono text-xs uppercase tracking-wider text-gray-400">Services</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {relatedServices.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="tag hover:border-yellow-400 hover:bg-yellow-50">
                      {s.shortTitle}
                    </Link>
                  ))}
                </dd>
              </div>
            </dl>
          }
        >
          {/* Results strip in hero */}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 sm:grid-cols-4">
            {p.results.map((r) => (
              <div key={r.label} className="bg-white p-4">
                <div className="text-2xl font-bold tracking-tight text-gray-900">{r.metric}</div>
                <div className="mt-0.5 text-xs text-gray-500">{r.label}</div>
              </div>
            ))}
          </div>
        </PageHero>

        <div className="container-x grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
          {/* TOC */}
          <aside className="hidden lg:col-span-3 lg:block">
            <nav className="sticky top-24" aria-label="On this page">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-gray-400">Contents</p>
              <ul className="border-l border-gray-200">
                {toc.map((t, i) => (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      className="-ml-px flex items-center gap-3 border-l-2 border-transparent py-1.5 pl-4 text-sm text-gray-500 transition-colors hover:border-yellow-400 hover:text-gray-900"
                    >
                      <span className="font-mono text-[10px] text-gray-300">{String(i + 1).padStart(2, '0')}</span>
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="space-y-24 lg:col-span-9">
            {/* Overview */}
            <section id="overview" className="scroll-mt-28">
              <Reveal>
                <p className="eyebrow mb-4">Project overview</p>
                <div className="space-y-5 text-lg leading-relaxed text-gray-600">
                  {p.overview.map((para, i) => (
                    <p key={i} className={i === 0 ? 'text-xl text-gray-800' : ''}>{para}</p>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* Problem */}
            <section id="problem" className="scroll-mt-28">
              <SectionHeading eyebrow="Business problem" title="Where the client started." />
              <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
                {p.problem.map((item, i) => (
                  <StaggerItem key={i} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5">
                    <span className="font-mono text-sm text-yellow-600">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-sm leading-relaxed text-gray-700">{item}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </section>

            {/* Solution */}
            <section id="solution" className="scroll-mt-28">
              <SectionHeading eyebrow="Proposed solution" title="What we proposed, and why." />
              <Reveal className="mt-10 rounded-2xl bg-gray-950 p-7 text-white sm:p-9">
                <ul className="space-y-4">
                  {p.solution.map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black">
                        <Check className="h-3 w-3" />
                      </span>
                      <p className="leading-relaxed text-gray-200">{item}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </section>

            {/* Architecture */}
            <section id="architecture" className="scroll-mt-28">
              <SectionHeading eyebrow="Architecture" title="How the system is put together." description={p.architecture.description} />
              <Reveal className="mt-10 overflow-hidden rounded-2xl border border-gray-200">
                <div className="flex items-center gap-1.5 border-b border-gray-200 bg-gray-50 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                  <span className="ml-3 font-mono text-[11px] text-gray-500">{p.slug}/architecture — layered view</span>
                </div>
                <div className="divide-y divide-gray-200 bg-white">
                  {p.architecture.layers.map((layer, i) => (
                    <div key={layer.name} className="group grid gap-3 p-5 transition-colors hover:bg-gray-50 sm:grid-cols-12 sm:items-center">
                      <div className="flex items-center gap-3 sm:col-span-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded bg-gray-900 font-mono text-[10px] text-yellow-400">
                          L{i + 1}
                        </span>
                        <span className="font-semibold text-gray-900">{layer.name}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:col-span-9">
                        {layer.components.map((c) => (
                          <span key={c} className="tag group-hover:border-yellow-300 group-hover:bg-yellow-50">{c}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* Stack */}
            <section id="stack" className="scroll-mt-28">
              <SectionHeading eyebrow="Technology stack" title="Backend, frontend, data and cloud." />
              <Reveal className="mt-10">
                <Tabs
                  variant="pill"
                  tabs={(Object.keys(stackMeta) as (keyof typeof stackMeta)[]).map((k) => {
                    const { label, Icon } = stackMeta[k];
                    return {
                      id: k,
                      label: (
                        <span className="flex items-center gap-2">
                          <Icon className="h-4 w-4" /> {label}
                        </span>
                      ),
                      content: (
                        <div className="grid gap-3 pt-2 sm:grid-cols-2 lg:grid-cols-3">
                          {p.stack[k].map((t) => (
                            <div key={t} className="card flex items-center gap-3 px-4 py-3">
                              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                              <span className="text-sm font-medium text-gray-900">{t}</span>
                            </div>
                          ))}
                        </div>
                      ),
                    };
                  })}
                />
              </Reveal>
            </section>

            {/* Challenges */}
            <section id="challenges" className="scroll-mt-28">
              <SectionHeading eyebrow="Challenges faced" title="What got in the way, and how we dealt with it." />
              <Reveal className="mt-10">
                <Accordion
                  defaultOpen={p.challenges[0].title}
                  items={p.challenges.map((c, i) => ({
                    id: c.title,
                    meta: String(i + 1).padStart(2, '0'),
                    title: c.title,
                    content: (
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <p className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-gray-400">Challenge</p>
                          <p>{c.detail}</p>
                        </div>
                        <div className="rounded-lg bg-yellow-50 p-4">
                          <p className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-yellow-700">Resolution</p>
                          <p className="text-gray-800">{c.resolution}</p>
                        </div>
                      </div>
                    ),
                  }))}
                />
              </Reveal>
            </section>

            {/* Implementation */}
            <section id="implementation" className="scroll-mt-28">
              <SectionHeading eyebrow="Implementation details" title="How delivery was sequenced." />
              <Reveal className="mt-10">
                <ol className="relative border-l-2 border-gray-200">
                  {p.implementation.map((step, i) => (
                    <li key={step.title} className="group relative pb-10 pl-8 last:pb-0">
                      <span className="absolute -left-[13px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gray-900 font-mono text-[10px] font-semibold text-yellow-400 transition-colors group-hover:bg-yellow-400 group-hover:text-black">
                        {i + 1}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">{step.detail}</p>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </section>

            {/* Security & scalability */}
            <section id="security" className="scroll-mt-28">
              <SectionHeading eyebrow="Non-functional requirements" title="Security and scalability considerations." />
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                <Reveal className="rounded-2xl border border-gray-200 p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-yellow-400">
                      <Shield className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">Security</h3>
                  </div>
                  <ul className="prose-list mt-5 space-y-3 text-sm leading-relaxed">
                    {p.security.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </Reveal>
                <Reveal delay={0.08} className="rounded-2xl border border-gray-200 p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-yellow-400">
                      <TrendingUp className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">Scalability</h3>
                  </div>
                  <ul className="prose-list mt-5 space-y-3 text-sm leading-relaxed">
                    {p.scalability.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </Reveal>
              </div>
            </section>

            {/* Results */}
            <section id="results" className="scroll-mt-28">
              <SectionHeading eyebrow="Results & business impact" title="What it delivered." />
              <Reveal className="mt-10 overflow-hidden rounded-2xl bg-yellow-400">
                <div className="grid grid-cols-2 divide-x divide-y divide-gray-900/10 sm:grid-cols-4 sm:divide-y-0">
                  {p.results.map((r) => (
                    <div key={r.label} className="p-6">
                      <div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{r.metric}</div>
                      <div className="mt-1 text-sm text-gray-800">{r.label}</div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-900/10 bg-gray-950 p-7 text-white">
                  <p className="mb-4 font-mono text-[11px] uppercase tracking-wider text-gray-400">Business impact</p>
                  <ul className="space-y-3">
                    {p.impact.map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-200">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-yellow-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </section>

            {/* More */}
            {more.length > 0 && (
              <section>
                <SectionHeading
                  eyebrow="More case studies"
                  title="Related work."
                  actions={
                    <Link href="/projects" className="link-arrow">
                      All case studies <ArrowRight />
                    </Link>
                  }
                />
                <div className="mt-10 space-y-5">
                  {more.map((m, i) => (
                    <Reveal key={m.slug} delay={0.05 * i}>
                      <ProjectCard project={m} index={i} />
                    </Reveal>
                  ))}
                </div>
              </section>
            )}
          </article>
        </div>

        <CTASection
          title="Facing a similar problem?"
          description="We'll walk you through how this was built, what we'd do differently today, and what it would take for your organisation."
        />
      </main>
      <Footer />
    </>
  );
}
