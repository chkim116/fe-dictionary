'use client';

import Link from '@shared/components/Link';

interface SlugDetailRelatedProps {
  related: string[];
}

export default function SlugDetailRelated({ related }: SlugDetailRelatedProps) {
  return (
    <div className="my-8">
      {related.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2 items-center">
          <p className="text-gray-700 dark:text-gray-300">🔗</p>
          {related.map((slug) => (
            <Link href={`/${slug}`} key={slug}>
              {slug}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
