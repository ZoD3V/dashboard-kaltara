'use client';

import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading';

import { commodityColumns } from './_components/columns';
import { commodityData } from './_components/data';
import { DataTable } from './_components/data-table';
import { Plus } from 'lucide-react';

const Commodity = () => {
    return (
        <div className='flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4'>
            <>
                <div className='flex items-center justify-between'>
                    <Heading title='Commodity' description='Manage Commodity' />
                    <Button>
                        <Plus className='mr-2 h-4 w-4' />
                        Add New
                    </Button>
                </div>
                <DataTable
                    searchKey='name'
                    columns={commodityColumns}
                    data={commodityData}
                    onEdit={(row) => console.log('Edit wilayah', row)}
                    onDelete={(row) => console.log('Delete wilayah', row)}
                />
            </>
        </div>
    );
};

export default Commodity;
