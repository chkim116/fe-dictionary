'use client';

import { useState, useEffect, memo, useTransition } from 'react';
import { actMainGlossariesSearchFetch } from '../../features/main/actions/main.action';
import { MainGlossariesUiState } from '../../features/main/uiStates/main.uiState';
import SearchResultsList from '../components/SearchResultsList';

interface SearchResultsContainerProps {
  keyword: string;
}

const SearchResultsContainer = memo(
  ({ keyword }: SearchResultsContainerProps) => {
    const [results, setResults] = useState<MainGlossariesUiState[]>([]);
    const [, startTransition] = useTransition();

    useEffect(() => {
      startTransition(async () => {
        const results = await actMainGlossariesSearchFetch({
          keyword,
          tabKey: '0',
        });

        setResults(results);
      });
    }, [keyword]);

    return <SearchResultsList keyword={keyword} glossaries={results} />;
  },
);

SearchResultsContainer.displayName = 'SearchResultsContainer';

export default SearchResultsContainer;
