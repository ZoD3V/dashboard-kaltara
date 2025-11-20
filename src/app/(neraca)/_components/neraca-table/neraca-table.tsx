import Image from 'next/image';

import { neracaTableData } from '@/data/neraca-table';

import { columns } from './columns';
import { DataTable } from './data-table';

export default async function NeracaTable() {
    return (
        <div className='mx-auto w-full space-y-6 bg-gray-50 px-4 pt-12'>
            <div className='flex items-center gap-3'>
                <Image src='/icons/ic-beras.png' alt='icon' width={40} height={40} />
                <div className='flex-1'>
                    <h2 className='text-xl font-semibold'>Tabel Beras / ton - Provinsi Kalimantan Utara</h2>
                    <p className='mt-1 text-sm text-gray-500'>Berdasarkan Neraca, Ketersediaan dan Kebutuhan</p>
                </div>
            </div>
            <DataTable columns={columns} data={neracaTableData} />
        </div>
    );
}
