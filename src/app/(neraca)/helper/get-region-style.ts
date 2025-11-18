import { levelHargaLegend } from '@/data/level-price-legend';
import { movementLegend } from '@/data/movement-price-legend';
import { neracaPriceLegend } from '@/data/neraca-price-legend';
import { NeracaTabType } from '@/types/neraca';
import { PriceType } from '@/types/price';

type LevelHargaStatus = 'Aman' | 'Rentan' | 'Waspada' | 'Defisit' | 'NoData';

type MovementStatus = 'Menurun' | 'Stabil' | 'Meningkat' | 'NoData';

type InfoType = PriceType;

export const getRegionStyle = (infoType: NeracaTabType, statusRaw?: string) => {
    const status = statusRaw || 'NoData';

    if (infoType === 'neraca') {
        return neracaPriceLegend[status as LevelHargaStatus] ?? neracaPriceLegend['NoData'];
    }

    return movementLegend[status as MovementStatus] ?? movementLegend['NoData'];
};
