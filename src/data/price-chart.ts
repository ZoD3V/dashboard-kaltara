// komoditas_daerah_data.ts

export type PricePoint = {
    date: string;
    price: number;
};

export type KomoditasEntry = {
    kabupaten: string;
    currentPrice: number;
    change: number;
    icon: string;
    data: PricePoint[];
};

export type KomoditasData = {
    [commodityId: string]: KomoditasEntry[];
};

export type DaerahEntry = {
    komoditas: string;
    currentPrice: number;
    change: number;
    icon: string;
    data: PricePoint[];
};

export type DaerahData = {
    [kabupaten: string]: DaerahEntry[];
};

export const komoditasData: KomoditasData = {
    // ============================
    // BERAS
    // ============================
    beras: [
        {
            kabupaten: 'Nunukan',
            currentPrice: 24600,
            change: 300,
            icon: '/icons/ic-kab-nunukan.webp',
            data: [
                { date: '01/11/2025', price: 36350 },
                { date: '02/11/2025', price: 97100 },
                { date: '03/11/2025', price: 58250 },
                { date: '04/11/2025', price: 16500 },
                { date: '05/11/2025', price: 76750 }
            ]
        },
        {
            kabupaten: 'Tarakan',
            currentPrice: 25900,
            change: 180,
            icon: '/icons/ic-kab-tarakan.webp',
            data: [
                { date: '01/11/2025', price: 96400 },
                { date: '02/11/2025', price: 27900 },
                { date: '03/11/2025', price: 37400 },
                { date: '04/11/2025', price: 62200 },
                { date: '05/11/2025', price: 87200 }
            ]
        },
        {
            kabupaten: 'Bulungan',
            currentPrice: 23800,
            change: 120,
            icon: '/icons/ic-kab-bulungan.webp',
            data: [
                { date: '01/11/2025', price: 61000 },
                { date: '02/11/2025', price: 96350 },
                { date: '03/11/2025', price: 91750 },
                { date: '04/11/2025', price: 79450 },
                { date: '05/11/2025', price: 48200 }
            ]
        },
        {
            kabupaten: 'Malinau',
            currentPrice: 22200,
            change: 200,
            icon: '/icons/ic-kab-malinau.webp',
            data: [
                { date: '01/11/2025', price: 134450 },
                { date: '02/11/2025', price: 123100 },
                { date: '03/11/2025', price: 60600 },
                { date: '04/11/2025', price: 29250 },
                { date: '05/11/2025', price: 37500 }
            ]
        },
        {
            kabupaten: 'Tana Tidung',
            currentPrice: 25100,
            change: 260,
            icon: '/icons/ic-kab-tana-tidung.webp',
            data: [
                { date: '01/11/2025', price: 149100 },
                { date: '02/11/2025', price: 65450 },
                { date: '03/11/2025', price: 110300 },
                { date: '04/11/2025', price: 25700 },
                { date: '05/11/2025', price: 75950 }
            ]
        }
    ],

    // ============================
    // CABAI MERAH
    // ============================
    'cabai-merah': [
        {
            kabupaten: 'Nunukan',
            currentPrice: 72000,
            change: -1500,
            icon: '/icons/ic-kab-nunukan.webp',
            data: [
                { date: '01/11/2025', price: 87900 },
                { date: '02/11/2025', price: 24250 },
                { date: '03/11/2025', price: 143350 },
                { date: '04/11/2025', price: 99400 },
                { date: '05/11/2025', price: 113850 }
            ]
        },
        {
            kabupaten: 'Tarakan',
            currentPrice: 68000,
            change: 2200,
            icon: '/icons/ic-kab-tarakan.webp',
            data: [
                { date: '01/11/2025', price: 133350 },
                { date: '02/11/2025', price: 64500 },
                { date: '03/11/2025', price: 25450 },
                { date: '04/11/2025', price: 57900 },
                { date: '05/11/2025', price: 121050 }
            ]
        },
        {
            kabupaten: 'Bulungan',
            currentPrice: 70500,
            change: 500,
            icon: '/icons/ic-kab-bulungan.webp',
            data: [
                { date: '01/11/2025', price: 49400 },
                { date: '02/11/2025', price: 149150 },
                { date: '03/11/2025', price: 97950 },
                { date: '04/11/2025', price: 84200 },
                { date: '05/11/2025', price: 12650 }
            ]
        },
        {
            kabupaten: 'Malinau',
            currentPrice: 69000,
            change: 1800,
            icon: '/icons/ic-kab-malinau.webp',
            data: [
                { date: '01/11/2025', price: 106050 },
                { date: '02/11/2025', price: 64000 },
                { date: '03/11/2025', price: 80050 },
                { date: '04/11/2025', price: 32200 },
                { date: '05/11/2025', price: 149900 }
            ]
        },
        {
            kabupaten: 'Tana Tidung',
            currentPrice: 71000,
            change: -800,
            icon: '/icons/ic-kab-tana-tidung.webp',
            data: [
                { date: '01/11/2025', price: 125250 },
                { date: '02/11/2025', price: 23900 },
                { date: '03/11/2025', price: 119900 },
                { date: '04/11/2025', price: 110950 },
                { date: '05/11/2025', price: 14450 }
            ]
        }
    ],

    // ============================
    // CABAI RAWIT
    // ============================
    'cabai-rawit': [
        {
            kabupaten: 'Nunukan',
            currentPrice: 83000,
            change: 1000,
            icon: '/icons/ic-kab-nunukan.webp',
            data: [
                { date: '01/11/2025', price: 60150 },
                { date: '02/11/2025', price: 90050 },
                { date: '03/11/2025', price: 60650 },
                { date: '04/11/2025', price: 133600 },
                { date: '05/11/2025', price: 50900 }
            ]
        },
        {
            kabupaten: 'Tarakan',
            currentPrice: 79500,
            change: -500,
            icon: '/icons/ic-kab-tarakan.webp',
            data: [
                { date: '01/11/2025', price: 116000 },
                { date: '02/11/2025', price: 78550 },
                { date: '03/11/2025', price: 138400 },
                { date: '04/11/2025', price: 39650 },
                { date: '05/11/2025', price: 133950 }
            ]
        },
        {
            kabupaten: 'Bulungan',
            currentPrice: 78000,
            change: 1200,
            icon: '/icons/ic-kab-bulungan.webp',
            data: [
                { date: '01/11/2025', price: 117550 },
                { date: '02/11/2025', price: 84650 },
                { date: '03/11/2025', price: 81900 },
                { date: '04/11/2025', price: 84550 },
                { date: '05/11/2025', price: 14050 }
            ]
        },
        {
            kabupaten: 'Malinau',
            currentPrice: 82000,
            change: -1500,
            icon: '/icons/ic-kab-malinau.webp',
            data: [
                { date: '01/11/2025', price: 43550 },
                { date: '02/11/2025', price: 62850 },
                { date: '03/11/2025', price: 132450 },
                { date: '04/11/2025', price: 75650 },
                { date: '05/11/2025', price: 50600 }
            ]
        },
        {
            kabupaten: 'Tana Tidung',
            currentPrice: 80500,
            change: 400,
            icon: '/icons/ic-kab-tana-tidung.webp',
            data: [
                { date: '01/11/2025', price: 83650 },
                { date: '02/11/2025', price: 129350 },
                { date: '03/11/2025', price: 106650 },
                { date: '04/11/2025', price: 28950 },
                { date: '05/11/2025', price: 121650 }
            ]
        }
    ],

    // ============================
    // BAWANG MERAH
    // ============================
    'bawang-merah': [
        {
            kabupaten: 'Nunukan',
            currentPrice: 45200,
            change: -1800,
            icon: '/icons/ic-kab-nunukan.webp',
            data: [
                { date: '01/11/2025', price: 123500 },
                { date: '02/11/2025', price: 87700 },
                { date: '03/11/2025', price: 65500 },
                { date: '04/11/2025', price: 120100 },
                { date: '05/11/2025', price: 123900 }
            ]
        },
        {
            kabupaten: 'Tarakan',
            currentPrice: 43800,
            change: 600,
            icon: '/icons/ic-kab-tarakan.webp',
            data: [
                { date: '01/11/2025', price: 37750 },
                { date: '02/11/2025', price: 129150 },
                { date: '03/11/2025', price: 118650 },
                { date: '04/11/2025', price: 72950 },
                { date: '05/11/2025', price: 133500 }
            ]
        },
        {
            kabupaten: 'Bulungan',
            currentPrice: 46700,
            change: 400,
            icon: '/icons/ic-kab-bulungan.webp',
            data: [
                { date: '01/11/2025', price: 24650 },
                { date: '02/11/2025', price: 87000 },
                { date: '03/11/2025', price: 126550 },
                { date: '04/11/2025', price: 26150 },
                { date: '05/11/2025', price: 137050 }
            ]
        },
        {
            kabupaten: 'Malinau',
            currentPrice: 48900,
            change: 900,
            icon: '/icons/ic-kab-malinau.webp',
            data: [
                { date: '01/11/2025', price: 99450 },
                { date: '02/11/2025', price: 120550 },
                { date: '03/11/2025', price: 61800 },
                { date: '04/11/2025', price: 149650 },
                { date: '05/11/2025', price: 37900 }
            ]
        },
        {
            kabupaten: 'Tana Tidung',
            currentPrice: 44400,
            change: -600,
            icon: '/icons/ic-kab-tana-tidung.webp',
            data: [
                { date: '01/11/2025', price: 74650 },
                { date: '02/11/2025', price: 127750 },
                { date: '03/11/2025', price: 103900 },
                { date: '04/11/2025', price: 111000 },
                { date: '05/11/2025', price: 17650 }
            ]
        }
    ],

    // ============================
    // BAWANG PUTIH
    // ============================
    'bawang-putih': [
        {
            kabupaten: 'Nunukan',
            currentPrice: 38200,
            change: -300,
            icon: '/icons/ic-kab-nunukan.webp',
            data: [
                { date: '01/11/2025', price: 8200 },
                { date: '02/11/2025', price: 141350 },
                { date: '03/11/2025', price: 120100 },
                { date: '04/11/2025', price: 67950 },
                { date: '05/11/2025', price: 131700 }
            ]
        },
        {
            kabupaten: 'Tarakan',
            currentPrice: 39500,
            change: 700,
            icon: '/icons/ic-kab-tarakan.webp',
            data: [
                { date: '01/11/2025', price: 126800 },
                { date: '02/11/2025', price: 45200 },
                { date: '03/11/2025', price: 138600 },
                { date: '04/11/2025', price: 49850 },
                { date: '05/11/2025', price: 73400 }
            ]
        },
        {
            kabupaten: 'Bulungan',
            currentPrice: 37400,
            change: -600,
            icon: '/icons/ic-kab-bulungan.webp',
            data: [
                { date: '01/11/2025', price: 67200 },
                { date: '02/11/2025', price: 130000 },
                { date: '03/11/2025', price: 66450 },
                { date: '04/11/2025', price: 139300 },
                { date: '05/11/2025', price: 123200 }
            ]
        },
        {
            kabupaten: 'Malinau',
            currentPrice: 40200,
            change: 500,
            icon: '/icons/ic-kab-malinau.webp',
            data: [
                { date: '01/11/2025', price: 45950 },
                { date: '02/11/2025', price: 14400 },
                { date: '03/11/2025', price: 33550 },
                { date: '04/11/2025', price: 92750 },
                { date: '05/11/2025', price: 43500 }
            ]
        },
        {
            kabupaten: 'Tana Tidung',
            currentPrice: 38800,
            change: 200,
            icon: '/icons/ic-kab-tana-tidung.webp',
            data: [
                { date: '01/11/2025', price: 61800 },
                { date: '02/11/2025', price: 136050 },
                { date: '03/11/2025', price: 24900 },
                { date: '04/11/2025', price: 27250 },
                { date: '05/11/2025', price: 85150 }
            ]
        }
    ],

    // ============================
    // DAGING SAPI
    // ============================
    'daging-sapi': [
        {
            kabupaten: 'Nunukan',
            currentPrice: 128000,
            change: 3000,
            icon: '/icons/ic-kab-nunukan.webp',
            data: [
                { date: '01/11/2025', price: 102200 },
                { date: '02/11/2025', price: 82950 },
                { date: '03/11/2025', price: 18750 },
                { date: '04/11/2025', price: 73600 },
                { date: '05/11/2025', price: 67450 }
            ]
        },
        {
            kabupaten: 'Tarakan',
            currentPrice: 132000,
            change: -2000,
            icon: '/icons/ic-kab-tarakan.webp',
            data: [
                { date: '01/11/2025', price: 99350 },
                { date: '02/11/2025', price: 40250 },
                { date: '03/11/2025', price: 25100 },
                { date: '04/11/2025', price: 8600 },
                { date: '05/11/2025', price: 79500 }
            ]
        },
        {
            kabupaten: 'Bulungan',
            currentPrice: 125000,
            change: 1000,
            icon: '/icons/ic-kab-bulungan.webp',
            data: [
                { date: '01/11/2025', price: 108300 },
                { date: '02/11/2025', price: 146300 },
                { date: '03/11/2025', price: 81400 },
                { date: '04/11/2025', price: 68200 },
                { date: '05/11/2025', price: 29050 }
            ]
        },
        {
            kabupaten: 'Malinau',
            currentPrice: 130500,
            change: 2500,
            icon: '/icons/ic-kab-malinau.webp',
            data: [
                { date: '01/11/2025', price: 125050 },
                { date: '02/11/2025', price: 38050 },
                { date: '03/11/2025', price: 68250 },
                { date: '04/11/2025', price: 26500 },
                { date: '05/11/2025', price: 52850 }
            ]
        },
        {
            kabupaten: 'Tana Tidung',
            currentPrice: 129000,
            change: -1000,
            icon: '/icons/ic-kab-tana-tidung.webp',
            data: [
                { date: '01/11/2025', price: 113300 },
                { date: '02/11/2025', price: 49850 },
                { date: '03/11/2025', price: 28150 },
                { date: '04/11/2025', price: 72750 },
                { date: '05/11/2025', price: 51950 }
            ]
        }
    ],

    // ============================
    // TELUR AYAM
    // ============================
    'telur-ayam': [
        {
            kabupaten: 'Nunukan',
            currentPrice: 29500,
            change: 700,
            icon: '/icons/ic-kab-nunukan.webp',
            data: [
                { date: '01/11/2025', price: 56800 },
                { date: '02/11/2025', price: 142600 },
                { date: '03/11/2025', price: 45500 },
                { date: '04/11/2025', price: 102450 },
                { date: '05/11/2025', price: 126350 }
            ]
        },
        {
            kabupaten: 'Tarakan',
            currentPrice: 30200,
            change: -300,
            icon: '/icons/ic-kab-tarakan.webp',
            data: [
                { date: '01/11/2025', price: 52850 },
                { date: '02/11/2025', price: 51150 },
                { date: '03/11/2025', price: 107100 },
                { date: '04/11/2025', price: 41750 },
                { date: '05/11/2025', price: 9800 }
            ]
        },
        {
            kabupaten: 'Bulungan',
            currentPrice: 28900,
            change: 400,
            icon: '/icons/ic-kab-bulungan.webp',
            data: [
                { date: '01/11/2025', price: 75800 },
                { date: '02/11/2025', price: 136400 },
                { date: '03/11/2025', price: 80300 },
                { date: '04/11/2025', price: 43550 },
                { date: '05/11/2025', price: 15850 }
            ]
        },
        {
            kabupaten: 'Malinau',
            currentPrice: 29700,
            change: 500,
            icon: '/icons/ic-kab-malinau.webp',
            data: [
                { date: '01/11/2025', price: 8150 },
                { date: '02/11/2025', price: 21500 },
                { date: '03/11/2025', price: 92400 },
                { date: '04/11/2025', price: 62550 },
                { date: '05/11/2025', price: 65000 }
            ]
        },
        {
            kabupaten: 'Tana Tidung',
            currentPrice: 29200,
            change: -200,
            icon: '/icons/ic-kab-tana-tidung.webp',
            data: [
                { date: '01/11/2025', price: 140600 },
                { date: '02/11/2025', price: 76850 },
                { date: '03/11/2025', price: 17650 },
                { date: '04/11/2025', price: 111400 },
                { date: '05/11/2025', price: 74850 }
            ]
        }
    ],

    // ============================
    // GULA PASIR
    // ============================
    'gula-pasir': [
        {
            kabupaten: 'Nunukan',
            currentPrice: 18700,
            change: -300,
            icon: '/icons/ic-kab-nunukan.webp',
            data: [
                { date: '01/11/2025', price: 143750 },
                { date: '02/11/2025', price: 11000 },
                { date: '03/11/2025', price: 72050 },
                { date: '04/11/2025', price: 50200 },
                { date: '05/11/2025', price: 9150 }
            ]
        },
        {
            kabupaten: 'Tarakan',
            currentPrice: 19650,
            change: 150,
            icon: '/icons/ic-kab-tarakan.webp',
            data: [
                { date: '01/11/2025', price: 30450 },
                { date: '02/11/2025', price: 98500 },
                { date: '03/11/2025', price: 93800 },
                { date: '04/11/2025', price: 32050 },
                { date: '05/11/2025', price: 72850 }
            ]
        },
        {
            kabupaten: 'Bulungan',
            currentPrice: 18150,
            change: -250,
            icon: '/icons/ic-kab-bulungan.webp',
            data: [
                { date: '01/11/2025', price: 125050 },
                { date: '02/11/2025', price: 43650 },
                { date: '03/11/2025', price: 115550 },
                { date: '04/11/2025', price: 134150 },
                { date: '05/11/2025', price: 61250 }
            ]
        },
        {
            kabupaten: 'Malinau',
            currentPrice: 20000,
            change: 300,
            icon: '/icons/ic-kab-malinau.webp',
            data: [
                { date: '01/11/2025', price: 110300 },
                { date: '02/11/2025', price: 31150 },
                { date: '03/11/2025', price: 113450 },
                { date: '04/11/2025', price: 97300 },
                { date: '05/11/2025', price: 31950 }
            ]
        },
        {
            kabupaten: 'Tana Tidung',
            currentPrice: 18950,
            change: -150,
            icon: '/icons/ic-kab-tana-tidung.webp',
            data: [
                { date: '01/11/2025', price: 122650 },
                { date: '02/11/2025', price: 32100 },
                { date: '03/11/2025', price: 52900 },
                { date: '04/11/2025', price: 9750 },
                { date: '05/11/2025', price: 8950 }
            ]
        }
    ],

    // ============================
    // MINYAK GORENG
    // ============================
    'minyak-goreng': [
        {
            kabupaten: 'Nunukan',
            currentPrice: 17400,
            change: 400,
            icon: '/icons/ic-kab-nunukan.webp',
            data: [
                { date: '01/11/2025', price: 86800 },
                { date: '02/11/2025', price: 29550 },
                { date: '03/11/2025', price: 38100 },
                { date: '04/11/2025', price: 68500 },
                { date: '05/11/2025', price: 73700 }
            ]
        },
        {
            kabupaten: 'Tarakan',
            currentPrice: 18100,
            change: -300,
            icon: '/icons/ic-kab-tarakan.webp',
            data: [
                { date: '01/11/2025', price: 46250 },
                { date: '02/11/2025', price: 57100 },
                { date: '03/11/2025', price: 35450 },
                { date: '04/11/2025', price: 91200 },
                { date: '05/11/2025', price: 77400 }
            ]
        },
        {
            kabupaten: 'Bulungan',
            currentPrice: 17650,
            change: 150,
            icon: '/icons/ic-kab-bulungan.webp',
            data: [
                { date: '01/11/2025', price: 19400 },
                { date: '02/11/2025', price: 106800 },
                { date: '03/11/2025', price: 34750 },
                { date: '04/11/2025', price: 148200 },
                { date: '05/11/2025', price: 134450 }
            ]
        },
        {
            kabupaten: 'Malinau',
            currentPrice: 17900,
            change: 200,
            icon: '/icons/ic-kab-malinau.webp',
            data: [
                { date: '01/11/2025', price: 144800 },
                { date: '02/11/2025', price: 9650 },
                { date: '03/11/2025', price: 94750 },
                { date: '04/11/2025', price: 9950 },
                { date: '05/11/2025', price: 52200 }
            ]
        },
        {
            kabupaten: 'Tana Tidung',
            currentPrice: 17750,
            change: -250,
            icon: '/icons/ic-kab-tana-tidung.webp',
            data: [
                { date: '01/11/2025', price: 24050 },
                { date: '02/11/2025', price: 105350 },
                { date: '03/11/2025', price: 22100 },
                { date: '04/11/2025', price: 77200 },
                { date: '05/11/2025', price: 13450 }
            ]
        }
    ],

    // ============================
    // JAGUNG
    // ============================
    jagung: [
        {
            kabupaten: 'Nunukan',
            currentPrice: 8600,
            change: 200,
            icon: '/icons/ic-kab-nunukan.webp',
            data: [
                { date: '01/11/2025', price: 128500 },
                { date: '02/11/2025', price: 84500 },
                { date: '03/11/2025', price: 50000 },
                { date: '04/11/2025', price: 138650 },
                { date: '05/11/2025', price: 10100 }
            ]
        },
        {
            kabupaten: 'Tarakan',
            currentPrice: 9100,
            change: -100,
            icon: '/icons/ic-kab-tarakan.webp',
            data: [
                { date: '01/11/2025', price: 69300 },
                { date: '02/11/2025', price: 89550 },
                { date: '03/11/2025', price: 98650 },
                { date: '04/11/2025', price: 129500 },
                { date: '05/11/2025', price: 131800 }
            ]
        },
        {
            kabupaten: 'Bulungan',
            currentPrice: 8400,
            change: 150,
            icon: '/icons/ic-kab-bulungan.webp',
            data: [
                { date: '01/11/2025', price: 23550 },
                { date: '02/11/2025', price: 55600 },
                { date: '03/11/2025', price: 139100 },
                { date: '04/11/2025', price: 128200 },
                { date: '05/11/2025', price: 20550 }
            ]
        },
        {
            kabupaten: 'Malinau',
            currentPrice: 8750,
            change: 250,
            icon: '/icons/ic-kab-malinau.webp',
            data: [
                { date: '01/11/2025', price: 57600 },
                { date: '02/11/2025', price: 110650 },
                { date: '03/11/2025', price: 132650 },
                { date: '04/11/2025', price: 136400 },
                { date: '05/11/2025', price: 134950 }
            ]
        },
        {
            kabupaten: 'Tana Tidung',
            currentPrice: 8350,
            change: -150,
            icon: '/icons/ic-kab-tana-tidung.webp',
            data: [
                { date: '01/11/2025', price: 16900 },
                { date: '02/11/2025', price: 54200 },
                { date: '03/11/2025', price: 31700 },
                { date: '04/11/2025', price: 113550 },
                { date: '05/11/2025', price: 144900 }
            ]
        }
    ],

    // ============================
    // KEDELAI
    // ============================
    kedelai: [
        {
            kabupaten: 'Nunukan',
            currentPrice: 13800,
            change: 400,
            icon: '/icons/ic-kab-nunukan.webp',
            data: [
                { date: '01/11/2025', price: 68750 },
                { date: '02/11/2025', price: 41700 },
                { date: '03/11/2025', price: 138950 },
                { date: '04/11/2025', price: 101900 },
                { date: '05/11/2025', price: 29750 }
            ]
        },
        {
            kabupaten: 'Tarakan',
            currentPrice: 14400,
            change: -200,
            icon: '/icons/ic-kab-tarakan.webp',
            data: [
                { date: '01/11/2025', price: 102400 },
                { date: '02/11/2025', price: 76750 },
                { date: '03/11/2025', price: 103650 },
                { date: '04/11/2025', price: 13350 },
                { date: '05/11/2025', price: 31050 }
            ]
        },
        {
            kabupaten: 'Bulungan',
            currentPrice: 13650,
            change: 250,
            icon: '/icons/ic-kab-bulungan.webp',
            data: [
                { date: '01/11/2025', price: 126450 },
                { date: '02/11/2025', price: 9400 },
                { date: '03/11/2025', price: 146400 },
                { date: '04/11/2025', price: 72350 },
                { date: '05/11/2025', price: 68900 }
            ]
        },
        {
            kabupaten: 'Malinau',
            currentPrice: 14100,
            change: 300,
            icon: '/icons/ic-kab-malinau.webp',
            data: [
                { date: '01/11/2025', price: 39650 },
                { date: '02/11/2025', price: 35700 },
                { date: '03/11/2025', price: 102250 },
                { date: '04/11/2025', price: 79050 },
                { date: '05/11/2025', price: 102300 }
            ]
        },
        {
            kabupaten: 'Tana Tidung',
            currentPrice: 13900,
            change: -100,
            icon: '/icons/ic-kab-tana-tidung.webp',
            data: [
                { date: '01/11/2025', price: 75650 },
                { date: '02/11/2025', price: 66250 },
                { date: '03/11/2025', price: 75300 },
                { date: '04/11/2025', price: 32450 },
                { date: '05/11/2025', price: 95000 }
            ]
        }
    ]
};

export const daerahData: DaerahData = {
    Nunukan: [
        {
            komoditas: 'Beras',
            currentPrice: komoditasData.beras[0].currentPrice,
            change: komoditasData.beras[0].change,
            icon: '/icons/ic-beras.webp',
            data: komoditasData.beras[0].data
        },
        {
            komoditas: 'Gula Pasir',
            currentPrice: komoditasData['gula-pasir'][0].currentPrice,
            change: komoditasData['gula-pasir'][0].change,
            icon: '/icons/ic-gula-pasir.webp',
            data: komoditasData['gula-pasir'][0].data
        },
        {
            komoditas: 'Bawang Merah',
            currentPrice: komoditasData['bawang-merah'][0].currentPrice,
            change: komoditasData['bawang-merah'][0].change,
            icon: '/icons/ic-bawang-merah.webp',
            data: komoditasData['bawang-merah'][0].data
        }
    ],
    Tarakan: [
        {
            komoditas: 'Beras',
            currentPrice: komoditasData.beras[1].currentPrice,
            change: komoditasData.beras[1].change,
            icon: '/icons/ic-beras.webp',
            data: komoditasData.beras[1].data
        },
        {
            komoditas: 'Gula Pasir',
            currentPrice: komoditasData['gula-pasir'][1].currentPrice,
            change: komoditasData['gula-pasir'][1].change,
            icon: '/icons/ic-gula-pasir.webp',
            data: komoditasData['gula-pasir'][1].data
        },
        {
            komoditas: 'Bawang Merah',
            currentPrice: komoditasData['bawang-merah'][1].currentPrice,
            change: komoditasData['bawang-merah'][1].change,
            icon: '/icons/ic-bawang-merah.webp',
            data: komoditasData['bawang-merah'][1].data
        }
    ],
    Bulungan: [
        {
            komoditas: 'Beras',
            currentPrice: komoditasData.beras[2].currentPrice,
            change: komoditasData.beras[2].change,
            icon: '/icons/ic-beras.webp',
            data: komoditasData.beras[2].data
        },
        {
            komoditas: 'Gula Pasir',
            currentPrice: komoditasData['gula-pasir'][2].currentPrice,
            change: komoditasData['gula-pasir'][2].change,
            icon: '/icons/ic-gula-pasir.webp',
            data: komoditasData['gula-pasir'][2].data
        },
        {
            komoditas: 'Bawang Merah',
            currentPrice: komoditasData['bawang-merah'][2].currentPrice,
            change: komoditasData['bawang-merah'][2].change,
            icon: '/icons/ic-bawang-merah.webp',
            data: komoditasData['bawang-merah'][2].data
        }
    ],
    Malinau: [
        {
            komoditas: 'Beras',
            currentPrice: komoditasData.beras[3].currentPrice,
            change: komoditasData.beras[3].change,
            icon: '/icons/ic-beras.webp',
            data: komoditasData.beras[3].data
        },
        {
            komoditas: 'Gula Pasir',
            currentPrice: komoditasData['gula-pasir'][3].currentPrice,
            change: komoditasData['gula-pasir'][3].change,
            icon: '/icons/ic-gula-pasir.webp',
            data: komoditasData['gula-pasir'][3].data
        },
        {
            komoditas: 'Bawang Merah',
            currentPrice: komoditasData['bawang-merah'][3].currentPrice,
            change: komoditasData['bawang-merah'][3].change,
            icon: '/icons/ic-bawang-merah.webp',
            data: komoditasData['bawang-merah'][3].data
        }
    ],
    'Tana Tidung': [
        {
            komoditas: 'Beras',
            currentPrice: komoditasData.beras[4].currentPrice,
            change: komoditasData.beras[4].change,
            icon: '/icons/ic-beras.webp',
            data: komoditasData.beras[4].data
        },
        {
            komoditas: 'Gula Pasir',
            currentPrice: komoditasData['gula-pasir'][4].currentPrice,
            change: komoditasData['gula-pasir'][4].change,
            icon: '/icons/ic-gula-pasir.webp',
            data: komoditasData['gula-pasir'][4].data
        },
        {
            komoditas: 'Bawang Merah',
            currentPrice: komoditasData['bawang-merah'][4].currentPrice,
            change: komoditasData['bawang-merah'][4].change,
            icon: '/icons/ic-bawang-merah.webp',
            data: komoditasData['bawang-merah'][4].data
        }
    ]
};
