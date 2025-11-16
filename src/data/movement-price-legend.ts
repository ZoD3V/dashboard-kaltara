export const movementLegend = {
    Menurun: {
        legendBg: 'bg-red-500',
        fill: 'fill-red-500',
        statusColor: 'bg-red-100 text-red-600',
        valueColor: 'text-red-600'
    },
    Stabil: {
        legendBg: 'bg-slate-400',
        fill: 'fill-slate-400',
        statusColor: 'bg-slate-100 text-slate-600',
        valueColor: 'text-slate-700'
    },
    Meningkat: {
        legendBg: 'bg-green-500',
        fill: 'fill-green-500',
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
