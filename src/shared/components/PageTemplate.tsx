'use client';

import { ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PageTemplateProps {
  children: ReactNode;
}

export default function PageTemplate({ children }: PageTemplateProps) {
  return (
    <main className="py-6 px-3 md:py-12 md:px-6 max-w-5xl m-auto min-h-[100vh]">
      {children}
    </main>
  );
}
