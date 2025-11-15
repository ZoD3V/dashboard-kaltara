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
        icon: '/icons/ic-beras.png',
        category: 'bahan-pokok',
        description: 'Beras sebagai makanan pokok utama'
    },
    {
        id: 'cabai-merah',
        name: 'Cabai Merah',
        icon: '/icons/ic-cabai-merah.png',
        category: 'bumbu',
        description: 'Cabai merah untuk bumbu masakan'
    },
    {
        id: 'cabai-rawit',
        name: 'Cabai Rawit',
        icon: '/icons/ic-cabai-rawit.png',
        category: 'bumbu',
        description: 'Cabai rawit lebih pedas dari cabai merah'
    },
    {
        id: 'bawang-merah',
        name: 'Bawang Merah',
        icon: '/icons/ic-bawang-merah.png',
        category: 'bumbu',
        description: 'Bawang merah untuk bumbu dasar'
    },
    {
        id: 'bawang-putih',
        name: 'Bawang Putih',
        icon: '/icons/ic-bawang-putih.png',
        category: 'bumbu',
        description: 'Bawang putih untuk bumbu dasar'
    },
    {
        id: 'daging-sapi',
        name: 'Daging Sapi',
        icon: '/icons/ic-daging-sapi.png',
        category: 'protein-hewani',
        description: 'Daging sapi sebagai sumber protein'
    },
    {
        id: 'telur-ayam',
        name: 'Telur Ayam',
        icon: '/icons/ic-telur-ayam.png',
        category: 'protein-hewani',
        description: 'Telur ayam sumber protein terjangkau'
    },
    {
        id: 'gula-pasir',
        name: 'Gula Pasir',
        icon: '/icons/ic-gula-pasir.png',
        category: 'pemanis',
        description: 'Gula pasir untuk pemanis makanan'
    },
    {
        id: 'minyak-goreng',
        name: 'Minyak Goreng',
        icon: '/icons/ic-minyak-goreng.png',
        category: 'minyak',
        description: 'Minyak goreng untuk memasak'
    },
    {
        id: 'jagung',
        name: 'Jagung',
        icon: '/icons/ic-jagung.png',
        category: 'bahan-pokok',
        description: 'Jagung sebagai bahan pangan alternatif'
    },
    {
        id: 'kedelai',
        name: 'Kedelai',
        icon: '/icons/ic-kedelai.png',
        category: 'protein-nabati',
        description: 'Kedelai untuk bahan tempe dan tahu'
    }
];
