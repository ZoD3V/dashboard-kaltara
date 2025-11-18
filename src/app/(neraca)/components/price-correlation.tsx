'use client';

import React, { useMemo, useState } from 'react';

import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent, CardHeader } from '@/registry/new-york-v4/ui/card';
import { Checkbox } from '@/registry/new-york-v4/ui/checkbox';
import { Label } from '@/registry/new-york-v4/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/new-york-v4/ui/select';

import { Download } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// Dummy Data
const generateData = (commodity: string, region: string) => {
    const baseData: any = {
        beras: { neraca: 80000, harga: 70000, variance: 5000 },
        'gula pasir': { neraca: 65000, harga: 55000, variance: 3000 },
        'bawang merah': { neraca: 50000, harga: 45000, variance: 8000 },
        'bawang putih': { neraca: 55000, harga: 50000, variance: 7000 },
        'cabai merah': { neraca: 70000, harga: 60000, variance: 10000 }
    };

    const regionMultiplier: any = {
        'Provinsi Kalimantan Utara': 1,
        'Kabupaten Bulungan': 0.95,
        'Kabupaten Malinau': 0.9,
        'Kabupaten Nunukan': 1.05,
        'Kabupaten Tana Tidung': 0.85,
        'Kota Tarakan': 1.1
    };

    const months = [
        'Okt 2024',
        'Nov 2024',
        'Des 2024',
        'Jan 2025',
        'Feb 2025',
        'Mar 2025',
        'Apr 2025',
        'Mei 2025',
        'Jun 2025',
        'Jul 2025',
        'Agu 2025',
        'Sep 2025',
        'Okt 2025'
    ];

    const base = baseData[commodity];
    const multiplier = regionMultiplier[region];

    return months.map((month, index) => {
        const trend = Math.sin(index / 2) * base.variance;
        const random = (Math.random() - 0.5) * 2000;

        return {
            month,
            neraca: Math.round((base.neraca + trend + random) * multiplier),
            harga: Math.round((base.harga + trend * 0.8 + random * 0.9) * multiplier)
        };
    });
};

const commodities = ['Beras', 'Gula Pasir', 'Bawang Merah', 'Bawang Putih', 'Cabai Merah'];
const regions = [
    'Provinsi Kalimantan Utara',
    'Kabupaten Bulungan',
    'Kabupaten Malinau',
    'Kabupaten Nunukan',
    'Kabupaten Tana Tidung',
    'Kota Tarakan'
];

export default function PriceCorrelation() {
    const [selectedCommodity, setSelectedCommodity] = useState('Beras');
    const [selectedRegion, setSelectedRegion] = useState('Provinsi Kalimantan Utara');
    const [showNeraca, setShowNeraca] = useState(true);
    const [showHarga, setShowHarga] = useState(true);

    const data = useMemo(
        () => generateData(selectedCommodity.toLowerCase(), selectedRegion),
        [selectedCommodity, selectedRegion]
    );

    const downloadExcel = () => {
        const headers = ['Periode', 'Neraca (ton)', 'Harga (Rp/ton)'];
        const rows = data.map((row) => [row.month, row.neraca, row.harga]);

        let csv = headers.join(',') + '\n';
        rows.forEach((row) => {
            csv += row.join(',') + '\n';
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `data_${selectedCommodity}_${selectedRegion}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('id-ID').format(value);
    };

    return (
        <div className='w-full bg-slate-50 px-4 pt-12'>
            <div className='flex-col gap-6'>
                {/* Header Section - Outside Card */}
                <div className='flex flex-col items-start justify-between gap-4 pb-8 lg:flex-row'>
                    <div>
                        <h2 className='text-xl font-semibold lg:text-2xl'>Korelasi Neraca dan Harga Pasar</h2>
                        <p className='text-sm text-slate-500'>Perubahan harga terhadap kondisi neraca komoditas.</p>
                    </div>

                    {/* Filters - Outside Card */}
                    <div className='flex w-full flex-col gap-3 md:w-fit md:flex-row md:items-center'>
                        {/* Commodity Select */}
                        <Select value={selectedCommodity} onValueChange={(value) => setSelectedCommodity(value)}>
                            <SelectTrigger className='w-full md:w-[250px]'>
                                <SelectValue placeholder='Pilih komoditas' />
                            </SelectTrigger>
                            <SelectContent>
                                {commodities.map((commodity) => (
                                    <SelectItem key={commodity} value={commodity}>
                                        {commodity}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {/* Region Select */}
                        <Select value={selectedRegion} onValueChange={(value) => setSelectedRegion(value)}>
                            <SelectTrigger className='w-full md:w-[250px]'>
                                <SelectValue placeholder='Pilih wilayah' />
                            </SelectTrigger>
                            <SelectContent>
                                {regions.map((region) => (
                                    <SelectItem key={region} value={region}>
                                        {region}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Button
                            onClick={downloadExcel}
                            variant='outline'
                            className='bg-primary hover:bg-primary/90 h-10 w-10 rounded-full text-white transition-all hover:text-white'
                            size='icon'>
                            <Download />
                        </Button>
                    </div>
                </div>

                {/* Card with Chart */}
                <Card className='w-full border-slate-200'>
                    <CardHeader>
                        {/* Legend Checkboxes */}
                        <div className='flex flex-wrap items-center gap-4'>
                            {/* Neraca Checkbox */}
                            <div className='flex items-center gap-2 rounded-lg p-2'>
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
                    </CardHeader>

                    <CardContent>
                        <div className='h-[400px] w-full'>
                            <ResponsiveContainer width='100%' height='100%'>
                                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id='colorNeraca' x1='0' y1='0' x2='0' y2='1'>
                                            <stop offset='5%' stopColor='#3B82F6' stopOpacity={0.35} />
                                            <stop offset='95%' stopColor='#3B82F6' stopOpacity={0.05} />
                                        </linearGradient>
                                        <linearGradient id='colorHarga' x1='0' y1='0' x2='0' y2='1'>
                                            <stop offset='5%' stopColor='#14B8A6' stopOpacity={0.35} />
                                            <stop offset='95%' stopColor='#14B8A6' stopOpacity={0.05} />
                                        </linearGradient>
                                    </defs>

                                    <CartesianGrid strokeDasharray='3 3' stroke='#E2E8F0' vertical={false} />
                                    <XAxis
                                        dataKey='month'
                                        tick={{ fontSize: 13, fill: '#64748B' }}
                                        tickLine={false}
                                        axisLine={{ stroke: '#E2E8F0' }}
                                    />
                                    <YAxis
                                        yAxisId='left'
                                        tick={{ fontSize: 13, fill: '#64748B' }}
                                        tickLine={false}
                                        axisLine={{ stroke: '#E2E8F0' }}
                                        tickFormatter={formatCurrency}
                                    />
                                    <YAxis
                                        yAxisId='right'
                                        orientation='right'
                                        tick={{ fontSize: 13, fill: '#64748B' }}
                                        tickLine={false}
                                        axisLine={{ stroke: '#E2E8F0' }}
                                        tickFormatter={formatCurrency}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: 'white',
                                            border: '1px solid #E2E8F0',
                                            borderRadius: '8px',
                                            padding: '12px',
                                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                        }}
                                        formatter={(value: any) => `Rp ${formatCurrency(value)}`}
                                    />

                                    {showNeraca && (
                                        <Area
                                            yAxisId='left'
                                            type='monotone'
                                            dataKey='neraca'
                                            stroke='#3B82F6'
                                            strokeWidth={2.5}
                                            fillOpacity={1}
                                            fill='url(#colorNeraca)'
                                            dot={{ fill: '#3B82F6', r: 3 }}
                                            activeDot={{ r: 5 }}
                                        />
                                    )}

                                    {showHarga && (
                                        <Area
                                            yAxisId='right'
                                            type='monotone'
                                            dataKey='harga'
                                            stroke='#14B8A6'
                                            strokeWidth={2.5}
                                            fillOpacity={1}
                                            fill='url(#colorHarga)'
                                            dot={{ fill: '#14B8A6', r: 3 }}
                                            activeDot={{ r: 5 }}
                                        />
                                    )}
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
