'use client';

import React, { Suspense } from 'react';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import Loading from '@/components/basic/ContainerLoading';
import { cn } from '@/lib/utils/tailwindMerge';

const LayoutStructure = ({ children, className }) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center w-full max-w-[1080px] min-h-screen m-auto px-6',
        className
      )}
    >
      <Header />
      <main className="w-full h-full flex flex-1 flex-col gap-8 items-center">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default LayoutStructure;
