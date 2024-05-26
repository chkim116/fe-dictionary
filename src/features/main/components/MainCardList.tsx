import Link from '@shared/components/Link';
import env from '@core/env';
import { MainGlossariesUiState } from '../uiStates/main.uiState';
import MainCard from './MainCard';

interface MainCardListProps {
  glossaries: MainGlossariesUiState[];
}

export default function MainCardList({ glossaries }: MainCardListProps) {
  if (glossaries.length === 0) {
    return (
      <div className="flex flex-col items-center gap-6 mt-6">
        <h2 className="text-2xl mt-6">검색 결과가 없네요. 😅</h2>
        <Link href={env.repoURL + '/issues'}>단어 추가 요청하기 🙋‍♂️</Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-1">
      {glossaries.map(({ glossary, spoiler, slugName }) => (
        <MainCard
          key={glossary}
          glossary={glossary}
          spoiler={spoiler}
          slugName={slugName}
        />
      ))}
    </div>
  );
}
