'use client';

import { useMemo, useState } from 'react';

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
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { MoreHorizontal, Pencil, Search, Trash2 } from 'lucide-react';

// =======================
// Types
// =======================

export interface Column {
    key: string;
    label: string;
}

interface FilterState {
    tahun: string;
    bulan: string;
    daerah: string;
    commodity: string;
    jenis_informasi: string;
    search: string;
}

interface DataTableProps {
    columns: Column[];
    data: any[];
    searchKey: string;
    onEdit?: (row: any) => void;
    onDelete?: (row: any) => void;
}

// =======================
// Status Badge Component
// =======================

const StatusBadge = ({ status }: { status: string }) => {
    const variants: Record<string, 'default' | 'secondary' | 'outline'> = {
        Aktif: 'default',
        Pending: 'secondary',
        Selesai: 'outline'
    };

    return <Badge variant={variants[status] || 'default'}>{status}</Badge>;
};

// =======================
// Table Header Component
// =======================

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

// =======================
// Table Row Component
// =======================

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
                // kolom status → Badge
                if (column.key === 'status') {
                    return (
                        <TableCell key={column.key} className={index === 0 ? 'font-medium' : ''}>
                            <StatusBadge status={item[column.key]} />
                        </TableCell>
                    );
                }

                // kolom rupiah → format currency
                if (column.key === 'rupiah') {
                    return (
                        <TableCell key={column.key} className={index === 0 ? 'font-medium' : ''}>
                            {item[column.key] != null
                                ? `Rp ${parseFloat(item[column.key]).toLocaleString('id-ID')}`
                                : '-'}
                        </TableCell>
                    );
                }

                // kolom action → titik tiga + Edit + Delete + AlertDialog
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

                // default text
                return (
                    <TableCell key={column.key} className={column.key === columns[0].key ? 'font-medium' : ''}>
                        {item[column.key] ?? '-'}
                    </TableCell>
                );
            })}
        </TableRow>
    );
};

// =======================
// Filter Component
// =======================

const FilterSection = ({
    filters,
    setFilters,
    uniqueValues,
    onReset,
    searchKey,
    searchPlaceholder
}: {
    filters: FilterState;
    setFilters: (filters: FilterState) => void;
    uniqueValues: {
        tahuns: string[];
        bulans: string[];
        daerahs: string[];
        commodities: string[];
        jenis_informasis: string[];
    };
    onReset: () => void;
    searchKey: string;
    searchPlaceholder: string;
}) => {
    return (
        <div className='mb-6 space-y-4'>
            {/* Search Bar */}
            <div className='relative'>
                <Search className='text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform' />
                <Input
                    type='text'
                    placeholder={searchPlaceholder}
                    value={filters.search}
                    onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                    className='pl-10'
                />
            </div>

            {/* Filter Dropdowns */}
            <div className='grid grid-cols-1 gap-4 md:grid-cols-5'>
                <Select value={filters.tahun} onValueChange={(value) => setFilters({ ...filters, tahun: value })}>
                    <SelectTrigger>
                        <SelectValue placeholder='Pilih Tahun' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value='all'>Semua Tahun</SelectItem>
                        {uniqueValues.tahuns.map((tahun) => (
                            <SelectItem key={tahun} value={tahun}>
                                {tahun}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select value={filters.bulan} onValueChange={(value) => setFilters({ ...filters, bulan: value })}>
                    <SelectTrigger>
                        <SelectValue placeholder='Pilih Bulan' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value='all'>Semua Bulan</SelectItem>
                        {uniqueValues.bulans.map((bulan) => (
                            <SelectItem key={bulan} value={bulan}>
                                {bulan}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select value={filters.daerah} onValueChange={(value) => setFilters({ ...filters, daerah: value })}>
                    <SelectTrigger>
                        <SelectValue placeholder='Pilih Daerah' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value='all'>Semua Daerah</SelectItem>
                        {uniqueValues.daerahs.map((daerah) => (
                            <SelectItem key={daerah} value={daerah}>
                                {daerah}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select
                    value={filters.commodity}
                    onValueChange={(value) => setFilters({ ...filters, commodity: value })}>
                    <SelectTrigger>
                        <SelectValue placeholder='Pilih Komoditas' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value='all'>Semua Komoditas</SelectItem>
                        {uniqueValues.commodities.map((commodity) => (
                            <SelectItem key={commodity} value={commodity}>
                                {commodity}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select
                    value={filters.jenis_informasi}
                    onValueChange={(value) => setFilters({ ...filters, jenis_informasi: value })}>
                    <SelectTrigger>
                        <SelectValue placeholder='Jenis Informasi' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value='all'>Semua Jenis</SelectItem>
                        {uniqueValues.jenis_informasis.map((jenis) => (
                            <SelectItem key={jenis} value={jenis}>
                                {jenis}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Reset Button */}
            <Button onClick={onReset} variant='outline' className='w-full'>
                Reset Filter
            </Button>
        </div>
    );
};

// =======================
// Pagination Component
// =======================

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

// =======================
// Main DataTable Component
// =======================

export function DataTable({ columns, data, searchKey, onEdit, onDelete }: DataTableProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState<FilterState>({
        tahun: 'all',
        bulan: 'all',
        daerah: 'all',
        commodity: 'all',
        jenis_informasi: 'all',
        search: ''
    });

    const itemsPerPage = 10;

    // Get unique values for filters
    const uniqueValues = useMemo(() => {
        return {
            tahuns: data.some((item) => item.tahun)
                ? [...new Set(data.map((item) => item.tahun))].filter(Boolean).sort()
                : [],
            bulans: data.some((item) => item.bulan) ? [...new Set(data.map((item) => item.bulan))].filter(Boolean) : [],
            daerahs: data.some((item) => item.daerah)
                ? [...new Set(data.map((item) => item.daerah))].filter(Boolean).sort()
                : [],
            commodities: data.some((item) => item.commodity)
                ? [...new Set(data.map((item) => item.commodity))].filter(Boolean).sort()
                : [],
            jenis_informasis: data.some((item) => item.jenis_informasi)
                ? [...new Set(data.map((item) => item.jenis_informasi))].filter(Boolean).sort()
                : []
        };
    }, [data]);

    // Filter data
    const filteredData = useMemo(() => {
        return data.filter((item) => {
            const searchValue = item[searchKey];
            const matchesSearch =
                filters.search === '' ||
                (searchValue && searchValue.toString().toLowerCase().includes(filters.search.toLowerCase())) ||
                (item.commodity && item.commodity.toLowerCase().includes(filters.search.toLowerCase())) ||
                (item.daerah && item.daerah.toLowerCase().includes(filters.search.toLowerCase()));

            return (
                matchesSearch &&
                (filters.tahun === 'all' || !item.tahun || item.tahun === filters.tahun) &&
                (filters.bulan === 'all' || !item.bulan || item.bulan === filters.bulan) &&
                (filters.daerah === 'all' || !item.daerah || item.daerah === filters.daerah) &&
                (filters.commodity === 'all' || !item.commodity || item.commodity === filters.commodity) &&
                (filters.jenis_informasi === 'all' ||
                    !item.jenis_informasi ||
                    item.jenis_informasi === filters.jenis_informasi)
            );
        });
    }, [data, filters, searchKey]);

    // Pagination
    const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        return filteredData.slice(start, end);
    }, [filteredData, currentPage]);

    // Reset to page 1 when filters change
    useMemo(() => {
        setCurrentPage(1);
    }, [filters]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleResetFilters = () => {
        setFilters({
            tahun: 'all',
            bulan: 'all',
            daerah: 'all',
            commodity: 'all',
            jenis_informasi: 'all',
            search: ''
        });
        setCurrentPage(1);
    };

    const searchPlaceholder = `Cari ${searchKey}...`;

    return (
        <div className='w-full'>
            <FilterSection
                filters={filters}
                setFilters={setFilters}
                uniqueValues={uniqueValues}
                onReset={handleResetFilters}
                searchKey={searchKey}
                searchPlaceholder={searchPlaceholder}
            />

            <div className='rounded-md border'>
                <Table>
                    <TableHeaderComponent columns={columns} />
                    <TableBody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((item, index) => (
                                <TableRowComponent
                                    key={item.id || index}
                                    item={item}
                                    columns={columns}
                                    onEdit={onEdit}
                                    onDelete={onDelete}
                                />
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className='text-muted-foreground py-8 text-center'>
                                    Tidak ada data yang sesuai dengan filter
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {filteredData.length > itemsPerPage && (
                <TablePagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    totalItems={filteredData.length}
                />
            )}
        </div>
    );
}
