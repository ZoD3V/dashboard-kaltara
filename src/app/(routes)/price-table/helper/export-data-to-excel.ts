import { DaerahItem, KomoditasItem } from '@/types/price';

import * as XLSX from 'xlsx';

type HarianPrice = {
    date: string;
    price: number;
};

export type HargaPerKabupaten = {
    kabupaten: string;
    currentPrice: number;
    change: number;
    icon: string;
    data: HarianPrice[];
};

export type HargaPerKomoditas = {
    komoditas: string;
    currentPrice: number;
    change: number;
    icon: string;
    data: HarianPrice[];
};

function downloadExcel(rows: any[], sheetName: string, fileName: string) {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

    const excelBuffer = XLSX.write(workbook, {
        bookType: 'xlsx',
        type: 'array'
    });

    const blob = new Blob([excelBuffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.xlsx`;
    link.click();
    URL.revokeObjectURL(url);
}

export function exportHargaPerKabupatenToExcel(items: (KomoditasItem | DaerahItem)[], fileName: string) {
    const rows = items.flatMap((item) =>
        item.data.map((d) => ({
            Tanggal: d.date,
            'Harga Harian': d.price,
            'Harga Terkini': item.currentPrice,
            Perubahan: item.change
        }))
    );

    downloadExcel(rows, 'Harga per Kabupaten', fileName);
}

export function exportHargaPerKomoditasToExcel(items: HargaPerKomoditas[], fileName: string) {
    const rows = items.flatMap((item) =>
        item.data.map((d) => ({
            Komoditas: item.komoditas,
            Tanggal: d.date,
            'Harga Harian': d.price,
            'Harga Terkini': item.currentPrice,
            Perubahan: item.change,
            Icon: item.icon
        }))
    );

    downloadExcel(rows, 'Harga per Komoditas', fileName);
}
