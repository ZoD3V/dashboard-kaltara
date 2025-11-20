import { RegionGroup } from '@/types/neraca';
import { PriceType, PriceTypeRegionGroup } from '@/types/price';

export const getRegionValues = (data: PriceTypeRegionGroup[], commodity: string, infoPriceTypeId: PriceType) => {
    return data.find((item) => item.commodityId == commodity && item.infoPriceTypeId == infoPriceTypeId)?.values ?? [];
};
