'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState, type ReactNode } from 'react';
import { Plus } from './Icons';

export type AccordionItem = { id: string; title: ReactNode; content: ReactNode; meta?: ReactNode };

type Props = { items: AccordionItem[]; defaultOpen?: string | null; className?: string; dark?: boolean };

export default function Accordion({ items, defaultOpen = null, className = '', dark = false }: Props) {
  const [open, setOpen] = useState<string | null>(defaultOpen);
  const border = dark ? 'border-white/10' : 'border-gray-200';
  const title = dark ? 'text-white' : 'text-gray-900';
  const body = dark ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className={`divide-y ${border} border-y ${className}`}>
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={`acc-${item.id}`}
              className="group flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span className="flex min-w-0 flex-1 items-center gap-4">
                {item.meta && <span className="shrink-0 font-mono text-xs text-gray-400">{item.meta}</span>}
                <span className={`font-semibold ${title} transition-colors group-hover:text-yellow-600`}>{item.title}</span>
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${border} transition-all duration-300 ${
                  isOpen ? 'rotate-45 bg-yellow-400 border-yellow-400 text-black' : 'group-hover:border-gray-400'
                } ${dark && !isOpen ? 'text-white' : ''}`}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`acc-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className={`pb-6 text-sm leading-relaxed ${body} ${item.meta ? 'pl-12' : ''}`}>{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
