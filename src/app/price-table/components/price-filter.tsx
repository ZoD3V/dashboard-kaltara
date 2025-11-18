'use client';

import React from 'react';

import Image from 'next/image';

import { commodityItems } from '@/data/commodity-items';
import { useInfoPriceStore } from '@/hooks/use-change-price-store';
import { useCommodityStore } from '@/hooks/use-commodity-store';
import { useTypePriceStore } from '@/hooks/use-price-type-store';
import { formatDate, isValidDate } from '@/registry/new-york-v4/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Calendar } from '@/registry/new-york-v4/ui/calendar';
import { Input } from '@/registry/new-york-v4/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/registry/new-york-v4/ui/popover';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from '@/registry/new-york-v4/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/registry/new-york-v4/ui/toggle-group';
import { PriceChangeType } from '@/types/price';

import { CalendarIcon } from 'lucide-react';

type TabType = 'neraca' | 'ketersediaan' | 'kebutuhan';

const NeracaFilter: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(new Date('2025-06-01'));
    const [month, setMonth] = React.useState<Date | undefined>(date);
    const [value, setValue] = React.useState(formatDate(date));

    const { selectedCommodity, setselectedCommodity } = useCommodityStore();
    const { selectedPriceType, setSelectedPriceType } = useTypePriceStore();
    const { activeTab, setActiveTab } = useInfoPriceStore();

    return (
        <div className='mx-auto w-full pt-24 sm:pt-26 xl:pt-28'>
            <div className='mb-6 flex flex-col gap-4 px-4 lg:flex-row lg:items-center lg:justify-between'>
                <div className='flex flex-col items-start gap-3 sm:flex-row sm:items-center md:gap-4'>
                    <span className='hidden text-sm font-medium text-slate-500 sm:block'>Jenis Informasi</span>

                    <ToggleGroup
                        type='single'
                        value={activeTab}
                        onValueChange={(value) => value && setActiveTab(value as PriceChangeType)}
                        className='rounded-lg border border-gray-300 bg-white'>
                        <ToggleGroupItem
                            value='price'
                            className='border-r px-3 text-sm font-medium text-slate-500 data-[state=on]:bg-blue-100/80 data-[state=on]:text-blue-900/80 md:px-4 md:text-sm'>
                            Harga
                        </ToggleGroupItem>
                        <ToggleGroupItem
                            value='price-change'
                            className='border-r px-3 text-sm font-medium text-slate-500 data-[state=on]:bg-blue-100/80 data-[state=on]:text-blue-900/80 md:px-4 md:text-sm'>
                            Perubahan Harga (%)
                        </ToggleGroupItem>
                    </ToggleGroup>

                    <div className='grid w-full grid-cols-2 items-center gap-2 sm:w-fit sm:grid-cols-1'>
                        <Select value={selectedPriceType} onValueChange={setSelectedPriceType}>
                            <SelectTrigger className='w-full bg-white sm:w-[200px]'>
                                <SelectValue placeholder='Pilih produk' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Tipe</SelectLabel>
                                    <SelectItem value='level-harga'>Level Harga</SelectItem>
                                    <SelectItem value='kaltara'>Dibanding kaltara</SelectItem>
                                    <SelectItem value='mtm'>Bulan ke Bulan(MTM)</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <div className='flex w-full items-center gap-2 sm:hidden sm:w-fit'>
                            <span className='hidden text-sm font-medium text-slate-500 sm:block'>Bulan</span>
                            <div className='relative flex w-full gap-2 sm:w-fit'>
                                <Input
                                    id='date'
                                    value={value}
                                    placeholder='Jun 01, 2025'
                                    className='bg-background'
                                    onChange={(e) => {
                                        const date = new Date(e.target.value);
                                        setValue(e.target.value);
                                        if (isValidDate(date)) {
                                            setDate(date);
                                            setMonth(date);
                                        }
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'ArrowDown') {
                                            e.preventDefault();
                                            setOpen(true);
                                        }
                                    }}
                                />
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            id='date-picker'
                                            variant='ghost'
                                            className='absolute top-1/2 right-2 size-6 -translate-y-1/2'>
                                            <CalendarIcon className='size-3.5' />
                                            <span className='sr-only'>Select date</span>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        className='w-auto overflow-hidden p-0'
                                        align='end'
                                        alignOffset={-8}
                                        sideOffset={10}>
                                        <Calendar
                                            mode='single'
                                            selected={date}
                                            captionLayout='dropdown'
                                            month={month}
                                            onMonthChange={setMonth}
                                            onSelect={(date) => {
                                                setDate(date);
                                                setValue(formatDate(date));
                                                setOpen(false);
                                            }}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='hidden w-full items-center gap-2 sm:flex sm:w-fit'>
                    <span className='hidden text-sm font-medium text-slate-500 sm:block'>Bulan</span>
                    <div className='relative flex w-full gap-2 sm:w-fit'>
                        <Input
                            id='date'
                            value={value}
                            placeholder='Jun 01, 2025'
                            className='bg-background'
                            onChange={(e) => {
                                const date = new Date(e.target.value);
                                setValue(e.target.value);
                                if (isValidDate(date)) {
                                    setDate(date);
                                    setMonth(date);
                                }
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'ArrowDown') {
                                    e.preventDefault();
                                    setOpen(true);
                                }
                            }}
                        />
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    id='date-picker'
                                    variant='ghost'
                                    className='absolute top-1/2 right-2 size-6 -translate-y-1/2'>
                                    <CalendarIcon className='size-3.5' />
                                    <span className='sr-only'>Select date</span>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                className='w-auto overflow-hidden p-0'
                                align='end'
                                alignOffset={-8}
                                sideOffset={10}>
                                <Calendar
                                    mode='single'
                                    selected={date}
                                    captionLayout='dropdown'
                                    month={month}
                                    onMonthChange={setMonth}
                                    onSelect={(date) => {
                                        setDate(date);
                                        setValue(formatDate(date));
                                        setOpen(false);
                                    }}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>

            <div className='mt-6 pl-4 xl:pl-0'>
                <div className='flex items-start justify-start gap-5 overflow-x-scroll p-1 xl:justify-center'>
                    {commodityItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setselectedCommodity(item.id)}
                            className={`flex flex-col items-center gap-2`}>
                            <div
                                className={`flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border text-2xl transition-all ease-in md:h-16 md:w-16 md:text-3xl ${
                                    selectedCommodity === item.id ? 'bg-white ring-2 ring-blue-500' : 'bg-slate-100'
                                }`}>
                                <Image src={item.icon} alt='icon' width={40} height={40} />
                            </div>
                            <span
                                className={`text-center text-xs leading-tight font-semibold ${
                                    selectedCommodity === item.id ? 'text-blue-500' : 'text-gray-700'
                                }`}>
                                {item.name}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NeracaFilter;
