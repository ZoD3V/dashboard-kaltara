'use client';

import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading';

import { usersColumns } from './_components/columns';
import { usersData } from './_components/data';
import { DataTable } from './_components/data-table';
import { Plus } from 'lucide-react';

const Users = () => {
    return (
        <div className='flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4'>
            <>
                <div className='flex items-center justify-between'>
                    <Heading title='Users' description='Manage Users' />
                    <Button>
                        <Plus className='mr-2 h-4 w-4' />
                        Add New
                    </Button>
                </div>
                <DataTable
                    searchKey='name' // cari berdasarkan nama
                    columns={usersColumns}
                    data={usersData}
                    onEdit={(row) => console.log('Edit wilayah', row)}
                    onDelete={(row) => console.log('Delete wilayah', row)}
                />
            </>
        </div>
    );
};

export default Users;
