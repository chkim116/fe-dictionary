'use client';

import { ComponentProps } from 'react';
import { ErrorComponent } from 'next/dist/client/components/error-boundary';
import PageTemplate from '@shared/components/PageTemplate';

export default function SlugDetailErrorPage(_: ComponentProps<ErrorComponent>) {
  return (
    <PageTemplate>
      <h1 className="text-4xl text-center">찾을 수 없는 문서입니다. 😅</h1>
    </PageTemplate>
  );
}
