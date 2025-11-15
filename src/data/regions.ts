import { RegionGroup, RegionVisualConfig } from '@/types/neraca';

export const listRegion = [
    {
        id: 'nunukan',
        name: 'Kabupaten Nunukan',
        type: 'kabupaten'
    },
    {
        id: 'malinau',
        name: 'Kabupaten Malinau',
        type: 'kabupaten'
    },
    {
        id: 'tana_tidung',
        name: 'Kabupaten Tana Tidung',
        type: 'kabupaten'
    },
    {
        id: 'tarakan',
        name: 'Kota Tarakan',
        type: 'kota'
    },
    {
        id: 'bulungan',
        name: 'Kabupaten Bulungan',
        type: 'kabupaten'
    }
];

export const regionVisualConfig: RegionVisualConfig = {
    // ============================
    // BERAS
    // ============================
    beras: {
        neraca: {
            nunukan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            malinau: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-red-400', statusColor: 'bg-red-100 text-red-600', valueColor: 'text-red-600' },
            bulungan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            }
        },
        ketersediaan: {
            nunukan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            malinau: {
                fill: 'fill-red-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-blue-400', statusColor: 'bg-blue-100 text-blue-600', valueColor: 'text-blue-600' },
            bulungan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            }
        },
        kebutuhan: {
            nunukan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            malinau: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-blue-400', statusColor: 'bg-blue-100 text-blue-600', valueColor: 'text-blue-600' },
            bulungan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            }
        },
        legend: {
            neraca: {
                defisit: 'bg-red-500',
                rentan: 'bg-orange-500',
                waspada: 'bg-yellow-500',
                aman: 'bg-green-500',
                nodata: 'bg-slate-400'
            },
            ketersediaan: {
                menurun: 'bg-orange-500',
                stabil: 'bg-blue-500',
                meningkat: 'bg-green-500',
                nodata: 'bg-slate-400'
            }
        }
    },

    // ============================
    // CABAI MERAH
    // ============================
    'cabai-merah': {
        neraca: {
            nunukan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            malinau: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-red-500', statusColor: 'bg-red-100 text-red-600', valueColor: 'text-red-600' },
            bulungan: {
                fill: 'fill-yellow-400',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            }
        },
        ketersediaan: {
            nunukan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            malinau: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-blue-400', statusColor: 'bg-blue-100 text-blue-600', valueColor: 'text-blue-600' },
            bulungan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            }
        },
        kebutuhan: {
            nunukan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            malinau: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-blue-400', statusColor: 'bg-blue-100 text-blue-600', valueColor: 'text-blue-600' },
            bulungan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-600'
            }
        },
        legend: {
            neraca: {
                defisit: 'bg-red-500',
                rentan: 'bg-orange-500',
                waspada: 'bg-yellow-500',
                aman: 'bg-green-500',
                nodata: 'bg-slate-400'
            },
            ketersediaan: {
                menurun: 'bg-orange-500',
                stabil: 'bg-blue-500',
                meningkat: 'bg-green-500',
                nodata: 'bg-slate-400'
            }
        }
    },

    // ============================
    // CABAI RAWIT
    // ============================
    'cabai-rawit': {
        neraca: {
            nunukan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            malinau: {
                fill: 'fill-red-400',
                statusColor: 'bg-red-100 text-red-600',
                valueColor: 'text-red-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-red-500', statusColor: 'bg-red-100 text-red-600', valueColor: 'text-red-600' },
            bulungan: {
                fill: 'fill-yellow-400',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            }
        },
        ketersediaan: {
            nunukan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            malinau: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-blue-400', statusColor: 'bg-blue-100 text-blue-600', valueColor: 'text-blue-600' },
            bulungan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            }
        },
        kebutuhan: {
            nunukan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            malinau: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-blue-400', statusColor: 'bg-blue-100 text-blue-600', valueColor: 'text-blue-600' },
            bulungan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-600'
            }
        },
        legend: {
            neraca: {
                defisit: 'bg-red-500',
                rentan: 'bg-orange-500',
                waspada: 'bg-yellow-500',
                aman: 'bg-green-500',
                nodata: 'bg-slate-400'
            },
            ketersediaan: {
                menurun: 'bg-orange-500',
                stabil: 'bg-blue-500',
                meningkat: 'bg-green-500',
                nodata: 'bg-slate-400'
            }
        }
    },

    // ============================
    // BAWANG MERAH
    // ============================
    'bawang-merah': {
        neraca: {
            nunukan: {
                fill: 'fill-yellow-400',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            },
            malinau: {
                fill: 'fill-red-400',
                statusColor: 'bg-red-100 text-red-600',
                valueColor: 'text-red-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-red-500', statusColor: 'bg-red-100 text-red-600', valueColor: 'text-red-600' },
            bulungan: {
                fill: 'fill-yellow-400',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            }
        },
        ketersediaan: {
            nunukan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            malinau: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-blue-400', statusColor: 'bg-blue-100 text-blue-600', valueColor: 'text-blue-600' },
            bulungan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            }
        },
        kebutuhan: {
            nunukan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-600'
            },
            malinau: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-blue-400', statusColor: 'bg-blue-100 text-blue-600', valueColor: 'text-blue-600' },
            bulungan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-600'
            }
        },
        legend: {
            neraca: {
                defisit: 'bg-red-500',
                rentan: 'bg-orange-500',
                waspada: 'bg-yellow-500',
                aman: 'bg-green-500',
                nodata: 'bg-slate-400'
            },
            ketersediaan: {
                menurun: 'bg-orange-500',
                stabil: 'bg-blue-500',
                meningkat: 'bg-green-500',
                nodata: 'bg-slate-400'
            }
        }
    },

    // ============================
    // BAWANG PUTIH
    // ============================
    'bawang-putih': {
        neraca: {
            nunukan: {
                fill: 'fill-red-400',
                statusColor: 'bg-red-100 text-red-600',
                valueColor: 'text-red-600'
            },
            malinau: {
                fill: 'fill-red-400',
                statusColor: 'bg-red-100 text-red-600',
                valueColor: 'text-red-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: {
                fill: 'fill-orange-500',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            bulungan: {
                fill: 'fill-yellow-400',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            }
        },
        ketersediaan: {
            nunukan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-600'
            },
            malinau: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-blue-400', statusColor: 'bg-blue-100 text-blue-600', valueColor: 'text-blue-600' },
            bulungan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-600'
            }
        },
        kebutuhan: {
            nunukan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-600'
            },
            malinau: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-blue-400', statusColor: 'bg-blue-100 text-blue-600', valueColor: 'text-blue-600' },
            bulungan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-600'
            }
        },
        legend: {
            neraca: {
                defisit: 'bg-red-500',
                rentan: 'bg-orange-500',
                waspada: 'bg-yellow-500',
                aman: 'bg-green-500',
                nodata: 'bg-slate-400'
            },
            ketersediaan: {
                menurun: 'bg-orange-500',
                stabil: 'bg-blue-500',
                meningkat: 'bg-green-500',
                nodata: 'bg-slate-400'
            }
        }
    },
    // ============================
    // DAGING SAPI
    // ============================
    'daging-sapi': {
        neraca: {
            nunukan: {
                fill: 'fill-yellow-400',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            },
            malinau: {
                fill: 'fill-red-400',
                statusColor: 'bg-red-100 text-red-600',
                valueColor: 'text-red-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-red-500', statusColor: 'bg-red-100 text-red-600', valueColor: 'text-red-600' },
            bulungan: {
                fill: 'fill-yellow-400',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            }
        },
        ketersediaan: {
            nunukan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            malinau: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-blue-400', statusColor: 'bg-blue-100 text-blue-600', valueColor: 'text-blue-600' },
            bulungan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            }
        },
        kebutuhan: {
            nunukan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-600'
            },
            malinau: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-blue-400', statusColor: 'bg-blue-100 text-blue-600', valueColor: 'text-blue-600' },
            bulungan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-600'
            }
        },
        legend: {
            neraca: {
                defisit: 'bg-red-500',
                rentan: 'bg-orange-500',
                waspada: 'bg-yellow-500',
                aman: 'bg-green-500',
                nodata: 'bg-slate-400'
            },
            ketersediaan: {
                menurun: 'bg-orange-500',
                stabil: 'bg-blue-500',
                meningkat: 'bg-green-500',
                nodata: 'bg-slate-400'
            }
        }
    },

    // ============================
    // TELUR AYAM
    // ============================
    'telur-ayam': {
        neraca: {
            nunukan: {
                fill: 'fill-yellow-400',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            },
            malinau: {
                fill: 'fill-red-400',
                statusColor: 'bg-red-100 text-red-600',
                valueColor: 'text-red-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-red-500', statusColor: 'bg-red-100 text-red-600', valueColor: 'text-red-600' },
            bulungan: {
                fill: 'fill-yellow-400',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            }
        },
        ketersediaan: {
            nunukan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            malinau: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-blue-400', statusColor: 'bg-blue-100 text-blue-600', valueColor: 'text-blue-600' },
            bulungan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            }
        },
        kebutuhan: {
            nunukan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-600'
            },
            malinau: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-blue-400', statusColor: 'bg-blue-100 text-blue-600', valueColor: 'text-blue-600' },
            bulungan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-600'
            }
        },
        legend: {
            neraca: {
                defisit: 'bg-red-500',
                rentan: 'bg-orange-500',
                waspada: 'bg-yellow-500',
                aman: 'bg-green-500',
                nodata: 'bg-slate-400'
            },
            ketersediaan: {
                menurun: 'bg-orange-500',
                stabil: 'bg-blue-500',
                meningkat: 'bg-green-500',
                nodata: 'bg-slate-400'
            }
        }
    },

    // ============================
    // GULA PASIR
    // ============================
    'gula-pasir': {
        neraca: {
            nunukan: {
                fill: 'fill-yellow-400',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            },
            malinau: {
                fill: 'fill-red-400',
                statusColor: 'bg-red-100 text-red-600',
                valueColor: 'text-red-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-red-500', statusColor: 'bg-red-100 text-red-600', valueColor: 'text-red-600' },
            bulungan: {
                fill: 'fill-yellow-400',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            }
        },
        ketersediaan: {
            nunukan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            malinau: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-blue-400', statusColor: 'bg-blue-100 text-blue-600', valueColor: 'text-blue-600' },
            bulungan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            }
        },
        kebutuhan: {
            nunukan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-600'
            },
            malinau: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-blue-400', statusColor: 'bg-blue-100 text-blue-600', valueColor: 'text-blue-600' },
            bulungan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-600'
            }
        },
        legend: {
            neraca: {
                defisit: 'bg-red-500',
                rentan: 'bg-orange-500',
                waspada: 'bg-yellow-500',
                aman: 'bg-green-500',
                nodata: 'bg-slate-400'
            },
            ketersediaan: {
                menurun: 'bg-orange-500',
                stabil: 'bg-blue-500',
                meningkat: 'bg-green-500',
                nodata: 'bg-slate-400'
            }
        }
    },
    // ============================
    // MINYAK GORENG
    // ============================
    'minyak-goreng': {
        neraca: {
            nunukan: {
                fill: 'fill-yellow-400',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            },
            malinau: {
                fill: 'fill-red-400',
                statusColor: 'bg-red-100 text-red-600',
                valueColor: 'text-red-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-red-500', statusColor: 'bg-red-100 text-red-600', valueColor: 'text-red-600' },
            bulungan: {
                fill: 'fill-yellow-400',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            }
        },
        ketersediaan: {
            nunukan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            malinau: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-blue-400', statusColor: 'bg-blue-100 text-blue-600', valueColor: 'text-blue-600' },
            bulungan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            }
        },
        kebutuhan: {
            nunukan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-600'
            },
            malinau: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-blue-400', statusColor: 'bg-blue-100 text-blue-600', valueColor: 'text-blue-600' },
            bulungan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-600'
            }
        },
        legend: {
            neraca: {
                defisit: 'bg-red-500',
                rentan: 'bg-orange-500',
                waspada: 'bg-yellow-500',
                aman: 'bg-green-500',
                nodata: 'bg-slate-400'
            },
            ketersediaan: {
                menurun: 'bg-orange-500',
                stabil: 'bg-blue-500',
                meningkat: 'bg-green-500',
                nodata: 'bg-slate-400'
            }
        }
    },
    // ============================
    // JAGUNG
    // ============================
    jagung: {
        neraca: {
            nunukan: {
                fill: 'fill-yellow-400',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            },
            malinau: {
                fill: 'fill-red-400',
                statusColor: 'bg-red-100 text-red-600',
                valueColor: 'text-red-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-red-500', statusColor: 'bg-red-100 text-red-600', valueColor: 'text-red-600' },
            bulungan: {
                fill: 'fill-yellow-400',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            }
        },
        ketersediaan: {
            nunukan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            malinau: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-blue-400', statusColor: 'bg-blue-100 text-blue-600', valueColor: 'text-blue-600' },
            bulungan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            }
        },
        kebutuhan: {
            nunukan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-600'
            },
            malinau: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-blue-400', statusColor: 'bg-blue-100 text-blue-600', valueColor: 'text-blue-600' },
            bulungan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-600'
            }
        },
        legend: {
            neraca: {
                defisit: 'bg-red-500',
                rentan: 'bg-orange-500',
                waspada: 'bg-yellow-500',
                aman: 'bg-green-500',
                nodata: 'bg-slate-400'
            },
            ketersediaan: {
                menurun: 'bg-orange-500',
                stabil: 'bg-blue-500',
                meningkat: 'bg-green-500',
                nodata: 'bg-slate-400'
            }
        }
    },

    // ============================
    // KEDELAI
    // ============================
    kedelai: {
        neraca: {
            nunukan: {
                fill: 'fill-yellow-400',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            },
            malinau: {
                fill: 'fill-red-400',
                statusColor: 'bg-red-100 text-red-600',
                valueColor: 'text-red-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-red-500', statusColor: 'bg-red-100 text-red-600', valueColor: 'text-red-600' },
            bulungan: {
                fill: 'fill-yellow-400',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            }
        },
        ketersediaan: {
            nunukan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            malinau: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-blue-400', statusColor: 'bg-blue-100 text-blue-600', valueColor: 'text-blue-600' },
            bulungan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            }
        },
        kebutuhan: {
            nunukan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-600'
            },
            malinau: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            'tana-tidung': {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: { fill: 'fill-blue-400', statusColor: 'bg-blue-100 text-blue-600', valueColor: 'text-blue-600' },
            bulungan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-600'
            }
        },
        legend: {
            neraca: {
                defisit: 'bg-red-500',
                rentan: 'bg-orange-500',
                waspada: 'bg-yellow-500',
                aman: 'bg-green-500',
                nodata: 'bg-slate-400'
            },
            ketersediaan: {
                menurun: 'bg-orange-500',
                stabil: 'bg-blue-500',
                meningkat: 'bg-green-500',
                nodata: 'bg-slate-400'
            }
        }
    }
};

export const neracaRegion: RegionGroup[] = [
    // =======================
    // BERAS - NERACA
    // =======================
    {
        commodityId: 'beras',
        infoTypeId: 'neraca',
        monthId: '2025-10',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                ton: 670,
                status: 'Aman'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 650,
                status: 'Aman'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 630,
                status: 'Rentan'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 610,
                status: 'Defisit'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 600,
                status: 'Rentan'
            }
        ]
    },

    // =======================
    // CABAI MERAH - NERACA
    // =======================
    {
        commodityId: 'cabai-merah',
        infoTypeId: 'neraca',
        monthId: '2025-10',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                ton: 505,
                status: 'Aman'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 495,
                status: 'Aman'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 480,
                status: 'Rentan'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 470,
                status: 'Rentan'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 460,
                status: 'Waspada'
            }
        ]
    },

    // =======================
    // CABAI RAWIT - NERACA
    // =======================
    {
        commodityId: 'cabai-rawit',
        infoTypeId: 'neraca',
        monthId: '2025-10',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                ton: 320,
                status: 'Rentan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 310,
                status: 'Defisit'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 295,
                status: 'Rentan'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 290,
                status: 'Rentan'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 280,
                status: 'Waspada'
            }
        ]
    },

    // =======================
    // BAWANG MERAH - NERACA
    // =======================
    {
        commodityId: 'bawang-merah',
        infoTypeId: 'neraca',
        monthId: '2025-10',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                ton: 410,
                status: 'Waspada'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 395,
                status: 'Defisit'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 380,
                status: 'Rentan'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 370,
                status: 'Rentan'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 360,
                status: 'Waspada'
            }
        ]
    },

    // =======================
    // BAWANG PUTIH - NERACA
    // =======================
    {
        commodityId: 'bawang-putih',
        infoTypeId: 'neraca',
        monthId: '2025-10',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                ton: 305,
                status: 'Defisit'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 295,
                status: 'Defisit'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 285,
                status: 'Rentan'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 280,
                status: 'Rentan'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 270,
                status: 'Waspada'
            }
        ]
    },

    // =======================
    // DAGING SAPI - NERACA
    // =======================
    {
        commodityId: 'daging-sapi',
        infoTypeId: 'neraca',
        monthId: '2025-10',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                ton: 190,
                status: 'Aman'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 175,
                status: 'Aman'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 165,
                status: 'Rentan'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 180,
                status: 'Rentan'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 170,
                status: 'Waspada'
            }
        ]
    },

    // =======================
    // TELUR AYAM - NERACA
    // =======================
    {
        commodityId: 'telur-ayam',
        infoTypeId: 'neraca',
        monthId: '2025-10',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                ton: 260,
                status: 'Aman'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 250,
                status: 'Aman'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 240,
                status: 'Rentan'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 245,
                status: 'Rentan'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 235,
                status: 'Waspada'
            }
        ]
    },

    // =======================
    // GULA PASIR - NERACA
    // =======================
    {
        commodityId: 'gula-pasir',
        infoTypeId: 'neraca',
        monthId: '2025-10',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                ton: 900,
                status: 'Aman'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 880,
                status: 'Aman'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 860,
                status: 'Rentan'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 850,
                status: 'Rentan'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 840,
                status: 'Waspada'
            }
        ]
    },

    // =======================
    // MINYAK GORENG - NERACA
    // =======================
    {
        commodityId: 'minyak-goreng',
        infoTypeId: 'neraca',
        monthId: '2025-10',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                ton: 750,
                status: 'Aman'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 730,
                status: 'Aman'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 710,
                status: 'Rentan'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 705,
                status: 'Rentan'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 695,
                status: 'Waspada'
            }
        ]
    },

    // =======================
    // JAGUNG - NERACA
    // =======================
    {
        commodityId: 'jagung',
        infoTypeId: 'neraca',
        monthId: '2025-10',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                ton: 1200,
                status: 'Aman'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 1150,
                status: 'Aman'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 1130,
                status: 'Rentan'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 1100,
                status: 'Rentan'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 1080,
                status: 'Waspada'
            }
        ]
    },

    // =======================
    // KEDELAI - NERACA
    // =======================
    {
        commodityId: 'kedelai',
        infoTypeId: 'neraca',
        monthId: '2025-10',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                ton: 430,
                status: 'Aman'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 420,
                status: 'Aman'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 410,
                status: 'Rentan'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 405,
                status: 'Rentan'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 395,
                status: 'Waspada'
            }
        ]
    }
];

export const ketersediaanRegion: RegionGroup[] = [
    // =======================
    // BERAS - KETERSEDIAAN
    // =======================
    {
        commodityId: 'beras',
        infoTypeId: 'ketersediaan',
        monthId: '2025-10',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '1,50%',
                ton: 201,
                status: 'Meningkat'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '1,64%',
                ton: 202,
                status: 'Meningkat'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-1,50%',
                ton: 203,
                status: 'Menurun'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '5,09%',
                ton: 204,
                status: 'Stabil'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-1,50%',
                ton: 205,
                status: 'Menurun'
            }
        ]
    },

    // =======================
    // CABAI MERAH - KETERSEDIAAN
    // =======================
    {
        commodityId: 'cabai-merah',
        infoTypeId: 'ketersediaan',
        monthId: '2025-10',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '2,10%',
                ton: 301,
                status: 'Meningkat'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '1,80%',
                ton: 302,
                status: 'Meningkat'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-2,20%',
                ton: 303,
                status: 'Menurun'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '3,95%',
                ton: 304,
                status: 'Stabil'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '1,10%',
                ton: 305,
                status: 'Stabil'
            }
        ]
    },

    // =======================
    // CABAI RAWIT - KETERSEDIAAN
    // =======================
    {
        commodityId: 'cabai-rawit',
        infoTypeId: 'ketersediaan',
        monthId: '2025-10',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '1,20%',
                ton: 260,
                status: 'Meningkat'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '0,80%',
                ton: 255,
                status: 'Meningkat'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-1,75%',
                ton: 248,
                status: 'Menurun'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '2,50%',
                ton: 252,
                status: 'Stabil'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '10%',
                ton: 245,
                status: 'Stabil'
            }
        ]
    },

    // =======================
    // BAWANG MERAH - KETERSEDIAAN
    // =======================
    {
        commodityId: 'bawang-merah',
        infoTypeId: 'ketersediaan',
        monthId: '2025-10',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '0,90%',
                ton: 310,
                status: 'Stabil'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '1,10%',
                ton: 315,
                status: 'Meningkat'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-0,85%',
                ton: 312,
                status: 'Menurun'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '3,20%',
                ton: 318,
                status: 'Stabil'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '1,05%',
                ton: 319,
                status: 'Stabil'
            }
        ]
    },

    // =======================
    // BAWANG PUTIH - KETERSEDIAAN
    // =======================
    {
        commodityId: 'bawang-putih',
        infoTypeId: 'ketersediaan',
        monthId: '2025-10',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '1,30%',
                ton: 260,
                status: 'Meningkat'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '0,95%',
                ton: 255,
                status: 'Meningkat'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-1,20%',
                ton: 248,
                status: 'Menurun'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '2,10%',
                ton: 252,
                status: 'Stabil'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-0,80%',
                ton: 245,
                status: 'Menurun'
            }
        ]
    },

    // =======================
    // DAGING SAPI - KETERSEDIAAN
    // =======================
    {
        commodityId: 'daging-sapi',
        infoTypeId: 'ketersediaan',
        monthId: '2025-10',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '0,75%',
                ton: 155,
                status: 'Meningkat'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '0,50%',
                ton: 150,
                status: 'Meningkat'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-1,00%',
                ton: 145,
                status: 'Menurun'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '1,80%',
                ton: 160,
                status: 'Stabil'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-0,60%',
                ton: 148,
                status: 'Menurun'
            }
        ]
    },

    // =======================
    // TELUR AYAM - KETERSEDIAAN
    // =======================
    {
        commodityId: 'telur-ayam',
        infoTypeId: 'ketersediaan',
        monthId: '2025-10',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '1,10%',
                ton: 210,
                status: 'Meningkat'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '0,95%',
                ton: 208,
                status: 'Meningkat'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-0,70%',
                ton: 205,
                status: 'Menurun'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '2,00%',
                ton: 212,
                status: 'Stabil'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-0,90%',
                ton: 204,
                status: 'Menurun'
            }
        ]
    },

    // =======================
    // GULA PASIR - KETERSEDIAAN
    // =======================
    {
        commodityId: 'gula-pasir',
        infoTypeId: 'ketersediaan',
        monthId: '2025-10',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '0,85%',
                ton: 720,
                status: 'Meningkat'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '0,60%',
                ton: 710,
                status: 'Meningkat'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-1,30%',
                ton: 700,
                status: 'Menurun'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '1,90%',
                ton: 730,
                status: 'Stabil'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-0,75%',
                ton: 705,
                status: 'Menurun'
            }
        ]
    },

    // =======================
    // MINYAK GORENG - KETERSEDIAAN
    // =======================
    {
        commodityId: 'minyak-goreng',
        infoTypeId: 'ketersediaan',
        monthId: '2025-10',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '1,40%',
                ton: 650,
                status: 'Meningkat'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '1,10%',
                ton: 640,
                status: 'Meningkat'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-0,95%',
                ton: 630,
                status: 'Menurun'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '2,30%',
                ton: 655,
                status: 'Stabil'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-0,70%',
                ton: 635,
                status: 'Menurun'
            }
        ]
    },

    // =======================
    // JAGUNG - KETERSEDIAAN
    // =======================
    {
        commodityId: 'jagung',
        infoTypeId: 'ketersediaan',
        monthId: '2025-10',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '1,80%',
                ton: 980,
                status: 'Meningkat'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '1,50%',
                ton: 970,
                status: 'Meningkat'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-1,10%',
                ton: 960,
                status: 'Menurun'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '2,40%',
                ton: 990,
                status: 'Stabil'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-0,95%',
                ton: 965,
                status: 'Menurun'
            }
        ]
    },

    // =======================
    // KEDELAI - KETERSEDIAAN
    // =======================
    {
        commodityId: 'kedelai',
        infoTypeId: 'ketersediaan',
        monthId: '2025-10',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '0,95%',
                ton: 360,
                status: 'Meningkat'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '0,70%',
                ton: 355,
                status: 'Meningkat'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-0,85%',
                ton: 350,
                status: 'Menurun'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '1,60%',
                ton: 365,
                status: 'Stabil'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-0,65%',
                ton: 352,
                status: 'Menurun'
            }
        ]
    }
];
