'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from './ui/Icons';
import Counter from './ui/Counter';
import { stats } from '../lib/data/company';

const ease = [0.22, 1, 0.36, 1] as const;

const archNodes = [
  { label: 'Next.js edge', x: 8, y: 18, w: 26 },
  { label: 'GraphQL BFF', x: 37, y: 18, w: 26 },
  { label: 'Kafka', x: 66, y: 18, w: 26 },
  { label: 'Auth (OIDC)', x: 8, y: 50, w: 26 },
  { label: 'Domain services', x: 37, y: 50, w: 26 },
  { label: 'PostgreSQL', x: 66, y: 50, w: 26 },
  { label: 'EKS · Terraform · ArgoCD', x: 8, y: 74, w: 84 },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.08 * i, ease },
  });

  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-white">
      <div className="absolute inset-0 bg-grid mask-fade-b" aria-hidden />
      <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-yellow-300/30 blur-3xl" aria-hidden />

      <div className="container-x relative">
        <div className="grid items-center gap-14 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <motion.p {...fade(0)} className="eyebrow mb-6">
              Engineering-led consultancy · Canada
            </motion.p>
            <motion.h1 {...fade(1)} className="heading-xl text-gray-900">
              We build the platforms
              <br />
              <span className="relative inline-block">
                enterprises run on.
                <span className="absolute -bottom-1 left-0 h-3 w-full -skew-x-6 bg-yellow-400/70 -z-10" aria-hidden />
              </span>
            </motion.h1>
            <motion.p {...fade(2)} className="mt-7 max-w-xl text-lg leading-relaxed text-gray-600 sm:text-xl">
              CodeQube designs, builds and operates web, mobile, cloud and data systems for organisations that can&apos;t
              afford downtime, guesswork or hand-offs. Senior engineers from discovery to production.
            </motion.p>
            <motion.div {...fade(3)} className="mt-9 flex flex-wrap gap-3">
              <Link href="/quote" className="btn-primary">
                Start a project <ArrowRight />
              </Link>
              <Link href="/projects" className="btn-outline">
                Read the case studies
              </Link>
            </motion.div>
            <motion.div {...fade(4)} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Accepting Q4 engagements
              </span>
              <span className="hidden h-4 w-px bg-gray-200 sm:block" />
              <span>Brampton · Vancouver · Halifax</span>
            </motion.div>
          </div>

          {/* Architecture visual — a stylised system diagram rather than stock imagery */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl border border-gray-200 bg-gray-950 p-1 shadow-[0_40px_80px_-30px_rgba(17,24,39,0.45)]">
              <div className="flex items-center gap-1.5 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-gray-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-gray-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-gray-700" />
                <span className="ml-3 font-mono text-[11px] text-gray-500">retail-platform / architecture.c4</span>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-900 bg-grid-dark">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
                  <g stroke="rgba(250,204,21,0.45)" strokeWidth="0.4" fill="none" strokeDasharray="1.5 1.5">
                    <path d="M34 24 H37" />
                    <path d="M63 24 H66" />
                    <path d="M21 30 V50" />
                    <path d="M50 30 V50" />
                    <path d="M79 30 V50" />
                    <path d="M50 62 V74" />
                    <path d="M34 56 H37" />
                    <path d="M63 56 H66" />
                  </g>
                </svg>
                {archNodes.map((n, i) => (
                  <motion.div
                    key={n.label}
                    initial={reduce ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.07, ease }}
                    className="absolute flex h-[12%] items-center justify-center rounded-md border border-white/10 bg-white/[0.06] px-2 font-mono text-[10px] text-gray-200 backdrop-blur-sm sm:text-[11px]"
                    style={{ left: `${n.x}%`, top: `${n.y}%`, width: `${n.w}%` }}
                  >
                    {i === 4 && <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-yellow-400" />}
                    {n.label}
                  </motion.div>
                ))}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] text-gray-500">
                  <span>p99 latency <span className="text-emerald-400">118ms</span></span>
                  <span>uptime <span className="text-emerald-400">99.95%</span></span>
                  <span>deploys/day <span className="text-yellow-400">14</span></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          {...fade(5)}
          className="grid grid-cols-2 divide-gray-200 border-t border-gray-200 sm:grid-cols-4 sm:divide-x"
        >
          {stats.map((s) => (
            <div key={s.label} className="py-7 sm:px-8 first:sm:pl-0">
              <div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
