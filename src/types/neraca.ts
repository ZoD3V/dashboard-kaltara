import { RegionId } from '@/app/(neraca)/helper/region-layout';

export type NeracaTabType = 'neraca' | 'ketersediaan' | 'kebutuhan';

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

export type RegionVisual = {
    fill: string; // warna map (SVG)
    statusColor: string; // badge bg+text
    valueColor?: string; // teks persen (khusus ketersediaan)
};

export type RegionVisualConfig = {
    [commodityId: string]: {
        neraca: Record<RegionId, RegionVisual>;
        ketersediaan: Record<RegionId, RegionVisual>;
        kebutuhan?: Record<RegionId, RegionVisual>;
        legend?: any;
    };
};

export type LegendItem = {
    key: string; // 'defisit' | 'rentan' | ...
    label: string; // teks yang tampil di legend
    bgClass: string; // bg-red-400, bg-emerald-400, dst
    valueRange?: string; // khusus neraca / ketersediaan bila perlu (misal '0% - 46%' atau '> 0%')
};

export type RegionLegend = {
    neraca: LegendItem[];
    ketersediaan: LegendItem[];
};
