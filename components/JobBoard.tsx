'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Briefcase, Clock, MapPin, Search } from './ui/Icons';
import { jobs, jobDepartments, jobLocations, type Job } from '../lib/data/jobs';

const workplaces: Job['workplace'][] = ['Hybrid', 'Remote', 'On-site'];

export default function JobBoard() {
  const [query, setQuery] = useState('');
  const [department, setDepartment] = useState('all');
  const [location, setLocation] = useState('all');
  const [workplace, setWorkplace] = useState('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return jobs.filter((j) => {
      if (department !== 'all' && j.department !== department) return false;
      if (location !== 'all' && j.location !== location) return false;
      if (workplace !== 'all' && j.workplace !== workplace) return false;
      if (!q) return true;
      const hay = [j.title, j.department, j.location, j.summary, ...j.stack, ...j.requiredSkills].join(' ').toLowerCase();
      return hay.includes(q);
    });
  }, [query, department, location, workplace]);

  const hasFilters = query || department !== 'all' || location !== 'all' || workplace !== 'all';
  const reset = () => {
    setQuery('');
    setDepartment('all');
    setLocation('all');
    setWorkplace('all');
  };

  return (
    <div id="openings" className="scroll-mt-24">
      {/* Filter bar */}
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="grid gap-3 lg:grid-cols-12">
          <label className="relative lg:col-span-5">
            <span className="sr-only">Search roles</span>
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, skill or technology (e.g. Kubernetes, Java)"
              className="input !pl-10"
            />
          </label>
          <select value={department} onChange={(e) => setDepartment(e.target.value)} className="input lg:col-span-3" aria-label="Department">
            <option value="all">All departments</option>
            {jobDepartments.map((d) => <option key={d}>{d}</option>)}
          </select>
          <select value={location} onChange={(e) => setLocation(e.target.value)} className="input lg:col-span-2" aria-label="Location">
            <option value="all">All locations</option>
            {jobLocations.map((l) => <option key={l}>{l}</option>)}
          </select>
          <select value={workplace} onChange={(e) => setWorkplace(e.target.value)} className="input lg:col-span-2" aria-label="Workplace">
            <option value="all">Any workplace</option>
            {workplaces.map((w) => <option key={w}>{w}</option>)}
          </select>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between text-sm text-gray-500">
        <span>
          <span className="font-semibold text-gray-900">{filtered.length}</span> open {filtered.length === 1 ? 'role' : 'roles'}
        </span>
        {hasFilters && (
          <button type="button" onClick={reset} className="font-semibold text-gray-900 hover:text-yellow-700">
            Clear filters
          </button>
        )}
      </div>

      {/* Results */}
      <motion.ul layout className="mt-5 space-y-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((j) => (
            <motion.li
              key={j.slug}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <Link
                href={`/careers/${j.slug}`}
                className="group grid gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-[0_16px_32px_-20px_rgba(17,24,39,0.3)] sm:grid-cols-12 sm:items-center"
              >
                <div className="sm:col-span-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400">{j.department}</span>
                    <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-[10px] font-semibold text-yellow-800">{j.level}</span>
                  </div>
                  <h3 className="mt-1.5 text-lg font-semibold text-gray-900 transition-colors group-hover:text-yellow-700">{j.title}</h3>
                  <p className="mt-1 line-clamp-1 text-sm text-gray-500">{j.summary}</p>
                </div>
                <dl className="grid grid-cols-3 gap-2 text-xs text-gray-600 sm:col-span-5">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-gray-400" /> {j.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5 text-gray-400" /> {j.type} · {j.workplace}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-gray-400" /> {j.experience}
                  </div>
                </dl>
                <div className="sm:col-span-1 sm:justify-self-end">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-black">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
        {filtered.length === 0 && (
          <li className="rounded-xl border border-dashed border-gray-300 p-12 text-center">
            <p className="text-gray-600">No roles match your search.</p>
            <p className="mt-1 text-sm text-gray-500">
              Try a broader term, or{' '}
              <a href="#apply" className="font-semibold text-gray-900 hover:text-yellow-700">send a general application</a>.
            </p>
          </li>
        )}
      </motion.ul>
    </div>
  );
}
