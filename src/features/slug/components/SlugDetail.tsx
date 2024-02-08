/* eslint-disable @typescript-eslint/no-explicit-any */
import 'server-only';

import { ComponentProps } from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkSmartypants from 'remark-smartypants';
import rehypePrettyCode from 'rehype-pretty-code';
import { remarkMdxEvalCodeBlock } from '@core/lib/remarkMdxEvalCodeBlock';
import '../styles/markdown.css';
import Link from '@shared/components/Link';

interface SlugDetailProps {
  postComponents: ComponentProps<any>;
  content: string;
  filename: string;
}

export default function SlugDetail({
  postComponents,
  content,
  filename,
}: SlugDetailProps) {
  return (
    <div className="markdown prose dark:prose-invert md:prose-lg max-w-5xl prose-pre:p-0">
      <MDXRemote
        source={content}
        components={{
          a: Link,
          ...postComponents,
        }}
        options={{
          mdxOptions: {
            useDynamicImport: true,
            remarkPlugins: [
              remarkSmartypants,
              [remarkMdxEvalCodeBlock, filename],
            ],
            rehypePlugins: [[rehypePrettyCode as any]],
          },
        }}
      />
    </div>
  );
}
