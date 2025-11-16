import { levelHargaLegend } from '@/data/level-price-legend';
import { movementLegend } from '@/data/movement-price-legend';
import { PriceType } from '@/types/price';

type LevelHargaStatus = 'Sangat Rendah' | 'Rendah' | 'Sedang' | 'Tinggi' | 'Sangat Tinggi' | 'NoData';

type MovementStatus = 'Menurun' | 'Stabil' | 'Meningkat' | 'NoData';

type InfoType = PriceType;

export const getRegionStyle = (infoType: InfoType, statusRaw?: string) => {
    const status = statusRaw || 'NoData';

    if (infoType === 'level-harga') {
        return levelHargaLegend[status as LevelHargaStatus] ?? levelHargaLegend['NoData'];
    }

    return movementLegend[status as MovementStatus] ?? movementLegend['NoData'];
};
