import { RegionId } from '@/app/(neraca)/helper/region-layout';

export type RegionValue = {
    id: RegionId;
    name: string;
    icon: string;
    ton: number;
    status: string;
    statusColor: string;
    value?: string;
    valueColor?: string;
    anchor: string;
};

export type RegionGroup = {
    commodityId: string;
    infoTypeId: 'neraca' | 'ketersediaan';
    monthId: string;
    values: RegionValue[];
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
                status: 'Aman',
                statusColor: 'bg-emerald-100 text-emerald-500',
                anchor: '#anc-nunukan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 650,
                status: 'Aman',
                statusColor: 'bg-emerald-100 text-emerald-500',
                anchor: '#anc-malinau-1'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 630,
                status: 'Rentan',
                statusColor: 'bg-orange-100 text-orange-500',
                anchor: '#anc-tana-tidung'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 610,
                status: 'Rentan',
                statusColor: 'bg-orange-100 text-orange-500',
                anchor: '#anc-tarakan-1'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 600,
                status: 'Waspada',
                statusColor: 'bg-yellow-100 text-yellow-500',
                anchor: '#anc-bulungan'
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
                status: 'Aman',
                statusColor: 'bg-emerald-100 text-emerald-500',
                anchor: '#anc-nunukan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 495,
                status: 'Aman',
                statusColor: 'bg-emerald-100 text-emerald-500',
                anchor: '#anc-malinau-1'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 480,
                status: 'Rentan',
                statusColor: 'bg-orange-100 text-orange-500',
                anchor: '#anc-tana-tidung'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 470,
                status: 'Rentan',
                statusColor: 'bg-orange-100 text-orange-500',
                anchor: '#anc-tarakan-1'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 460,
                status: 'Waspada',
                statusColor: 'bg-yellow-100 text-yellow-500',
                anchor: '#anc-bulungan'
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
                status: 'Aman',
                statusColor: 'bg-emerald-100 text-emerald-500',
                anchor: '#anc-nunukan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 310,
                status: 'Aman',
                statusColor: 'bg-emerald-100 text-emerald-500',
                anchor: '#anc-malinau-1'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 295,
                status: 'Rentan',
                statusColor: 'bg-orange-100 text-orange-500',
                anchor: '#anc-tana-tidung'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 290,
                status: 'Rentan',
                statusColor: 'bg-orange-100 text-orange-500',
                anchor: '#anc-tarakan-1'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 280,
                status: 'Waspada',
                statusColor: 'bg-yellow-100 text-yellow-500',
                anchor: '#anc-bulungan'
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
                status: 'Aman',
                statusColor: 'bg-emerald-100 text-emerald-500',
                anchor: '#anc-nunukan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 395,
                status: 'Aman',
                statusColor: 'bg-emerald-100 text-emerald-500',
                anchor: '#anc-malinau-1'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 380,
                status: 'Rentan',
                statusColor: 'bg-orange-100 text-orange-500',
                anchor: '#anc-tana-tidung'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 370,
                status: 'Rentan',
                statusColor: 'bg-orange-100 text-orange-500',
                anchor: '#anc-tarakan-1'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 360,
                status: 'Waspada',
                statusColor: 'bg-yellow-100 text-yellow-500',
                anchor: '#anc-bulungan'
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
                status: 'Aman',
                statusColor: 'bg-emerald-100 text-emerald-500',
                anchor: '#anc-nunukan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 295,
                status: 'Aman',
                statusColor: 'bg-emerald-100 text-emerald-500',
                anchor: '#anc-malinau-1'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 285,
                status: 'Rentan',
                statusColor: 'bg-orange-100 text-orange-500',
                anchor: '#anc-tana-tidung'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 280,
                status: 'Rentan',
                statusColor: 'bg-orange-100 text-orange-500',
                anchor: '#anc-tarakan-1'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 270,
                status: 'Waspada',
                statusColor: 'bg-yellow-100 text-yellow-500',
                anchor: '#anc-bulungan'
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
                status: 'Aman',
                statusColor: 'bg-emerald-100 text-emerald-500',
                anchor: '#anc-nunukan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 175,
                status: 'Aman',
                statusColor: 'bg-emerald-100 text-emerald-500',
                anchor: '#anc-malinau-1'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 165,
                status: 'Rentan',
                statusColor: 'bg-orange-100 text-orange-500',
                anchor: '#anc-tana-tidung'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 180,
                status: 'Rentan',
                statusColor: 'bg-orange-100 text-orange-500',
                anchor: '#anc-tarakan-1'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 170,
                status: 'Waspada',
                statusColor: 'bg-yellow-100 text-yellow-500',
                anchor: '#anc-bulungan'
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
                status: 'Aman',
                statusColor: 'bg-emerald-100 text-emerald-500',
                anchor: '#anc-nunukan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 250,
                status: 'Aman',
                statusColor: 'bg-emerald-100 text-emerald-500',
                anchor: '#anc-malinau-1'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 240,
                status: 'Rentan',
                statusColor: 'bg-orange-100 text-orange-500',
                anchor: '#anc-tana-tidung'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 245,
                status: 'Rentan',
                statusColor: 'bg-orange-100 text-orange-500',
                anchor: '#anc-tarakan-1'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 235,
                status: 'Waspada',
                statusColor: 'bg-yellow-100 text-yellow-500',
                anchor: '#anc-bulungan'
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
                status: 'Aman',
                statusColor: 'bg-emerald-100 text-emerald-500',
                anchor: '#anc-nunukan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 880,
                status: 'Aman',
                statusColor: 'bg-emerald-100 text-emerald-500',
                anchor: '#anc-malinau-1'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 860,
                status: 'Rentan',
                statusColor: 'bg-orange-100 text-orange-500',
                anchor: '#anc-tana-tidung'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 850,
                status: 'Rentan',
                statusColor: 'bg-orange-100 text-orange-500',
                anchor: '#anc-tarakan-1'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 840,
                status: 'Waspada',
                statusColor: 'bg-yellow-100 text-yellow-500',
                anchor: '#anc-bulungan'
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
                status: 'Aman',
                statusColor: 'bg-emerald-100 text-emerald-500',
                anchor: '#anc-nunukan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 730,
                status: 'Aman',
                statusColor: 'bg-emerald-100 text-emerald-500',
                anchor: '#anc-malinau-1'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 710,
                status: 'Rentan',
                statusColor: 'bg-orange-100 text-orange-500',
                anchor: '#anc-tana-tidung'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 705,
                status: 'Rentan',
                statusColor: 'bg-orange-100 text-orange-500',
                anchor: '#anc-tarakan-1'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 695,
                status: 'Waspada',
                statusColor: 'bg-yellow-100 text-yellow-500',
                anchor: '#anc-bulungan'
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
                status: 'Aman',
                statusColor: 'bg-emerald-100 text-emerald-500',
                anchor: '#anc-nunukan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 1150,
                status: 'Aman',
                statusColor: 'bg-emerald-100 text-emerald-500',
                anchor: '#anc-malinau-1'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 1130,
                status: 'Rentan',
                statusColor: 'bg-orange-100 text-orange-500',
                anchor: '#anc-tana-tidung'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 1100,
                status: 'Rentan',
                statusColor: 'bg-orange-100 text-orange-500',
                anchor: '#anc-tarakan-1'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 1080,
                status: 'Waspada',
                statusColor: 'bg-yellow-100 text-yellow-500',
                anchor: '#anc-bulungan'
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
                status: 'Aman',
                statusColor: 'bg-emerald-100 text-emerald-500',
                anchor: '#anc-nunukan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                ton: 420,
                status: 'Aman',
                statusColor: 'bg-emerald-100 text-emerald-500',
                anchor: '#anc-malinau-1'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                ton: 410,
                status: 'Rentan',
                statusColor: 'bg-orange-100 text-orange-500',
                anchor: '#anc-tana-tidung'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                ton: 405,
                status: 'Rentan',
                statusColor: 'bg-orange-100 text-orange-500',
                anchor: '#anc-tarakan-1'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                ton: 395,
                status: 'Waspada',
                statusColor: 'bg-yellow-100 text-yellow-500',
                anchor: '#anc-bulungan'
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
                status: 'Meningkat',
                statusColor: 'bg-emerald-100 text-emerald-500',
                valueColor: 'text-emerald-500',
                anchor: '#anc-nunukan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '1,64%',
                ton: 202,
                status: 'Meningkat',
                statusColor: 'bg-emerald-100 text-emerald-500',
                valueColor: 'text-emerald-500',
                anchor: '#anc-malinau-1'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-1,50%',
                ton: 203,
                status: 'Menurun',
                statusColor: 'bg-orange-100 text-orange-500',
                valueColor: 'text-orange-500',
                anchor: '#anc-tana-tidung'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '5,09%',
                ton: 204,
                status: 'Stabil',
                statusColor: 'bg-blue-100 text-blue-500',
                valueColor: 'text-blue-500',
                anchor: '#anc-tarakan-1'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-1,50%',
                ton: 205,
                status: 'Menurun',
                statusColor: 'bg-orange-100 text-orange-500',
                valueColor: 'text-orange-500',
                anchor: '#anc-bulungan'
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
                status: 'Meningkat',
                statusColor: 'bg-emerald-100 text-emerald-500',
                valueColor: 'text-emerald-500',
                anchor: '#anc-nunukan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '1,80%',
                ton: 302,
                status: 'Meningkat',
                statusColor: 'bg-emerald-100 text-emerald-500',
                valueColor: 'text-emerald-500',
                anchor: '#anc-malinau-1'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-2,20%',
                ton: 303,
                status: 'Menurun',
                statusColor: 'bg-orange-100 text-orange-500',
                valueColor: 'text-orange-500',
                anchor: '#anc-tana-tidung'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '3,95%',
                ton: 304,
                status: 'Stabil',
                statusColor: 'bg-blue-100 text-blue-500',
                valueColor: 'text-blue-500',
                anchor: '#anc-tarakan-1'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-1,10%',
                ton: 305,
                status: 'Menurun',
                statusColor: 'bg-orange-100 text-orange-500',
                valueColor: 'text-orange-500',
                anchor: '#anc-bulungan'
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
                status: 'Meningkat',
                statusColor: 'bg-emerald-100 text-emerald-500',
                valueColor: 'text-emerald-500',
                anchor: '#anc-nunukan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '0,80%',
                ton: 255,
                status: 'Meningkat',
                statusColor: 'bg-emerald-100 text-emerald-500',
                valueColor: 'text-emerald-500',
                anchor: '#anc-malinau-1'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-1,75%',
                ton: 248,
                status: 'Menurun',
                statusColor: 'bg-orange-100 text-orange-500',
                valueColor: 'text-orange-500',
                anchor: '#anc-tana-tidung'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '2,50%',
                ton: 252,
                status: 'Stabil',
                statusColor: 'bg-blue-100 text-blue-500',
                valueColor: 'text-blue-500',
                anchor: '#anc-tarakan-1'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-0,90%',
                ton: 245,
                status: 'Menurun',
                statusColor: 'bg-orange-100 text-orange-500',
                valueColor: 'text-orange-500',
                anchor: '#anc-bulungan'
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
                status: 'Meningkat',
                statusColor: 'bg-emerald-100 text-emerald-500',
                valueColor: 'text-emerald-500',
                anchor: '#anc-nunukan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '1,10%',
                ton: 315,
                status: 'Meningkat',
                statusColor: 'bg-emerald-100 text-emerald-500',
                valueColor: 'text-emerald-500',
                anchor: '#anc-malinau-1'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-0,85%',
                ton: 312,
                status: 'Menurun',
                statusColor: 'bg-orange-100 text-orange-500',
                valueColor: 'text-orange-500',
                anchor: '#anc-tana-tidung'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '3,20%',
                ton: 318,
                status: 'Stabil',
                statusColor: 'bg-blue-100 text-blue-500',
                valueColor: 'text-blue-500',
                anchor: '#anc-tarakan-1'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-1,05%',
                ton: 319,
                status: 'Menurun',
                statusColor: 'bg-orange-100 text-orange-500',
                valueColor: 'text-orange-500',
                anchor: '#anc-bulungan'
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
                status: 'Meningkat',
                statusColor: 'bg-emerald-100 text-emerald-500',
                valueColor: 'text-emerald-500',
                anchor: '#anc-nunukan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '0,95%',
                ton: 255,
                status: 'Meningkat',
                statusColor: 'bg-emerald-100 text-emerald-500',
                valueColor: 'text-emerald-500',
                anchor: '#anc-malinau-1'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-1,20%',
                ton: 248,
                status: 'Menurun',
                statusColor: 'bg-orange-100 text-orange-500',
                valueColor: 'text-orange-500',
                anchor: '#anc-tana-tidung'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '2,10%',
                ton: 252,
                status: 'Stabil',
                statusColor: 'bg-blue-100 text-blue-500',
                valueColor: 'text-blue-500',
                anchor: '#anc-tarakan-1'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-0,80%',
                ton: 245,
                status: 'Menurun',
                statusColor: 'bg-orange-100 text-orange-500',
                valueColor: 'text-orange-500',
                anchor: '#anc-bulungan'
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
                status: 'Meningkat',
                statusColor: 'bg-emerald-100 text-emerald-500',
                valueColor: 'text-emerald-500',
                anchor: '#anc-nunukan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '0,50%',
                ton: 150,
                status: 'Meningkat',
                statusColor: 'bg-emerald-100 text-emerald-500',
                valueColor: 'text-emerald-500',
                anchor: '#anc-malinau-1'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-1,00%',
                ton: 145,
                status: 'Menurun',
                statusColor: 'bg-orange-100 text-orange-500',
                valueColor: 'text-orange-500',
                anchor: '#anc-tana-tidung'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '1,80%',
                ton: 160,
                status: 'Stabil',
                statusColor: 'bg-blue-100 text-blue-500',
                valueColor: 'text-blue-500',
                anchor: '#anc-tarakan-1'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-0,60%',
                ton: 148,
                status: 'Menurun',
                statusColor: 'bg-orange-100 text-orange-500',
                valueColor: 'text-orange-500',
                anchor: '#anc-bulungan'
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
                status: 'Meningkat',
                statusColor: 'bg-emerald-100 text-emerald-500',
                valueColor: 'text-emerald-500',
                anchor: '#anc-nunukan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '0,95%',
                ton: 208,
                status: 'Meningkat',
                statusColor: 'bg-emerald-100 text-emerald-500',
                valueColor: 'text-emerald-500',
                anchor: '#anc-malinau-1'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-0,70%',
                ton: 205,
                status: 'Menurun',
                statusColor: 'bg-orange-100 text-orange-500',
                valueColor: 'text-orange-500',
                anchor: '#anc-tana-tidung'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '2,00%',
                ton: 212,
                status: 'Stabil',
                statusColor: 'bg-blue-100 text-blue-500',
                valueColor: 'text-blue-500',
                anchor: '#anc-tarakan-1'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-0,90%',
                ton: 204,
                status: 'Menurun',
                statusColor: 'bg-orange-100 text-orange-500',
                valueColor: 'text-orange-500',
                anchor: '#anc-bulungan'
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
                status: 'Meningkat',
                statusColor: 'bg-emerald-100 text-emerald-500',
                valueColor: 'text-emerald-500',
                anchor: '#anc-nunukan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '0,60%',
                ton: 710,
                status: 'Meningkat',
                statusColor: 'bg-emerald-100 text-emerald-500',
                valueColor: 'text-emerald-500',
                anchor: '#anc-malinau-1'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-1,30%',
                ton: 700,
                status: 'Menurun',
                statusColor: 'bg-orange-100 text-orange-500',
                valueColor: 'text-orange-500',
                anchor: '#anc-tana-tidung'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '1,90%',
                ton: 730,
                status: 'Stabil',
                statusColor: 'bg-blue-100 text-blue-500',
                valueColor: 'text-blue-500',
                anchor: '#anc-tarakan-1'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-0,75%',
                ton: 705,
                status: 'Menurun',
                statusColor: 'bg-orange-100 text-orange-500',
                valueColor: 'text-orange-500',
                anchor: '#anc-bulungan'
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
                status: 'Meningkat',
                statusColor: 'bg-emerald-100 text-emerald-500',
                valueColor: 'text-emerald-500',
                anchor: '#anc-nunukan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '1,10%',
                ton: 640,
                status: 'Meningkat',
                statusColor: 'bg-emerald-100 text-emerald-500',
                valueColor: 'text-emerald-500',
                anchor: '#anc-malinau-1'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-0,95%',
                ton: 630,
                status: 'Menurun',
                statusColor: 'bg-orange-100 text-orange-500',
                valueColor: 'text-orange-500',
                anchor: '#anc-tana-tidung'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '2,30%',
                ton: 655,
                status: 'Stabil',
                statusColor: 'bg-blue-100 text-blue-500',
                valueColor: 'text-blue-500',
                anchor: '#anc-tarakan-1'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-0,70%',
                ton: 635,
                status: 'Menurun',
                statusColor: 'bg-orange-100 text-orange-500',
                valueColor: 'text-orange-500',
                anchor: '#anc-bulungan'
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
                status: 'Meningkat',
                statusColor: 'bg-emerald-100 text-emerald-500',
                valueColor: 'text-emerald-500',
                anchor: '#anc-nunukan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '1,50%',
                ton: 970,
                status: 'Meningkat',
                statusColor: 'bg-emerald-100 text-emerald-500',
                valueColor: 'text-emerald-500',
                anchor: '#anc-malinau-1'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-1,10%',
                ton: 960,
                status: 'Menurun',
                statusColor: 'bg-orange-100 text-orange-500',
                valueColor: 'text-orange-500',
                anchor: '#anc-tana-tidung'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '2,40%',
                ton: 990,
                status: 'Stabil',
                statusColor: 'bg-blue-100 text-blue-500',
                valueColor: 'text-blue-500',
                anchor: '#anc-tarakan-1'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-0,95%',
                ton: 965,
                status: 'Menurun',
                statusColor: 'bg-orange-100 text-orange-500',
                valueColor: 'text-orange-500',
                anchor: '#anc-bulungan'
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
                status: 'Meningkat',
                statusColor: 'bg-emerald-100 text-emerald-500',
                valueColor: 'text-emerald-500',
                anchor: '#anc-nunukan'
            },
            {
                id: 'malinau',
                name: 'Kabupaten Malinau',
                icon: '/icons/ic-kab-malinau.png',
                value: '0,70%',
                ton: 355,
                status: 'Meningkat',
                statusColor: 'bg-emerald-100 text-emerald-500',
                valueColor: 'text-emerald-500',
                anchor: '#anc-malinau-1'
            },
            {
                id: 'tana-tidung',
                name: 'Kabupaten Tana Tindung',
                icon: '/icons/ic-kab-tana-tidung.png',
                value: '-0,85%',
                ton: 350,
                status: 'Menurun',
                statusColor: 'bg-orange-100 text-orange-500',
                valueColor: 'text-orange-500',
                anchor: '#anc-tana-tidung'
            },
            {
                id: 'tarakan',
                name: 'Kota Tarakan',
                icon: '/icons/ic-kab-tarakan.png',
                value: '1,60%',
                ton: 365,
                status: 'Stabil',
                statusColor: 'bg-blue-100 text-blue-500',
                valueColor: 'text-blue-500',
                anchor: '#anc-tarakan-1'
            },
            {
                id: 'bulungan',
                name: 'Kabupaten Bulungan',
                icon: '/icons/ic-kab-bulungan.png',
                value: '-0,65%',
                ton: 352,
                status: 'Menurun',
                statusColor: 'bg-orange-100 text-orange-500',
                valueColor: 'text-orange-500',
                anchor: '#anc-bulungan'
            }
        ]
    }
];
