'use client';
import { ReactNode, useDeferredValue, useState } from 'react';
import SearchResultsContainer from '@shared/containers/SearchResultsContainer';
import MainSearchInput from '../components/MainSearchInput';

interface MainSearchContainerProps {
  children: ReactNode;
}

export default function MainSearchContainer({
  children,
}: MainSearchContainerProps) {
  const [keyword, setKeyword] = useState('');
  const deferredKeyword = useDeferredValue(keyword);

  const handleChange = (keyword: string) => {
    setKeyword(keyword);
  };

  const childNode = deferredKeyword ? (
    <SearchResultsContainer keyword={deferredKeyword} />
  ) : (
    children
  );

  return (
    <>
      <MainSearchInput keyword={keyword} onChange={handleChange} />
      {childNode}
    </>
  );
}
