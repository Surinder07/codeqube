import Link from 'next/link';
import type { ReactNode } from 'react';
import Reveal from './ui/Reveal';
import { ArrowRight } from './ui/Icons';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  variant?: 'yellow' | 'dark';
};

export default function CTASection({
  eyebrow = 'Next step',
  title,
  description,
  primary = { href: '/quote', label: 'Request a quote' },
  secondary = { href: '/#contact', label: 'Talk to an engineer' },
  variant = 'yellow',
}: Props) {
  const yellow = variant === 'yellow';
  return (
    <section className={`relative overflow-hidden ${yellow ? 'bg-yellow-400' : 'bg-gray-900'}`}>
      <div className={`absolute inset-0 ${yellow ? 'bg-grid opacity-40' : 'bg-grid-dark'}`} aria-hidden />
      <div
        className={`absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl ${yellow ? 'bg-white/40' : 'bg-yellow-400/20'}`}
        aria-hidden
      />
      <div className="container-x relative py-20 lg:py-24">
        <Reveal className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className={`eyebrow mb-4 ${yellow ? '!text-gray-800 before:!bg-gray-900' : 'eyebrow-dark'}`}>{eyebrow}</p>
            <h2 className={`heading-lg ${yellow ? 'text-gray-900' : 'text-white'}`}>{title}</h2>
            {description && (
              <p className={`mt-5 max-w-2xl text-lg ${yellow ? 'text-gray-800' : 'text-gray-300'}`}>{description}</p>
            )}
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <Link href={primary.href} className={yellow ? 'btn-dark' : 'btn-primary'}>
              {primary.label} <ArrowRight />
            </Link>
            {secondary && (
              <Link href={secondary.href} className={yellow ? 'btn border border-gray-900/30 text-gray-900 hover:bg-gray-900 hover:text-white' : 'btn-outline-light'}>
                {secondary.label}
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
