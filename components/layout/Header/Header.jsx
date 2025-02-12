'use client';

import React from 'react';
import { cn } from '@/lib/utils/tailwindMerge';
import dynamic from 'next/dynamic';
import { Atom } from 'lucide-react';
import useHomeStore from '@/lib/store/HomeStore';
import Link from 'next/link';

const ThemeTrigger = dynamic(() => import('@/components/basic/ThemeTrigger'), {
  ssr: false,
});

const HeaderMenu = ({ menu, className }) => {
  const { currentTab, setCurrentTab } = useHomeStore((state) => state);

  return (
    <div
      className={cn(
        'flex items-center text-base leading-5 gap-6 md:gap-3',
        className
      )}
    >
      {menu.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            'rounded-xl hover:bg-zinc-100 dark:hover:bg-opacity-10 sm:p-4 cursor-pointer',
            currentTab === index && 'text-amber-300'
          )}
          onClick={() => setCurrentTab(index)}
        >
          {item.title.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};

export default function Header() {
  const menu = [
    { title: 'blog', href: '/blog' },
    { title: 'project', href: '/project' },
    { title: 'about', href: '/about' },
  ];
  const { setCurrentTab } = useHomeStore((state) => state);

  return (
    <header className="w-full h-24 flex items-center justify-between mb-6">
      <Link
        href={'/'}
        className="flex items-center gap-1"
        onClick={() => setCurrentTab(-1)}
      >
        <Atom className="w-5 h-5" />
      </Link>
      <HeaderMenu menu={menu} />
      <div className="flex items-center gap-4">
        <ThemeTrigger />
      </div>
    </header>
  );
}
