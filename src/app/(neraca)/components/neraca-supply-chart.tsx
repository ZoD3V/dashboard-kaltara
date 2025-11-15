'use client';
import React, { useMemo, useState } from 'react';

import Image from 'next/image';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';
import { Checkbox } from '@/registry/new-york-v4/ui/checkbox';
import { Label } from '@/registry/new-york-v4/ui/label';
import { Switch } from '@/registry/new-york-v4/ui/switch';
import { Tabs, TabsList, TabsTrigger } from '@/registry/new-york-v4/ui/tabs';

import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// Data dummy untuk 1 tahun (Oktober 2024 - Oktober 2025)
const fullData = [
    { month: 'Okt 2024', neraca: 24000, ketersediaan: 23000, kebutuhan: 24000 },
    { month: 'Nov 2024', neraca: 24500, ketersediaan: 22000, kebutuhan: 23500 },
    { month: 'Des 2024', neraca: 22000, ketersediaan: 22500, kebutuhan: 23000 },
    { month: 'Jan 2025', neraca: 20000, ketersediaan: 23500, kebutuhan: 23500 },
    { month: 'Feb 2025', neraca: 21000, ketersediaan: 24000, kebutuhan: 24000 },
    { month: 'Mar 2025', neraca: 21500, ketersediaan: 21500, kebutuhan: 24000 },
    { month: 'Apr 2025', neraca: 20000, ketersediaan: 22000, kebutuhan: 23500 },
    { month: 'Mei 2025', neraca: 18500, ketersediaan: 22500, kebutuhan: 23000 },
    { month: 'Jun 2025', neraca: 16000, ketersediaan: 21500, kebutuhan: 22000 },
    { month: 'Jul 2025', neraca: 15500, ketersediaan: 23500, kebutuhan: 21000 },
    { month: 'Agu 2025', neraca: 16500, ketersediaan: 21000, kebutuhan: 18000 },
    { month: 'Sep 2025', neraca: 16500, ketersediaan: 20500, kebutuhan: 18500 },
    { month: 'Okt 2025', neraca: 16000, ketersediaan: 18000, kebutuhan: 17000 }
];

const NeracaSupplyChart = () => {
    const [showNeraca, setShowNeraca] = useState(true);
    const [showKetersediaan, setShowKetersediaan] = useState(true);
    const [showKebutuhan, setShowKebutuhan] = useState(true);
    const [isStacked, setIsStacked] = useState(true);
    const [timeRange, setTimeRange] = useState('1year');

    // Filter data berdasarkan time range
    const filteredData = useMemo(() => {
        if (timeRange === '3months') {
            return fullData.slice(-3);
        } else if (timeRange === '6months') {
            return fullData.slice(-6);
        }

        return fullData;
    }, [timeRange]);

    return (
        <div className='mx-auto w-full space-y-6 bg-gray-50 px-4 pt-12'>
            <div className='flex items-center gap-3'>
                <Image src='/icons/ic-beras.png' alt='icon' width={40} height={40} />

                <div className='flex-1'>
                    <CardTitle className='text-xl font-semibold'>
                        Grafik Beras / ton - Provinsi Kalimantan Utara
                    </CardTitle>
                    <CardDescription className='mt-1 text-sm text-gray-500'>
                        Berdasarkan Neraca, Ketersediaan dan Kebutuhan
                    </CardDescription>
                </div>
            </div>
            <Card className='pt-0 pb-4'>
                <CardHeader></CardHeader>

                <CardContent>
                    {/* Controls */}
                    <div className='mb-6 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center'>
                        <div className='flex flex-col items-start gap-6 lg:flex-row lg:items-center'>
                            {/* Stacked Toggle */}
                            <div className='flex items-center gap-3 text-slate-900'>
                                <div className='flex items-center gap-2'>
                                    <Switch
                                        id='chart-stack'
                                        checked={isStacked}
                                        onClick={() => setIsStacked(!isStacked)}
                                    />
                                    <Label
                                        htmlFor='chart-stack'
                                        className='cursor-pointer text-slate-900'
                                        onClick={() => setIsStacked(!isStacked)}>
                                        Tipe Stacked
                                    </Label>
                                </div>
                            </div>

                            <div className='flex flex-wrap items-center gap-4'>
                                {/* Neraca Checkbox */}
                                <div className='flex items-center gap-2 rounded-lg border p-2'>
                                    <Checkbox
                                        id='neraca'
                                        checked={showNeraca}
                                        onCheckedChange={(checked) => {
                                            setShowNeraca(!!checked);
                                        }}
                                    />
                                    <Label
                                        htmlFor='neraca'
                                        className='flex cursor-pointer items-center gap-2 text-sm font-medium'>
                                        <span className='h-3 w-3 rounded-sm bg-blue-500'></span>
                                        Neraca
                                    </Label>
                                </div>

                                {/* Ketersediaan Checkbox */}
                                <div className='flex items-center gap-2 rounded-lg border p-2'>
                                    <Checkbox
                                        id='ketersediaan'
                                        checked={showKetersediaan}
                                        onCheckedChange={(checked) => {
                                            setShowKetersediaan(!!checked);
                                        }}
                                    />
                                    <Label
                                        htmlFor='ketersediaan'
                                        className='flex cursor-pointer items-center gap-2 text-sm font-medium'>
                                        <span className='h-3 w-3 rounded-sm bg-teal-500'></span>
                                        Ketersediaan
                                    </Label>
                                </div>

                                {/* Kebutuhan Checkbox */}
                                <div className='flex items-center gap-2 rounded-lg border p-2'>
                                    <Checkbox
                                        id='kebutuhan'
                                        checked={showKebutuhan}
                                        onCheckedChange={(checked) => {
                                            setShowKebutuhan(!!checked);
                                        }}
                                    />
                                    <Label
                                        htmlFor='kebutuhan'
                                        className='flex cursor-pointer items-center gap-2 text-sm font-medium'>
                                        <span className='h-3 w-3 rounded-sm bg-red-500'></span>
                                        Kebutuhan
                                    </Label>
                                </div>
                            </div>
                        </div>

                        {/* Time Range Tabs */}
                        <Tabs value={timeRange} onValueChange={setTimeRange}>
                            <TabsList className='grid w-full grid-cols-3'>
                                <TabsTrigger value='3months' className='px-6'>
                                    3 Bulan
                                </TabsTrigger>
                                <TabsTrigger value='6months' className='px-6'>
                                    6 Bulan
                                </TabsTrigger>
                                <TabsTrigger value='1year' className='px-6'>
                                    1 Tahun
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>

                    {/* Chart */}
                    <ResponsiveContainer width='100%' height={350}>
                        <AreaChart data={filteredData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id='colorNeraca' x1='0' y1='0' x2='0' y2='1'>
                                    <stop offset='5%' stopColor='#3b82f6' stopOpacity={0.3} />
                                    <stop offset='95%' stopColor='#3b82f6' stopOpacity={0.05} />
                                </linearGradient>
                                <linearGradient id='colorKetersediaan' x1='0' y1='0' x2='0' y2='1'>
                                    <stop offset='5%' stopColor='#14b8a6' stopOpacity={0.3} />
                                    <stop offset='95%' stopColor='#14b8a6' stopOpacity={0.05} />
                                </linearGradient>
                                <linearGradient id='colorKebutuhan' x1='0' y1='0' x2='0' y2='1'>
                                    <stop offset='5%' stopColor='#ef4444' stopOpacity={0.3} />
                                    <stop offset='95%' stopColor='#ef4444' stopOpacity={0.05} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray='3 3' stroke='#e5e7eb' />
                            <XAxis dataKey='month' tick={{ fontSize: 12 }} stroke='#6b7280' />
                            <YAxis tick={{ fontSize: 12 }} stroke='#6b7280' domain={[10000, 30000]} />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'white',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    fontSize: '12px'
                                }}
                            />
                            <Legend wrapperStyle={{ fontSize: '14px', paddingTop: '20px' }} iconType='line' />
                            {showNeraca && (
                                <Area
                                    type='monotone'
                                    dataKey='neraca'
                                    name='Neraca'
                                    stroke='#3b82f6'
                                    strokeWidth={2}
                                    fill='url(#colorNeraca)'
                                    fillOpacity={1}
                                    activeDot={{ r: 6 }}
                                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                                    stackId={isStacked ? '1' : undefined}
                                />
                            )}
                            {showKetersediaan && (
                                <Area
                                    type='monotone'
                                    dataKey='ketersediaan'
                                    name='Ketersediaan'
                                    stroke='#14b8a6'
                                    strokeWidth={2}
                                    fill='url(#colorKetersediaan)'
                                    fillOpacity={1}
                                    activeDot={{ r: 6 }}
                                    dot={{ fill: '#14b8a6', strokeWidth: 2, r: 4 }}
                                    stackId={isStacked ? '1' : undefined}
                                />
                            )}
                            {showKebutuhan && (
                                <Area
                                    type='monotone'
                                    dataKey='kebutuhan'
                                    name='Kebutuhan'
                                    stroke='#ef4444'
                                    strokeWidth={2}
                                    fill='url(#colorKebutuhan)'
                                    fillOpacity={1}
                                    activeDot={{ r: 6 }}
                                    dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
                                    stackId={isStacked ? '1' : undefined}
                                />
                            )}
                        </AreaChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    );
};

export default NeracaSupplyChart;
