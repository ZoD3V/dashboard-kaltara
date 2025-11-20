import { levelHargaLegend } from '@/data/level-price-legend';
import { movementLegend } from '@/data/movement-price-legend';
import { PriceType } from '@/types/price';
import { MovementStatus } from '@/types/status';

type LevelHargaStatus = 'Lebih Rendah' | 'Sama' | 'Sedang' | 'Tinggi' | 'Lebih Tinggi' | 'NoData';

type InfoType = PriceType;

export const getRegionStyle = (infoType: InfoType, statusRaw?: string) => {
    const status = statusRaw || 'NoData';

    if (infoType === 'level-harga') {
        return levelHargaLegend[status as LevelHargaStatus] ?? levelHargaLegend['NoData'];
    }

    return movementLegend[status as MovementStatus] ?? movementLegend['NoData'];
};
