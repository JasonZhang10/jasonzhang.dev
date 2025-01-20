'use client';

import React from 'react';
import { cn } from '@/lib/utils/tailwindMerge';
import dynamic from 'next/dynamic';
import { Atom } from 'lucide-react';

const ThemeTrigger = dynamic(() => import('@/components/basic/ThemeTrigger'), {
  ssr: false,
});

const HeaderMenu = ({ menu, className }) => {
  return (
    <div
      className={cn(
        'flex items-center text-base leading-5 gap-6 md:gap-3',
        className
      )}
    >
      {menu.map((item, index) => (
        <div
          key={index}
          className="rounded-xl hover:bg-gray-100 dark:hover:bg-opacity-10 sm:p-4 cursor-pointer"
        >
          {item.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default function Header() {
  const menu = ['home', 'blog', 'project', 'about'];

  return (
    <header className="w-full h-20 flex items-center justify-around px-12 md:px-6">
      <div className="flex items-center gap-1">
        <Atom className="w-5 h-5" />
        <div className="text-xl">Jason Zhang</div>
      </div>
      <div className="flex items-center gap-4">
        <HeaderMenu menu={menu} />
        <ThemeTrigger />
      </div>
    </header>
  );
}
