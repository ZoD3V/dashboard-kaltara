'use client';
import React, { useState } from 'react';

import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';
import { Checkbox } from '@/registry/new-york-v4/ui/checkbox';
import { Label } from '@/registry/new-york-v4/ui/label';

import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// Data dummy untuk 1 tahun (Oktober 2024 - Oktober 2025)
const dummyData = [
    { month: 'Okt 2024', neraca: 80000, harga: 70000 },
    { month: 'Nov 2024', neraca: 72000, harga: 71000 },
    { month: 'Des 2024', neraca: 64000, harga: 75000 },
    { month: 'Jan 2025', neraca: 67000, harga: 75000 },
    { month: 'Feb 2025', neraca: 72000, harga: 54000 },
    { month: 'Mar 2025', neraca: 74000, harga: 57000 },
    { month: 'Apr 2025', neraca: 68000, harga: 75000 },
    { month: 'Mei 2025', neraca: 79000, harga: 78000 },
    { month: 'Jun 2025', neraca: 77000, harga: 80000 },
    { month: 'Jul 2025', neraca: 79000, harga: 79000 },
    { month: 'Agu 2025', neraca: 78000, harga: 77000 },
    { month: 'Sep 2025', neraca: 79000, harga: 79000 },
    { month: 'Okt 2025', neraca: 76000, harga: 81000 }
];

const NeracaChart = () => {
    const [showNeraca, setShowNeraca] = useState(true);
    const [showHarga, setShowHarga] = useState(true);
    const [isStacked, setIsStacked] = useState(true);

    return (
        <div className='mx-auto w-full space-y-6 p-6 px-4'>
            <div className='flex items-start gap-3'>
                <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-2xl'>
                    🌾
                </div>
                <div className='flex-1'>
                    <CardTitle className='text-xl font-semibold'>
                        Grafik Beras / ton - Provinsi Kalimantan Utara
                    </CardTitle>
                    <CardDescription className='mt-1 text-sm text-gray-500'>
                        Berdasarkan Neraca (ton) dan Harga(Rp/ton) - Rhs
                    </CardDescription>
                </div>
            </div>
            <Card className='py-4'>
                <CardHeader></CardHeader>

                <CardContent>
                    {/* Controls */}
                    <div className='mb-6 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center'>
                        <div className='flex flex-col items-start gap-6 lg:flex-row lg:items-center'>
                            {/* Stacked Toggle */}
                            <div className='flex items-center gap-3 text-slate-900'>
                                <div className='flex items-center gap-2'>
                                    <div
                                        className={`h-6 w-10 cursor-pointer rounded-full transition-colors ${
                                            isStacked ? 'bg-primary' : 'bg-blue-300'
                                        }`}
                                        onClick={() => setIsStacked(!isStacked)}>
                                        <div
                                            className={`h-5 w-5 transform rounded-full bg-white shadow-md transition-transform ${
                                                isStacked ? 'translate-x-5' : 'translate-x-0.5'
                                            } mt-0.5`}
                                        />
                                    </div>
                                    <Label
                                        className='cursor-pointer text-slate-900'
                                        onClick={() => setIsStacked(!isStacked)}>
                                        Tipe Stacked
                                    </Label>
                                </div>
                            </div>

                            <div className='flex flex-wrap items-center gap-4'>
                                {/* Neraca Checkbox */}
                                <div className='flex items-center gap-2'>
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
                                        Neraca (ton)
                                    </Label>
                                </div>

                                {/* Harga Checkbox */}
                                <div className='flex items-center gap-2'>
                                    <Checkbox
                                        id='harga'
                                        checked={showHarga}
                                        onCheckedChange={(checked) => {
                                            setShowHarga(!!checked);
                                        }}
                                        className='border-teal-400 data-[state=checked]:bg-teal-500'
                                    />
                                    <Label
                                        htmlFor='harga'
                                        className='flex cursor-pointer items-center gap-2 text-sm font-medium'>
                                        <span className='h-3 w-3 rounded-sm bg-teal-500'></span>
                                        Harga(Rp/ton) - Rhs
                                    </Label>
                                </div>
                            </div>
                        </div>
                        <Badge className='border-blue-200 bg-blue-50 text-blue-600'>1 Tahun</Badge>
                    </div>

                    {/* Chart */}
                    <ResponsiveContainer width='100%' height={350}>
                        <AreaChart data={dummyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id='colorNeraca' x1='0' y1='0' x2='0' y2='1'>
                                    <stop offset='5%' stopColor='#3b82f6' stopOpacity={0.3} />
                                    <stop offset='95%' stopColor='#3b82f6' stopOpacity={0.05} />
                                </linearGradient>
                                <linearGradient id='colorHarga' x1='0' y1='0' x2='0' y2='1'>
                                    <stop offset='5%' stopColor='#14b8a6' stopOpacity={0.3} />
                                    <stop offset='95%' stopColor='#14b8a6' stopOpacity={0.05} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray='3 3' stroke='#e5e7eb' />
                            <XAxis dataKey='month' tick={{ fontSize: 12 }} stroke='#6b7280' />
                            <YAxis tick={{ fontSize: 12 }} stroke='#6b7280' domain={[50000, 85000]} />
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
                                    name='Neraca (ton)'
                                    stroke='#3b82f6'
                                    strokeWidth={2}
                                    fill='url(#colorNeraca)'
                                    fillOpacity={1}
                                    activeDot={{ r: 3 }}
                                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                                    stackId={isStacked ? '1' : undefined}
                                />
                            )}
                            {showHarga && (
                                <Area
                                    type='monotone'
                                    dataKey='harga'
                                    name='Harga(Rp/ton) - Rhs'
                                    stroke='#14b8a6'
                                    strokeWidth={2}
                                    fill='url(#colorHarga)'
                                    fillOpacity={1}
                                    activeDot={{ r: 3 }}
                                    dot={{ fill: '#14b8a6', strokeWidth: 2, r: 4 }}
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

export default NeracaChart;
