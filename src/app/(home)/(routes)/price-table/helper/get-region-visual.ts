import { changePriceRegion, priceRegionVisualConfig, priceTypeRegion } from '@/data/price';
import { PriceType } from '@/types/price';
import { RegionLayoutId } from '@/types/region';

export const getRegionData = (commodityId: string, tab: PriceType, regionId: RegionLayoutId) => {
    const source = tab === 'level-harga' ? priceTypeRegion : changePriceRegion;

    const group = source.find((g) => g.commodityId === commodityId && g.infoPriceTypeId === tab);

    return group?.values.find((v) => v.id === regionId);
};

export const getRegionVisual = (commodityId: string, tab: PriceType, regionId: RegionLayoutId) => {
    const regionData = getRegionData(commodityId, tab, regionId);
    const visualFromConfig = priceRegionVisualConfig[commodityId]?.[tab]?.[regionId];

    return {
        fill: visualFromConfig?.fill ?? 'fill-slate-200'
    };
};
