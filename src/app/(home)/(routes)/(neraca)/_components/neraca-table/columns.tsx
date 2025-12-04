'use client';

import { Badge } from '@/components/ui/badge';
import { formatRupiah } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';

export type Neraca = {
    periode: string;
    neraca: number;
    ketersediaan: number;
    kebutuhan: number;
    status: string;
};

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Aman':
            return 'bg-emerald-100 text-emerald-800 hover:bg-emerald-100';
        case 'Waspada':
            return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100';
        case 'Rentan':
            return 'bg-orange-100 text-orange-500 hover:bg-orange-100';
        case 'Defisit':
            return 'bg-red-100 text-red-800 hover:bg-red-100';
        default:
            return '';
    }
};

export const columns: ColumnDef<Neraca>[] = [
    {
        accessorKey: 'periode',
        header: 'Periode'
    },
    {
        accessorKey: 'neraca',
        header: 'Neraca',
        cell: ({ row }) => {
            return (
                <div className='text-sm whitespace-nowrap text-gray-900'>{formatRupiah(row.getValue('neraca'))}</div>
            );
        }
    },
    {
        accessorKey: 'ketersediaan',
        header: 'Ketersediaan',
        cell: ({ row }) => {
            return (
                <div className='text-sm whitespace-nowrap text-gray-900'>
                    {formatRupiah(row.getValue('ketersediaan'))}
                </div>
            );
        }
    },
    {
        accessorKey: 'kebutuhan',
        header: 'Kebutuhan',
        cell: ({ row }) => {
            return (
                <div className='text-sm whitespace-nowrap text-gray-900'>{formatRupiah(row.getValue('kebutuhan'))}</div>
            );
        }
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => {
            return (
                <Badge className={`${getStatusColor(row.getValue('status'))} font-med font-medium`}>
                    {row.getValue('status')}
                </Badge>
            );
        }
    }
];
