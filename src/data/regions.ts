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
        '3m': {
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
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                tarakan: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                },
                bulungan: {
                    // Waspada
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
        '6m': {
            neraca: {
                nunukan: {
                    // Waspada
                    fill: 'fill-yellow-400',
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
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                bulungan: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                }
            },

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
                    valueColor: 'text-green-700'
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
                    valueColor: 'text-green-700'
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
        year: {
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
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                tarakan: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                },
                bulungan: {
                    // Waspada
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
                    valueColor: 'text-green-700'
                },
                'tana-tidung': {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
                },
                tarakan: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                bulungan: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
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
                    valueColor: 'text-green-700'
                },
                'tana-tidung': {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
                },
                tarakan: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                bulungan: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                }
            }
        }
    },
    // ============================
    // BERAS
    // ============================

    // ============================
    // CABAI MERAH
    // ============================
    'cabai-merah': {
        '3m': {
            neraca: {
                nunukan: {
                    // Waspada
                    fill: 'fill-yellow-400',
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
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                bulungan: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                }
            },
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
        '6m': {
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
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                tarakan: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                },
                bulungan: {
                    // Waspada
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                }
            },
            ketersediaan: {
                nunukan: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
                malinau: {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-700'
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
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
                malinau: {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-700'
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
        year: {
            neraca: {
                nunukan: {
                    // Waspada
                    fill: 'fill-yellow-400',
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
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                bulungan: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                }
            },
            ketersediaan: {
                nunukan: {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-700'
                },
                malinau: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
                'tana-tidung': {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                tarakan: {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-700'
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
                    valueColor: 'text-green-700'
                },
                malinau: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
                'tana-tidung': {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                tarakan: {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-700'
                },
                bulungan: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                }
            }
        }
    },
    // ============================
    // CABAI MERAH
    // ============================

    // ============================
    // CABAI RAWIT
    // ============================
    'cabai-rawit': {
        '3m': {
            neraca: {
                nunukan: {
                    // Rentan
                    fill: 'fill-orange-500',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
                malinau: {
                    // Waspada
                    fill: 'fill-yellow-400',
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
        '6m': {
            neraca: {
                nunukan: {
                    // Waspada
                    fill: 'fill-yellow-400',
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
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                bulungan: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                }
            },

            ketersediaan: {
                nunukan: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
                },
                malinau: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                'tana-tidung': {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                },
                tarakan: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
                },
                bulungan: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                }
            },
            kebutuhan: {
                nunukan: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
                },
                malinau: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                'tana-tidung': {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                },
                tarakan: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
                },
                bulungan: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                }
            }
        },
        year: {
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
                    fill: 'fill-blue-500',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                tarakan: {
                    fill: 'fill-green-500',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                },
                bulungan: {
                    // Waspada
                    fill: 'fill-orange-500',
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
        }
    },
    // ============================
    // CABAI RAWIT
    // ============================

    // ============================
    // BAWANG MERAH
    // ============================
    'bawang-merah': {
        '3m': {
            neraca: {
                nunukan: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                },
                malinau: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                },
                'tana-tidung': {
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
        '6m': {
            neraca: {
                nunukan: {
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                malinau: {
                    fill: 'fill-orange-500',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
                'tana-tidung': {
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
            ketersediaan: {
                nunukan: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
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
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
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
        year: {
            neraca: {
                nunukan: {
                    fill: 'fill-green-500',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                },
                malinau: {
                    fill: 'fill-green-500',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                },
                'tana-tidung': {
                    fill: 'fill-yellow-300',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                tarakan: {
                    // Aman
                    fill: 'fill-yellow-300',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                bulungan: {
                    // Rentan
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                }
            },
            ketersediaan: {
                nunukan: {
                    fill: 'fill-green-500',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                },
                malinau: {
                    fill: 'fill-orange-500',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
                'tana-tidung': {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                tarakan: {
                    // Aman
                    fill: 'fill-green-300',
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
            kebutuhan: {
                nunukan: {
                    fill: 'fill-green-500',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                },
                malinau: {
                    fill: 'fill-orange-500',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
                'tana-tidung': {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                tarakan: {
                    // Aman
                    fill: 'fill-green-300',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                },
                bulungan: {
                    // Rentan
                    fill: 'fill-orange-500',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                }
            }
        }
    },
    // ============================
    // BAWANG MERAH
    // ============================

    // ============================
    // BAWANG PUTIH
    // ============================
    'bawang-putih': {
        '3m': {
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
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                tarakan: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                },
                bulungan: {
                    // Waspada
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                }
            },

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
        '6m': {
            neraca: {
                nunukan: {
                    // Aman
                    fill: 'fill-yellow-300',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                malinau: {
                    // Rentan
                    fill: 'fill-green-500',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                },
                'tana-tidung': {
                    // Waspada
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
                tarakan: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                },
                bulungan: {
                    // Waspada
                    fill: 'fill-green-500',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                }
            },

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
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
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
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
                bulungan: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                }
            }
        },
        year: {
            neraca: {
                nunukan: {
                    // Aman
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                },
                malinau: {
                    // Rentan
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
                'tana-tidung': {
                    // Waspada
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                tarakan: {
                    fill: 'fill-green-500',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                },
                bulungan: {
                    // Waspada
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                }
            },

            ketersediaan: {
                nunukan: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
                },
                malinau: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                'tana-tidung': {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
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
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
                },
                malinau: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                'tana-tidung': {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
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
        }
    },

    // ============================
    // DAGING SAPI
    // ============================
    'daging-sapi': {
        '3m': {
            neraca: {
                nunukan: {
                    // Waspada
                    fill: 'fill-yellow-400',
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
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                bulungan: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                }
            },
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
        '6m': {
            neraca: {
                nunukan: {
                    // Waspada
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                },
                malinau: {
                    // Aman
                    fill: 'fill-orange-500',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
                'tana-tidung': {
                    // Rentan
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                tarakan: {
                    // Waspada
                    fill: 'fill-green-500',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
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
                    valueColor: 'text-orange-700'
                },
                'tana-tidung': {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                },
                tarakan: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                bulungan: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
                }
            },
            kebutuhan: {
                nunukan: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                malinau: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
                },
                'tana-tidung': {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                },
                tarakan: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                bulungan: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
                }
            }
        },
        year: {
            neraca: {
                nunukan: {
                    // Waspada
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                malinau: {
                    // Aman
                    fill: 'fill-orange-500',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
                'tana-tidung': {
                    // Rentan
                    fill: 'fill-green-500',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                },
                tarakan: {
                    // Waspada
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                },
                bulungan: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
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
                    valueColor: 'text-orange-700'
                },
                'tana-tidung': {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                tarakan: {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                },
                bulungan: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
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
                    valueColor: 'text-orange-700'
                },
                'tana-tidung': {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                tarakan: {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                },
                bulungan: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
                }
            }
        }
    },

    // ============================
    // TELUR AYAM
    // ============================
    'telur-ayam': {
        '3m': {
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
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                tarakan: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                },
                bulungan: {
                    // Waspada
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
        '6m': {
            neraca: {
                nunukan: {
                    // Waspada
                    fill: 'fill-yellow-400',
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
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                bulungan: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                }
            },

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
                    valueColor: 'text-green-700'
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
                    valueColor: 'text-green-700'
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
        year: {
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
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                tarakan: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                },
                bulungan: {
                    // Waspada
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
                    valueColor: 'text-green-700'
                },
                'tana-tidung': {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
                },
                tarakan: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                bulungan: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
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
                    valueColor: 'text-green-700'
                },
                'tana-tidung': {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
                },
                tarakan: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                bulungan: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                }
            }
        }
    },
    // ============================
    // GULA PASIR
    // ============================
    'gula-pasir': {
        '3m': {
            neraca: {
                nunukan: {
                    // Waspada
                    fill: 'fill-yellow-400',
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
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                bulungan: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                }
            },
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
        '6m': {
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
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                tarakan: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                },
                bulungan: {
                    // Waspada
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                }
            },
            ketersediaan: {
                nunukan: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
                malinau: {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-700'
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
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
                malinau: {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-700'
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
        year: {
            neraca: {
                nunukan: {
                    // Waspada
                    fill: 'fill-yellow-400',
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
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                bulungan: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                }
            },
            ketersediaan: {
                nunukan: {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-700'
                },
                malinau: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
                'tana-tidung': {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                tarakan: {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-700'
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
                    valueColor: 'text-green-700'
                },
                malinau: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
                'tana-tidung': {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                tarakan: {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-700'
                },
                bulungan: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                }
            }
        }
    },

    // ============================
    // MINYAK GORENG
    // ============================
    'minyak-goreng': {
        '3m': {
            neraca: {
                nunukan: {
                    // Rentan
                    fill: 'fill-orange-500',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
                malinau: {
                    // Waspada
                    fill: 'fill-yellow-400',
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
        '6m': {
            neraca: {
                nunukan: {
                    // Waspada
                    fill: 'fill-yellow-400',
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
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                bulungan: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                }
            },

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
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
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
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
                bulungan: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                }
            }
        },
        year: {
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
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                tarakan: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                },
                bulungan: {
                    // Waspada
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
        }
    },

    // ============================
    // JAGUNG
    // ============================
    jagung: {
        '3m': {
            neraca: {
                nunukan: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                },
                malinau: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                },
                'tana-tidung': {
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
        '6m': {
            neraca: {
                nunukan: {
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                malinau: {
                    fill: 'fill-orange-500',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
                'tana-tidung': {
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
        year: {
            neraca: {
                nunukan: {
                    fill: 'fill-green-500',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                },
                malinau: {
                    fill: 'fill-green-500',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                },
                'tana-tidung': {
                    fill: 'fill-yellow-300',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                tarakan: {
                    // Aman
                    fill: 'fill-yellow-300',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                bulungan: {
                    // Rentan
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                }
            },
            ketersediaan: {
                nunukan: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
                },
                malinau: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                'tana-tidung': {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
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
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
                },
                malinau: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                'tana-tidung': {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
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
        }
    },
    // ====

    // ============================
    // KEDELAI
    // ============================
    kedelai: {
        '3m': {
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
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                tarakan: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                },
                bulungan: {
                    // Waspada
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                }
            },

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
        '6m': {
            neraca: {
                nunukan: {
                    // Aman
                    fill: 'fill-yellow-300',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                malinau: {
                    // Rentan
                    fill: 'fill-green-500',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                },
                'tana-tidung': {
                    // Waspada
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
                tarakan: {
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                },
                bulungan: {
                    // Waspada
                    fill: 'fill-green-500',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
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
                    valueColor: 'text-orange-700'
                },
                'tana-tidung': {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                },
                tarakan: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                bulungan: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
                }
            },
            kebutuhan: {
                nunukan: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                malinau: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
                },
                'tana-tidung': {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                },
                tarakan: {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                bulungan: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
                }
            }
        },
        year: {
            neraca: {
                nunukan: {
                    // Aman
                    fill: 'fill-red-500',
                    statusColor: 'bg-red-100 text-red-600',
                    valueColor: 'text-red-600'
                },
                malinau: {
                    // Rentan
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-600'
                },
                'tana-tidung': {
                    // Waspada
                    fill: 'fill-yellow-400',
                    statusColor: 'bg-yellow-100 text-yellow-600',
                    valueColor: 'text-yellow-600'
                },
                tarakan: {
                    fill: 'fill-green-500',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                },
                bulungan: {
                    // Waspada
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
                    valueColor: 'text-orange-700'
                },
                'tana-tidung': {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                tarakan: {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                },
                bulungan: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
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
                    valueColor: 'text-orange-700'
                },
                'tana-tidung': {
                    fill: 'fill-blue-400',
                    statusColor: 'bg-blue-100 text-blue-600',
                    valueColor: 'text-blue-600'
                },
                tarakan: {
                    fill: 'fill-green-400',
                    statusColor: 'bg-green-100 text-green-600',
                    valueColor: 'text-green-600'
                },
                bulungan: {
                    fill: 'fill-orange-400',
                    statusColor: 'bg-orange-100 text-orange-600',
                    valueColor: 'text-orange-700'
                }
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
        monthId: '3m',
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
    {
        commodityId: 'beras',
        infoTypeId: 'neraca',
        monthId: '6m',
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
    {
        commodityId: 'beras',
        infoTypeId: 'neraca',
        monthId: 'year',
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
    // BERAS - NERACA
    // =======================

    // =======================
    // CABAI MERAH - NERACA
    // =======================
    {
        commodityId: 'cabai-merah',
        infoTypeId: 'neraca',
        monthId: '3m',
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
    {
        commodityId: 'cabai-merah',
        infoTypeId: 'neraca',
        monthId: '6m',
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
    {
        commodityId: 'cabai-merah',
        infoTypeId: 'neraca',
        monthId: 'year',
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
    // CABAI MERAH - NERACA
    // =======================

    // =======================
    // CABAI RAWIT - NERACA
    // =======================
    {
        commodityId: 'cabai-rawit',
        infoTypeId: 'neraca',
        monthId: '3m',
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
    {
        commodityId: 'cabai-rawit',
        infoTypeId: 'neraca',
        monthId: '6m',
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
    {
        commodityId: 'cabai-rawit',
        infoTypeId: 'neraca',
        monthId: 'year',
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
    // CABAI RAWIT - NERACA
    // =======================

    // =======================
    // BAWANG MERAH - NERACA
    // =======================
    {
        commodityId: 'bawang-merah',
        infoTypeId: 'neraca',
        monthId: '3m',
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
    {
        commodityId: 'bawang-merah',
        infoTypeId: 'neraca',
        monthId: '6m',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                ton: 200,
                status: 'Waspada'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 120,
                status: 'Rentan'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 350,
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
    {
        commodityId: 'bawang-merah',
        infoTypeId: 'neraca',
        monthId: 'year',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                ton: 200,
                status: 'Aman'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 120,
                status: 'Aman'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 350,
                status: 'Waspada'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 370,
                status: 'Waspada'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 360,
                status: 'Defisit'
            }
        ]
    },

    // =======================
    // BAWANG PUTIH - NERACA
    // =======================
    {
        commodityId: 'bawang-putih',
        infoTypeId: 'neraca',
        monthId: '3m',
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
    {
        commodityId: 'bawang-putih',
        infoTypeId: 'neraca',
        monthId: '6m',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                ton: 305,
                status: 'Waspada'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 295,
                status: 'Aman'
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
                status: 'Defisit'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 270,
                status: 'Aman'
            }
        ]
    },
    {
        commodityId: 'bawang-putih',
        infoTypeId: 'neraca',
        monthId: 'year',
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
                status: 'Aman'
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
        monthId: '3m',
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
    {
        commodityId: 'daging-sapi',
        infoTypeId: 'neraca',
        monthId: '6m',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                ton: 190,
                status: 'Defisit'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 175,
                status: 'Rentan'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 165,
                status: 'Waspada'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 180,
                status: 'Aman'
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
    {
        commodityId: 'daging-sapi',
        infoTypeId: 'neraca',
        monthId: 'year',
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
                status: 'Rentan'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 165,
                status: 'Aman'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 180,
                status: 'Defisit'
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
        monthId: '3m',
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
    {
        commodityId: 'telur-ayam',
        infoTypeId: 'neraca',
        monthId: '6m',
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
    {
        commodityId: 'telur-ayam',
        infoTypeId: 'neraca',
        monthId: 'year',
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
    // TELUR AYAM - NERACA
    // =======================

    // =======================
    // GULA PASIR - NERACA
    // =======================
    {
        commodityId: 'gula-pasir',
        infoTypeId: 'neraca',
        monthId: '3m',
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
    {
        commodityId: 'gula-pasir',
        infoTypeId: 'neraca',
        monthId: '6m',
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
    {
        commodityId: 'gula-pasir',
        infoTypeId: 'neraca',
        monthId: 'year',
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
    // GULA PASIR - NERACA
    // =======================

    // =======================
    // MINYAK GORENG - NERACA
    // =======================
    {
        commodityId: 'minyak-goreng',
        infoTypeId: 'neraca',
        monthId: '3m',
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
    {
        commodityId: 'minyak-goreng',
        infoTypeId: 'neraca',
        monthId: '6m',
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
    {
        commodityId: 'minyak-goreng',
        infoTypeId: 'neraca',
        monthId: 'year',
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
    // MINYAK GORENG - NERACA
    // =======================

    // =======================
    // JAGUNG - NERACA
    // =======================
    {
        commodityId: 'jagung',
        infoTypeId: 'neraca',
        monthId: '3m',
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
    {
        commodityId: 'jagung',
        infoTypeId: 'neraca',
        monthId: '6m',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                ton: 200,
                status: 'Waspada'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 120,
                status: 'Rentan'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 350,
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
    {
        commodityId: 'jagung',
        infoTypeId: 'neraca',
        monthId: 'year',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                ton: 200,
                status: 'Aman'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 120,
                status: 'Aman'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 350,
                status: 'Waspada'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 370,
                status: 'Waspada'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 360,
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
        monthId: '3m',
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
    {
        commodityId: 'kedelai',
        infoTypeId: 'neraca',
        monthId: '6m',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                ton: 305,
                status: 'Waspada'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 295,
                status: 'Aman'
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
                status: 'Defisit'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 270,
                status: 'Aman'
            }
        ]
    },
    {
        commodityId: 'kedelai',
        infoTypeId: 'neraca',
        monthId: 'year',
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
                status: 'Aman'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 270,
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
        monthId: '3m',
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
    {
        commodityId: 'beras',
        infoTypeId: 'ketersediaan',
        monthId: '6m',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '1,86%',
                ton: 201,
                status: 'Menurun'
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
                status: 'Meningkat'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '-2,25%',
                ton: 204,
                status: 'Meningkat'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '2,92%',
                ton: 205,
                status: 'Menurun'
            }
        ]
    },
    {
        commodityId: 'beras',
        infoTypeId: 'ketersediaan',
        monthId: 'year',
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
                status: 'Meningkat'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '0,68%',
                ton: 203,
                status: 'Menurun'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '-2,25%',
                ton: 204,
                status: 'Stabil'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '2,92%',
                ton: 205,
                status: 'Stabil'
            }
        ]
    },

    // =======================
    // CABAI MERAH - KETERSEDIAAN
    // =======================
    {
        commodityId: 'cabai-merah',
        infoTypeId: 'ketersediaan',
        monthId: '3m',
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
    {
        commodityId: 'cabai-merah',
        infoTypeId: 'ketersediaan',
        monthId: '6m',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '-0,62%',
                ton: 276,
                status: 'Menurun'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '1,44%',
                ton: 293,
                status: 'Meningkat'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tidung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '0,55%',
                ton: 310,
                status: 'Stabil'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '-1,22%',
                ton: 257,
                status: 'Menurun'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '2,68%',
                ton: 341,
                status: 'Meningkat'
            }
        ]
    },
    {
        commodityId: 'cabai-merah',
        infoTypeId: 'ketersediaan',
        monthId: 'year',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '2,03%',
                ton: 367,
                status: 'Meningkat'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '-0,28%',
                ton: 259,
                status: 'Menurun'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tidung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '0,88%',
                ton: 301,
                status: 'Stabil'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '1,47%',
                ton: 329,
                status: 'Meningkat'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-1,05%',
                ton: 284,
                status: 'Menurun'
            }
        ]
    },

    // =======================
    // CABAI RAWIT - KETERSEDIAAN
    // =======================
    {
        commodityId: 'cabai-rawit',
        infoTypeId: 'ketersediaan',
        monthId: '3m',
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
    {
        commodityId: 'cabai-rawit',
        infoTypeId: 'ketersediaan',
        monthId: '6m',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '1,20%',
                ton: 268,
                status: 'Menurun'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '-0,45%',
                ton: 259,
                status: 'Stabil'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '3,10%',
                ton: 246,
                status: 'Meningkat'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '0,05%',
                ton: 273,
                status: 'Menurun'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-2,25%',
                ton: 251,
                status: 'Stabil'
            }
        ]
    },
    {
        commodityId: 'cabai-rawit',
        infoTypeId: 'ketersediaan',
        monthId: 'year',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '0,90%',
                ton: 279,
                status: 'Meningkat'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '2,10%',
                ton: 263,
                status: 'Menurun'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-0,30%',
                ton: 254,
                status: 'Stabil'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '1,75%',
                ton: 269,
                status: 'Meningkat'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-1,20%',
                ton: 257,
                status: 'Menurun'
            }
        ]
    },

    // =======================
    // BAWANG MERAH - KETERSEDIAAN
    // =======================
    {
        commodityId: 'bawang-merah',
        infoTypeId: 'ketersediaan',
        monthId: '3m',
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
    {
        commodityId: 'bawang-merah',
        infoTypeId: 'ketersediaan',
        monthId: '6m',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '-0,75%',
                ton: 298,
                status: 'Menurun'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '1,88%',
                ton: 327,
                status: 'Meningkat'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '0,12%',
                ton: 305,
                status: 'Stabil'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '2,40%',
                ton: 331,
                status: 'Meningkat'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-1,10%',
                ton: 291,
                status: 'Menurun'
            }
        ]
    },
    {
        commodityId: 'bawang-merah',
        infoTypeId: 'ketersediaan',
        monthId: 'year',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '1,52%',
                ton: 340,
                status: 'Meningkat'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '-0,30%',
                ton: 299,
                status: 'Menurun'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '0,78%',
                ton: 321,
                status: 'Stabil'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '2,95%',
                ton: 345,
                status: 'Meningkat'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-1,45%',
                ton: 310,
                status: 'Menurun'
            }
        ]
    },

    // =======================
    // BAWANG PUTIH - KETERSEDIAAN
    // =======================
    {
        commodityId: 'bawang-putih',
        infoTypeId: 'ketersediaan',
        monthId: '3m',
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
    {
        commodityId: 'bawang-putih',
        infoTypeId: 'ketersediaan',
        monthId: '6m',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '1,42%',
                ton: 272,
                status: 'Stabil'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '0,25%',
                ton: 263,
                status: 'Menurun'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-0,98%',
                ton: 259,
                status: 'Meningkat'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '2,30%',
                ton: 281,
                status: 'Menurun'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-0,60%',
                ton: 266,
                status: 'Stabil'
            }
        ]
    },
    {
        commodityId: 'bawang-putih',
        infoTypeId: 'ketersediaan',
        monthId: 'year',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '0,95%',
                ton: 290,
                status: 'Menurun'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '1,70%',
                ton: 279,
                status: 'Stabil'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-0,40%',
                ton: 287,
                status: 'Meningkat'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '2,88%',
                ton: 295,
                status: 'Menurun'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-1,15%',
                ton: 273,
                status: 'Meningkat'
            }
        ]
    },

    // =======================
    // DAGING SAPI - KETERSEDIAAN
    // =======================
    {
        commodityId: 'daging-sapi',
        infoTypeId: 'ketersediaan',
        monthId: '3m',
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
    {
        commodityId: 'daging-sapi',
        infoTypeId: 'ketersediaan',
        monthId: '6m',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '0,35%',
                ton: 162,
                status: 'Stabil'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '-0,92%',
                ton: 158,
                status: 'Menurun'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '1,75%',
                ton: 153,
                status: 'Meningkat'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '2,05%',
                ton: 167,
                status: 'Stabil'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-1,20%',
                ton: 160,
                status: 'Menurun'
            }
        ]
    },
    {
        commodityId: 'daging-sapi',
        infoTypeId: 'ketersediaan',
        monthId: 'year',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '1,10%',
                ton: 175,
                status: 'Meningkat'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '-0,55%',
                ton: 168,
                status: 'Menurun'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '0,22%',
                ton: 170,
                status: 'Stabil'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '2,88%',
                ton: 178,
                status: 'Meningkat'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-1,30%',
                ton: 165,
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
        monthId: '3m',
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
    {
        commodityId: 'telur-ayam',
        infoTypeId: 'ketersediaan',
        monthId: '6m',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '1,86%',
                ton: 201,
                status: 'Menurun'
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
                status: 'Meningkat'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '-2,25%',
                ton: 204,
                status: 'Meningkat'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '2,92%',
                ton: 205,
                status: 'Menurun'
            }
        ]
    },
    {
        commodityId: 'telur-ayam',
        infoTypeId: 'ketersediaan',
        monthId: 'year',
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
                status: 'Meningkat'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '0,68%',
                ton: 203,
                status: 'Menurun'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '-2,25%',
                ton: 204,
                status: 'Stabil'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '2,92%',
                ton: 205,
                status: 'Stabil'
            }
        ]
    },

    // =======================
    // GULA PASIR - KETERSEDIAAN
    // =======================
    {
        commodityId: 'gula-pasir',
        infoTypeId: 'ketersediaan',
        monthId: '3m',
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
    {
        commodityId: 'gula-pasir',
        infoTypeId: 'ketersediaan',
        monthId: '6m',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '-0,62%',
                ton: 276,
                status: 'Menurun'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '1,44%',
                ton: 293,
                status: 'Meningkat'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tidung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '0,55%',
                ton: 310,
                status: 'Stabil'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '-1,22%',
                ton: 257,
                status: 'Menurun'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '2,68%',
                ton: 341,
                status: 'Meningkat'
            }
        ]
    },
    {
        commodityId: 'gula-pasir',
        infoTypeId: 'ketersediaan',
        monthId: 'year',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '2,03%',
                ton: 367,
                status: 'Meningkat'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '-0,28%',
                ton: 259,
                status: 'Menurun'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tidung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '0,88%',
                ton: 301,
                status: 'Stabil'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '1,47%',
                ton: 329,
                status: 'Meningkat'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-1,05%',
                ton: 284,
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
        monthId: '3m',
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
    {
        commodityId: 'minyak-goreng',
        infoTypeId: 'ketersediaan',
        monthId: '6m',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '1,20%',
                ton: 268,
                status: 'Menurun'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '-0,45%',
                ton: 259,
                status: 'Stabil'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '3,10%',
                ton: 246,
                status: 'Meningkat'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '0,05%',
                ton: 273,
                status: 'Menurun'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-2,25%',
                ton: 251,
                status: 'Stabil'
            }
        ]
    },
    {
        commodityId: 'minyak-goreng',
        infoTypeId: 'ketersediaan',
        monthId: 'year',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '0,90%',
                ton: 279,
                status: 'Meningkat'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '2,10%',
                ton: 263,
                status: 'Menurun'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-0,30%',
                ton: 254,
                status: 'Stabil'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '1,75%',
                ton: 269,
                status: 'Meningkat'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-1,20%',
                ton: 257,
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
        monthId: '3m',
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
    {
        commodityId: 'jagung',
        infoTypeId: 'ketersediaan',
        monthId: '6m',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '1,42%',
                ton: 272,
                status: 'Stabil'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '0,25%',
                ton: 263,
                status: 'Menurun'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-0,98%',
                ton: 259,
                status: 'Meningkat'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '2,30%',
                ton: 281,
                status: 'Menurun'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-0,60%',
                ton: 266,
                status: 'Stabil'
            }
        ]
    },
    {
        commodityId: 'jagung',
        infoTypeId: 'ketersediaan',
        monthId: 'year',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '0,95%',
                ton: 290,
                status: 'Menurun'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '1,70%',
                ton: 279,
                status: 'Stabil'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-0,40%',
                ton: 287,
                status: 'Meningkat'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '2,88%',
                ton: 295,
                status: 'Menurun'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-1,15%',
                ton: 273,
                status: 'Meningkat'
            }
        ]
    },

    // =======================
    // KEDELAI - KETERSEDIAAN
    // =======================
    {
        commodityId: 'kedelai',
        infoTypeId: 'ketersediaan',
        monthId: '3m',
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
    },
    {
        commodityId: 'kedelai',
        infoTypeId: 'ketersediaan',
        monthId: '6m',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '0,35%',
                ton: 162,
                status: 'Stabil'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '-0,92%',
                ton: 158,
                status: 'Menurun'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '1,75%',
                ton: 153,
                status: 'Meningkat'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '2,05%',
                ton: 167,
                status: 'Stabil'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-1,20%',
                ton: 160,
                status: 'Menurun'
            }
        ]
    },
    {
        commodityId: 'kedelai',
        infoTypeId: 'ketersediaan',
        monthId: 'year',
        values: [
            {
                id: 'nunukan',
                name: 'Kabupaten Nunukan',
                icon: '/icons/ic-kab-nunukan.png',
                value: '1,10%',
                ton: 175,
                status: 'Meningkat'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '-0,55%',
                ton: 168,
                status: 'Menurun'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '0,22%',
                ton: 170,
                status: 'Stabil'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '2,88%',
                ton: 178,
                status: 'Meningkat'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-1,30%',
                ton: 165,
                status: 'Menurun'
            }
        ]
    }
];
