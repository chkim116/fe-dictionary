'use client';

import Link from '@shared/components/Link';

interface SlugDetailEditLinksProps {
  issueUrl: string;
  editUrl: string;
}

export default function SlugDetailEditLinks({
  editUrl,
  issueUrl,
}: SlugDetailEditLinksProps) {
  return (
    <div className="flex gap-2">
      <Link href={issueUrl}>Issue Report</Link>·
      <Link href={editUrl}>Edit on GitHub</Link>
    </div>
  );
}
