import Link from 'next/link';
import { ArrowUpRight } from './ui/Icons';
import type { Project } from '../lib/data/projects';

type Props = { project: Project; index?: number; dark?: boolean };

// Split-layout case study card: metadata column + narrative + results strip.
export default function ProjectCard({ project: p, index = 0, dark = false }: Props) {
  const flip = index % 2 === 1;
  const border = dark ? 'border-white/10 hover:border-white/25' : 'border-gray-200 hover:border-gray-300';
  const bg = dark ? 'bg-white/[0.03] hover:bg-white/[0.05]' : 'bg-white';
  const t1 = dark ? 'text-white' : 'text-gray-900';
  const t2 = dark ? 'text-gray-400' : 'text-gray-600';
  const t3 = dark ? 'text-gray-500' : 'text-gray-400';
  const div = dark ? 'divide-white/10' : 'divide-gray-200';

  return (
    <Link
      href={`/projects/${p.slug}`}
      className={`group block overflow-hidden rounded-2xl border transition-all duration-300 ${border} ${bg} ${
        dark ? '' : 'hover:shadow-[0_24px_50px_-24px_rgba(17,24,39,0.25)]'
      }`}
    >
      <div className={`grid lg:grid-cols-12 ${flip ? '' : ''}`}>
        {/* Meta column */}
        <div
          className={`flex flex-col justify-between gap-8 border-b p-7 lg:col-span-4 lg:border-b-0 ${
            flip ? 'lg:order-2 lg:border-l' : 'lg:border-r'
          } ${dark ? 'border-white/10' : 'border-gray-200'}`}
        >
          <div>
            <div className="flex items-center justify-between">
              <span className={`font-mono text-xs ${t3}`}>{String(index + 1).padStart(2, '0')} / {p.year}</span>
              <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${dark ? 'bg-yellow-400/15 text-yellow-300' : 'bg-yellow-100 text-yellow-800'}`}>
                {p.industry}
              </span>
            </div>
            <h3 className={`mt-5 text-xl font-bold leading-snug ${t1} transition-colors group-hover:text-yellow-400`}>{p.title}</h3>
            <p className={`mt-2 text-sm ${t2}`}>{p.client}</p>
          </div>
          <dl className={`grid grid-cols-2 gap-4 text-sm`}>
            <div>
              <dt className={`font-mono text-[10px] uppercase tracking-wider ${t3}`}>Duration</dt>
              <dd className={`mt-0.5 font-medium ${t1}`}>{p.duration}</dd>
            </div>
            <div>
              <dt className={`font-mono text-[10px] uppercase tracking-wider ${t3}`}>Team</dt>
              <dd className={`mt-0.5 font-medium ${t1}`}>{p.teamSize}</dd>
            </div>
          </dl>
        </div>

        {/* Narrative + results */}
        <div className={`flex flex-col p-7 lg:col-span-8 ${flip ? 'lg:order-1' : ''}`}>
          <p className={`leading-relaxed ${t2}`}>{p.summary}</p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {[...p.stack.frontend.slice(0, 2), ...p.stack.backend.slice(0, 2), ...p.stack.cloud.slice(0, 2)].map((t) => (
              <span key={t} className={dark ? 'tag-dark' : 'tag'}>
                {t}
              </span>
            ))}
          </div>
          <div className={`mt-auto grid grid-cols-2 gap-px divide-x pt-7 sm:grid-cols-4 ${div}`}>
            {p.results.map((r) => (
              <div key={r.label} className="px-4 first:pl-0">
                <div className={`text-xl font-bold tracking-tight sm:text-2xl ${dark ? 'text-yellow-400' : 'text-gray-900'}`}>{r.metric}</div>
                <div className={`mt-0.5 text-xs ${t3}`}>{r.label}</div>
              </div>
            ))}
          </div>
          <div className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${t1}`}>
            Read the case study
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
