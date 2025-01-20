'use client';

import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-1 flex-col gap-8 items-center">111</main>
      <Footer />
    </div>
  );
}
