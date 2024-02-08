'use client';
import { useState } from 'react';
import { Input } from '@nextui-org/input';
import { Search } from 'lucide-react';

interface MainSearchInputProps {
  keyword: string;
  onChange: (value: string) => void;
}

export default function MainSearchInput({
  keyword,
  onChange,
}: MainSearchInputProps) {
  const [searchValue, setSearchValue] = useState(keyword);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <Input
      variant="bordered"
      classNames={{
        base: 'max-w-full',
        mainWrapper: 'h-full',
        input: 'text-lg',
        inputWrapper: 'rounded-4 h-14 font-normal text-default-500',
      }}
      autoComplete="off"
      placeholder="검색어 입력"
      size="sm"
      startContent={<Search size={18} />}
      type="search"
      value={searchValue}
      onChange={handleSearchChange}
    />
  );
}
