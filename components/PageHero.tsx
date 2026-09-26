import Link from 'next/link';
import type { ReactNode } from 'react';
import Reveal from './ui/Reveal';

type Crumb = { href: string; label: string };

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  crumbs?: Crumb[];
  aside?: ReactNode;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, crumbs, aside, children }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-gray-50">
      <div className="absolute inset-0 bg-grid mask-fade-b" aria-hidden />
      <div className="container-x relative py-16 lg:py-24">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 font-mono text-xs text-gray-500">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            {crumbs.map((c, i) => (
              <span key={c.href} className="flex items-center gap-2">
                <span className="text-gray-300">/</span>
                {i === crumbs.length - 1 ? (
                  <span className="text-gray-900">{c.label}</span>
                ) : (
                  <Link href={c.href} className="hover:text-gray-900">{c.label}</Link>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className={`grid gap-10 ${aside ? 'lg:grid-cols-12' : ''}`}>
          <Reveal className={aside ? 'lg:col-span-8' : 'max-w-4xl'}>
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            <h1 className="heading-xl text-gray-900">{title}</h1>
            {description && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">{description}</p>}
            {children && <div className="mt-8">{children}</div>}
          </Reveal>
          {aside && (
            <Reveal delay={0.1} className="lg:col-span-4">
              {aside}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
