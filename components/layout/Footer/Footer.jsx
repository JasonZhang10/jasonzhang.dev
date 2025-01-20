'use client';

import React from 'react';
import Image from 'next/image';
import { Github, Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full h-24 flex flex-col items-center justify-center gap-2">
      <div className="flex items-center justify-center gap-6">
        <Github />
        <Code />
      </div>
      <div className="text-sm">Copyright © 2025 Jason Zhang</div>
    </footer>
  );
}
