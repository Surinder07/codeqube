'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { ArrowRight, Check } from './ui/Icons';
import { industries } from '../lib/data/company';
import { projects } from '../lib/data/projects';

export default function Industries() {
  const [active, setActive] = useState(industries[0].slug);
  const current = industries.find((i) => i.slug === active)!;
  const related = projects.filter((p) => p.industrySlug === current.slug);

  return (
    <section id="industries" className="section border-y border-gray-200 bg-gray-50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Industries"
          title="Domain depth where the regulatory and operational stakes are high."
          description="Select an industry to see where we focus and the work we have delivered there."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Industry selector — 2-col grid of buttons */}
          <Reveal className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-2">
              {industries.map((ind) => {
                const selected = ind.slug === active;
                return (
                  <button
                    key={ind.slug}
                    type="button"
                    onClick={() => setActive(ind.slug)}
                    onMouseEnter={() => setActive(ind.slug)}
                    className={`group relative flex flex-col items-start rounded-lg border p-4 text-left transition-all duration-200 ${
                      selected
                        ? 'border-gray-900 bg-gray-900 text-white shadow-lg'
                        : 'border-gray-200 bg-white text-gray-900 hover:border-gray-400'
                    }`}
                    aria-pressed={selected}
                  >
                    <span className={`font-mono text-[10px] ${selected ? 'text-yellow-400' : 'text-gray-400'}`}>
                      {ind.projects}+ projects
                    </span>
                    <span className="mt-1.5 text-sm font-semibold leading-snug">{ind.name}</span>
                    <span
                      className={`absolute right-3 top-3 h-1.5 w-1.5 rounded-full transition-colors ${
                        selected ? 'bg-yellow-400' : 'bg-transparent group-hover:bg-gray-300'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Detail panel */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="h-full rounded-2xl border border-gray-200 bg-white p-7 sm:p-9">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current.slug}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="flex h-full flex-col"
                >
                  <p className="eyebrow mb-3">{current.name}</p>
                  <h3 className="heading-md text-gray-900">{current.summary}</h3>

                  <div className="mt-7 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-3 font-mono text-[11px] uppercase tracking-wider text-gray-400">Focus areas</h4>
                      <ul className="space-y-2">
                        {current.focus.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-yellow-600" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-mono text-[11px] uppercase tracking-wider text-gray-400">Selected work</h4>
                      {related.length ? (
                        <ul className="space-y-2">
                          {related.map((p) => (
                            <li key={p.slug}>
                              <Link href={`/projects/${p.slug}`} className="link-arrow text-sm !font-medium">
                                {p.title} <ArrowRight />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-500">
                          Case studies available on request under NDA.{' '}
                          <Link href="/#contact" className="font-semibold text-gray-900 hover:text-yellow-600">
                            Ask us
                          </Link>
                          .
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
