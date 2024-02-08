import { readFile, readdir } from 'fs/promises';
import matter from 'gray-matter';
import env from '@core/env';

async function importPostComponents(slug: string) {
  try {
    return await import(env.cwd + '/public/' + slug + '/components.js');
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!error || (error as any).code !== 'MODULE_NOT_FOUND') {
      throw error;
    }
  }
}

export async function asyncReadFileWithSlug(slug: string) {
  const decodedSlug = decodeURIComponent(slug);

  const filename = env.cwd + '/public/' + decodedSlug + '/index.md';
  const file = await readFile(filename, 'utf8');

  const postComponents = await importPostComponents(decodedSlug);

  const { content, data } = matter(file);

  return {
    postComponents,
    content,
    data,
  };
}

export async function asyncReadFolderNames() {
  const publicFolderPath = env.cwd + '/public';

  const folderNames = await readdir(publicFolderPath, { withFileTypes: true })
    .then((dirents) =>
      dirents
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name),
    )
    .catch(() => {
      return [];
    });

  return folderNames;
}
