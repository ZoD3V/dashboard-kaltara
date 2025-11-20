import { ProvinceType } from './neraca';

export const REGION_KEYS = [
    'Kabupaten Malinau',
    'Kabupaten Nunukan',
    'Kabupaten Bulungan',
    'Kabupaten Tana Tidung',
    'Kota Tarakan'
] as const;

export const provinces: ProvinceType[] = [
    'Provinsi Kalimantan Utara',
    'Kabupaten Bulungan',
    'Kabupaten Malinau',
    'Kabupaten Nunukan',
    'Kabupaten Tana Tidung',
    'Kota Tarakan'
];

export type RegionLayoutId = 'nunukan' | 'malinau' | 'tana-tidung' | 'tarakan' | 'bulungan';
