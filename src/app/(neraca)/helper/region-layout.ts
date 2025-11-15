export type RegionId = 'nunukan' | 'malinau' | 'tana-tidung' | 'tarakan' | 'bulungan';

type RegionLayout = {
    left: number;
    top: number;
    anchor: string;
};

export const regionLayout: Record<RegionId, RegionLayout> = {
    nunukan: { left: -200, top: 20, anchor: '#anc-nunukan' },
    malinau: { left: -200, top: 200, anchor: '#anc-malinau-1' },
    'tana-tidung': { left: 615, top: 60, anchor: '#anc-tana-tidung' },
    tarakan: { left: 615, top: 210, anchor: '#anc-tarakan-1' },
    bulungan: { left: 615, top: 400, anchor: '#anc-bulungan' }
};
