import { Suspense } from 'react';
import MainSearchContainer from '@features/main/containers/MainSearchContainer';
import { refineMainGlossariesSearchUiParams } from '@features/main/manipulates/main.convert';
import MainTabsContainer from '@features/main/containers/MainTabsContainer';
import MainCardListContainerServer from '@features/main/containers/MainCardListContainer.server';

interface MainPageProps {
  searchParams: Record<string, string>;
}

export default function MainPage({ searchParams }: MainPageProps) {
  const params = refineMainGlossariesSearchUiParams(searchParams);

  return (
    <MainSearchContainer>
      <MainTabsContainer params={params}>
        <Suspense fallback={<p>불러오는 중이에요. 😁</p>}>
          <MainCardListContainerServer params={params} />
        </Suspense>
      </MainTabsContainer>
    </MainSearchContainer>
  );
}
