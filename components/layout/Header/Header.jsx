'use client';

import React from 'react';
import { cn } from '@/lib/utils/tailwindMerge';
import dynamic from 'next/dynamic';
import { Atom, NotebookText, FolderKanban, TreePalm } from 'lucide-react';
import useHomeStore from '@/lib/store/HomeStore';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/Tooltip';

const ThemeTrigger = dynamic(() => import('@/components/basic/ThemeTrigger'), {
  ssr: false,
});

const HeaderMenu = ({ menu, className }) => {
  const { currentTab, setCurrentTab } = useHomeStore((state) => state);

  return (
    <div
      className={cn(
        'flex items-center text-base leading-5 gap-4 py-2 rounded-xl',
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
                  'flex items-center rounded-xl hover:bg-zinc-100 dark:hover:bg-opacity-10 px-4 py-2 cursor-pointer',
                  currentTab === index && 'text-amber-300'
                )}
                onClick={() => setCurrentTab(index)}
              >
                {item.icon}
                <span className="ml-1 font-bold hidden md:block">
                  {item.title}
                </span>
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
    { title: 'BLOG', tooltip: '博客', href: '/blog', icon: <NotebookText /> },
    {
      title: 'PROJECT',
      tooltip: '项目',
      href: '/project',
      icon: <FolderKanban />,
    },
    { title: 'ABOUT', tooltip: '关于', href: '/about', icon: <TreePalm /> },
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
