'use server';
import 'server-only';

import { cache } from 'react';
import { asyncReadFileWithSlug } from '@core/lib/readFileWithSlug';
import { toSlugMatterDataUiState } from '../manipulates/slug.convert';

export const actSlugDetailFetch = cache(async (slug: string) => {
  const { postComponents, content, data } = await asyncReadFileWithSlug(slug);

  return {
    postComponents,
    content,
    matterData: toSlugMatterDataUiState(data),
  };
});
