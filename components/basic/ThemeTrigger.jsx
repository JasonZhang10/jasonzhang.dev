'use client';

import React from 'react';
import { cn } from '@/lib/utils/tailwindMerge';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const THEME_TYPE = {
  DARK: 'dark',
  LIGHT: 'light',
};

export default function ThemeTrigger({ className }) {
  const { theme = 'light', setTheme } = useTheme();

  return (
    <div className={cn('w-6 h-6', className)}>
      {theme === THEME_TYPE.DARK && (
        <Sun onClick={() => setTheme(THEME_TYPE.LIGHT)} />
      )}
      {theme === THEME_TYPE.LIGHT && (
        <Moon onClick={() => setTheme(THEME_TYPE.DARK)} />
      )}
    </div>
  );
}
