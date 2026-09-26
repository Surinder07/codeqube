'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../lib/data/projects';
import { services } from '../lib/data/services';

export default function ProjectsExplorer() {
  const [industry, setIndustry] = useState<string>('all');
  const [service, setService] = useState<string>('all');

  const industryOptions = useMemo(() => Array.from(new Set(projects.map((p) => p.industry))), []);

  const filtered = projects.filter(
    (p) => (industry === 'all' || p.industry === industry) && (service === 'all' || p.services.includes(service)),
  );

  const chip = (selected: boolean) =>
    `rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all ${
      selected ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-400 hover:text-gray-900'
    }`;

  return (
    <div>
      <div className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-gray-400">Industry</p>
          <div className="flex flex-wrap gap-2">
            <button type="button" className={chip(industry === 'all')} onClick={() => setIndustry('all')}>All</button>
            {industryOptions.map((i) => (
              <button key={i} type="button" className={chip(industry === i)} onClick={() => setIndustry(i)}>{i}</button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-gray-400">Service</p>
          <div className="flex flex-wrap gap-2">
            <button type="button" className={chip(service === 'all')} onClick={() => setService('all')}>All</button>
            {services.map((s) => (
              <button key={s.slug} type="button" className={chip(service === s.slug)} onClick={() => setService(s.slug)}>{s.shortTitle}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
        <span>
          Showing <span className="font-semibold text-gray-900">{filtered.length}</span> of {projects.length} case studies
        </span>
        {(industry !== 'all' || service !== 'all') && (
          <button type="button" className="font-semibold text-gray-900 hover:text-yellow-700" onClick={() => { setIndustry('all'); setService('all'); }}>
            Clear filters
          </button>
        )}
      </div>

      <motion.div layout className="mt-6 space-y-5">
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={p} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
        {filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed border-gray-300 p-12 text-center text-gray-500">
            No case studies match that combination yet.
          </div>
        )}
      </motion.div>
    </div>
  );
}
