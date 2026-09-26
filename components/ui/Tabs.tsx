'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState, type ReactNode } from 'react';

export type Tab = { id: string; label: ReactNode; content: ReactNode };

type Props = {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
  variant?: 'underline' | 'pill' | 'vertical';
  dark?: boolean;
};

export default function Tabs({ tabs, defaultTab, className = '', variant = 'underline', dark = false }: Props) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  const isVertical = variant === 'vertical';
  const listCls = isVertical
    ? 'flex flex-row gap-1 overflow-x-auto scrollbar-none lg:flex-col lg:w-64 lg:shrink-0'
    : variant === 'pill'
      ? `inline-flex flex-wrap gap-1 rounded-lg p-1 ${dark ? 'bg-white/5' : 'bg-gray-100'}`
      : `flex gap-1 overflow-x-auto scrollbar-none border-b ${dark ? 'border-white/10' : 'border-gray-200'}`;

  return (
    <div className={`${isVertical ? 'flex flex-col gap-8 lg:flex-row lg:gap-12' : ''} ${className}`}>
      <div role="tablist" aria-orientation={isVertical ? 'vertical' : 'horizontal'} className={listCls}>
        {tabs.map((t) => {
          const selected = t.id === active;
          let btn = '';
          if (variant === 'pill') {
            btn = selected
              ? 'bg-yellow-400 text-black shadow-sm'
              : dark
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-600 hover:text-gray-900';
            btn += ' rounded-md px-4 py-2 text-sm font-semibold transition-colors';
          } else if (isVertical) {
            btn = selected
              ? `border-yellow-400 ${dark ? 'bg-white/5 text-white' : 'bg-gray-50 text-gray-900'}`
              : `border-transparent ${dark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`;
            btn += ' whitespace-nowrap rounded-md border-l-2 px-4 py-3 text-left text-sm font-semibold transition-colors lg:rounded-none lg:rounded-r-md';
          } else {
            btn = selected
              ? `border-yellow-400 ${dark ? 'text-white' : 'text-gray-900'}`
              : `border-transparent ${dark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`;
            btn += ' -mb-px whitespace-nowrap border-b-2 px-4 py-3 text-sm font-semibold transition-colors';
          }
          return (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={selected}
              onClick={() => setActive(t.id)}
              className={btn}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" className="min-w-0 flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {current.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
