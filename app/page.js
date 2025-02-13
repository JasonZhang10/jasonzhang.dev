'use client';

import Typewriter from 'typewriter-effect';
import { Container } from '@/components/layout/Container/Container';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/blog');
  }, [router]);

  return <Container></Container>;
}
