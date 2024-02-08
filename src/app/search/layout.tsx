import { ReactNode } from 'react';
import PageTemplate from '@shared/components/PageTemplate';

interface SearchLayoutProps {
  children: ReactNode;
}

export default function SearchLayout({ children }: SearchLayoutProps) {
  return <PageTemplate>{children}</PageTemplate>;
}
