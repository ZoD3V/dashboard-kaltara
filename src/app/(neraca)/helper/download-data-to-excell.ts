import { PeriodType, ProvinceType, TableDataPoint } from '@/types/neraca';

import * as XLSX from 'xlsx';

export function downloadExcel(
    rows: any[],
    filename: string = 'data-export',
    commodity: string,
    jenisInformasi: string,
    timeBase: string
) {
    if (!rows || rows.length === 0) return;
    let periode = '';

    switch (timeBase) {
        case '3m':
            periode = '3 Bulan';
            break;
        case '6m':
            periode = '6 Bulan';
            break;
        case 'year':
            periode = '1 Tahun';
            break;
        default:
            periode = '1 Tahun';
            break;
    }

    const exportData = rows.map((item) => {
        const { icon, id, ...rest } = item;

        return {
            komoditas: commodity,
            'jenis informasi': jenisInformasi,
            priode: periode,
            ...rest
        };
    });

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    XLSX.writeFile(workbook, `${filename}.xlsx`);
}

export const downloadDataTrenToExcel = (
    tableData: TableDataPoint[],
    commodity: string,
    province: ProvinceType,
    period: PeriodType
): void => {
    try {
        let html =
            '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">';
        html +=
            '<head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>Data Komoditas</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->';
        html += '<meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body>';
        html += '<table border="1">';

        // Header
        html += '<thead><tr style="background-color: #f3f4f6; font-weight: bold;">';
        html += '<th>Periode</th>';
        html += '<th>Neraca (Rp)</th>';
        html += '<th>Ketersediaan (Rp)</th>';
        html += '<th>Kebutuhan (Rp)</th>';
        html += '<th>Status</th>';
        html += '</tr></thead>';

        // Body
        html += '<tbody>';
        tableData.forEach((row) => {
            const statusColors: Record<string, string> = {
                Aman: '#4ade80',
                Waspada: '#fde047',
                Rentan: '#fb923c',
                Defisit: '#ef4444'
            };
            html += '<tr>';
            html += `<td>${row.periode}</td>`;
            html += `<td style="text-align: right;">${row.neraca.toLocaleString('id-ID')}</td>`;
            html += `<td style="text-align: right;">${row.ketersediaan.toLocaleString('id-ID')}</td>`;
            html += `<td style="text-align: right;">${row.kebutuhan.toLocaleString('id-ID')}</td>`;
            html += `<td style="background-color: ${statusColors[row.status]}; color: ${row.status === 'Waspada' ? '#1f2937' : '#ffffff'}; font-weight: bold; text-align: center;">${row.status}</td>`;
            html += '</tr>';
        });
        html += '</tbody></table></body></html>';

        // Create blob and download
        const blob = new Blob([html], { type: 'application/vnd.ms-excel' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');

        const filename = `Tren_${commodity.replace(/\s+/g, '_')}_${province.replace(/\s+/g, '_')}_${period.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.xls`;

        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error downloading file:', error);
        alert('Terjadi kesalahan saat mengunduh file. Silakan coba lagi.');
    }
};
