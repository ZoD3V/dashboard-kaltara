import { RegionGroup } from '@/types/neraca';

export const getRegionValues = (data: RegionGroup[], commodity: string, infoTypeId: 'neraca' | 'ketersediaan') => {
    return data.find((item) => item.commodityId == commodity && item.infoTypeId == infoTypeId)?.values ?? [];
};
