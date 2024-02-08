import type { Preview } from '@storybook/react';
import React from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@nextui-org/react';
import { Noto_Sans_KR } from 'next/font/google';
import { Sun, Moon } from 'lucide-react';
import NextUIProvider from '../src/shared/components/NextUIProvider';
import '../src/shared/styles/globals.css';

export const parameters: Preview['parameters'] = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextjs: {
    appDirectory: true,
  },
};

const GlobalNavForStory = () => {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="mb-5">
      <Button onClick={handleChangeTheme}>
        {theme === 'dark' ? <Moon /> : <Sun />}
      </Button>
    </div>
  );
};

const inter = Noto_Sans_KR({ subsets: ['latin'], variable: '--noto_sans_kr' });

export const decorators: Preview['decorators'] = [
  (Story) => {
    return (
      <div className={inter.className}>
        <NextUIProvider>
          <GlobalNavForStory />
          <div className="max-w5xl w-full h-full p-0 m-0">
            <Story />
          </div>
        </NextUIProvider>
      </div>
    );
  },
];
