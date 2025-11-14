// data/food-items.ts
export interface FoodItem {
    id: string;
    name: string;
    icon: string;
    category: string;
    description?: string;
}

export const foodItems: FoodItem[] = [
    {
        id: 'beras',
        name: 'Beras',
        icon: '🌾',
        category: 'bahan-pokok',
        description: 'Beras sebagai makanan pokok utama'
    },
    {
        id: 'cabai-merah',
        name: 'Cabai Merah',
        icon: '🌶️',
        category: 'bumbu',
        description: 'Cabai merah untuk bumbu masakan'
    },
    {
        id: 'cabai-rawit',
        name: 'Cabai Rawit',
        icon: '🌶️',
        category: 'bumbu',
        description: 'Cabai rawit lebih pedas dari cabai merah'
    },
    {
        id: 'bawang-merah',
        name: 'Bawang Merah',
        icon: '🧅',
        category: 'bumbu',
        description: 'Bawang merah untuk bumbu dasar'
    },
    {
        id: 'bawang-putih',
        name: 'Bawang Putih',
        icon: '🧄',
        category: 'bumbu',
        description: 'Bawang putih untuk bumbu dasar'
    },
    {
        id: 'daging-sapi',
        name: 'Daging Sapi',
        icon: '🥩',
        category: 'protein-hewani',
        description: 'Daging sapi sebagai sumber protein'
    },
    {
        id: 'telur-ayam',
        name: 'Telur Ayam',
        icon: '🥚',
        category: 'protein-hewani',
        description: 'Telur ayam sumber protein terjangkau'
    },
    {
        id: 'gula-pasir',
        name: 'Gula Pasir',
        icon: '🧂',
        category: 'pemanis',
        description: 'Gula pasir untuk pemanis makanan'
    },
    {
        id: 'minyak-goreng',
        name: 'Minyak Goreng',
        icon: '🛢️',
        category: 'minyak',
        description: 'Minyak goreng untuk memasak'
    },
    {
        id: 'jagung',
        name: 'Jagung',
        icon: '🌽',
        category: 'bahan-pokok',
        description: 'Jagung sebagai bahan pangan alternatif'
    },
    {
        id: 'kedelai',
        name: 'Kedelai',
        icon: '🫘',
        category: 'protein-nabati',
        description: 'Kedelai untuk bahan tempe dan tahu'
    },
    {
        id: 'ayam',
        name: 'Daging Ayam',
        icon: '🍗',
        category: 'protein-hewani',
        description: 'Daging ayam sumber protein populer'
    },
    {
        id: 'ikan',
        name: 'Ikan',
        icon: '🐟',
        category: 'protein-hewani',
        description: 'Ikan sebagai sumber protein dan omega-3'
    },
    {
        id: 'tomat',
        name: 'Tomat',
        icon: '🍅',
        category: 'sayuran',
        description: 'Tomat untuk bumbu dan sayuran'
    },
    {
        id: 'kentang',
        name: 'Kentang',
        icon: '🥔',
        category: 'sayuran',
        description: 'Kentang sebagai sumber karbohidrat'
    }
];
