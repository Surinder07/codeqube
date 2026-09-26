import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import CTASection from '../../components/CTASection';
import SectionHeading from '../../components/ui/SectionHeading';
import Reveal, { Stagger, StaggerItem } from '../../components/ui/Reveal';
import Counter from '../../components/ui/Counter';
import { ArrowRight, Layers, Shield, Target, Users, Zap } from '../../components/ui/Icons';
import { offices, stats } from '../../lib/data/company';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the leadership and engineers behind CodeQube — a Canadian engineering consultancy of 100+ builders across Brampton, Vancouver and Halifax.',
};

type Member = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  focus: string[];
};

const leadership: Member[] = [
  {
    name: 'Raman Sharma',
    role: 'Chief Executive Officer',
    initials: 'RS',
    bio: 'Fifteen-plus years in technology consulting and digital transformation. Raman sets CodeQube’s strategic direction, still reviews architecture decisions on flagship engagements, and is the reason we say no to work we cannot do well.',
    focus: ['Strategy', 'Enterprise architecture', 'Client partnerships'],
  },
  {
    name: 'Travis Green',
    role: 'Managing Director',
    initials: 'TG',
    bio: 'Travis runs operations and delivery. He built our engagement model — small senior squads, transparent reporting, fixed outcomes — and is accountable for every client relationship staying healthy from kickoff to handover.',
    focus: ['Delivery', 'Operations', 'Business development'],
  },
];

const engineers: Member[] = [
  {
    name: 'Felix Schmidt',
    role: 'Full Stack Developer',
    initials: 'FS',
    bio: 'Builds end-to-end product features across React, Node and Java. Felix owns our Next.js reference architecture and the component library our front-end squads start from.',
    focus: ['React / Next.js', 'Node.js', 'Java / Spring'],
  },
  {
    name: 'Johanna Weber',
    role: 'Senior Developer',
    initials: 'JW',
    bio: 'Senior backend engineer and code-quality lead. Johanna runs our review standards and mentoring programme, and leads the platform squad on our fintech and healthcare engagements.',
    focus: ['Distributed systems', 'Kotlin / Java', 'Mentoring'],
  },
  {
    name: 'Lukas Becker',
    role: 'Data Analyst',
    initials: 'LB',
    bio: 'Turns messy operational data into decisions. Lukas designs the analytics layers behind our dashboards and works with clients to define the metrics that actually matter.',
    focus: ['SQL / dbt', 'Python', 'BI & visualisation'],
  },
];

const values = [
  { Icon: Users, title: 'Collaboration', detail: 'One team with the client. No “us and them”, no hidden backlog, no surprises in the status report.' },
  { Icon: Zap, title: 'Innovation with restraint', detail: 'We adopt new technology when it solves a real problem — and we are honest when the boring option is the better one.' },
  { Icon: Shield, title: 'Craft', detail: 'Reviewed code, tested paths, documented decisions. Excellence is a habit, not a phase at the end.' },
  { Icon: Target, title: 'Outcomes', detail: 'We measure ourselves on what the software does for the business, not on hours logged or features shipped.' },
  { Icon: Layers, title: 'Ownership', detail: 'Whoever builds it, runs it. Every squad carries its systems through launch and into steady state.' },
];

function Avatar({ initials, dark = false }: { initials: string; dark?: boolean }) {
  return (
    <div className={`relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl text-2xl font-bold ${dark ? 'bg-white/10 text-yellow-400' : 'bg-gray-900 text-yellow-400'}`}>
      <span className="absolute inset-0 bg-grid-dark opacity-40" />
      <span className="relative">{initials}</span>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Our team"
          title={
            <>
              Senior engineers who <span className="text-yellow-500">stay accountable</span> for what they ship.
            </>
          }
          description="CodeQube is 100+ engineers, architects, data specialists and designers across three Canadian offices. Here are some of the people who lead the work."
          crumbs={[{ href: '/team', label: 'Team' }]}
          aside={
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200">
              {stats.slice(0, 4).map((s) => (
                <div key={s.label} className="bg-white p-5">
                  <dd className="text-3xl font-bold text-gray-900">
                    <Counter value={s.value} suffix={s.suffix} />
                  </dd>
                  <dt className="mt-1 text-xs text-gray-500">{s.label}</dt>
                </div>
              ))}
            </dl>
          }
        />

        {/* Leadership — split rows */}
        <section className="section bg-white">
          <div className="container-x">
            <SectionHeading eyebrow="Leadership" title="Who sets the direction." />
            <div className="mt-12 divide-y divide-gray-200 border-y border-gray-200">
              {leadership.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.05} className="grid gap-6 py-10 lg:grid-cols-12 lg:items-start">
                  <div className="flex items-center gap-5 lg:col-span-4">
                    <Avatar initials={m.initials} />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{m.name}</h3>
                      <p className="text-sm font-medium text-yellow-700">{m.role}</p>
                    </div>
                  </div>
                  <p className="leading-relaxed text-gray-600 lg:col-span-5">{m.bio}</p>
                  <ul className="flex flex-wrap gap-1.5 lg:col-span-3 lg:justify-end">
                    {m.focus.map((f) => <li key={f} className="tag">{f}</li>)}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering — dark grid */}
        <section className="section bg-gray-950 text-white">
          <div className="container-x">
            <SectionHeading
              dark
              eyebrow="Engineering"
              title="The people writing the code."
              description="A sample of the engineers leading squads today. Every CodeQube engagement is staffed by people like these — not by a bench."
            />
            <Stagger className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
              {engineers.map((m) => (
                <StaggerItem key={m.name} className="group flex flex-col bg-gray-950 p-7 transition-colors hover:bg-gray-900">
                  <Avatar initials={m.initials} dark />
                  <h3 className="mt-5 text-lg font-bold">{m.name}</h3>
                  <p className="text-sm text-yellow-400">{m.role}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-400">{m.bio}</p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {m.focus.map((f) => <li key={f} className="tag-dark">{f}</li>)}
                  </ul>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Values — numbered list + offices */}
        <section className="section bg-white">
          <div className="container-x grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="How we work" title="Five things every squad is held to." />
              <ol className="mt-10 space-y-6">
                {values.map(({ Icon, title, detail }, i) => (
                  <Reveal key={title} delay={i * 0.05} as="li" className="group flex gap-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-yellow-400/15 text-yellow-700 transition-colors group-hover:bg-yellow-400 group-hover:text-black">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        <span className="mr-2 font-mono text-xs text-gray-400">0{i + 1}</span>
                        {title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">{detail}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-7">
                <p className="eyebrow mb-4">Where we are</p>
                <ul className="divide-y divide-gray-200">
                  {offices.map((o) => (
                    <li key={o.city} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex items-baseline justify-between">
                        <span className="font-semibold text-gray-900">{o.city}</span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400">{o.label}</span>
                      </div>
                      <p className="mt-1 text-sm text-gray-600">{o.address}</p>
                    </li>
                  ))}
                </ul>
                <Link href="/careers" className="link-arrow mt-6">
                  Join one of these offices <ArrowRight />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <CTASection
          eyebrow="Join us"
          title="We hire engineers who want to own the outcome."
          description="Open roles across backend, full stack, DevOps, cloud, data and QA. Hybrid in Brampton, Vancouver or Halifax — or remote anywhere in Canada."
          primary={{ href: '/careers', label: 'View open positions' }}
          secondary={{ href: '/#contact', label: 'Contact HR' }}
        />
      </main>
      <Footer />
    </>
  );
}
