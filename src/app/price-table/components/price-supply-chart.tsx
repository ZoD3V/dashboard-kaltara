'use client';
import React, { useMemo, useState } from 'react';

import Image from 'next/image';

import { PriceCard } from '@/components/price-card';
import { daerahData, komoditasData } from '@/data/price-chart';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/new-york-v4/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/registry/new-york-v4/ui/tabs';
import { DaerahItem, DropdownOption, FilterType, KomoditasItem, KomoditasKey } from '@/types/price';

import { Download } from 'lucide-react';

const PriceSupplyFilter: React.FC = () => {
    const [filterType, setFilterType] = useState<FilterType>('komoditas');
    const [selectedItem, setSelectedItem] = useState<string>('beras');

    const displayData = useMemo<(KomoditasItem | DaerahItem)[]>(() => {
        if (filterType === 'komoditas') {
            return komoditasData[selectedItem as KomoditasKey] || [];
        } else {
            return daerahData[selectedItem] || [];
        }
    }, [filterType, selectedItem]);

    const dropdownOptions = useMemo<DropdownOption[]>(() => {
        if (filterType === 'komoditas') {
            return [
                { value: 'beras', label: 'Beras' },
                { value: 'gula', label: 'Gula Pasir' },
                { value: 'bawang', label: 'Bawang Merah' }
            ];
        } else {
            return [
                { value: 'Nunukan', label: 'Kabupaten Nunukan' },
                { value: 'Tarakan', label: 'Kota Tarakan' },
                { value: 'Bulungan', label: 'Kabupaten Bulungan' },
                { value: 'Malinau', label: 'Kabupaten Malinau' },
                { value: 'Tana Tidung', label: 'Kabupaten Tana Tidung' }
            ];
        }
    }, [filterType]);

    const handleFilterChange = (value: string): void => {
        setFilterType(value as FilterType);
        if (value === 'komoditas') {
            setSelectedItem('beras');
        } else {
            setSelectedItem('Nunukan');
        }
    };

    const getCardTitle = (item: KomoditasItem | DaerahItem): string => {
        if ('kabupaten' in item) {
            return item.kabupaten;
        }

        return item.komoditas;
    };

    return (
        <div className='w-full bg-gray-50 px-4 py-12'>
            {/* Header */}
            <div className='mb-6 flex flex-col items-start justify-between gap-4 xl:flex-row xl:items-center'>
                <div>
                    <h1 className='text-xl font-bold text-gray-900 lg:text-2xl'>
                        Trend & Perubahan Harga 5 Hari Terakhir
                    </h1>
                    <p className='text-sm text-slate-500'>
                        Perkembangan Tren dan Perubahan Harga dalam 5 Hari Terakhir
                    </p>
                </div>
                <div className='flex w-full flex-col items-start gap-4 xl:w-fit xl:flex-row xl:items-center'>
                    <span className='text-sm font-medium text-gray-600'>Filter</span>

                    <div className='flex w-full flex-col items-start justify-between gap-2 xl:w-fit xl:flex-row xl:items-center'>
                        <Tabs value={filterType} onValueChange={handleFilterChange} className='w-full xl:w-auto'>
                            <TabsList className='grid w-full grid-cols-2'>
                                <TabsTrigger value='komoditas' className='px-6'>
                                    Komoditas
                                </TabsTrigger>
                                <TabsTrigger value='daerah' className='px-6'>
                                    Daerah
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                        <Select value={selectedItem} onValueChange={setSelectedItem}>
                            <SelectTrigger className='w-full flex-1 bg-white xl:w-[200px]'>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {dropdownOptions.map((option: DropdownOption) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Button
                            variant='outline'
                            className='bg-primary hover:bg-primary/90 h-10 w-10 rounded-full text-white transition-all hover:text-white'
                            size='icon'>
                            <Download />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Grid Cards */}
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
                {displayData.map((item: KomoditasItem | DaerahItem, index: number) => (
                    <PriceCard
                        key={index}
                        title={getCardTitle(item)}
                        currentPrice={item.currentPrice}
                        change={item.change}
                        icon={item.icon}
                        data={item.data}
                    />
                ))}
            </div>
        </div>
    );
};

export default PriceSupplyFilter;
