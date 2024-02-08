'use client';

import { ReactNode } from 'react';
import { useTheme } from 'next-themes';
import Navbar, { ThemeModeType } from '@shared/components/Navbar';
import Footer from '@shared/components/Footer';
import useQueryNavigation from '@shared/hooks/useQueryNavigation';

interface GlobalLayoutContainerProps {
  children: ReactNode;
}

export default function GlobalLayoutContainer({
  children,
}: GlobalLayoutContainerProps) {
  const navigate = useQueryNavigation();

  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleSearch = (value: string) => {
    if (!value) {
      alert('검색값이 없습니다.');
      return;
    }

    navigate({ keyword: value }, '/search');
  };

  return (
    <>
      <Navbar
        theme={theme as ThemeModeType}
        onThemeChange={handleChangeTheme}
        onSearch={handleSearch}
      />
      {children}
      <Footer />
    </>
  );
}
