'use client';

import { SORT_OPTIONS } from '@/shared/lib/constants/common';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { setSearch, setSort } from '@/shared/lib/store';
import { Input } from '@/shared/ui/Input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/shared/ui/Select';
import { FormEvent } from 'react';

export const ProductFilter = () => {
  const dispatch = useAppDispatch();
  const handleInputSearch = (e: FormEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.currentTarget.value));
  };

  const handleChangeSort = (sort: string) => {
    dispatch(setSort(sort));
  };

  return (
    <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
      <div className='flex-grow'>
        <Input type='search' onInput={handleInputSearch} placeholder='Search products...' />
      </div>
      <div className='w-full md:w-48'>
        <Select onValueChange={handleChangeSort}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Select SortBy' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>SortBy</SelectLabel>
              {SORT_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
