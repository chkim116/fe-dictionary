import { readdir } from 'fs/promises';
import { notFound } from 'next/navigation';
import env from '@core/env';
import { asyncReadFileWithSlug } from '@core/lib/readFileWithSlug';
import SlugContainer from '@features/slug/containers/SlugContainer';
import { actSlugDetailFetch } from '@features/slug/actions/slug.action';
import SlugDetailContainerServer from '@features/slug/containers/SlugDetailContainer.server';
import { DOMAIN_TITLE } from '@shared/constants/shared.const';

interface SlugPageProps {
  params: Record<string, string>;
}

export default async function SlugPage({ params }: SlugPageProps) {
  const { slug } = params;

  if (!slug) {
    notFound();
  }

  const { postComponents, content, matterData } =
    await actSlugDetailFetch(slug);

  return (
    <>
      <SlugContainer matterData={matterData} />
      <SlugDetailContainerServer
        related={matterData.related}
        slug={slug}
        postComponents={postComponents}
        content={content}
      />
    </>
  );
}

export async function generateStaticParams() {
  const entries = await readdir(env.cwd + '/public/', { withFileTypes: true });
  const dirs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  return dirs.map((dir) => ({ slug: dir }));
}

export async function generateMetadata({ params }: SlugPageProps) {
  const { slug } = params;

  const { data } = await asyncReadFileWithSlug(slug);

  return {
    title: `${data.title} — ${DOMAIN_TITLE} ✨`,
    description: data.spoiler,
  };
}
