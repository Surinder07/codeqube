'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo';
import { ArrowRight, ChevronDown, Menu, X, serviceIcons } from './ui/Icons';
import { services } from '../lib/data/services';

const nav = [
  { href: '/services', label: 'Services', mega: true },
  { href: '/projects', label: 'Case Studies' },
  { href: '/#industries', label: 'Industries' },
  { href: '/team', label: 'Team' },
  { href: '/careers', label: 'Careers' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    const path = href.split('#')[0];
    if (!path || path === '/') return pathname === '/' && href === '/';
    return pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'border-gray-200 bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.02)]' : 'border-transparent bg-white'
      }`}
    >
      <div className="container-x">
        <div className="flex h-[68px] items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) =>
              item.mega ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium transition-colors hover:bg-gray-50 ${
                      isActive(item.href) ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                    }`}
                    aria-expanded={megaOpen}
                  >
                    {item.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-3"
                      >
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_24px_60px_-20px_rgba(17,24,39,0.3)]">
                          <div className="grid grid-cols-2 gap-1 p-3">
                            {services.map((s) => {
                              const Icon = serviceIcons[s.icon];
                              return (
                                <Link
                                  key={s.slug}
                                  href={`/services/${s.slug}`}
                                  className="group flex gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50"
                                >
                                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-yellow-400/15 text-yellow-700 transition-colors group-hover:bg-yellow-400 group-hover:text-black">
                                    <Icon className="h-4.5 w-4.5" />
                                  </span>
                                  <span>
                                    <span className="block text-sm font-semibold text-gray-900">{s.shortTitle}</span>
                                    <span className="mt-0.5 block text-xs leading-relaxed text-gray-500 line-clamp-2">{s.summary}</span>
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                          <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50 px-5 py-3">
                            <span className="text-xs text-gray-500">Not sure where to start? We&apos;ll scope it with you.</span>
                            <Link href="/services" className="link-arrow text-xs">
                              All services <ArrowRight />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3.5 py-2 text-sm font-medium transition-colors hover:bg-gray-50 ${
                    isActive(item.href) ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/#contact" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
              Contact
            </Link>
            <Link href="/quote" className="btn-primary !px-5 !py-2.5">
              Get a Quote
            </Link>
          </div>

          <button
            type="button"
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] bottom-0 z-40 overflow-y-auto border-t border-gray-200 bg-white lg:hidden"
          >
            <div className="container-x py-6">
              <div className="mb-6">
                <p className="eyebrow mb-3">Services</p>
                <div className="grid gap-1">
                  {services.map((s) => {
                    const Icon = serviceIcons[s.icon];
                    return (
                      <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50">
                        <Icon className="h-4 w-4 text-yellow-600" />
                        {s.shortTitle}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="mb-6">
                <p className="eyebrow mb-3">Company</p>
                <div className="grid gap-1">
                  {nav.filter((n) => !n.mega).map((n) => (
                    <Link key={n.href} href={n.href} className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50">
                      {n.label}
                    </Link>
                  ))}
                  <Link href="/#contact" className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50">
                    Contact
                  </Link>
                </div>
              </div>
              <Link href="/quote" className="btn-primary w-full">
                Get a Quote <ArrowRight />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
