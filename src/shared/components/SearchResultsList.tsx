import env from '@core/env';
import { MainGlossariesUiState } from '../../features/main/uiStates/main.uiState';
import MainCardList from '../../features/main/components/MainCardList';
import Link from './Link';

interface SearchResultsList {
  keyword: string;
  glossaries: MainGlossariesUiState[];
}

export default function SearchResultsList({
  keyword,
  glossaries,
}: SearchResultsList) {
  return (
    <div className="flex flex-col gap-6 mt-6">
      <h2 className="text-2xl font-bold">&#39;{keyword}&#39; 검색 결과</h2>
      {glossaries.length > 0 ? (
        <MainCardList glossaries={glossaries} />
      ) : (
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl mt-6">검색 결과가 없네요. 😅</h2>
          <Link href={env.repoURL + '/issues'}>단어 추가 요청하기 🙋‍♂️</Link>
        </div>
      )}
    </div>
  );
}
