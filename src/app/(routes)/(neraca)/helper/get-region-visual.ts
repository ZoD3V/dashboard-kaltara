import { regionVisualConfig } from '@/data/regions';
import { NeracaDateType, NeracaTabType } from '@/types/neraca';
import { RegionLayoutId } from '@/types/region';

export const getRegionVisual = (
    timeBase: NeracaDateType,
    commodityId: string,
    tab: NeracaTabType,
    regionId: RegionLayoutId
) => {
    const visualFromConfig = regionVisualConfig[commodityId][timeBase]?.[tab]?.[regionId];

    return {
        fill: visualFromConfig?.fill ?? 'fill-slate-200'
    };
};
