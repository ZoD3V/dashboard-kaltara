'use client';
import { useState } from 'react';

import { listRegion } from '@/data/regions';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/new-york-v4/ui/select';

const products = [
    { value: 'beras', label: 'Beras' },
    { value: 'jagung', label: 'Jagung' },
    { value: 'kedelai', label: 'Kedelai' },
    { value: 'gula', label: 'Gula' },
    { value: 'daging-sapi', label: 'Daging Sapi' },
    { value: 'daging-ayam', label: 'Daging Ayam' },
    { value: 'telur', label: 'Telur Ayam' },
    { value: 'bawang-merah', label: 'Bawang Merah' },
    { value: 'bawang-putih', label: 'Bawang Putih' },
    { value: 'cabai-merah', label: 'Cabai Merah' },
    { value: 'cabai-rawit', label: 'Cabai Rawit' },
    { value: 'minyak-goreng', label: 'Minyak Goreng' }
];

export default function NeracaSupplyFilter() {
    const [selectedProduct, setSelectedProduct] = useState('beras');
    const [selectedRegion, setSelectedRegion] = useState('nunukan');

    return (
        <div className='w-full bg-gray-50 px-4 pt-12'>
            <div className='flex flex-col items-start justify-between gap-4 md:flex-row'>
                {/* Judul */}
                <h1 className='text-xl font-bold text-gray-900 md:text-2xl'>Detail Data Berseri Neraca Pangan</h1>

                {/* Filter Section */}
                <div className='flex w-full flex-col items-start gap-3 md:w-fit md:flex-row md:items-center'>
                    <span className='text-sm font-medium text-gray-600'>Filter</span>

                    {/* Filter Produk */}
                    <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                        <SelectTrigger className='w-full bg-white md:w-[200px]'>
                            <SelectValue placeholder='Pilih produk' />
                        </SelectTrigger>
                        <SelectContent>
                            {products.map((product) => (
                                <SelectItem key={product.value} value={product.value}>
                                    {product.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {/* Filter Provinsi */}
                    <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                        <SelectTrigger className='w-full bg-white md:w-60'>
                            <SelectValue placeholder='Pilih provinsi' />
                        </SelectTrigger>
                        <SelectContent>
                            {listRegion.map((item) => (
                                <SelectItem key={item.id} value={item.id}>
                                    {item.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
}
