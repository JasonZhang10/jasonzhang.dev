'use client';

import React from 'react';
import { cn } from '@/lib/utils/tailwindMerge';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const THEME_TYPE = {
  DARK: 'dark',
  LIGHT: 'light',
  SYSTEM: 'system',
};

export default function ThemeTrigger({ className }) {
  const { theme = 'system', setTheme } = useTheme();
  console.log('theme', theme);
  return (
    <div className={cn('w-8 h-8 rounded', className)}>
      {theme === THEME_TYPE.DARK && (
        <Sun
          onClick={() => {
            setTheme(THEME_TYPE.LIGHT);
            console.log('theme111', theme);
          }}
        />
      )}
      {(theme === THEME_TYPE.LIGHT || theme === THEME_TYPE.SYSTEM) && (
        <Moon
          onClick={() => {
            setTheme(THEME_TYPE.DARK);
            console.log('theme222', theme);
          }}
        />
      )}
    </div>
  );
}
