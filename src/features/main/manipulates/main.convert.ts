import { toString } from 'safers';
import {
  MainCardTabsKey,
  MainGlossariesSearchUiParams,
} from '../uiStates/main.uiState';

export function refineMainGlossariesSearchUiParams(
  raw: Record<string, string>,
): MainGlossariesSearchUiParams {
  return {
    tabKey: toString(raw.tabKey, '0') as MainCardTabsKey,
    keyword: toString(raw.keyword, ''),
  };
}
