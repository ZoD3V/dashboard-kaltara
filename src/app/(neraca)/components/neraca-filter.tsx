// components/food-info-layout.tsx
'use client';

import React, { useState } from 'react';

import { foodItems } from '@/data/food-items';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Calendar } from '@/registry/new-york-v4/ui/calendar';
import { Input } from '@/registry/new-york-v4/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/registry/new-york-v4/ui/popover';
import { ToggleGroup, ToggleGroupItem } from '@/registry/new-york-v4/ui/toggle-group';

import { CalendarIcon } from 'lucide-react';

type TabType = 'neraca' | 'ketersediaan' | 'kebutuhan';

export default function FoodInfoLayout() {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(new Date('2025-06-01'));
    const [month, setMonth] = React.useState<Date | undefined>(date);
    const [value, setValue] = React.useState(formatDate(date));
    const [selectedFood, setSelectedFood] = useState('beras');
    const [activeTab, setActiveTab] = useState<TabType>('neraca');

    return (
        <div className='mx-auto w-full pt-28'>
            <div className='mb-6 flex flex-col gap-4 px-4 lg:flex-row lg:items-center lg:justify-between'>
                <div className='flex flex-wrap items-center gap-3 md:gap-4'>
                    <span className='text-sm font-medium text-slate-500'>Jenis Informasi</span>

                    <ToggleGroup
                        type='single'
                        value={activeTab}
                        onValueChange={(value) => value && setActiveTab(value as TabType)}
                        className='rounded-lg border border-gray-300 bg-white'>
                        <ToggleGroupItem
                            value='neraca'
                            className='border-r px-3 text-sm font-medium text-slate-500 data-[state=on]:bg-blue-100 data-[state=on]:text-purple-900/80 md:px-4 md:text-sm'>
                            Neraca
                        </ToggleGroupItem>
                        <ToggleGroupItem
                            value='ketersediaan'
                            className='border-r px-3 text-sm font-medium text-slate-500 data-[state=on]:bg-blue-100 data-[state=on]:text-purple-900/80 md:px-4 md:text-sm'>
                            Ketersediaan
                        </ToggleGroupItem>
                        <ToggleGroupItem
                            value='kebutuhan'
                            className='px-3 text-sm font-medium text-slate-500 data-[state=on]:bg-blue-100 data-[state=on]:text-purple-900/80 md:px-4 md:text-sm'>
                            Kebutuhan
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>

                <div className='flex items-center gap-2'>
                    <span className='text-sm font-medium text-slate-500'>Bulan</span>
                    <div className='relative flex gap-2'>
                        <Input
                            id='date'
                            value={value}
                            placeholder='June 01, 2025'
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
                    {foodItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setSelectedFood(item.id)}
                            className={`flex flex-col items-center gap-2`}>
                            <div
                                className={`flex h-12 w-12 items-center justify-center rounded-full border text-2xl transition-all ease-in md:h-16 md:w-16 md:text-3xl ${
                                    selectedFood === item.id ? 'bg-white ring-2 ring-blue-500' : 'bg-slate-100'
                                }`}>
                                {item.icon}
                            </div>
                            <span
                                className={`text-center text-[10px] leading-tight font-semibold md:text-xs ${
                                    selectedFood === item.id ? 'text-blue-500' : 'text-gray-700'
                                }`}>
                                {item.name}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

function formatDate(date: Date | undefined) {
    if (!date) {
        return '';
    }

    return date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
}
function isValidDate(date: Date | undefined) {
    if (!date) {
        return false;
    }

    return !isNaN(date.getTime());
}
