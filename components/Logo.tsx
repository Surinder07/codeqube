import Link from 'next/link';

type Props = { size?: 'sm' | 'md'; dark?: boolean; href?: string };

// 2x2 yellow "CODE" grid mark — the existing CodeQube brand mark, centralised.
export default function Logo({ size = 'md', dark = false, href = '/' }: Props) {
  const box = size === 'sm' ? 'w-8 h-8 gap-[3px]' : 'w-9 h-9 gap-1';
  const letter = size === 'sm' ? 'text-[10px]' : 'text-xs';
  const word = size === 'sm' ? 'text-lg' : 'text-xl';

  return (
    <Link href={href} className="group inline-flex items-center gap-3" aria-label="CodeQube home">
      <span className={`grid grid-cols-2 ${box}`}>
        {['C', 'O', 'D', 'E'].map((l, i) => (
          <span
            key={l}
            className={`flex items-center justify-center bg-yellow-400 font-bold text-black transition-transform duration-300 ${letter} ${
              i === 0 ? 'group-hover:-translate-x-px group-hover:-translate-y-px' : ''
            } ${i === 3 ? 'group-hover:translate-x-px group-hover:translate-y-px' : ''}`}
          >
            {l}
          </span>
        ))}
      </span>
      <span className={`${word} font-bold tracking-tight ${dark ? 'text-white' : 'text-gray-900'}`}>
        Code<span className="text-yellow-500">Qube</span>
      </span>
    </Link>
  );
}
