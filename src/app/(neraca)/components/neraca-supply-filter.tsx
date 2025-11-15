'use client';
import React, { useState } from 'react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/new-york-v4/ui/select';

// Data dummy untuk produk
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

// Data dummy untuk provinsi
const provinces = [
    { value: 'aceh', label: 'Provinsi Aceh' },
    { value: 'sumatera-utara', label: 'Provinsi Sumatera Utara' },
    { value: 'sumatera-barat', label: 'Provinsi Sumatera Barat' },
    { value: 'riau', label: 'Provinsi Riau' },
    { value: 'jambi', label: 'Provinsi Jambi' },
    { value: 'sumatera-selatan', label: 'Provinsi Sumatera Selatan' },
    { value: 'bengkulu', label: 'Provinsi Bengkulu' },
    { value: 'lampung', label: 'Provinsi Lampung' },
    { value: 'kepulauan-bangka-belitung', label: 'Provinsi Kepulauan Bangka Belitung' },
    { value: 'kepulauan-riau', label: 'Provinsi Kepulauan Riau' },
    { value: 'dki-jakarta', label: 'Provinsi DKI Jakarta' },
    { value: 'jawa-barat', label: 'Provinsi Jawa Barat' },
    { value: 'jawa-tengah', label: 'Provinsi Jawa Tengah' },
    { value: 'di-yogyakarta', label: 'Provinsi DI Yogyakarta' },
    { value: 'jawa-timur', label: 'Provinsi Jawa Timur' },
    { value: 'banten', label: 'Provinsi Banten' },
    { value: 'bali', label: 'Provinsi Bali' },
    { value: 'nusa-tenggara-barat', label: 'Provinsi Nusa Tenggara Barat' },
    { value: 'nusa-tenggara-timur', label: 'Provinsi Nusa Tenggara Timur' },
    { value: 'kalimantan-barat', label: 'Provinsi Kalimantan Barat' },
    { value: 'kalimantan-tengah', label: 'Provinsi Kalimantan Tengah' },
    { value: 'kalimantan-selatan', label: 'Provinsi Kalimantan Selatan' },
    { value: 'kalimantan-timur', label: 'Provinsi Kalimantan Timur' },
    { value: 'kalimantan-utara', label: 'Provinsi Kalimantan Utara' },
    { value: 'sulawesi-utara', label: 'Provinsi Sulawesi Utara' },
    { value: 'sulawesi-tengah', label: 'Provinsi Sulawesi Tengah' },
    { value: 'sulawesi-selatan', label: 'Provinsi Sulawesi Selatan' },
    { value: 'sulawesi-tenggara', label: 'Provinsi Sulawesi Tenggara' },
    { value: 'gorontalo', label: 'Provinsi Gorontalo' },
    { value: 'sulawesi-barat', label: 'Provinsi Sulawesi Barat' },
    { value: 'maluku', label: 'Provinsi Maluku' },
    { value: 'maluku-utara', label: 'Provinsi Maluku Utara' },
    { value: 'papua-barat', label: 'Provinsi Papua Barat' },
    { value: 'papua', label: 'Provinsi Papua' }
];

export default function NeracaSupplyFilter() {
    const [selectedProduct, setSelectedProduct] = useState('beras');
    const [selectedProvince, setSelectedProvince] = useState('kalimantan-utara');

    return (
        <div className='w-full bg-gray-50 px-4 pt-12'>
            <div className='flex items-center justify-between gap-4'>
                {/* Judul */}
                <h1 className='text-2xl font-bold text-gray-900'>Detail Data Berseri Neraca Pangan</h1>

                {/* Filter Section */}
                <div className='flex items-center gap-3'>
                    <span className='text-sm font-medium text-gray-600'>Filter</span>

                    {/* Filter Produk */}
                    <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                        <SelectTrigger className='w-[200px] bg-white'>
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
                    <Select value={selectedProvince} onValueChange={setSelectedProvince}>
                        <SelectTrigger className='w-60 bg-white'>
                            <SelectValue placeholder='Pilih provinsi' />
                        </SelectTrigger>
                        <SelectContent>
                            {provinces.map((province) => (
                                <SelectItem key={province.value} value={province.value}>
                                    {province.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
}
