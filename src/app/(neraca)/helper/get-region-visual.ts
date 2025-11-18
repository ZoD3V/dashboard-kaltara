import { regionVisualConfig } from '@/data/regions';
import { NeracaDateType, NeracaTabType } from '@/types/neraca';

import { RegionId } from './region-layout';

export const getRegionVisual = (
    timeBase: NeracaDateType,
    commodityId: string,
    tab: NeracaTabType,
    regionId: RegionId
) => {
    const visualFromConfig = regionVisualConfig[commodityId][timeBase]?.[tab]?.[regionId];

    return {
        fill: visualFromConfig?.fill ?? 'fill-slate-200'
    };
};
