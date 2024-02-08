'use client';
import { Key, ReactNode } from 'react';
import { Tabs, Tab } from '@nextui-org/tabs';
import { MAIN_TAB_ITEM_LIST } from '@features/main/constants/main.const';
import useQueryNavigation from '@shared/hooks/useQueryNavigation';
import { MainCardTabsKey } from '../uiStates/main.uiState';

interface MainCardTabsProps {
  tabKey: MainCardTabsKey;
  children: ReactNode;
}

export default function MainCardTabs({ tabKey, children }: MainCardTabsProps) {
  const navigate = useQueryNavigation();

  const handleSelectionChange = (key: Key) => {
    navigate({ tabKey: key as string });
  };

  return (
    <div className="flex w-full flex-col gap-6 mt-6">
      <Tabs
        selectedKey={tabKey}
        aria-label="탭 메뉴"
        variant="light"
        size="lg"
        onSelectionChange={handleSelectionChange}
      >
        {MAIN_TAB_ITEM_LIST.map((item) => (
          <Tab key={item.key} title={item.title} aria-label={item.title}>
            {children}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
