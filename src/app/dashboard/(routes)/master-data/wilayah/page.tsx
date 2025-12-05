'use client';
import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading';

import { wilayahColumns } from './_components/columns';
import { wilayahData } from './_components/data';
import { DataTable } from './_components/data-table';
import { Plus } from 'lucide-react';

const Neraca = () => {
    return (
        <div className='flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4'>
            <>
                <div className='flex items-center justify-between'>
                    <Heading title='Wilayah' description='Manage Wilayah' />
                    <Button>
                        <Plus className='mr-2 h-4 w-4' />
                        Add New
                    </Button>
                </div>
                <DataTable
                    searchKey='name'
                    columns={wilayahColumns}
                    data={wilayahData}
                    onEdit={(row) => console.log('Edit wilayah', row)}
                    onDelete={(row) => console.log('Delete wilayah', row)}
                />
            </>
        </div>
    );
};

export default Neraca;
