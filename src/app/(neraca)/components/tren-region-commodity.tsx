'use client';

import React, { useMemo, useState } from 'react';

import { commodityItems } from '@/data/commodity-items';
import { formatRupiah } from '@/registry/new-york-v4/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';
import { Checkbox } from '@/registry/new-york-v4/ui/checkbox';
import { Label } from '@/registry/new-york-v4/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/new-york-v4/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york-v4/ui/tabs';
import { ToggleGroup, ToggleGroupItem } from '@/registry/new-york-v4/ui/toggle-group';
import {
    ActiveLines,
    ChartDataPoint,
    CommodityBaseValue,
    PeriodType,
    ProvinceData,
    ProvinceType,
    TableDataPoint
} from '@/types/neraca';

import { downloadDataTrenToExcel } from '../helper/download-data-to-excell';
import { Download } from 'lucide-react';
import {
    Area,
    AreaChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    TooltipProps,
    XAxis,
    YAxis
} from 'recharts';

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

    // Multiplier berbeda untuk setiap provinsi/kabupaten
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
        // Tren berbeda untuk setiap metric
        const trendFactor = 1 + base.trend * idx;

        // Variasi acak yang berbeda untuk setiap line
        const neracaVariance = Math.sin(idx * 0.5) * base.volatility;
        const ketersediaanVariance = Math.cos(idx * 0.7) * base.volatility * 0.8;
        const kebutuhanVariance = Math.sin(idx * 0.3) * base.volatility * 0.5;

        const neraca = Math.round(base.neraca * provData.base * trendFactor * (1 + neracaVariance));

        const ketersediaan = Math.round(base.ketersediaan * provData.base * trendFactor * (1 + ketersediaanVariance));

        // Kebutuhan cenderung stabil atau sedikit naik
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

    const provinces: ProvinceType[] = [
        'Provinsi Kalimantan Utara',
        'Kabupaten Bulungan',
        'Kabupaten Malinau',
        'Kabupaten Nunukan',
        'Kabupaten Tana Tidung',
        'Kota Tarakan'
    ];

    const data: ChartDataPoint[] = useMemo(
        () => generateData(commodity, province, period),
        [commodity, province, period]
    );

    const tableData: TableDataPoint[] = useMemo(
        () =>
            data.map((item) => {
                // Hitung persentase neraca terhadap kebutuhan
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

    const getStatusColor = (status: string) => {
        const colors: any = {
            Aman: 'bg-green-400 text-white',
            Waspada: 'bg-yellow-300 text-gray-800',
            Rentan: 'bg-orange-400 text-white',
            Defisit: 'bg-red-500 text-white'
        };

        return colors[status];
    };

    return (
        <div className='w-full bg-gray-50 px-4 pt-12'>
            <div className='flex flex-col items-start justify-between gap-4 pb-8 xl:flex-row xl:items-center'>
                <div>
                    <h2 className='text-xl font-semibold md:text-2xl'>Tren Neraca, Ketersediaan, dan Kebutuhan</h2>
                    <p className='text-xs text-slate-500 md:text-sm'>
                        Periode bulanan menurut komoditas dan Kabupaten/Kota
                    </p>
                </div>

                {/* Filters */}
                <div className='flex flex-wrap items-center gap-4 lg:flex-row'>
                    {/* Period Tabs */}
                    <ToggleGroup
                        type='single'
                        value={period}
                        onValueChange={(value) => value && setPeriod(value as PeriodType)}
                        className='rounded-md border border-gray-300 bg-white'>
                        <ToggleGroupItem
                            value='3 Bulan'
                            className='border-r px-3 text-sm font-medium text-slate-500 data-[state=on]:bg-blue-100/80 data-[state=on]:text-blue-900/80 md:px-4 md:text-sm'>
                            3 Bulan
                        </ToggleGroupItem>
                        <ToggleGroupItem
                            value='6 Bulan'
                            className='border-r px-3 text-sm font-medium text-slate-500 data-[state=on]:bg-blue-100/80 data-[state=on]:text-blue-900/80 md:px-4 md:text-sm'>
                            6 Bulan
                        </ToggleGroupItem>
                        <ToggleGroupItem
                            value='1 Tahun'
                            className='px-3 text-sm font-medium text-slate-500 data-[state=on]:bg-blue-100/80 data-[state=on]:text-blue-900/80 md:px-4 md:text-sm'>
                            1 Tahun
                        </ToggleGroupItem>
                    </ToggleGroup>
                    {/* <div className='flex gap-2 rounded-lg bg-gray-100 p-1'>
                        {(['3 Bulan', '6 Bulan', '1 Tahun'] as PeriodType[]).map((p) => (
                            <button
                                key={p}
                                onClick={() => setPeriod(p)}
                                className={`rounded-md px-6 py-2 transition ${
                                    period === p
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-transparent text-gray-600 hover:bg-gray-200'
                                }`}>
                                {p}
                            </button>
                        ))}
                    </div> */}

                    {/* Commodity Select */}
                    <Select value={commodity} onValueChange={setCommodity}>
                        <SelectTrigger className='w-full md:w-[250px]'>
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
            <Card className='w-full px-0 pt-2'>
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

                <CardContent>
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
                        <div>
                            <div className='overflow-hidden rounded-lg border'>
                                <div className='overflow-x-auto'>
                                    <table className='w-full'>
                                        <thead>
                                            <tr className='border-b bg-gray-50'>
                                                <th className='px-6 py-3 text-left text-xs font-semibold tracking-wider text-gray-700 uppercase'>
                                                    Periode
                                                </th>
                                                <th className='px-6 py-3 text-right text-xs font-semibold tracking-wider text-gray-700 uppercase'>
                                                    Neraca
                                                </th>
                                                <th className='px-6 py-3 text-right text-xs font-semibold tracking-wider text-gray-700 uppercase'>
                                                    Ketersediaan
                                                </th>
                                                <th className='px-6 py-3 text-right text-xs font-semibold tracking-wider text-gray-700 uppercase'>
                                                    Kebutuhan
                                                </th>
                                                <th className='px-6 py-3 text-left text-xs font-semibold tracking-wider text-gray-700 uppercase'>
                                                    Status
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='divide-y divide-gray-200 bg-white'>
                                            {tableData.map((row, idx) => (
                                                <tr key={idx} className='transition hover:bg-gray-50'>
                                                    <td className='px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900'>
                                                        {row.periode}
                                                    </td>
                                                    <td className='px-6 py-4 text-right text-sm whitespace-nowrap text-gray-900'>
                                                        {formatRupiah(row.neraca)}
                                                    </td>
                                                    <td className='px-6 py-4 text-right text-sm whitespace-nowrap text-gray-900'>
                                                        {formatRupiah(row.ketersediaan)}
                                                    </td>
                                                    <td className='px-6 py-4 text-right text-sm whitespace-nowrap text-gray-900'>
                                                        {formatRupiah(row.kebutuhan)}
                                                    </td>
                                                    <td className='px-6 py-4 text-sm whitespace-nowrap'>
                                                        <span
                                                            className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(row.status)}`}>
                                                            {row.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default TrenRegionCommodity;
