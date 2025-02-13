import React from 'react';

export const Container = ({ children }) => {
  return (
    <main className={`max-w-4xl w-full mx-auto py-4 md:py-10 px-4 md:px-10`}>
      {children}
    </main>
  );
};
