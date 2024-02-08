'use client';
import { useEffect, useState, FormEventHandler } from 'react';
import {
  Button,
  Link,
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  Input,
} from '@nextui-org/react';
import { Moon, Sun, Search } from 'lucide-react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { DOMAIN_TITLE } from '@shared/constants/shared.const';

export type ThemeModeType = 'dark' | 'light';

interface NavbarProps {
  theme: ThemeModeType;
  onSearch: (value: string) => void;
  onThemeChange: () => void;
}

export default function Navbar({
  theme,
  onSearch,
  onThemeChange,
}: NavbarProps) {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const themeIcon = theme === 'light' ? <Moon size={18} /> : <Sun size={18} />;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  const handleMenuOpenChange = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <NextUiNavbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={handleMenuOpenChange}
      shouldHideOnScroll
      className="bg-content1"
      classNames={{
        wrapper: 'w-full max-w-6xl',
      }}
    >
      <NavbarContent as="div">
        <NavbarBrand>
          <Link
            as={NextLink}
            href="/"
            className="font-bold text-inherit text-sm leading-tight italic text-primary-500"
          >
            {DOMAIN_TITLE}
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center gap-2" justify="end">
        <Button
          className="mr-1"
          size="sm"
          variant="light"
          isIconOnly
          aria-label="테마 변경"
          onPress={onThemeChange}
        >
          {themeIcon}
        </Button>

        <form onSubmit={handleSearch}>
          <Input
            variant="bordered"
            classNames={{
              base: 'max-w-full md:max-w-[15rem] h-10',
              mainWrapper: 'h-full',
              input: 'text-small',
              inputWrapper: 'h-full font-normal text-default-500',
            }}
            placeholder="검색어 입력"
            size="sm"
            startContent={<Search size={18} />}
            type="search"
            value={searchValue}
            onChange={handleSearchChange}
          />
        </form>
      </NavbarContent>
    </NextUiNavbar>
  );
}
