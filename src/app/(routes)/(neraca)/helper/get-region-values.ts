import { NeracaDateType, NeracaTabType, RegionGroup } from '@/types/neraca';

export const getRegionValues = (
    timeBase: NeracaDateType,
    data: RegionGroup[],
    commodity: string,
    infoTypeId: NeracaTabType
) => {
    return (
        data.find((item) => item.commodityId == commodity && item.monthId == timeBase && item.infoTypeId == infoTypeId)
            ?.values ?? []
    );
};
