import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import JobBoard from '../../components/JobBoard';
import ApplyForm from '../../components/ApplyForm';
import SectionHeading from '../../components/ui/SectionHeading';
import Reveal, { Stagger, StaggerItem } from '../../components/ui/Reveal';
import Accordion from '../../components/ui/Accordion';
import { ArrowRight } from '../../components/ui/Icons';
import { jobs, sharedBenefits } from '../../lib/data/jobs';
import { offices } from '../../lib/data/company';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Engineering careers at CodeQube. Open roles in backend, full stack, DevOps, cloud, data and QA across Brampton, Vancouver, Halifax and remote Canada.',
};

const whyUs = [
  {
    title: 'Senior by default',
    detail: 'Squads are small and led by principal engineers. You get real ownership and code review that makes you better, not a ticket queue.',
  },
  {
    title: 'Interesting problems, real constraints',
    detail: 'Regulated industries, high-traffic platforms, legacy estates. The work is hard in the ways that make you a stronger engineer.',
  },
  {
    title: 'Production is the goal',
    detail: 'We do not do slideware. Everything we build ships, gets operated and gets measured. You will see the impact of what you write.',
  },
  {
    title: 'Learning is budgeted',
    detail: 'Annual learning budget, paid certifications, conference time, and internal tech talks every other Friday.',
  },
];

const hiringSteps = [
  { title: 'Application review', detail: 'An engineer, not a keyword filter, reads every application. You hear back within five business days.', time: '≤ 5 days' },
  { title: 'Intro conversation', detail: '30 minutes with an engineering lead about your background, what you want next and what the role actually involves.', time: '30 min' },
  { title: 'Technical deep-dive', detail: 'A conversation about a system you have built or a take-home you choose. No whiteboard algorithms, no trick questions.', time: '60–90 min' },
  { title: 'Team & values', detail: 'Meet the squad you would join. We talk about how we work, disagree and ship together.', time: '45 min' },
  { title: 'Offer', detail: 'Written offer with transparent compensation band. We aim to move from application to offer within three weeks.', time: '≤ 3 weeks' },
];

const faqs = [
  { q: 'Do you sponsor work permits?', a: 'We hire candidates who are legally entitled to work in Canada. We can support permanent-residence pathways for existing employees.' },
  { q: 'Is remote genuinely remote?', a: 'Yes. Remote roles can be based anywhere in Canada. Hybrid roles expect two days a week in the named office. We fly remote colleagues in quarterly.' },
  { q: 'What does the take-home involve?', a: 'It is optional. If you would rather talk through an existing project of yours in depth, that is equally valid. If you choose the take-home, it is scoped to 2–3 hours and we pay for your time.' },
  { q: 'Do you hire juniors?', a: 'We run a small graduate programme each year. Open roles are listed here when intake is active; otherwise submit a general application.' },
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Careers"
          title={
            <>
              Build systems that matter, <span className="text-yellow-500">with engineers who care</span> how they&apos;re built.
            </>
          }
          description="We are 100+ engineers, architects, data specialists and designers across Canada. We hire people who want ownership, take craft seriously and like working with clients who do too."
          crumbs={[{ href: '/careers', label: 'Careers' }]}
          aside={
            <div className="rounded-xl border border-gray-200 bg-gray-950 p-6 text-white">
              <p className="font-mono text-[11px] uppercase tracking-wider text-gray-400">Right now</p>
              <div className="mt-2 text-5xl font-bold text-yellow-400">{jobs.length}</div>
              <p className="text-sm text-gray-300">open engineering roles</p>
              <ul className="mt-5 space-y-1.5 border-t border-white/10 pt-4 text-sm text-gray-400">
                {offices.map((o) => <li key={o.city}>{o.city}, {o.region.split(',')[0]}</li>)}
                <li>Remote (Canada)</li>
              </ul>
              <a href="#openings" className="btn-primary mt-6 w-full">
                See open roles <ArrowRight />
              </a>
            </div>
          }
        />

        {/* Why work with us — split with numbered features */}
        <section className="section bg-white">
          <div className="container-x grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Why CodeQube"
                title="A consultancy that behaves like a product engineering team."
                description="We have deliberately kept squads small, seniority high and hand-offs minimal. That shapes what it is like to work here."
              />
              <Reveal delay={0.1} className="mt-8">
                <Link href="/team" className="link-arrow">
                  Meet the people you&apos;d work with <ArrowRight />
                </Link>
              </Reveal>
            </div>
            <Stagger className="grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:col-span-7">
              {whyUs.map((w, i) => (
                <StaggerItem key={w.title} className="group bg-white p-7 transition-colors hover:bg-gray-50">
                  <span className="font-mono text-sm text-yellow-600">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 text-lg font-semibold text-gray-900">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{w.detail}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Openings */}
        <section className="section border-y border-gray-200 bg-gray-50">
          <div className="container-x">
            <SectionHeading
              eyebrow="Current openings"
              title="Open roles"
              description="Search by title, technology or skill. Every role lists the real stack, the real responsibilities and the real requirements."
            />
            <Reveal delay={0.1} className="mt-12">
              <JobBoard />
            </Reveal>
          </div>
        </section>

        {/* Benefits + hiring process */}
        <section className="section bg-white">
          <div className="container-x grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow mb-4">Benefits</p>
              <h2 className="heading-md text-gray-900">What every role includes.</h2>
              <ul className="prose-list mt-8 space-y-3 text-sm leading-relaxed">
                {sharedBenefits.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              <p className="eyebrow mb-4">Hiring process</p>
              <h2 className="heading-md text-gray-900">Five steps. No algorithm puzzles.</h2>
              <ol className="mt-8 divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200">
                {hiringSteps.map((s, i) => (
                  <li key={s.title} className="group grid gap-3 bg-white p-5 transition-colors hover:bg-gray-50 sm:grid-cols-12">
                    <div className="flex items-center gap-3 sm:col-span-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-900 font-mono text-[10px] font-semibold text-yellow-400 transition-colors group-hover:bg-yellow-400 group-hover:text-black">
                        {i + 1}
                      </span>
                      <span className="font-semibold text-gray-900">{s.title}</span>
                    </div>
                    <p className="text-sm text-gray-600 sm:col-span-6">{s.detail}</p>
                    <span className="font-mono text-xs text-gray-400 sm:col-span-2 sm:text-right">{s.time}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        {/* FAQ + general application */}
        <section className="section border-t border-gray-200 bg-gray-50">
          <div className="container-x grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow mb-4">Questions</p>
              <h2 className="heading-md text-gray-900">Before you apply.</h2>
              <Accordion className="mt-8" items={faqs.map((f) => ({ id: f.q, title: f.q, content: f.a }))} defaultOpen={faqs[0].q} />
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              <ApplyForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
