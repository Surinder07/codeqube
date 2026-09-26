'use client';

import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import Tabs from './ui/Tabs';
import { techStack } from '../lib/data/company';

const marqueeItems = Object.values(techStack)
  .flat()
  .map((t) => t.name);

export default function TechExpertise() {
  const tabs = Object.entries(techStack).map(([group, items]) => ({
    id: group,
    label: group,
    content: (
      <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <div key={t.name} className="group bg-gray-950 p-5 transition-colors hover:bg-gray-900">
            <div className="flex items-start justify-between gap-3">
              <h4 className="font-semibold text-white">{t.name}</h4>
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700 transition-colors group-hover:bg-yellow-400" />
            </div>
            <p className="mt-1.5 text-sm text-gray-400">{t.note}</p>
          </div>
        ))}
      </div>
    ),
  }));

  return (
    <section className="relative overflow-hidden bg-gray-950 py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-grid-dark" aria-hidden />
      <div className="container-x relative">
        <SectionHeading
          dark
          eyebrow="Technology expertise"
          title="Opinionated about engineering. Pragmatic about tools."
          description="We choose the stack that fits the workload and the team that will run it. These are the technologies we operate in production today."
        />
        <Reveal delay={0.1} className="mt-12">
          <Tabs tabs={tabs} variant="pill" dark />
        </Reveal>
      </div>

      {/* Marquee strip */}
      <div className="relative mt-16 border-y border-white/10 py-4 mask-fade-x">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((name, i) => (
            <span key={`${name}-${i}`} className="flex items-center gap-10 font-mono text-sm text-gray-500">
              {name}
              <span className="h-1 w-1 rounded-full bg-yellow-400/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
