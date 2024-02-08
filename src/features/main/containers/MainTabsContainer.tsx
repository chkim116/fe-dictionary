'use client';

import { ReactNode } from 'react';
import MainCardTabs from '../components/MainCardTabs';
import { MainGlossariesSearchUiParams } from '../uiStates/main.uiState';

interface MainTabsContainerProps {
  params: MainGlossariesSearchUiParams;
  children: ReactNode;
}

export default function MainTabsContainer({
  params,
  children,
}: MainTabsContainerProps) {
  return <MainCardTabs tabKey={params.tabKey}>{children}</MainCardTabs>;
}
