'use client';

import { Badge } from '@/registry/new-york-v4/ui/badge';
import { ColumnDef } from '@tanstack/react-table';

export type Neraca = {
    periode: string;
    neraca: string;
    ketersediaan: string;
    kebutuhan: string;
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
        header: 'Neraca'
    },
    {
        accessorKey: 'ketersediaan',
        header: 'Ketersediaan'
    },
    {
        accessorKey: 'kebutuhan',
        header: 'Kebutuhan'
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
