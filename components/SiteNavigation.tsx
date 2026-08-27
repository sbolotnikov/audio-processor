"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe2, SlidersHorizontal, Youtube } from 'lucide-react';

export function SiteNavigation({ accent = 'green' }: { accent?: 'green' | 'orange' }) {
  const pathname = usePathname();
  const activeClasses = accent === 'orange'
    ? 'border-[#F27D26]/50 bg-[#F27D26]/15 text-[#FF944D] shadow-sm shadow-[#F27D26]/10'
    : 'border-[#00FF00]/40 bg-[#00FF00]/10 text-[#00FF00] shadow-sm shadow-[#00FF00]/10';
  const items = [
    { href: '/', label: 'Audio Editor', icon: SlidersHorizontal, active: pathname === '/' },
    { href: '/youtubelink', label: 'YouTube Converter', icon: Youtube, active: pathname.startsWith('/youtubelink') },
    { href: '/medialink', label: 'Other Sites', icon: Globe2, active: pathname.startsWith('/medialink') },
  ];

  return (
    <nav aria-label="Main navigation" className="flex items-center rounded-xl border border-white/10 bg-black/25 p-1">
      {items.map(({ href, label, icon: Icon, active }) => (
        <Link
          key={href}
          href={href}
          aria-current={active ? 'page' : undefined}
          className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors ${
            active ? activeClasses : 'border-transparent text-zinc-400 hover:bg-white/5 hover:text-white'
          }`}
        >
          <Icon className="h-4 w-4" />
          <span className="hidden sm:inline">{label}</span>
        </Link>
      ))}
    </nav>
  );
}
