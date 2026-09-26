import type { ReactNode } from 'react';
import Reveal from './Reveal';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
  actions?: ReactNode;
};

export default function SectionHeading({ eyebrow, title, description, align = 'left', dark = false, className = '', actions }: Props) {
  const center = align === 'center';
  return (
    <Reveal className={`${center ? 'mx-auto text-center' : ''} ${className}`}>
      <div className={`flex flex-col gap-6 ${center ? 'items-center' : 'lg:flex-row lg:items-end lg:justify-between'}`}>
        <div className={center ? 'max-w-3xl' : 'max-w-2xl'}>
          {eyebrow && <p className={`eyebrow mb-4 ${dark ? 'eyebrow-dark' : ''}`}>{eyebrow}</p>}
          <h2 className={`heading-lg ${dark ? 'text-white' : 'text-gray-900'}`}>{title}</h2>
          {description && (
            <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
          )}
        </div>
        {actions && <div className="shrink-0">{actions}</div>}
      </div>
    </Reveal>
  );
}
