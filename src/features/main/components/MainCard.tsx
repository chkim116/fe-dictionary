import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import Link from '@shared/components/Link';

interface MainCardProps {
  glossary: string;
  spoiler: string;
  slugName: string;
}

export default function MainCard({
  glossary,
  spoiler,
  slugName,
}: MainCardProps) {
  return (
    <Card className="p-4">
      <CardHeader>
        <h3 className="font-bold md:text-2xl text-lg">{glossary}</h3>
      </CardHeader>
      <CardBody>
        <p className="md:text-lg text-sm">{spoiler}</p>
      </CardBody>
      <CardFooter>
        <Link
          href={`/${slugName}`}
          className="font-bold text-primary text-sm md:text-base"
        >
          Read more about {glossary}
        </Link>
      </CardFooter>
    </Card>
  );
}
