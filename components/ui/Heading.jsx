import React from 'react';

import localFont from 'next/font/local';
import { twMerge } from 'tailwind-merge';

// Font files can be colocated inside `app`
// const CalSans = localFont({
//   src: [{ path: '../../fonts/CalSans-SemiBold.woff2' }],
//   display: 'swap',
// });

export const Heading = ({ className, children }) => {
  return (
    <h1
      className={twMerge(
        'text-base md:text-xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary',
        className
      )}
    >
      {children}
    </h1>
  );
};
