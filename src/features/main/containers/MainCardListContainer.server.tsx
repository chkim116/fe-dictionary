import 'server-only';

import { MainGlossariesSearchUiParams } from '../uiStates/main.uiState';
import { actMainGlossariesSearchFetch } from '../actions/main.action';
import MainCardList from '../components/MainCardList';

interface MainCardListContainerServerProps {
  params: MainGlossariesSearchUiParams;
}

export default async function MainCardListContainerServer({
  params,
}: MainCardListContainerServerProps) {
  const glossaries = await actMainGlossariesSearchFetch(params);

  return <MainCardList glossaries={glossaries} />;
}
