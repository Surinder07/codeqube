'use client';

import Link from 'next/link';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import Tabs from './ui/Tabs';
import { ArrowRight, Check, serviceIcons } from './ui/Icons';
import { services } from '../lib/data/services';

export default function ServicesShowcase() {
  const tabs = services.map((s) => {
    const Icon = serviceIcons[s.icon];
    return {
      id: s.slug,
      label: (
        <span className="flex items-center gap-3">
          <Icon className="h-4 w-4 shrink-0" />
          {s.shortTitle}
        </span>
      ),
      content: (
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">{s.eyebrow}</p>
            <h3 className="heading-md text-gray-900">{s.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">{s.summary}</p>
            <p className="mt-4 leading-relaxed text-gray-600">{s.overview[0]}</p>

            <div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {s.solutions.slice(0, 6).map((sol) => (
                <div key={sol.title} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-yellow-600" />
                  {sol.title}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`/services/${s.slug}`} className="btn-dark">
                Explore {s.shortTitle.toLowerCase()} <ArrowRight />
              </Link>
              <Link href="/quote" className="link-arrow self-center">
                Scope a project <ArrowRight />
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h4 className="mb-4 font-mono text-[11px] uppercase tracking-wider text-gray-400">Typical outcomes</h4>
              <dl className="grid grid-cols-2 gap-5">
                {s.benefits.map((b) => (
                  <div key={b.label}>
                    <dt className="text-2xl font-bold tracking-tight text-gray-900">{b.metric}</dt>
                    <dd className="mt-0.5 text-xs leading-snug text-gray-600">{b.label}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 border-t border-gray-200 pt-5">
                <h4 className="mb-3 font-mono text-[11px] uppercase tracking-wider text-gray-400">Core stack</h4>
                <div className="flex flex-wrap gap-1.5">
                  {Object.values(s.technologies)
                    .flat()
                    .slice(0, 9)
                    .map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      ),
    };
  });

  return (
    <section id="services" className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="What we do"
          title="Six practices. One accountable delivery team."
          description="Every practice is staffed by engineers who have shipped and operated the systems they advise on."
          actions={
            <Link href="/services" className="link-arrow">
              View all services <ArrowRight />
            </Link>
          }
        />
        <Reveal delay={0.1} className="mt-14">
          <Tabs tabs={tabs} variant="vertical" />
        </Reveal>
      </div>
    </section>
  );
}
