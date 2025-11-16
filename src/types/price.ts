// ========== TYPES & INTERFACES ==========

export interface PriceDataPoint {
    date: string;
    price: number;
}

export interface KomoditasItem {
    kabupaten: string;
    currentPrice: number;
    change: number;
    icon: string;
    data: PriceDataPoint[];
}

export interface DaerahItem {
    komoditas: string;
    currentPrice: number;
    change: number;
    icon: string;
    data: PriceDataPoint[];
}

export interface KomoditasData {
    beras: KomoditasItem[];
    gula: KomoditasItem[];
    bawang: KomoditasItem[];
}

export interface DaerahData {
    [kabupaten: string]: DaerahItem[];
}

export interface DropdownOption {
    value: string;
    label: string;
}

export type FilterType = 'komoditas' | 'daerah';

export type KomoditasKey = keyof KomoditasData;

export interface PriceCardProps {
    title: string;
    currentPrice: number;
    change: number;
    icon: string;
    data: PriceDataPoint[];
}

export interface TooltipPayload {
    value: number;
    dataKey: string;
}

export interface CustomTooltipProps {
    active?: boolean;
    payload?: TooltipPayload[];
    label?: string;
}
