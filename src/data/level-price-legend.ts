// Legend utama untuk NERACA (level-harga)
export const levelHargaLegend = {
    'Sangat Rendah': {
        legendBg: 'bg-green-700',
        fill: 'fill-green-700',
        statusColor: 'bg-green-100 text-green-700',
        valueColor: 'text-green-700'
    },
    Rendah: {
        legendBg: 'bg-green-500',
        fill: 'fill-green-500',
        statusColor: 'bg-green-100 text-green-600',
        valueColor: 'text-green-600'
    },
    Sedang: {
        legendBg: 'bg-yellow-300',
        fill: 'fill-yellow-300',
        statusColor: 'bg-yellow-100 text-yellow-600',
        valueColor: 'text-yellow-600'
    },
    Tinggi: {
        legendBg: 'bg-green-400',
        fill: 'fill-green-400',
        statusColor: 'bg-green-100 text-green-600',
        valueColor: 'text-green-600'
    },
    'Sangat Tinggi': {
        legendBg: 'bg-green-600',
        fill: 'fill-green-600',
        statusColor: 'bg-green-100 text-green-700',
        valueColor: 'text-green-700'
    },
    NoData: {
        legendBg: 'bg-slate-400',
        fill: 'fill-slate-400',
        statusColor: 'bg-slate-100 text-slate-500',
        valueColor: 'text-slate-500'
    }
} as const;
