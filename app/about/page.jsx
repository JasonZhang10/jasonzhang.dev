'use client';

import { Container } from '@/components/layout/Container/Container';
import Typewriter from 'typewriter-effect';

export default function Project() {
  return (
    <Container>
      <div className="text-4xl mb-8 font-smiley-sans">Hello World 🌏👨‍💻</div>
      <div className="flex flex-col gap-6 mb-8 text-zinc-400">你好</div>
      <Typewriter
        options={{
          strings: [
            '前端开发',
            '向着全栈+产品进发',
            '记录生活，探索自我',
            'location: Dalian',
            '行则将至',
          ],
          autoStart: true,
          loop: true,
          cursorClassName: '',
          wrapperClassName: 'font-smiley-sans',
        }}
      />
    </Container>
  );
}
