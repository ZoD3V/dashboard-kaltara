export const neracaPriceLegend = {
    Defisit: {
        legendBg: 'bg-red-400',
        fill: 'fill-red-400',
        statusColor: 'bg-red-100 text-red-600',
        valueColor: 'text-red-600'
    },
    Rentan: {
        legendBg: 'bg-orange-400',
        fill: 'fill-orange-400',
        statusColor: 'bg-orange-100 text-orange-600',
        valueColor: 'text-orange-700'
    },
    Waspada: {
        legendBg: 'bg-yellow-300',
        fill: 'fill-yellow-400',
        statusColor: 'bg-yellow-100 text-yellow-600',
        valueColor: 'text-yellow-600'
    },
    Aman: {
        legendBg: 'bg-green-400',
        fill: 'fill-green-400',
        statusColor: 'bg-green-100 text-green-600',
        valueColor: 'text-green-600'
    },
    NoData: {
        legendBg: 'bg-slate-400',
        fill: 'fill-slate-400',
        statusColor: 'bg-slate-100 text-slate-500',
        valueColor: 'text-slate-500'
    }
} as const;
