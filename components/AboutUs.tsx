// components/AboutUs.tsx
'use client';

import Link from 'next/link';
import Reveal from './ui/Reveal';
import Accordion from './ui/Accordion';
import { ArrowRight, Shield, Users, Zap } from './ui/Icons';
import { company, engagementModels } from '../lib/data/company';

const milestones = [
  { year: '2014', title: 'Founded in Brampton', detail: 'Started as a three-person web engineering studio serving Ontario SMEs.' },
  { year: '2017', title: 'First enterprise platform', detail: 'Delivered a national retail commerce re-platform; cloud & DevOps practice formed.' },
  { year: '2019', title: 'Vancouver office', detail: 'Opened on the West Coast to support technology and SaaS clients.' },
  { year: '2021', title: 'Data & AI practice', detail: 'Launched data engineering and applied ML capability; first healthcare programme.' },
  { year: '2023', title: 'Halifax office', detail: 'Expanded to Atlantic Canada; 500th project delivered.' },
];

const principles = [
  {
    id: 'senior',
    Icon: Users,
    title: 'Senior engineers, end to end',
    content:
      'No bait-and-switch. The architects who scope your programme are the ones who build it. Average squad experience is 9+ years and every squad is led by a principal engineer.',
  },
  {
    id: 'production',
    Icon: Zap,
    title: 'Production from sprint one',
    content:
      'We stand up CI/CD, environments, observability and automated testing before feature work begins, so every increment is deployable and every demo runs on real infrastructure.',
  },
  {
    id: 'ownership',
    Icon: Shield,
    title: 'Built for your team to own',
    content:
      'Architecture decision records, runbooks, and pair-programming hand-overs are part of the definition of done. Our success metric is how independently you can run the platform after we leave.',
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left: narrative */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow mb-4">Who we are</p>
              <h2 className="heading-lg text-gray-900">
                A consultancy run by engineers, for organisations that need things to actually ship.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                {company.name} was founded in {company.founded} on a simple premise: most technology programmes fail on
                execution, not strategy. We combine the advisory depth of a large consultancy with the delivery discipline
                of a product engineering team.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Today we are 100+ engineers, architects, data scientists and designers across three Canadian offices,
                working with clients in financial services, healthcare, retail, manufacturing, logistics and the public
                sector.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <Accordion items={principles.map((p) => ({ id: p.id, title: p.title, content: p.content }))} defaultOpen="senior" />
            </Reveal>

            <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-4">
              <Link href="/team" className="link-arrow">
                Meet the leadership team <ArrowRight />
              </Link>
              <Link href="/careers" className="link-arrow">
                Join the team <ArrowRight />
              </Link>
            </Reveal>
          </div>

          {/* Right: timeline + engagement models */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
                <p className="eyebrow mb-6">Milestones</p>
                <ol className="relative border-l border-gray-300 pl-6">
                  {milestones.map((m, i) => (
                    <li key={m.year} className={`relative ${i === milestones.length - 1 ? '' : 'pb-7'}`}>
                      <span className="absolute -left-[31px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-gray-50 bg-yellow-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                      </span>
                      <div className="flex flex-wrap items-baseline gap-x-3">
                        <span className="font-mono text-xs font-semibold text-yellow-700">{m.year}</span>
                        <h3 className="font-semibold text-gray-900">{m.title}</h3>
                      </div>
                      <p className="mt-1 text-sm text-gray-600">{m.detail}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="mt-6">
              <p className="eyebrow mb-4">How we engage</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {engagementModels.map((m) => (
                  <div key={m.name} className="card card-hover group p-5">
                    <h4 className="font-semibold text-gray-900 group-hover:text-yellow-700 transition-colors">{m.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{m.summary}</p>
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-gray-400">Best for: {m.bestFor}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
