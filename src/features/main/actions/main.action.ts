'use server';
import 'server-only';

import { cache } from 'react';
import { replace, toLowerCase, toNumber } from 'safers';
import {
  asyncReadFileWithSlug,
  asyncReadFolderNames,
} from '@core/lib/readFileWithSlug';
import 'server-only';
import { MAIN_SEARCH_LETTER_LIST } from '../constants/main.const';
import {
  MainGlossariesSearchUiParams,
  MainGlossariesUiState,
} from '../uiStates/main.uiState';

const fetchMainGlossariesUiStates = cache(async () => {
  const glossaries: MainGlossariesUiState[] = [];

  try {
    const folderNames = await asyncReadFolderNames();

    for (const folderName of folderNames) {
      const { data } = await asyncReadFileWithSlug(folderName);
      const spoiler = data.spoiler;
      glossaries.push({
        slugName: folderName,
        glossary: replace(folderName, /-/g, ' '),
        spoiler,
      });
    }
    return glossaries;
  } catch (error) {
    return glossaries;
  }
});

export async function actMainGlossariesSearchFetch({
  keyword,
  tabKey,
}: MainGlossariesSearchUiParams) {
  const glossaries = await fetchMainGlossariesUiStates();

  if (keyword) {
    return glossaries.filter(({ slugName }) => {
      return slugName.includes(keyword);
    });
  }

  let glossariesByTabKey = glossaries;

  const letterSet = new Set(MAIN_SEARCH_LETTER_LIST[toNumber(tabKey, 0)]);

  if (letterSet.size > 0) {
    glossariesByTabKey = glossaries.filter(({ slugName }) => {
      const firstLetter = slugName.slice(0, 1);
      return letterSet.has(toLowerCase(firstLetter));
    });
  }

  return glossariesByTabKey;
}
