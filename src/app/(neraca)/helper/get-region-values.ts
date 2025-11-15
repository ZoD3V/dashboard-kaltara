import { RegionGroup } from '@/data/regions';

export const getRegionValues = (data: RegionGroup[], commodity: string, infoTypeId: 'neraca' | 'ketersediaan') => {
    return data.find((item) => item.commodityId == commodity && item.infoTypeId == infoTypeId)?.values ?? [];
};
