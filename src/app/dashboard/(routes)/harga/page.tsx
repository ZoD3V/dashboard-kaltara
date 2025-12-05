'use client';
import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading';

import { neracaColumns } from './_components/columns';
import { neracaData } from './_components/data';
import { DataTable } from './_components/data-table';
import { Plus } from 'lucide-react';

const Harga = () => {
    const handleEdit = (row: any) => {
        console.log('Edit row:', row);
        // buka modal / navigate to edit page
    };

    const handleDelete = (row: any) => {
        console.log('Delete row:', row);
        // panggil API delete, lalu refetch data, dsb.
    };

    return (
        <div className='flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4'>
            <>
                <div className='flex items-center justify-between'>
                    <Heading title='Harga' description='Manage Harga' />
                    <Button>
                        <Plus className='mr-2 h-4 w-4' />
                        Add New
                    </Button>
                </div>
                <DataTable
                    columns={neracaColumns}
                    data={neracaData}
                    searchKey='commodity'
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />{' '}
            </>
        </div>
    );
};

export default Harga;
