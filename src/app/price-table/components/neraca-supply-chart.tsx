'use client';
import React, { useId, useMemo, useState } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/new-york-v4/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/registry/new-york-v4/ui/tabs';

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// ========== TYPES & INTERFACES ==========

interface PriceDataPoint {
    date: string;
    price: number;
}

interface KomoditasItem {
    kabupaten: string;
    currentPrice: number;
    change: number;
    icon: string;
    data: PriceDataPoint[];
}

interface DaerahItem {
    komoditas: string;
    currentPrice: number;
    change: number;
    icon: string;
    data: PriceDataPoint[];
}

interface KomoditasData {
    beras: KomoditasItem[];
    gula: KomoditasItem[];
    bawang: KomoditasItem[];
}

interface DaerahData {
    [kabupaten: string]: DaerahItem[];
}

interface DropdownOption {
    value: string;
    label: string;
}

type FilterType = 'komoditas' | 'daerah';

type KomoditasKey = keyof KomoditasData;

interface PriceCardProps {
    title: string;
    currentPrice: number;
    change: number;
    icon: string;
    data: PriceDataPoint[];
}

interface TooltipPayload {
    value: number;
    dataKey: string;
}

interface CustomTooltipProps {
    active?: boolean;
    payload?: TooltipPayload[];
    label?: string;
}

// ========== DATA DUMMY ==========

const komoditasData: KomoditasData = {
    beras: [
        {
            kabupaten: 'Nunukan',
            currentPrice: 27000,
            change: 540,
            icon: '🌾',
            data: [
                { date: '01/11/2025', price: 23000 },
                { date: '02/11/2025', price: 22000 },
                { date: '03/11/2025', price: 20000 },
                { date: '04/11/2025', price: 20000 },
                { date: '05/11/2025', price: 20000 }
            ]
        },
        {
            kabupaten: 'Tarakan',
            currentPrice: 36450,
            change: 540,
            icon: '🌾',
            data: [
                { date: '01/11/2025', price: 23000 },
                { date: '02/11/2025', price: 22000 },
                { date: '03/11/2025', price: 20000 },
                { date: '04/11/2025', price: 20000 },
                { date: '05/11/2025', price: 20000 }
            ]
        },
        {
            kabupaten: 'Bulungan',
            currentPrice: 32409,
            change: 540,
            icon: '🌾',
            data: [
                { date: '01/11/2025', price: 23000 },
                { date: '02/11/2025', price: 21500 },
                { date: '03/11/2025', price: 20000 },
                { date: '04/11/2025', price: 20000 },
                { date: '05/11/2025', price: 20000 }
            ]
        },
        {
            kabupaten: 'Malinau',
            currentPrice: 22000,
            change: 540,
            icon: '🌾',
            data: [
                { date: '01/11/2025', price: 24000 },
                { date: '02/11/2025', price: 22500 },
                { date: '03/11/2025', price: 20000 },
                { date: '04/11/2025', price: 20000 },
                { date: '05/11/2025', price: 20000 }
            ]
        },
        {
            kabupaten: 'Tana Tidung',
            currentPrice: 43500,
            change: 540,
            icon: '🌾',
            data: [
                { date: '01/11/2025', price: 24000 },
                { date: '02/11/2025', price: 22500 },
                { date: '03/11/2025', price: 20000 },
                { date: '04/11/2025', price: 20000 },
                { date: '05/11/2025', price: 20000 }
            ]
        }
    ],
    gula: [
        {
            kabupaten: 'Nunukan',
            currentPrice: 18500,
            change: 300,
            icon: '🧂',
            data: [
                { date: '01/11/2025', price: 19500 },
                { date: '02/11/2025', price: 19000 },
                { date: '03/11/2025', price: 18800 },
                { date: '04/11/2025', price: 18500 },
                { date: '05/11/2025', price: 18200 }
            ]
        },
        {
            kabupaten: 'Tarakan',
            currentPrice: 19200,
            change: 250,
            icon: '🧂',
            data: [
                { date: '01/11/2025', price: 20000 },
                { date: '02/11/2025', price: 19800 },
                { date: '03/11/2025', price: 19500 },
                { date: '04/11/2025', price: 19300 },
                { date: '05/11/2025', price: 18950 }
            ]
        },
        {
            kabupaten: 'Bulungan',
            currentPrice: 17800,
            change: -200,
            icon: '🧂',
            data: [
                { date: '01/11/2025', price: 18500 },
                { date: '02/11/2025', price: 18300 },
                { date: '03/11/2025', price: 18000 },
                { date: '04/11/2025', price: 17900 },
                { date: '05/11/2025', price: 18000 }
            ]
        },
        {
            kabupaten: 'Malinau',
            currentPrice: 19500,
            change: 400,
            icon: '🧂',
            data: [
                { date: '01/11/2025', price: 20200 },
                { date: '02/11/2025', price: 19900 },
                { date: '03/11/2025', price: 19600 },
                { date: '04/11/2025', price: 19400 },
                { date: '05/11/2025', price: 19100 }
            ]
        },
        {
            kabupaten: 'Tana Tidung',
            currentPrice: 18900,
            change: 150,
            icon: '🧂',
            data: [
                { date: '01/11/2025', price: 19800 },
                { date: '02/11/2025', price: 19500 },
                { date: '03/11/2025', price: 19200 },
                { date: '04/11/2025', price: 19000 },
                { date: '05/11/2025', price: 18750 }
            ]
        }
    ],
    bawang: [
        {
            kabupaten: 'Nunukan',
            currentPrice: 45000,
            change: 1500,
            icon: '🧅',
            data: [
                { date: '01/11/2025', price: 48000 },
                { date: '02/11/2025', price: 47000 },
                { date: '03/11/2025', price: 46000 },
                { date: '04/11/2025', price: 45500 },
                { date: '05/11/2025', price: 43500 }
            ]
        },
        {
            kabupaten: 'Tarakan',
            currentPrice: 42000,
            change: -800,
            icon: '🧅',
            data: [
                { date: '01/11/2025', price: 44000 },
                { date: '02/11/2025', price: 43500 },
                { date: '03/11/2025', price: 43000 },
                { date: '04/11/2025', price: 42500 },
                { date: '05/11/2025', price: 42800 }
            ]
        },
        {
            kabupaten: 'Bulungan',
            currentPrice: 46500,
            change: 2000,
            icon: '🧅',
            data: [
                { date: '01/11/2025', price: 49000 },
                { date: '02/11/2025', price: 48000 },
                { date: '03/11/2025', price: 47000 },
                { date: '04/11/2025', price: 46000 },
                { date: '05/11/2025', price: 44500 }
            ]
        },
        {
            kabupaten: 'Malinau',
            currentPrice: 48000,
            change: 1000,
            icon: '🧅',
            data: [
                { date: '01/11/2025', price: 50000 },
                { date: '02/11/2025', price: 49500 },
                { date: '03/11/2025', price: 48800 },
                { date: '04/11/2025', price: 48200 },
                { date: '05/11/2025', price: 47000 }
            ]
        },
        {
            kabupaten: 'Tana Tidung',
            currentPrice: 44000,
            change: -500,
            icon: '🧅',
            data: [
                { date: '01/11/2025', price: 46000 },
                { date: '02/11/2025', price: 45500 },
                { date: '03/11/2025', price: 45000 },
                { date: '04/11/2025', price: 44800 },
                { date: '05/11/2025', price: 44500 }
            ]
        }
    ]
};

const daerahData: DaerahData = {
    Nunukan: [
        { komoditas: 'Beras', currentPrice: 27000, change: 540, icon: '🌾', data: komoditasData.beras[0].data },
        { komoditas: 'Gula Pasir', currentPrice: 18500, change: 300, icon: '🧂', data: komoditasData.gula[0].data },
        { komoditas: 'Bawang Merah', currentPrice: 45000, change: 1500, icon: '🧅', data: komoditasData.bawang[0].data }
    ],
    Tarakan: [
        { komoditas: 'Beras', currentPrice: 36450, change: 540, icon: '🌾', data: komoditasData.beras[1].data },
        { komoditas: 'Gula Pasir', currentPrice: 19200, change: 250, icon: '🧂', data: komoditasData.gula[1].data },
        { komoditas: 'Bawang Merah', currentPrice: 42000, change: -800, icon: '🧅', data: komoditasData.bawang[1].data }
    ],
    Bulungan: [
        { komoditas: 'Beras', currentPrice: 32409, change: 540, icon: '🌾', data: komoditasData.beras[2].data },
        { komoditas: 'Gula Pasir', currentPrice: 17800, change: -200, icon: '🧂', data: komoditasData.gula[2].data },
        { komoditas: 'Bawang Merah', currentPrice: 46500, change: 2000, icon: '🧅', data: komoditasData.bawang[2].data }
    ],
    Malinau: [
        { komoditas: 'Beras', currentPrice: 22000, change: 540, icon: '🌾', data: komoditasData.beras[3].data },
        { komoditas: 'Gula Pasir', currentPrice: 19500, change: 400, icon: '🧂', data: komoditasData.gula[3].data },
        { komoditas: 'Bawang Merah', currentPrice: 48000, change: 1000, icon: '🧅', data: komoditasData.bawang[3].data }
    ],
    'Tana Tidung': [
        { komoditas: 'Beras', currentPrice: 43500, change: 540, icon: '🌾', data: komoditasData.beras[4].data },
        { komoditas: 'Gula Pasir', currentPrice: 18900, change: 150, icon: '🧂', data: komoditasData.gula[4].data },
        { komoditas: 'Bawang Merah', currentPrice: 44000, change: -500, icon: '🧅', data: komoditasData.bawang[4].data }
    ]
};

// ========== COMPONENTS ==========

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
                <div className='flex items-center gap-3'>
                    <div className='text-3xl'>{icon}</div>
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
            <div className='mb-6 flex items-center justify-between'>
                <h1 className='text-2xl font-bold text-gray-900'>Trend & Perubahan Harga 5 Hari Terakhir</h1>
                <div className='flex items-center gap-4'>
                    <span className='text-sm text-gray-600'>Filter</span>

                    <Tabs value={filterType} onValueChange={handleFilterChange} className='w-auto'>
                        <TabsList className='grid grid-cols-2'>
                            <TabsTrigger value='komoditas' className='px-6'>
                                Komoditas
                            </TabsTrigger>
                            <TabsTrigger value='daerah' className='px-6'>
                                Daerah
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <Select value={selectedItem} onValueChange={setSelectedItem}>
                        <SelectTrigger className='w-[200px] bg-white'>
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

            {/* Subtitle */}
            <div className='mb-6 flex items-center gap-2'>
                <span className='text-2xl'>🌾</span>
                <h2 className='text-lg font-medium text-gray-700'>
                    Grafik{' '}
                    {filterType === 'komoditas'
                        ? dropdownOptions.find((o: DropdownOption) => o.value === selectedItem)?.label
                        : selectedItem}{' '}
                    / kilo - Provinsi Kalimantan Utara
                </h2>
            </div>

            {/* Grid Cards */}
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
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
