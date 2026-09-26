import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PageHero from '../../../components/PageHero';
import ApplyForm from '../../../components/ApplyForm';
import Reveal from '../../../components/ui/Reveal';
import { ArrowRight, Briefcase, Check, Clock, MapPin } from '../../../components/ui/Icons';
import { getJob, jobs } from '../../../lib/data/jobs';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const j = getJob(params.slug);
  if (!j) return {};
  return { title: `${j.title} — ${j.location}`, description: j.summary };
}

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal as="section" className="scroll-mt-28">
      <div id={id} />
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <div className="mt-4">{children}</div>
    </Reveal>
  );
}

function List({ items, check = false }: { items: string[]; check?: boolean }) {
  return (
    <ul className={`space-y-2.5 text-sm leading-relaxed ${check ? '' : 'prose-list'}`}>
      {items.map((it) => (
        <li key={it} className={check ? 'flex gap-2.5 text-gray-600' : ''}>
          {check && <Check className="mt-0.5 h-4 w-4 shrink-0 text-yellow-600" />}
          {it}
        </li>
      ))}
    </ul>
  );
}

export default function JobDetailPage({ params }: Params) {
  const j = getJob(params.slug);
  if (!j) notFound();
  const others = jobs.filter((x) => x.slug !== j.slug).slice(0, 3);
  const posted = new Date(j.posted).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });

  const facts = [
    { Icon: MapPin, label: 'Location', value: `${j.location} · ${j.workplace}` },
    { Icon: Briefcase, label: 'Employment type', value: j.type },
    { Icon: Clock, label: 'Experience', value: j.experience },
  ];

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow={`${j.department} · ${j.level}`}
          title={j.title}
          description={j.summary}
          crumbs={[
            { href: '/careers', label: 'Careers' },
            { href: `/careers/${j.slug}`, label: j.title },
          ]}
          aside={
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <dl className="space-y-4">
                {facts.map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-yellow-400/15 text-yellow-700">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-wider text-gray-400">{label}</dt>
                      <dd className="text-sm font-medium text-gray-900">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <p className="mt-5 border-t border-gray-100 pt-4 font-mono text-[11px] text-gray-400">Posted {posted}</p>
              <a href="#apply" className="btn-primary mt-5 w-full">
                Apply now <ArrowRight />
              </a>
            </div>
          }
        >
          <div className="flex flex-wrap gap-1.5">
            {j.stack.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        </PageHero>

        <div className="container-x grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
          <article className="space-y-14 lg:col-span-7">
            <Block id="summary" title="About the role">
              <p className="leading-relaxed text-gray-600">{j.summary}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                You would join a squad of 6–10 engineers led by a principal engineer, working directly with client stakeholders. We run two-week sprints, trunk-based development and daily deploys.
              </p>
            </Block>
            <Block id="responsibilities" title="Responsibilities">
              <List items={j.responsibilities} />
            </Block>
            <Block id="required" title="Required skills">
              <List items={j.requiredSkills} check />
            </Block>
            <Block id="preferred" title="Preferred skills">
              <List items={j.preferredSkills} />
            </Block>
            <Block id="qualifications" title="Qualifications">
              <List items={j.qualifications} />
            </Block>
            <Block id="stack" title="Technology stack">
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {j.stack.map((t) => (
                  <div key={t} className="card flex items-center gap-3 px-4 py-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                    <span className="text-sm font-medium text-gray-900">{t}</span>
                  </div>
                ))}
              </div>
            </Block>
            <Block id="benefits" title="Benefits">
              <List items={j.benefits} check />
            </Block>
          </article>

          <aside className="space-y-8 lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <Reveal>
                <ApplyForm jobTitle={j.title} />
              </Reveal>
              <Reveal delay={0.1} className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-gray-400">Other open roles</p>
                <ul className="divide-y divide-gray-200">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link href={`/careers/${o.slug}`} className="group flex items-center justify-between py-3">
                        <span>
                          <span className="block text-sm font-semibold text-gray-900 group-hover:text-yellow-700">{o.title}</span>
                          <span className="text-xs text-gray-500">{o.location} · {o.type}</span>
                        </span>
                        <ArrowRight className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/careers#openings" className="link-arrow mt-3 text-xs">
                  All openings <ArrowRight />
                </Link>
              </Reveal>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
