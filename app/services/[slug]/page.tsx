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
import { ArrowRight, Check, serviceIcons } from '../../../components/ui/Icons';
import { getService, services } from '../../../lib/data/services';
import { projects } from '../../../lib/data/projects';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return { title: s.title, description: s.summary };
}

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'problems', label: 'Problems we solve' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'approach', label: 'Approach' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'projects', label: 'Related work' },
];

export default function ServiceDetailPage({ params }: Params) {
  const s = getService(params.slug);
  if (!s) notFound();
  const Icon = serviceIcons[s.icon];
  const related = projects.filter((p) => s.relatedProjects.includes(p.slug));
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow={`Service · ${s.eyebrow}`}
          title={s.title}
          description={s.summary}
          crumbs={[
            { href: '/services', label: 'Services' },
            { href: `/services/${s.slug}`, label: s.shortTitle },
          ]}
          aside={
            <div className="rounded-xl border border-gray-200 bg-gray-950 p-6 text-white">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400 text-black">
                <Icon className="h-6 w-6" />
              </span>
              <dl className="mt-6 grid grid-cols-2 gap-4">
                {s.benefits.slice(0, 4).map((b) => (
                  <div key={b.label}>
                    <dt className="text-2xl font-bold text-yellow-400">{b.metric}</dt>
                    <dd className="mt-0.5 text-xs text-gray-400">{b.label}</dd>
                  </div>
                ))}
              </dl>
              <Link href="/quote" className="btn-primary mt-6 w-full">
                Scope this with us <ArrowRight />
              </Link>
            </div>
          }
        >
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="btn-dark">
              Request a quote <ArrowRight />
            </Link>
            <a href="#approach" className="btn-outline">
              See our approach
            </a>
          </div>
        </PageHero>

        {/* Sticky in-page nav + content */}
        <div className="container-x grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav className="sticky top-24" aria-label="On this page">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-gray-400">On this page</p>
              <ul className="border-l border-gray-200">
                {sections.map((sec) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm text-gray-500 transition-colors hover:border-yellow-400 hover:text-gray-900"
                    >
                      {sec.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="text-sm font-semibold text-gray-900">Other services</p>
                <ul className="mt-2 space-y-1.5">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link href={`/services/${o.slug}`} className="text-sm text-gray-600 hover:text-yellow-700">
                        {o.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </aside>

          <div className="space-y-24 lg:col-span-9">
            {/* Overview */}
            <section id="overview" className="scroll-mt-28">
              <Reveal>
                <p className="eyebrow mb-4">Overview</p>
                <div className="space-y-5 text-lg leading-relaxed text-gray-600">
                  {s.overview.map((para, i) => (
                    <p key={i} className={i === 0 ? 'text-xl text-gray-800' : ''}>{para}</p>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* Problems */}
            <section id="problems" className="scroll-mt-28">
              <SectionHeading eyebrow="Business problems" title="What this practice exists to fix." />
              <Stagger className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2">
                {s.problems.map((p, i) => (
                  <StaggerItem key={p.title} className="bg-white p-6 transition-colors hover:bg-gray-50">
                    <span className="font-mono text-xs text-yellow-600">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="mt-2 font-semibold text-gray-900">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.detail}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </section>

            {/* Solutions */}
            <section id="solutions" className="scroll-mt-28">
              <SectionHeading eyebrow="Solutions offered" title="How we address them." />
              <Reveal className="mt-10">
                <Accordion
                  defaultOpen={s.solutions[0].title}
                  items={s.solutions.map((sol, i) => ({
                    id: sol.title,
                    meta: String(i + 1).padStart(2, '0'),
                    title: sol.title,
                    content: sol.detail,
                  }))}
                />
              </Reveal>
            </section>

            {/* Technologies */}
            <section id="technologies" className="scroll-mt-28">
              <SectionHeading eyebrow="Technologies" title="The stack we use for this work." />
              <Reveal className="mt-10">
                <Tabs
                  variant="pill"
                  tabs={Object.entries(s.technologies).map(([group, items]) => ({
                    id: group,
                    label: group,
                    content: (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {items.map((t) => (
                          <span key={t} className="tag !px-3.5 !py-2 !text-sm">{t}</span>
                        ))}
                      </div>
                    ),
                  }))}
                />
              </Reveal>
            </section>

            {/* Approach */}
            <section id="approach" className="scroll-mt-28">
              <SectionHeading eyebrow="Development approach" title="How an engagement runs, phase by phase." />
              <Reveal className="mt-10">
                <ol className="relative space-y-0 border-l-2 border-gray-200">
                  {s.approach.map((step, i) => (
                    <li key={step.phase} className="group relative pb-10 pl-8 last:pb-0">
                      <span className="absolute -left-[13px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gray-900 font-mono text-[10px] font-semibold text-yellow-400 transition-colors group-hover:bg-yellow-400 group-hover:text-black">
                        {i + 1}
                      </span>
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                        <span className="font-mono text-xs text-gray-400">{step.duration}</span>
                      </div>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">{step.detail}</p>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </section>

            {/* Benefits */}
            <section id="benefits" className="scroll-mt-28">
              <SectionHeading eyebrow="Benefits" title="What clients get." />
              <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
                {s.benefits.map((b) => (
                  <StaggerItem key={b.label} className="card card-hover flex gap-5 p-6">
                    <div className="shrink-0 text-3xl font-bold tracking-tight text-gray-900">{b.metric}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{b.label}</h3>
                      <p className="mt-1 text-sm text-gray-600">{b.detail}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              {s.faqs.length > 0 && (
                <Reveal className="mt-12">
                  <h3 className="mb-4 font-mono text-[11px] uppercase tracking-wider text-gray-400">Common questions</h3>
                  <Accordion items={s.faqs.map((f) => ({ id: f.q, title: f.q, content: f.a }))} />
                </Reveal>
              )}
            </section>

            {/* Related projects */}
            <section id="projects" className="scroll-mt-28">
              <SectionHeading
                eyebrow="Related projects"
                title="Where we have done this before."
                actions={
                  <Link href="/projects" className="link-arrow">
                    All case studies <ArrowRight />
                  </Link>
                }
              />
              <div className="mt-10 space-y-5">
                {related.map((p, i) => (
                  <Reveal key={p.slug} delay={0.05 * i}>
                    <ProjectCard project={p} index={i} />
                  </Reveal>
                ))}
              </div>
            </section>
          </div>
        </div>

        <CTASection
          variant="dark"
          title={`Ready to talk about ${s.shortTitle.toLowerCase()}?`}
          description="Send us the problem. We'll come back with questions, an approach and an honest view of what it will take."
        />
      </main>
      <Footer />
    </>
  );
}
