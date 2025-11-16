'use client';
import React, { useId, useMemo, useState } from 'react';

import Image from 'next/image';

import { daerahData, komoditasData } from '@/data/price-chart';
import { Card, CardContent, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/new-york-v4/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/registry/new-york-v4/ui/tabs';
import {
    CustomTooltipProps,
    DaerahItem,
    DropdownOption,
    FilterType,
    KomoditasItem,
    KomoditasKey,
    PriceCardProps,
    PriceDataPoint
} from '@/types/price';

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const PriceCard: React.FC<PriceCardProps> = ({ title, currentPrice, change, icon, data }) => {
    const gradientId = useId();
    const maxPrice = Math.max(...data.map((d: PriceDataPoint) => d.price));
    const minPrice = Math.min(...data.map((d: PriceDataPoint) => d.price));

    const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className='rounded-lg border border-gray-200 bg-white p-3 shadow-lg'>
                    <p className='text-sm font-medium'>Harga: Rp {payload[0].value.toLocaleString('id-ID')}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <Card className='w-full'>
            <CardHeader className='pb-2'>
                <div className='flex items-start gap-3'>
                    <Image src={icon} alt='icon' width={100} height={100} className='h-10 w-9' />
                    {/* <div className='text-3xl'>{icon}</div> */}
                    <div className='flex-1'>
                        <CardTitle className='text-base font-medium'>{title}</CardTitle>
                        <div className='mt-1 text-2xl font-bold'>Rp {currentPrice.toLocaleString('id-ID')}</div>
                        <div className={`mt-1 text-sm font-medium ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {change >= 0 ? '+' : ''} Rp {Math.abs(change).toLocaleString('id-ID')}
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className='pt-0'>
                <ResponsiveContainer width='100%' height={200}>
                    <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id={gradientId} x1='0' y1='0' x2='0' y2='1'>
                                <stop offset='5%' stopColor='#3b82f6' stopOpacity={0.3} />
                                <stop offset='95%' stopColor='#3b82f6' stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray='3 3' stroke='#e5e7eb' />
                        <XAxis dataKey='date' tick={{ fontSize: 11 }} tickMargin={8} />
                        <YAxis
                            domain={[Math.floor(minPrice * 0.95), Math.ceil(maxPrice * 1.05)]}
                            tick={{ fontSize: 11 }}
                            tickFormatter={(value: number) => `${(value / 1000).toFixed(0)}k`}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Area
                            type='monotone'
                            dataKey='price'
                            stroke='#3b82f6'
                            strokeWidth={0.7}
                            fill={`url(#${gradientId})`}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

// ========== MAIN COMPONENT ==========

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
            <div className='mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center'>
                <h1 className='text-xl font-bold text-gray-900 lg:text-2xl'>Trend & Perubahan Harga 5 Hari Terakhir</h1>
                <div className='flex w-full flex-col items-start gap-4 md:w-fit md:flex-row md:items-center'>
                    <span className='text-sm font-medium text-gray-600'>Filter</span>

                    <div className='flex w-full flex-col items-center justify-between gap-2 md:w-fit md:flex-row'>
                        <Tabs value={filterType} onValueChange={handleFilterChange} className='w-full md:w-auto'>
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
                            <SelectTrigger className='w-full flex-1 bg-white md:w-[200px]'>
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
                    </div>
                </div>
            </div>

            {/* Subtitle */}
            <div className='mb-6 flex items-center gap-2'>
                <Image src='/icons/ic-beras.png' alt='icons' width={100} height={100} className='h-10 w-9' />
                <h2 className='text-lg font-medium text-gray-700'>
                    Grafik
                    {filterType === 'komoditas'
                        ? dropdownOptions.find((o: DropdownOption) => o.value === selectedItem)?.label
                        : selectedItem}
                    / kilo - Provinsi Kalimantan Utara
                </h2>
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
