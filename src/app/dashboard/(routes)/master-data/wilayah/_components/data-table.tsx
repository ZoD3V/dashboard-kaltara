'use client';

import { useMemo, useState } from 'react';

import Image from 'next/image';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { MoreHorizontal, Pencil, Search, Trash2 } from 'lucide-react';

// ==========================================
// Types
// ==========================================

export interface Column {
    key: string;
    label: string;
}

export interface DataTableProps {
    columns: Column[];
    data: any[];
    searchKey: string;
    onEdit?: (row: any) => void;
    onDelete?: (row: any) => void;
}

// ==========================================
// Pagination Component
// ==========================================

const TablePagination = ({
    currentPage,
    totalPages,
    onPageChange,
    totalItems
}: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    totalItems: number;
}) => {
    return (
        <div className='mt-4 flex items-center justify-between'>
            <div className='text-muted-foreground text-sm'>
                Halaman {currentPage} dari {totalPages} | Total: {totalItems} data
            </div>

            <div className='flex gap-2'>
                <Button
                    variant='outline'
                    size='sm'
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}>
                    Sebelumnya
                </Button>

                <Button
                    variant='outline'
                    size='sm'
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}>
                    Selanjutnya
                </Button>
            </div>
        </div>
    );
};

// ==========================================
// Table Header
// ==========================================

const TableHeaderComponent = ({ columns }: { columns: Column[] }) => {
    return (
        <TableHeader>
            <TableRow>
                {columns.map((column) => (
                    <TableHead key={column.key} className={column.key === 'action' ? 'w-20' : 'font-semibold'}>
                        {column.label}
                    </TableHead>
                ))}
            </TableRow>
        </TableHeader>
    );
};

// ==========================================
// Table Row Renderer
// ==========================================

const TableRowComponent = ({
    item,
    columns,
    onEdit,
    onDelete
}: {
    item: any;
    columns: Column[];
    onEdit?: (row: any) => void;
    onDelete?: (row: any) => void;
}) => {
    const [isAlertOpen, setIsAlertOpen] = useState(false);

    const handleConfirmDelete = () => {
        if (onDelete) onDelete(item);
        setIsAlertOpen(false);
    };

    return (
        <TableRow>
            {columns.map((column, index) => {
                // 1) Logo (wilayah / commodity)
                if (column.key === 'logo') {
                    return (
                        <TableCell key={column.key}>
                            <div className='bg-muted relative h-10 w-10 overflow-hidden rounded-full'>
                                <Image
                                    src={item.logo}
                                    alt={item.name || item.nama || 'Logo'}
                                    fill
                                    className='object-contain'
                                />
                            </div>
                        </TableCell>
                    );
                }

                // 2) Action (titik tiga + edit + delete + alert dialog)
                if (column.key === 'action') {
                    return (
                        <TableCell key={column.key}>
                            <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant='ghost' size='icon' className='h-8 w-8'>
                                            <MoreHorizontal className='h-4 w-4' />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align='end'>
                                        <DropdownMenuItem
                                            className='cursor-pointer'
                                            onClick={() => onEdit && onEdit(item)}>
                                            <Pencil className='mr-2 h-4 w-4' />
                                            Edit
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            className='text-destructive focus:text-destructive cursor-pointer'
                                            onClick={() => setIsAlertOpen(true)}>
                                            <Trash2 className='mr-2 h-4 w-4' />
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Hapus data ini?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Tindakan ini tidak dapat dibatalkan. Data yang dihapus tidak bisa
                                            dikembalikan.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Batal</AlertDialogCancel>
                                        <AlertDialogAction onClick={handleConfirmDelete}>Ya, hapus</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </TableCell>
                    );
                }

                // 3) Default text
                return (
                    <TableCell key={column.key} className={index === 1 ? 'font-medium' : ''}>
                        {item[column.key] ?? '-'}
                    </TableCell>
                );
            })}
        </TableRow>
    );
};

// ==========================================
// MAIN DATATABLE COMPONENT
// ==========================================

export function DataTable({ columns, data, searchKey, onEdit, onDelete }: DataTableProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');

    const itemsPerPage = 10;

    // =============================
    // SEARCH FILTER
    // =============================
    const filteredData = useMemo(() => {
        const s = search.toLowerCase();

        return data.filter((item) => item[searchKey]?.toString().toLowerCase().includes(s));
    }, [search, data, searchKey]);

    // =============================
    // PAGINATION
    // =============================
    const totalPages =
        Math.ceil(filteredData.length / itemsPerPage) === 0 ? 1 : Math.ceil(filteredData.length / itemsPerPage);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        return filteredData.slice(start, end);
    }, [currentPage, filteredData]);

    // Reset ke halaman 1 saat search berubah
    useMemo(() => {
        setCurrentPage(1);
    }, [search]);

    return (
        <div className='w-full'>
            {/* Search Bar */}
            <div className='mb-6'>
                <div className='relative'>
                    <Search className='text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform' />
                    <Input
                        placeholder={`Cari ${searchKey}...`}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className='pl-10'
                    />
                </div>
            </div>

            {/* Table */}
            <div className='rounded-md border'>
                <Table>
                    <TableHeaderComponent columns={columns} />

                    <TableBody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((item, i) => (
                                <TableRowComponent
                                    key={item.id || i}
                                    item={item}
                                    columns={columns}
                                    onEdit={onEdit}
                                    onDelete={onDelete}
                                />
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className='text-muted-foreground py-8 text-center'>
                                    Tidak ada data ditemukan
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            {filteredData.length > itemsPerPage && (
                <TablePagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                    totalItems={filteredData.length}
                />
            )}
        </div>
    );
}
