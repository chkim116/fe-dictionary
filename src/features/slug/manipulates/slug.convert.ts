import { SlugMatterDataUiState } from '../uiStates/slug.uiState';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toSlugMatterDataUiState(data: Record<string, any>) {
  const result: SlugMatterDataUiState = {
    title: data.title || '',
    date: data.date || '',
    contributors: data.contributors || [],
    related: data.related || [],
    category: data.category || '',
  };

  return result;
}
