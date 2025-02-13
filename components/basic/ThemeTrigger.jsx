'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils/tailwindMerge';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/Tooltip';

const THEME_TYPE = {
  DARK: 'dark',
  LIGHT: 'light',
  SYSTEM: 'system',
};

export default function ThemeTrigger({ className }) {
  const { theme = 'light', setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // 标记客户端已加载
  }, []);

  if (!mounted) {
    return null; // SSR 阶段返回空，避免 Hydration 错误
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={cn('w-6 h-6', className)}>
            {theme === THEME_TYPE.DARK && (
              <Sun onClick={() => setTheme(THEME_TYPE.LIGHT)} />
            )}
            {(theme === THEME_TYPE.LIGHT || theme === THEME_TYPE.SYSTEM) && (
              <Moon onClick={() => setTheme(THEME_TYPE.DARK)} />
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>切换主题</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
