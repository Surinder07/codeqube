import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import CTASection from '../../components/CTASection';
import SectionHeading from '../../components/ui/SectionHeading';
import Reveal, { Stagger, StaggerItem } from '../../components/ui/Reveal';
import { ArrowRight, ArrowUpRight, serviceIcons } from '../../components/ui/Icons';
import { services } from '../../lib/data/services';
import { engagementModels } from '../../lib/data/company';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Web, mobile, cloud, data, consulting and growth engineering services from CodeQube. Senior engineers from discovery to production.',
};

const deliveryPrinciples = [
  { n: '01', title: 'Discovery before estimates', detail: 'We do not quote what we have not understood. Every engagement starts with a scoped discovery that produces architecture, backlog and a real plan.' },
  { n: '02', title: 'Production infrastructure first', detail: 'Environments, pipelines, observability and test automation exist before the first feature ships.' },
  { n: '03', title: 'Demo on real systems', detail: 'Every sprint review runs on deployed infrastructure with real integrations, not slides or local builds.' },
  { n: '04', title: 'Hand-over is a deliverable', detail: 'Documentation, ADRs, runbooks and pairing sessions are in the definition of done from day one.' },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Services"
          title={
            <>
              Engineering services for the <span className="text-yellow-500">whole lifecycle</span> of a platform.
            </>
          }
          description="From the first architecture decision to the third year of operations. Six practices, staffed by engineers who have shipped and run what they advise on."
          crumbs={[{ href: '/services', label: 'Services' }]}
          aside={
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="font-mono text-[11px] uppercase tracking-wider text-gray-400">Jump to</p>
              <ul className="mt-3 divide-y divide-gray-100">
                {services.map((s) => (
                  <li key={s.slug}>
                    <a href={`#${s.slug}`} className="flex items-center justify-between py-2.5 text-sm font-medium text-gray-700 hover:text-yellow-700">
                      {s.shortTitle}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          }
        />

        {/* Service sections — alternating split layouts, not cards */}
        <section className="bg-white">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon];
            const flip = i % 2 === 1;
            return (
              <article
                key={s.slug}
                id={s.slug}
                className={`scroll-mt-24 border-b border-gray-200 ${i % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
              >
                <div className="container-x grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
                  <Reveal className={`lg:col-span-6 ${flip ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400 text-black">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-wider text-gray-400">
                          {String(i + 1).padStart(2, '0')} · {s.eyebrow}
                        </p>
                        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{s.title}</h2>
                      </div>
                    </div>
                    <p className="mt-6 text-lg leading-relaxed text-gray-600">{s.summary}</p>
                    <p className="mt-4 leading-relaxed text-gray-600">{s.overview[0]}</p>

                    <div className="mt-8">
                      <h3 className="mb-3 font-mono text-[11px] uppercase tracking-wider text-gray-400">Problems we solve</h3>
                      <ul className="prose-list grid gap-2 text-sm sm:grid-cols-2">
                        {s.problems.map((p) => (
                          <li key={p.title}>{p.title}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Link href={`/services/${s.slug}`} className="btn-dark">
                        Full service detail <ArrowRight />
                      </Link>
                      <Link href="/quote" className="link-arrow">
                        Get a quote <ArrowRight />
                      </Link>
                    </div>
                  </Reveal>

                  <Reveal delay={0.1} className={`lg:col-span-6 ${flip ? 'lg:order-1' : ''}`}>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {s.solutions.slice(0, 4).map((sol) => (
                        <div key={sol.title} className="card card-hover p-5">
                          <h4 className="font-semibold text-gray-900">{sol.title}</h4>
                          <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{sol.detail}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 rounded-xl border border-dashed border-gray-300 p-5">
                      <h4 className="mb-3 font-mono text-[11px] uppercase tracking-wider text-gray-400">Technologies</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {Object.values(s.technologies).flat().slice(0, 12).map((t) => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </section>

        {/* Delivery principles — numbered list */}
        <section className="section bg-gray-950 text-white">
          <div className="container-x grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                dark
                eyebrow="How we deliver"
                title="Four rules every engagement follows."
                description="They are not novel. They are simply enforced."
              />
            </div>
            <Stagger className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:col-span-8">
              {deliveryPrinciples.map((p) => (
                <StaggerItem key={p.n} className="bg-gray-950 p-7 transition-colors hover:bg-gray-900">
                  <span className="font-mono text-sm text-yellow-400">{p.n}</span>
                  <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{p.detail}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Engagement models */}
        <section className="section bg-white">
          <div className="container-x">
            <SectionHeading
              eyebrow="Engagement models"
              title="Flexible on structure. Fixed on accountability."
              align="center"
            />
            <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {engagementModels.map((m, i) => (
                <StaggerItem key={m.name} className="card card-hover group flex flex-col p-6">
                  <span className="font-mono text-xs text-gray-400">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-yellow-700 transition-colors">{m.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{m.summary}</p>
                  <p className="mt-5 border-t border-gray-100 pt-4 text-xs text-gray-500">
                    <span className="font-semibold text-gray-700">Best for:</span> {m.bestFor}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal className="mt-10 text-center">
              <Link href="/projects" className="link-arrow">
                See how these played out in real projects <ArrowUpRight />
              </Link>
            </Reveal>
          </div>
        </section>

        <CTASection
          title="Not sure which service you need? Start with a scoped discovery."
          description="Two to three weeks. Architecture, backlog, estimate and a plan you can take to any vendor — including us."
        />
      </main>
      <Footer />
    </>
  );
}
