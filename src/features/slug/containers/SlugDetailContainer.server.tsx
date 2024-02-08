import 'server-only';

import { ComponentType } from 'react';
import { Divider } from '@nextui-org/react';
import env from '@core/env';
import SlugDetail from '../components/SlugDetail';
import SlugDetailRelated from '../components/SlugDetailRelated';
import SlugDetailEditLinks from '../components/SlugDetailEditLinks';

interface SlugDetailContainerServerProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  postComponents: ComponentType<any>;
  content: string;
  slug: string;
  related: string[];
}

export default function SlugDetailContainerServer({
  postComponents,
  content,
  slug,
  related,
}: SlugDetailContainerServerProps) {
  const filename = './public/' + slug + '/index.md';
  const editUrl =
    env.repoURL + `/edit/main/public/${encodeURIComponent(slug)}/index.md`;
  const issueUrl = env.repoURL + '/issues';

  return (
    <>
      <SlugDetail
        content={content}
        postComponents={postComponents}
        filename={filename}
      />
      <Divider className="my-4" />
      <SlugDetailRelated related={related} />
      <SlugDetailEditLinks editUrl={editUrl} issueUrl={issueUrl} />
    </>
  );
}
