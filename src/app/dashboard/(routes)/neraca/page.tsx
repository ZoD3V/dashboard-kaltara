import React from 'react';

import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading';

import { DataTable } from './_components/data-table';
import { Plus } from 'lucide-react';

const Neraca = () => {
    const dummyData = [
        {
            id: 1,
            commodity: 'Kelapa Sawit',
            daerah: 'Kabupaten Nunukan',
            rupiah: '850000.00',
            status: 'Aktif',
            tahun: '2024',
            bulan: 'Januari',
            jenis_informasi: 'Neraca'
        },
        {
            id: 2,
            commodity: 'Karet',
            daerah: 'Kabupaten Malinau',
            rupiah: '620000.50',
            status: 'Pending',
            tahun: '2024',
            bulan: 'Februari',
            jenis_informasi: 'Ketersediaan'
        },
        {
            id: 3,
            commodity: 'Kakao',
            daerah: 'Kabupaten Tana Tidung',
            rupiah: '450000.75',
            status: 'Selesai',
            tahun: '2023',
            bulan: 'Maret',
            jenis_informasi: 'Kebutuhan'
        },
        {
            id: 4,
            commodity: 'Kopi',
            daerah: 'Kota Tarakan',
            rupiah: '780000.00',
            status: 'Aktif',
            tahun: '2024',
            bulan: 'April',
            jenis_informasi: 'Neraca'
        },
        {
            id: 5,
            commodity: 'Lada',
            daerah: 'Kabupaten Bulungan',
            rupiah: '920000.25',
            status: 'Pending',
            tahun: '2025',
            bulan: 'Mei',
            jenis_informasi: 'Ketersediaan'
        },
        {
            id: 6,
            commodity: 'Kelapa Sawit',
            daerah: 'Kabupaten Malinau',
            rupiah: '680000.00',
            status: 'Aktif',
            tahun: '2023',
            bulan: 'Juni',
            jenis_informasi: 'Kebutuhan'
        },
        {
            id: 7,
            commodity: 'Karet',
            daerah: 'Kota Tarakan',
            rupiah: '550000.80',
            status: 'Selesai',
            tahun: '2024',
            bulan: 'Juli',
            jenis_informasi: 'Neraca'
        },
        {
            id: 8,
            commodity: 'Kakao',
            daerah: 'Kabupaten Nunukan',
            rupiah: '490000.50',
            status: 'Aktif',
            tahun: '2025',
            bulan: 'Agustus',
            jenis_informasi: 'Ketersediaan'
        },
        {
            id: 9,
            commodity: 'Kopi',
            daerah: 'Kabupaten Bulungan',
            rupiah: '820000.00',
            status: 'Pending',
            tahun: '2023',
            bulan: 'September',
            jenis_informasi: 'Kebutuhan'
        },
        {
            id: 10,
            commodity: 'Lada',
            daerah: 'Kabupaten Tana Tidung',
            rupiah: '960000.75',
            status: 'Selesai',
            tahun: '2024',
            bulan: 'Oktober',
            jenis_informasi: 'Neraca'
        },
        {
            id: 11,
            commodity: 'Kelapa Sawit',
            daerah: 'Kabupaten Bulungan',
            rupiah: '720000.00',
            status: 'Aktif',
            tahun: '2025',
            bulan: 'November',
            jenis_informasi: 'Ketersediaan'
        },
        {
            id: 12,
            commodity: 'Karet',
            daerah: 'Kabupaten Nunukan',
            rupiah: '590000.25',
            status: 'Pending',
            tahun: '2023',
            bulan: 'Desember',
            jenis_informasi: 'Kebutuhan'
        },
        {
            id: 13,
            commodity: 'Kakao',
            daerah: 'Kota Tarakan',
            rupiah: '470000.00',
            status: 'Selesai',
            tahun: '2024',
            bulan: 'Januari',
            jenis_informasi: 'Neraca'
        },
        {
            id: 14,
            commodity: 'Kopi',
            daerah: 'Kabupaten Malinau',
            rupiah: '800000.50',
            status: 'Aktif',
            tahun: '2025',
            bulan: 'Februari',
            jenis_informasi: 'Ketersediaan'
        },
        {
            id: 15,
            commodity: 'Lada',
            daerah: 'Kabupaten Nunukan',
            rupiah: '940000.00',
            status: 'Pending',
            tahun: '2023',
            bulan: 'Maret',
            jenis_informasi: 'Kebutuhan'
        }
    ];

    // Columns Definition
    const commodityColumns = [
        { key: 'commodity', label: 'Komoditas' },
        { key: 'daerah', label: 'Daerah' },
        { key: 'rupiah', label: 'Rupiah' },
        { key: 'status', label: 'Status' },
        { key: 'jenis_informasi', label: 'Jenis Informasi' },
        { key: 'tahun', label: 'Tahun' },
        { key: 'bulan', label: 'Bulan' }
    ];

    return (
        <div className='flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4'>
            <>
                <div className='flex items-center justify-between'>
                    <Heading title='Neraca' description='Manage neraca' />
                    <Button>
                        <Plus className='mr-2 h-4 w-4' />
                        Add New
                    </Button>
                </div>
                <DataTable searchKey='commodity' columns={commodityColumns} data={dummyData} />
            </>
        </div>
    );
};

export default Neraca;
