'use client';

import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="text-4xl mb-8">😊 Hello, World! 🌍</div>
      <div className="flex flex-col gap-6 mb-8">
        <p>I&apos;m Jason Zhang - a Software Engineer in China.</p>
        <p>I work mostly with JS/TS technology.</p>
        <p>
          From design to code, I built this site myself for recording and
          communicating.
        </p>
        {/*What have I built? My writings Snippets collection About me & this blog*/}
        {/*Traffic and insights Happy reading*/}
      </div>
      <Typewriter
        options={{
          strings: ['boom sha ka la ka', 'fire in the hole', '基尼泰美'],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
