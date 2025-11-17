import { useId } from 'react';

import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';
import { CustomTooltipProps, PriceCardProps, PriceDataPoint } from '@/types/price';

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export const PriceCard: React.FC<PriceCardProps> = ({ title, currentPrice, change, icon, data }) => {
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
                                <stop offset='95%' stopColor='#3b82f6' stopOpacity={0.05} />
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
                            strokeWidth={2}
                            fillOpacity={1}
                            fill={`url(#${gradientId})`}
                            activeDot={{ r: 6 }}
                            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};
