'use client';

import React from 'react';
import ThemeTrigger from '@/components/basic/ThemeTrigger';

export default function Header() {
  return (
    <header className="w-full h-16 flex items-center justify-between px-12">
      <div className="flex items-center gap-1">
        <div>icon</div>
        <div className="text-xl">jason zhang - dev</div>
      </div>
      <div className="flex items-center">
        123 <ThemeTrigger />
      </div>
    </header>
  );
}
