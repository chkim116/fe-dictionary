'use client';
import { ReactNode } from 'react';
import { NextUIProvider as Provider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/navigation';
import { DOMAIN_TITLE } from '@shared/constants/shared.const';

interface NextUIProviderProps {
  children: ReactNode;
}

export default function NextUIProvider({ children }: NextUIProviderProps) {
  const router = useRouter();
  return (
    <Provider navigate={router.push}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        storageKey={DOMAIN_TITLE + '-theme'}
      >
        {children}
      </ThemeProvider>
    </Provider>
  );
}
