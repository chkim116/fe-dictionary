import { ReactNode } from 'react';
import PageTemplate from '@shared/components/PageTemplate';

interface IndexLayoutProps {
  children: ReactNode;
}

export default function IndexLayout({ children }: IndexLayoutProps) {
  return <PageTemplate>{children}</PageTemplate>;
}
