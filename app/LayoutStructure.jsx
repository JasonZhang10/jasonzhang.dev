'use client';

import React, { Suspense } from 'react';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import Loading from '@/components/basic/ContainerLoading';

const LayoutStructure = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full h-screen px-96 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="w-full h-full flex flex-col gap-8 items-center">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default LayoutStructure;
