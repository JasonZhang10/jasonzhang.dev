'use client';

import React from 'react';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

const Loading = () => (
  <div className="flex items-center justify-center min-h-screen bg-zinc-100">
    <div
      className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"
      role="status"
      aria-label="加载中"
    >
      <VisuallyHidden.Root>加载中...</VisuallyHidden.Root>
    </div>
  </div>
);

export default Loading;
