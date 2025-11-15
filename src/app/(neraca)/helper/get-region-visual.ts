import { ketersediaanRegion, neracaRegion, regionVisualConfig } from '@/data/regions';
import { NeracaTabType } from '@/types/neraca';

import { RegionId } from './region-layout';

export const getRegionData = (commodityId: string, tab: NeracaTabType, regionId: RegionId) => {
    const source = tab === 'neraca' ? neracaRegion : ketersediaanRegion;

    const group = source.find((g) => g.commodityId === commodityId && g.infoTypeId === tab);

    return group?.values.find((v) => v.id === regionId);
};

export const getRegionVisual = (commodityId: string, tab: NeracaTabType, regionId: RegionId) => {
    const regionData = getRegionData(commodityId, tab, regionId);
    const visualFromConfig = regionVisualConfig[commodityId]?.[tab]?.[regionId];

    return {
        fill: visualFromConfig?.fill ?? 'fill-slate-200',
        statusColor: visualFromConfig?.statusColor ?? regionData?.statusColor ?? '',
        valueColor: visualFromConfig?.valueColor ?? regionData?.valueColor ?? ''
    };
};
