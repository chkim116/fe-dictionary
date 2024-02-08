import { Divider } from '@nextui-org/divider';
import Link from '@shared/components/Link';

interface SlugHeaderProps {
  title: string;
  date: string;
  category: string;
  related: string[];
}

export default function SlugHeader({
  date,
  title,
  category,
  related,
}: SlugHeaderProps) {
  return (
    <>
      <div className="flex flex-col gap-2 pb-8">
        <h1 className={'text-4xl font-black leading-[44px] text-[--title]'}>
          {title}
        </h1>
        <p className="mt-2 text-gray-700 dark:text-gray-300">⏰ {date}</p>
        {category && (
          <p className="mt-2 text-gray-700 dark:text-gray-300">🎓 {category}</p>
        )}
        {related.length > 0 && (
          <div className="flex gap-2 mt-2 items-center">
            <p className="text-gray-700 dark:text-gray-300">🔗</p>
            {related.map((slug) => (
              <Link href={`/${slug}`} key={slug}>
                {slug}
              </Link>
            ))}
          </div>
        )}
      </div>
      <Divider className="mt-4 mb-8" />
    </>
  );
}
