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
                // Aman
                fill: 'fill-green-500',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            malinau: {
                // Rentan
                fill: 'fill-orange-500',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            'tana-tidung': {
                // Waspada
                fill: 'fill-yellow-500',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            },
            tarakan: {
                // Defisit
                fill: 'fill-red-500',
                statusColor: 'bg-red-100 text-red-600',
                valueColor: 'text-red-600'
            },
            bulungan: {
                // Waspada
                fill: 'fill-yellow-500',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            }
        },
        // dari ketersediaanRegion (beras)
        // nunukan: Meningkat, malinau: Stabil, tana-tidung: Stabil, tarakan: Menurun, bulungan: Meningkat
        ketersediaan: {
            nunukan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            malinau: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            'tana-tidung': {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            tarakan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            bulungan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            }
        },
        kebutuhan: {
            nunukan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            malinau: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            'tana-tidung': {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            tarakan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            bulungan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            }
        }
    },

    // ============================
    // CABAI MERAH
    // ============================
    'cabai-merah': {
        neraca: {
            nunukan: {
                // Waspada
                fill: 'fill-yellow-500',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            },
            malinau: {
                // Aman
                fill: 'fill-green-500',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            'tana-tidung': {
                // Rentan
                fill: 'fill-orange-500',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: {
                // Waspada
                fill: 'fill-yellow-500',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            },
            bulungan: {
                // Defisit
                fill: 'fill-red-500',
                statusColor: 'bg-red-100 text-red-600',
                valueColor: 'text-red-600'
            }
        },
        // nunukan: Stabil, malinau: Meningkat, tana-tidung: Menurun, tarakan: Stabil, bulungan: Meningkat
        ketersediaan: {
            nunukan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
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
            tarakan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            bulungan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            }
        },
        kebutuhan: {
            nunukan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
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
            tarakan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            bulungan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            }
        }
    },

    // ============================
    // CABAI RAWIT
    // ============================
    'cabai-rawit': {
        neraca: {
            nunukan: {
                // Rentan
                fill: 'fill-orange-500',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            malinau: {
                // Waspada
                fill: 'fill-yellow-500',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            },
            'tana-tidung': {
                // Aman
                fill: 'fill-green-500',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            tarakan: {
                // Rentan
                fill: 'fill-orange-500',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            bulungan: {
                // Aman
                fill: 'fill-green-500',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            }
        },
        // nunukan: Stabil, malinau: Meningkat, tana-tidung: Menurun, tarakan: Stabil, bulungan: Meningkat
        ketersediaan: {
            nunukan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
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
            tarakan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            bulungan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            }
        },
        kebutuhan: {
            nunukan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
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
            tarakan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            bulungan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            }
        }
    },

    // ============================
    // BAWANG MERAH
    // ============================
    'bawang-merah': {
        neraca: {
            nunukan: {
                // Defisit
                fill: 'fill-red-500',
                statusColor: 'bg-red-100 text-red-600',
                valueColor: 'text-red-600'
            },
            malinau: {
                // Defisit
                fill: 'fill-red-500',
                statusColor: 'bg-red-100 text-red-600',
                valueColor: 'text-red-600'
            },
            'tana-tidung': {
                // Defisit
                fill: 'fill-red-500',
                statusColor: 'bg-red-100 text-red-600',
                valueColor: 'text-red-600'
            },
            tarakan: {
                // Aman
                fill: 'fill-green-500',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            bulungan: {
                // Rentan
                fill: 'fill-orange-500',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            }
        },
        // nunukan: Stabil, malinau: Meningkat, tana-tidung: Stabil, tarakan: Menurun, bulungan: Meningkat
        ketersediaan: {
            nunukan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            malinau: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            'tana-tidung': {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            tarakan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            bulungan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            }
        },
        kebutuhan: {
            nunukan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            malinau: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            'tana-tidung': {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            tarakan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            bulungan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            }
        }
    },

    // ============================
    // BAWANG PUTIH
    // ============================
    'bawang-putih': {
        neraca: {
            nunukan: {
                // Aman
                fill: 'fill-green-500',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            malinau: {
                // Rentan
                fill: 'fill-orange-500',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            'tana-tidung': {
                // Waspada
                fill: 'fill-yellow-500',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            },
            tarakan: {
                // Defisit
                fill: 'fill-red-500',
                statusColor: 'bg-red-100 text-red-600',
                valueColor: 'text-red-600'
            },
            bulungan: {
                // Waspada
                fill: 'fill-yellow-500',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            }
        },
        // nunukan: Stabil, malinau: Menurun, tana-tidung: Meningkat, tarakan: Meningkat, bulungan: Menurun
        ketersediaan: {
            nunukan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            malinau: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            'tana-tidung': {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            tarakan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
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
                valueColor: 'text-blue-700'
            },
            malinau: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            'tana-tidung': {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            tarakan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            bulungan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            }
        }
    },

    // ============================
    // DAGING SAPI
    // ============================
    'daging-sapi': {
        neraca: {
            nunukan: {
                // Waspada
                fill: 'fill-yellow-500',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            },
            malinau: {
                // Aman
                fill: 'fill-green-500',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            'tana-tidung': {
                // Rentan
                fill: 'fill-orange-500',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: {
                // Waspada
                fill: 'fill-yellow-500',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            },
            bulungan: {
                // Defisit
                fill: 'fill-red-500',
                statusColor: 'bg-red-100 text-red-600',
                valueColor: 'text-red-600'
            }
        },
        // nunukan: Menurun, malinau: Stabil, tana-tidung: Meningkat, tarakan: Meningkat, bulungan: Stabil
        ketersediaan: {
            nunukan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            malinau: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            'tana-tidung': {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            tarakan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            bulungan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            }
        },
        kebutuhan: {
            nunukan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            malinau: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            'tana-tidung': {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            tarakan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            bulungan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            }
        }
    },

    // ============================
    // TELUR AYAM
    // ============================
    'telur-ayam': {
        neraca: {
            nunukan: {
                // Rentan
                fill: 'fill-orange-500',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            malinau: {
                // Waspada
                fill: 'fill-yellow-500',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            },
            'tana-tidung': {
                // Aman
                fill: 'fill-green-500',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            tarakan: {
                // Rentan
                fill: 'fill-orange-500',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            bulungan: {
                // Aman
                fill: 'fill-green-500',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            }
        },
        // nunukan: Meningkat, malinau: Menurun, tana-tidung: Stabil, tarakan: Stabil, bulungan: Meningkat
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
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            tarakan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            bulungan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            }
        },
        kebutuhan: {
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
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            tarakan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            bulungan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            }
        }
    },

    // ============================
    // GULA PASIR
    // ============================
    'gula-pasir': {
        neraca: {
            nunukan: {
                // Defisit
                fill: 'fill-red-500',
                statusColor: 'bg-red-100 text-red-600',
                valueColor: 'text-red-600'
            },
            malinau: {
                // Defisit
                fill: 'fill-red-500',
                statusColor: 'bg-red-100 text-red-600',
                valueColor: 'text-red-600'
            },
            'tana-tidung': {
                // Defisit
                fill: 'fill-red-500',
                statusColor: 'bg-red-100 text-red-600',
                valueColor: 'text-red-600'
            },
            tarakan: {
                // Aman
                fill: 'fill-green-500',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            bulungan: {
                // Rentan
                fill: 'fill-orange-500',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            }
        },
        // nunukan: Menurun, malinau: Stabil, tana-tidung: Stabil, tarakan: Meningkat, bulungan: Meningkat
        ketersediaan: {
            nunukan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            malinau: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            'tana-tidung': {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            tarakan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            bulungan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            }
        },
        kebutuhan: {
            nunukan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            malinau: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            'tana-tidung': {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            tarakan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            bulungan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            }
        }
    },

    // ============================
    // MINYAK GORENG
    // ============================
    'minyak-goreng': {
        neraca: {
            nunukan: {
                // Aman
                fill: 'fill-green-500',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            malinau: {
                // Rentan
                fill: 'fill-orange-500',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            'tana-tidung': {
                // Waspada
                fill: 'fill-yellow-500',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            },
            tarakan: {
                // Defisit
                fill: 'fill-red-500',
                statusColor: 'bg-red-100 text-red-600',
                valueColor: 'text-red-600'
            },
            bulungan: {
                // Waspada
                fill: 'fill-yellow-500',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            }
        },
        // nunukan: Menurun, malinau: Stabil, tana-tidung: Meningkat, tarakan: Meningkat, bulungan: Stabil
        ketersediaan: {
            nunukan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            malinau: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            'tana-tidung': {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            tarakan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            bulungan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            }
        },
        kebutuhan: {
            nunukan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            malinau: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            'tana-tidung': {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            tarakan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            bulungan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            }
        }
    },

    // ============================
    // JAGUNG
    // ============================
    jagung: {
        neraca: {
            nunukan: {
                // Waspada
                fill: 'fill-yellow-500',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            },
            malinau: {
                // Aman
                fill: 'fill-green-500',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            'tana-tidung': {
                // Rentan
                fill: 'fill-orange-500',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            tarakan: {
                // Waspada
                fill: 'fill-yellow-500',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            },
            bulungan: {
                // Defisit
                fill: 'fill-red-500',
                statusColor: 'bg-red-100 text-red-600',
                valueColor: 'text-red-600'
            }
        },
        // nunukan: Meningkat, malinau: Stabil, tana-tidung: Stabil, tarakan: Meningkat, bulungan: Menurun
        ketersediaan: {
            nunukan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            malinau: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            'tana-tidung': {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            tarakan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
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
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            'tana-tidung': {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            tarakan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            bulungan: {
                fill: 'fill-orange-400',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            }
        }
    },

    // ============================
    // KEDELAI
    // ============================
    kedelai: {
        neraca: {
            nunukan: {
                // Rentan
                fill: 'fill-orange-500',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            malinau: {
                // Waspada
                fill: 'fill-yellow-500',
                statusColor: 'bg-yellow-100 text-yellow-600',
                valueColor: 'text-yellow-600'
            },
            'tana-tidung': {
                // Aman
                fill: 'fill-green-500',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            },
            tarakan: {
                // Rentan
                fill: 'fill-orange-500',
                statusColor: 'bg-orange-100 text-orange-600',
                valueColor: 'text-orange-600'
            },
            bulungan: {
                // Aman
                fill: 'fill-green-500',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            }
        },
        // nunukan: Meningkat, malinau: Menurun, tana-tidung: Stabil, tarakan: Stabil, bulungan: Meningkat
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
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            tarakan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            bulungan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
            }
        },
        kebutuhan: {
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
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            tarakan: {
                fill: 'fill-blue-400',
                statusColor: 'bg-blue-100 text-blue-600',
                valueColor: 'text-blue-700'
            },
            bulungan: {
                fill: 'fill-green-400',
                statusColor: 'bg-green-100 text-green-600',
                valueColor: 'text-green-600'
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
                status: 'Rentan'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 630,
                status: 'Waspada'
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
                status: 'Waspada'
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
                status: 'Waspada'
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
                status: 'Waspada'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 460,
                status: 'Defisit'
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
                status: 'Waspada'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 295,
                status: 'Aman'
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
                status: 'Aman'
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
                status: 'Defisit'
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
                status: 'Defisit'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 370,
                status: 'Aman'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 360,
                status: 'Rentan'
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
                status: 'Aman'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 295,
                status: 'Rentan'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 285,
                status: 'Waspada'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 280,
                status: 'Defisit'
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
                status: 'Waspada'
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
                status: 'Waspada'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 170,
                status: 'Defisit'
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
                status: 'Rentan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 250,
                status: 'Waspada'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 240,
                status: 'Aman'
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
                status: 'Aman'
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
                status: 'Defisit'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 880,
                status: 'Defisit'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 860,
                status: 'Defisit'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 850,
                status: 'Aman'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 840,
                status: 'Rentan'
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
                status: 'Rentan'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 710,
                status: 'Waspada'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 705,
                status: 'Defisit'
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
                status: 'Waspada'
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
                status: 'Waspada'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 1080,
                status: 'Defisit'
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
                status: 'Rentan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 420,
                status: 'Waspada'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 410,
                status: 'Aman'
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
                status: 'Aman'
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
                value: '1,86%',
                ton: 201,
                status: 'Meningkat'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '0,47%',
                ton: 202,
                status: 'Stabil'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '0,68%',
                ton: 203,
                status: 'Stabil'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '-2,25%',
                ton: 204,
                status: 'Menurun'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '2,92%',
                ton: 205,
                status: 'Meningkat'
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
                value: '0,28%',
                ton: 301,
                status: 'Stabil'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '2,14%',
                ton: 302,
                status: 'Meningkat'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-0,79%',
                ton: 303,
                status: 'Menurun'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '1,20%',
                ton: 304,
                status: 'Stabil'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '1,90%',
                ton: 305,
                status: 'Meningkat'
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
                value: '0,50%',
                ton: 260,
                status: 'Stabil'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '2,77%',
                ton: 255,
                status: 'Meningkat'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-1,81%',
                ton: 248,
                status: 'Menurun'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '0,56%',
                ton: 252,
                status: 'Stabil'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '2,83%',
                ton: 245,
                status: 'Meningkat'
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
                value: '0,63%',
                ton: 310,
                status: 'Stabil'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '2,59%',
                ton: 315,
                status: 'Meningkat'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '0,44%',
                ton: 312,
                status: 'Stabil'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '-2,05%',
                ton: 318,
                status: 'Menurun'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '0,20%',
                ton: 319,
                status: 'Meningkat'
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
                value: '0,53%',
                ton: 260,
                status: 'Stabil'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '-1,77%',
                ton: 255,
                status: 'Menurun'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '1,08%',
                ton: 248,
                status: 'Meningkat'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '1,13%',
                ton: 252,
                status: 'Meningkat'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-1,86%',
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
                value: '-1,40%',
                ton: 155,
                status: 'Menurun'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '0,83%',
                ton: 150,
                status: 'Stabil'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '1,42%',
                ton: 145,
                status: 'Meningkat'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '2,66%',
                ton: 160,
                status: 'Meningkat'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '0,59%',
                ton: 148,
                status: 'Stabil'
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
                value: '2,33%',
                ton: 210,
                status: 'Meningkat'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '-0,68%',
                ton: 208,
                status: 'Menurun'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '0,38%',
                ton: 205,
                status: 'Stabil'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '1,49%',
                ton: 212,
                status: 'Stabil'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '1,88%',
                ton: 204,
                status: 'Meningkat'
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
                value: '-1,92%',
                ton: 720,
                status: 'Menurun'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '0,76%',
                ton: 710,
                status: 'Stabil'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '0,58%',
                ton: 700,
                status: 'Stabil'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '1,93%',
                ton: 730,
                status: 'Meningkat'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '1,31%',
                ton: 705,
                status: 'Meningkat'
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
                value: '-1,55%',
                ton: 650,
                status: 'Menurun'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '0,15%',
                ton: 640,
                status: 'Stabil'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '2,33%',
                ton: 630,
                status: 'Meningkat'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '2,72%',
                ton: 655,
                status: 'Meningkat'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '0,46%',
                ton: 635,
                status: 'Stabil'
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
                value: '1,34%',
                ton: 980,
                status: 'Meningkat'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '0,93%',
                ton: 970,
                status: 'Stabil'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '1,46%',
                ton: 960,
                status: 'Stabil'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '1,40%',
                ton: 990,
                status: 'Meningkat'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-0,98%',
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
                value: '2,16%',
                ton: 360,
                status: 'Meningkat'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '-1,66%',
                ton: 355,
                status: 'Menurun'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '0,66%',
                ton: 350,
                status: 'Stabil'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '0,32%',
                ton: 365,
                status: 'Stabil'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '2,87%',
                ton: 352,
                status: 'Meningkat'
            }
        ]
    }
];
