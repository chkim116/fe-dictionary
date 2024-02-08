'use client';

import { Button, Divider } from '@nextui-org/react';
import { Linkedin, Newspaper, Github } from 'lucide-react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FooterProps {}

export default function Footer(_: FooterProps) {
  return (
    <footer className="flex w-full flex-col">
      <Divider />
      <div className="py-6 px-3 md:py-12 md:px-6 max-w-5xl m-auto">
        <div className="flex gap-2 justify-center mb-6">
          <Button isIconOnly variant="light" as="a" href="https://kormelon.com">
            <Newspaper />
          </Button>
          <Button
            isIconOnly
            variant="light"
            as="a"
            href="https://www.linkedin.com/in/%EC%B0%BD%ED%9A%8C-%EA%B9%80-a61746253/"
          >
            <Linkedin />
          </Button>

          <Button
            isIconOnly
            variant="light"
            as="a"
            href="https://github.com/chkim116"
          >
            <Github />
          </Button>
        </div>
        <p className="text-dark">Made by Kormelon</p>
      </div>
    </footer>
  );
}
