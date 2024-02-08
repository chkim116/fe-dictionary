import { ReactNode } from 'react';
import PageTemplate from '@shared/components/PageTemplate';

interface SlugDetailLayoutProps {
  children: ReactNode;
}

export default function SlugDetailLayout({ children }: SlugDetailLayoutProps) {
  return <PageTemplate>{children}</PageTemplate>;
}
