'use client';

import React from 'react';
import { cn } from '@/lib/utils/tailwindMerge';
import dynamic from 'next/dynamic';
import useHomeStore from '@/lib/store/HomeStore';
import Link from 'next/link';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/Tooltip';
import ThemeTrigger from '@/components/basic/ThemeTrigger';

// const ThemeTrigger = dynamic(() => import('@/components/basic/ThemeTrigger'), {
//   ssr: false,
// });

const HeaderMenu = ({ menu, className }) => {
  const { currentTab, setCurrentTab } = useHomeStore((state) => state);

  return (
    <div
      className={cn(
        'flex items-center text-base leading-5 gap-0 md:gap-4 py-2 rounded-xl',
        className
      )}
    >
      {menu.map((item, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                className={cn(
                  'flex items-center rounded-xl hover:bg-zinc-100 dark:hover:bg-opacity-10 px-2 md:px-4 py-2 cursor-pointer',
                  currentTab === index && 'text-amber-300'
                )}
                onClick={() => setCurrentTab(index)}
              >
                <span className="ml-1 font-bold">{item.title}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{item.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default function Header() {
  const menu = [
    { title: 'BLOG', tooltip: '博客', href: '/blog' },
    {
      title: 'PROJECT',
      tooltip: '项目',
      href: '/project',
    },
    { title: 'ABOUT', tooltip: '关于', href: '/about' },
  ];
  const { setCurrentTab } = useHomeStore((state) => state);

  return (
    <header className="w-full h-24 flex items-center justify-between mb-6">
      <div className="w-8 h-8 relative">
        <Link
          href={'/'}
          className="flex items-center gap-1 flex-shrink-0"
          onClick={() => setCurrentTab(0)}
        >
          <Image src={'/icon.png'} alt={''} fill />
        </Link>
      </div>
      <HeaderMenu menu={menu} />
      <ThemeTrigger />
    </header>
  );
}
