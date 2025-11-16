export type NeracaLegendKey = 'defisit' | 'rentan' | 'waspada' | 'aman' | 'nodata';
export type KetersediaanLegendKey = 'menurun' | 'stabil' | 'meningkat' | 'nodata';

export interface RegionLegendConfig {
    neraca: Record<NeracaLegendKey, string>;
    ketersediaan: Record<KetersediaanLegendKey, string>;
}

export const regionLegendConfig: RegionLegendConfig = {
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
};
