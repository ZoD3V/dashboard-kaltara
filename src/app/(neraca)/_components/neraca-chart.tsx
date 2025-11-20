'use client';
import React, { useState } from 'react';

import Image from 'next/image';

import { neracaChartData } from '@/data/neraca-chart';
import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';
import { Checkbox } from '@/registry/new-york-v4/ui/checkbox';
import { Label } from '@/registry/new-york-v4/ui/label';
import { Switch } from '@/registry/new-york-v4/ui/switch';

import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const NeracaChart = () => {
    const [showNeraca, setShowNeraca] = useState(true);
    const [showHarga, setShowHarga] = useState(true);
    const [isStacked, setIsStacked] = useState(true);

    return (
        <div className='mx-auto w-full space-y-6 bg-gray-50 px-4 py-12'>
            <div className='flex items-center gap-3'>
                <Image src='/icons/ic-beras.png' alt='icon' width={40} height={40} />
                <div className='flex-1'>
                    <CardTitle className='text-xl font-semibold'>
                        Grafik Beras / ton - Provinsi Kalimantan Utara
                    </CardTitle>
                    <CardDescription className='mt-1 text-sm text-gray-500'>
                        Berdasarkan Neraca (ton) dan Harga(Rp/ton) - Rhs
                    </CardDescription>
                </div>
            </div>
            <Card className='pt-0 pb-4'>
                <CardHeader></CardHeader>

                <CardContent>
                    {/* Controls */}
                    <div className='mb-6 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center'>
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
                                        id='neraca-2'
                                        checked={showNeraca}
                                        onCheckedChange={(checked) => {
                                            setShowNeraca(!!checked);
                                        }}
                                    />
                                    <Label
                                        htmlFor='neraca-2'
                                        className='flex cursor-pointer items-center gap-2 text-sm font-medium'>
                                        <span className='h-3 w-3 rounded-sm bg-blue-500'></span>
                                        Neraca (ton)
                                    </Label>
                                </div>

                                {/* Harga Checkbox */}
                                <div className='flex items-center gap-2 rounded-lg border p-2'>
                                    <Checkbox
                                        id='harga'
                                        checked={showHarga}
                                        onCheckedChange={(checked) => {
                                            setShowHarga(!!checked);
                                        }}
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
                        <AreaChart data={neracaChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
