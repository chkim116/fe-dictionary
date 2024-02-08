'use server';
import 'server-only';

import { asyncReadFileWithSlug } from '@core/lib/readFileWithSlug';
import { toSlugMatterDataUiState } from '../manipulates/slug.convert';

export async function actSlugDetailFetch(slug: string) {
  const { postComponents, content, data } = await asyncReadFileWithSlug(slug);

  return {
    postComponents,
    content,
    matterData: toSlugMatterDataUiState(data),
  };
}
