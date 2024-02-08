'use client';

import { ComponentProps } from 'react';
import { ErrorComponent } from 'next/dist/client/components/error-boundary';
import PageTemplate from '@shared/components/PageTemplate';

export default function NotFoundErrorPage(_: ComponentProps<ErrorComponent>) {
  return (
    <PageTemplate>
      <h1 className="text-4xl text-center">Not Found..</h1>
    </PageTemplate>
  );
}
