import Link from 'next/link';
import Logo from './Logo';
import { ArrowUpRight, Github, Linkedin, Twitter } from './ui/Icons';
import { services } from '../lib/data/services';
import { company, offices } from '../lib/data/company';

const companyLinks = [
  { href: '/#about', label: 'About' },
  { href: '/projects', label: 'Case Studies' },
  { href: '/#industries', label: 'Industries' },
  { href: '/team', label: 'Leadership & Team' },
  { href: '/careers', label: 'Careers' },
  { href: '/quote', label: 'Request a Quote' },
];

export default function Footer({ hideCta = false }: { hideCta?: boolean }) {
  return (
    <footer className="relative overflow-hidden bg-gray-950 text-gray-300">
      <div className="absolute inset-0 bg-grid-dark mask-fade-b opacity-60" aria-hidden />
      <div className="container-x relative">
        {/* CTA band */}
        {!hideCta && (
        <div className="flex flex-col gap-6 border-b border-white/10 py-14 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow eyebrow-dark mb-3">Start a conversation</p>
            <h2 className="heading-md text-white">Have a system to build, modernise or rescue?</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="btn-primary">
              Request a quote
            </Link>
            <Link href="/#contact" className="btn-outline-light">
              Talk to an engineer
            </Link>
          </div>
        </div>
        )}

        <div className="grid gap-12 py-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo dark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
              {company.name} is an engineering-led consultancy. We design, build and operate the platforms enterprises run on —
              web, mobile, cloud and data — from three offices across Canada.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { href: company.social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                { href: company.social.twitter, Icon: Twitter, label: 'X' },
                { href: company.social.github, Icon: Github, label: 'GitHub' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-gray-400 transition-colors hover:border-yellow-400 hover:text-yellow-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-4 text-sm font-semibold text-white">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-gray-400 transition-colors hover:text-yellow-400">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-semibold text-white">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 transition-colors hover:text-yellow-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-4 text-sm font-semibold text-white">Offices</h4>
            <ul className="space-y-4 text-sm">
              {offices.map((o) => (
                <li key={o.city}>
                  <div className="font-medium text-gray-200">
                    {o.city} <span className="font-mono text-[10px] uppercase tracking-wider text-gray-500">{o.label}</span>
                  </div>
                  <div className="text-gray-500">{o.address}</div>
                </li>
              ))}
              <li>
                <a href={`mailto:${company.email}`} className="inline-flex items-center gap-1 text-gray-400 hover:text-yellow-400">
                  {company.email} <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {company.name} Inc. All rights reserved.</p>
          <p className="font-mono">Designed &amp; engineered in Canada.</p>
        </div>
      </div>
    </footer>
  );
}
