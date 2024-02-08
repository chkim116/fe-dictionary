import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import GlobalLayoutContainer from '@shared/containers/GlobalLayoutContainer';
import NextUIProvider from '@shared/components/NextUIProvider';
import { DOMAIN_TITLE } from '@shared/constants/shared.const';

import '@shared/styles/globals.css';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--noto_sans_kr',
});

export const metadata: Metadata = {
  title: DOMAIN_TITLE + ' ✨',
  description: DOMAIN_TITLE,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={notoSansKR.className}>
        <NextUIProvider>
          <Suspense>
            <GlobalLayoutContainer>{children}</GlobalLayoutContainer>
          </Suspense>
        </NextUIProvider>
      </body>
    </html>
  );
}
