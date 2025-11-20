'use client';

import React, { useMemo, useState } from 'react';

import { TitleSection } from '@/components/title-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { commodityItems } from '@/data/commodity-items';
import { months } from '@/data/months';
import {
    ActiveLines,
    ChartDataPoint,
    CommodityBaseValue,
    PeriodType,
    ProvinceData,
    ProvinceType,
    TableDataPoint
} from '@/types/neraca';
import { provinces } from '@/types/region';

import { downloadDataTrenToExcel } from '../helper/download-data-to-excel';
import { columns } from './neraca-table/columns';
import { DataTable } from './neraca-table/data-table';
import { Download } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const generateData = (commodity: string, province: ProvinceType, period: PeriodType): ChartDataPoint[] => {
    const baseValues: Record<string, CommodityBaseValue> = {
        Beras: {
            neraca: 18000,
            ketersediaan: 22000,
            kebutuhan: 21000,
            trend: -0.08, // Tren menurun lebih tajam
            volatility: 0.12
        },
        'Cabai Rawit': {
            neraca: 8000,
            ketersediaan: 15000,
            kebutuhan: 16000,
            trend: -0.12, // Tren menurun tajam
            volatility: 0.28
        },
        'Cabai Merah': {
            neraca: 10000,
            ketersediaan: 18000,
            kebutuhan: 19000,
            trend: -0.1, // Tren menurun
            volatility: 0.25
        },
        'Bawang Merah': {
            neraca: 6000,
            ketersediaan: 16000,
            kebutuhan: 17500,
            trend: -0.15, // Tren menurun sangat tajam
            volatility: 0.2
        },
        'Bawang Putih': {
            neraca: -2000,
            ketersediaan: 10000,
            kebutuhan: 13000,
            trend: -0.1, // Tren menurun
            volatility: 0.15
        },
        'Daging Sapi': {
            neraca: 4000,
            ketersediaan: 14000,
            kebutuhan: 16000,
            trend: -0.09, // Tren menurun
            volatility: 0.14
        },
        'Telur Ayam': {
            neraca: 15000,
            ketersediaan: 24000,
            kebutuhan: 22000,
            trend: -0.04, // Tren menurun lambat
            volatility: 0.11
        },
        'Gula Pasir': {
            neraca: 2000,
            ketersediaan: 16000,
            kebutuhan: 18000,
            trend: -0.06, // Tren menurun
            volatility: 0.16
        },
        'Minyak Goreng': {
            neraca: 12000,
            ketersediaan: 20000,
            kebutuhan: 19500,
            trend: -0.07, // Tren menurun
            volatility: 0.17
        },
        Jagung: {
            neraca: 7000,
            ketersediaan: 17000,
            kebutuhan: 18500,
            trend: -0.11, // Tren menurun tajam
            volatility: 0.18
        },
        Kedelai: {
            neraca: -1000,
            ketersediaan: 11000,
            kebutuhan: 14000,
            trend: -0.13, // Tren menurun sangat tajam
            volatility: 0.19
        }
    };

    const provinceMultiplier: Record<ProvinceType, ProvinceData> = {
        'Provinsi Kalimantan Utara': { base: 1.0, kebutuhanFactor: 1.0 },
        'Kabupaten Bulungan': { base: 0.28, kebutuhanFactor: 0.3 },
        'Kabupaten Malinau': { base: 0.2, kebutuhanFactor: 0.22 },
        'Kabupaten Nunukan': { base: 0.38, kebutuhanFactor: 0.4 },
        'Kabupaten Tana Tidung': { base: 0.08, kebutuhanFactor: 0.1 },
        'Kota Tarakan': { base: 0.42, kebutuhanFactor: 0.45 }
    };

    const months = period === '3 Bulan' ? 3 : period === '6 Bulan' ? 6 : 13;
    const startMonth = 13 - months;

    const monthNames = [
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

    const base = baseValues[commodity];
    const provData = provinceMultiplier[province];

    return monthNames.slice(startMonth, startMonth + months).map((month, idx) => {
        const trendFactor = 1 + base.trend * idx;

        const neracaVariance = Math.sin(idx * 0.5) * base.volatility;
        const ketersediaanVariance = Math.cos(idx * 0.7) * base.volatility * 0.8;
        const kebutuhanVariance = Math.sin(idx * 0.3) * base.volatility * 0.5;

        const neraca = Math.round(base.neraca * provData.base * trendFactor * (1 + neracaVariance));

        const ketersediaan = Math.round(base.ketersediaan * provData.base * trendFactor * (1 + ketersediaanVariance));

        const kebutuhan = Math.round(
            base.kebutuhan * provData.kebutuhanFactor * (1 + idx * 0.008) * (1 + kebutuhanVariance)
        );

        return {
            periode: month,
            neraca: neraca,
            ketersediaan: ketersediaan,
            kebutuhan: kebutuhan
        };
    });
};

const TrenRegionCommodity: React.FC = () => {
    const [period, setPeriod] = useState<PeriodType>('1 Tahun');
    const [commodity, setCommodity] = useState<string>('Beras');
    const [activeTab, setActiveTab] = useState('grafik');
    const [province, setProvince] = useState<ProvinceType>('Provinsi Kalimantan Utara');
    const [activeLines, setActiveLines] = useState<ActiveLines>({
        neraca: true,
        ketersediaan: true,
        kebutuhan: true
    });

    const data: ChartDataPoint[] = useMemo(
        () => generateData(commodity, province, period),
        [commodity, province, period]
    );

    const tableData: TableDataPoint[] = useMemo(
        () =>
            data.map((item) => {
                const percentageOfNeeds = (item.neraca / item.kebutuhan) * 100;

                let status: 'Aman' | 'Waspada' | 'Rentan' | 'Defisit';

                if (percentageOfNeeds >= 20) {
                    status = 'Aman';
                } else if (percentageOfNeeds >= 10 && percentageOfNeeds < 20) {
                    status = 'Waspada';
                } else if (percentageOfNeeds >= 0 && percentageOfNeeds < 10) {
                    status = 'Rentan';
                } else {
                    status = 'Defisit';
                }

                return {
                    ...item,
                    status
                };
            }),
        [data]
    );

    const toggleLine = (line: keyof ActiveLines): void => {
        setActiveLines((prev) => ({ ...prev, [line]: !prev[line] }));
    };

    return (
        <div className='w-full bg-gray-50 px-4 pt-12'>
            <div className='flex flex-col items-start justify-between gap-4 pb-8'>
                <TitleSection
                    title='Tren Neraca, Ketersediaan, dan Kebutuhan'
                    subtitle='Periode bulanan menurut komoditas dan Kabupaten/Kota'
                />

                {/* Filters */}
                <div className='flex w-full flex-wrap items-center gap-3 lg:flex-row'>
                    {/* Period Tabs */}
                    <div className='grid w-full grid-cols-2 gap-3 lg:w-fit'>
                        <Select>
                            <SelectTrigger className='w-full lg:w-[200px]'>
                                <SelectValue placeholder='Pilih Tahun' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Tahun</SelectLabel>
                                    <SelectItem value='2024'>2024</SelectItem>
                                    <SelectItem value='2025'>2025</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className='w-full lg:w-[200px]'>
                                <SelectValue placeholder='Pilih Bulan' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Bulan</SelectLabel>
                                    {months.map((month) => (
                                        <SelectItem key={month.value} value={month.label}>
                                            {month.label}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Commodity Select */}
                    <Select value={commodity} onValueChange={setCommodity}>
                        <SelectTrigger className='w-full md:w-[200px]'>
                            <SelectValue placeholder='Pilih Komoditas' />
                        </SelectTrigger>
                        <SelectContent>
                            {commodityItems.map((c) => (
                                <SelectItem key={c.name} value={c.name}>
                                    {c.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {/* Province Select */}
                    <Select value={province} onValueChange={setProvince}>
                        <SelectTrigger className='w-full md:w-[250px]'>
                            <SelectValue placeholder='Pilih Daerah' />
                        </SelectTrigger>
                        <SelectContent>
                            {provinces.map((p) => (
                                <SelectItem key={p} value={p}>
                                    {p}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Button
                        onClick={() => downloadDataTrenToExcel(tableData, commodity, province, period)}
                        variant='outline'
                        className='bg-primary hover:bg-primary/90 h-10 w-10 rounded-full text-white transition-all hover:text-white'
                        size='icon'>
                        <Download />
                    </Button>
                </div>
            </div>
            <Card className='w-full px-0 py-2 pb-4 sm:py-4 md:py-6'>
                <CardHeader className='px-0'>
                    <div className='border-b border-gray-200 pt-2'>
                        <div className='flex gap-4'>
                            <button
                                onClick={() => setActiveTab('grafik')}
                                className={`cursor-pointer px-4 pb-3 font-semibold transition-colors ${
                                    activeTab === 'grafik'
                                        ? 'border-primary text-primary border-b-2'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}>
                                Grafik
                            </button>

                            <button
                                onClick={() => setActiveTab('tabel')}
                                className={`cursor-pointer px-4 pb-3 font-semibold transition-colors ${
                                    activeTab === 'tabel'
                                        ? 'border-primary text-primary border-b-2'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}>
                                Tabel
                            </button>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className='px-2 sm:px-4 md:px-6'>
                    {activeTab === 'grafik' ? (
                        <div>
                            {/* Legend Checkboxes */}
                            <div className='mb-6 flex flex-wrap items-center gap-4'>
                                {/* Neraca Checkbox */}
                                <div className='flex items-center gap-2 rounded-lg border p-2'>
                                    <Checkbox
                                        id='neraca'
                                        checked={activeLines.neraca}
                                        onCheckedChange={() => toggleLine('neraca')}
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
                                        checked={activeLines.ketersediaan}
                                        onCheckedChange={() => toggleLine('ketersediaan')}
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
                                        checked={activeLines.kebutuhan}
                                        onCheckedChange={() => toggleLine('kebutuhan')}
                                    />
                                    <Label
                                        htmlFor='kebutuhan'
                                        className='flex cursor-pointer items-center gap-2 text-sm font-medium'>
                                        <span className='h-3 w-3 rounded-sm bg-red-500'></span>
                                        Kebutuhan
                                    </Label>
                                </div>
                            </div>

                            {/* Chart */}
                            <ResponsiveContainer width='100%' height={400}>
                                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id='colorNeraca' x1='0' y1='0' x2='0' y2='1'>
                                            <stop offset='5%' stopColor='#3b82f6' stopOpacity={0.3} />
                                            <stop offset='95%' stopColor='#3b82f6' stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id='colorKetersediaan' x1='0' y1='0' x2='0' y2='1'>
                                            <stop offset='5%' stopColor='#10b981' stopOpacity={0.3} />
                                            <stop offset='95%' stopColor='#10b981' stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id='colorKebutuhan' x1='0' y1='0' x2='0' y2='1'>
                                            <stop offset='5%' stopColor='#ef4444' stopOpacity={0.3} />
                                            <stop offset='95%' stopColor='#ef4444' stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray='3 3' stroke='#e5e7eb' />
                                    <XAxis dataKey='periode' tick={{ fontSize: 12 }} stroke='#6b7280' />
                                    <YAxis
                                        tick={{ fontSize: 12 }}
                                        stroke='#6b7280'
                                        tickFormatter={(value: number) => `${(value / 1000).toFixed(0)}k`}
                                    />
                                    <Tooltip />
                                    <Legend wrapperStyle={{ fontSize: '14px', paddingTop: '20px' }} iconType='line' />

                                    {activeLines.neraca && (
                                        <Area
                                            type='monotone'
                                            dataKey='neraca'
                                            stroke='#3b82f6'
                                            strokeWidth={2}
                                            fillOpacity={1}
                                            activeDot={{ r: 5 }}
                                            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 3 }}
                                            fill='url(#colorNeraca)'
                                        />
                                    )}
                                    {activeLines.ketersediaan && (
                                        <Area
                                            type='monotone'
                                            dataKey='ketersediaan'
                                            stroke='#10b981'
                                            strokeWidth={2}
                                            fillOpacity={1}
                                            activeDot={{ r: 5 }}
                                            dot={{ fill: '#10b981', strokeWidth: 2, r: 3 }}
                                            fill='url(#colorKetersediaan)'
                                        />
                                    )}
                                    {activeLines.kebutuhan && (
                                        <Area
                                            type='monotone'
                                            dataKey='kebutuhan'
                                            stroke='#ef4444'
                                            strokeWidth={2}
                                            fillOpacity={1}
                                            activeDot={{ r: 5 }}
                                            dot={{ fill: '#ef4444', strokeWidth: 2, r: 3 }}
                                            fill='url(#colorKebutuhan)'
                                        />
                                    )}
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    ) : (
                        <DataTable columns={columns} data={tableData} />
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default TrenRegionCommodity;
