import Link from 'next/link';
import Reveal from './ui/Reveal';
import { ArrowRight, MapPin } from './ui/Icons';
import { jobs } from '../lib/data/jobs';

export default function CareersCTA() {
  const open = jobs.slice(0, 4);
  return (
    <section className="section border-y border-gray-200 bg-gray-50">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-4">Careers</p>
          <h2 className="heading-lg text-gray-900">Work on systems that matter, with people who care how they&apos;re built.</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            We hire senior-minded engineers at every level: people who want ownership, code review that teaches, and clients
            who take engineering seriously. Hybrid across three Canadian offices, or remote within Canada.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/careers" className="btn-dark">
              View all {jobs.length} openings <ArrowRight />
            </Link>
            <Link href="/team" className="btn-outline">
              Meet the team
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <ul className="divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            {open.map((j) => (
              <li key={j.slug}>
                <Link href={`/careers/${j.slug}`} className="group flex items-center justify-between gap-6 px-6 py-5 transition-colors hover:bg-gray-50">
                  <div>
                    <div className="font-semibold text-gray-900 transition-colors group-hover:text-yellow-700">{j.title}</div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> {j.location}
                      </span>
                      <span>·</span>
                      <span>{j.type}</span>
                      <span>·</span>
                      <span>{j.experience}</span>
                    </div>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-black">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
            <li className="bg-gray-50 px-6 py-4 text-sm text-gray-500">
              Don&apos;t see your role?{' '}
              <Link href="/careers#apply" className="font-semibold text-gray-900 hover:text-yellow-700">
                Send us a general application
              </Link>
              .
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
