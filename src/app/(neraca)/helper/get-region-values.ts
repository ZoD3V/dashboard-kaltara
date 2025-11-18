import { NeracaDateType, RegionGroup } from '@/types/neraca';

export const getRegionValues = (
    timeBase: NeracaDateType,
    data: RegionGroup[],
    commodity: string,
    infoTypeId: 'neraca' | 'ketersediaan' | 'kebutuhan'
) => {
    return (
        data.find((item) => item.commodityId == commodity && item.monthId == timeBase && item.infoTypeId == infoTypeId)
            ?.values ?? []
    );
};
