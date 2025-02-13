'use client';

import React from 'react';
import { Github, Mail } from 'lucide-react';
import siteMetaData from '@/data/siteMetaData';

export default function Footer() {
  return (
    <footer className="w-full h-24 flex flex-col items-center justify-center gap-2">
      <div className="flex items-center justify-center gap-6">
        <a
          className="text-sm transition hover:text-zinc-600"
          target="_blank"
          rel="noopener noreferrer"
          href={siteMetaData.github}
        >
          <Github />
        </a>
        <a
          href={`mailto:${siteMetaData.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm transition hover:text-zinc-600"
        >
          <Mail />
        </a>
      </div>
      <div className="text-sm">
        Copyright © {new Date().getFullYear()} {siteMetaData.author}
      </div>
    </footer>
  );
}
