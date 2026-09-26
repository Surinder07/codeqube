'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { ArrowRight } from './ui/Icons';
import { testimonials } from '../lib/data/company';

const outcomes = [
  { metric: '3.4×', label: 'Median ROI within 18 months', detail: 'Across platform engagements since 2020' },
  { metric: '−38%', label: 'Run-cost reduction', detail: 'On cloud estates we optimise' },
  { metric: '10×', label: 'Deployment frequency', detail: 'After CI/CD & platform work' },
  { metric: '0', label: 'Failed audits', detail: 'HIPAA, PCI, SOC 2, OSFI engagements' },
];

export default function Impact() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = useCallback((dir: 1 | -1) => setIndex((i) => (i + dir + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 7000);
    return () => clearInterval(t);
  }, [paused, go]);

  const t = testimonials[index];

  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Business impact"
          title="Measured in outcomes the board cares about."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Outcomes grid */}
          <Reveal className="lg:col-span-5">
            <div className="grid h-full grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200">
              {outcomes.map((o) => (
                <div key={o.label} className="group bg-white p-6 transition-colors hover:bg-gray-50">
                  <div className="text-3xl font-bold tracking-tight text-gray-900 transition-colors group-hover:text-yellow-600 sm:text-4xl">
                    {o.metric}
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-900">{o.label}</div>
                  <div className="mt-1 text-xs text-gray-500">{o.detail}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Testimonial slider */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div
              className="relative flex h-full flex-col rounded-2xl bg-gray-900 p-8 text-white sm:p-10"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <span className="absolute right-8 top-6 select-none font-serif text-8xl leading-none text-yellow-400/20" aria-hidden>
                &ldquo;
              </span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-1 flex-col"
                >
                  <p className="text-xl leading-relaxed text-gray-100 sm:text-2xl">{t.quote}</p>
                  <footer className="mt-8 flex flex-wrap items-end justify-between gap-6">
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-sm text-gray-400">{t.org}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-yellow-400">{t.metric}</div>
                      <div className="text-xs uppercase tracking-wider text-gray-400">{t.metricLabel}</div>
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Show testimonial ${i + 1}`}
                      onClick={() => setIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-yellow-400' : 'w-3 bg-white/20 hover:bg-white/40'}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous"
                    onClick={() => go(-1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-colors hover:border-yellow-400 hover:text-yellow-400"
                  >
                    <ArrowRight className="h-4 w-4 rotate-180" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next"
                    onClick={() => go(1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-colors hover:border-yellow-400 hover:text-yellow-400"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
