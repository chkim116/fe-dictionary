import SearchResultsContainer from '@shared/containers/SearchResultsContainer';
import { refineMainGlossariesSearchUiParams } from '@features/main/manipulates/main.convert';

interface SearchPageProps {
  searchParams: Record<string, string>;
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const params = refineMainGlossariesSearchUiParams(searchParams);

  return <SearchResultsContainer keyword={params.keyword} />;
}
