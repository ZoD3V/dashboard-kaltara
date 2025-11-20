import { levelHargaLegend } from '@/data/level-price-legend';

type LevelHargaStatus = 'Lebih Rendah' | 'Sama' | 'Sedang' | 'Tinggi' | 'Lebih Tinggi' | 'NoData';

type RegionVisualStyle = {
    fill: string;
    statusColor: string;
    valueColor: string;
};

export const getLevelHargaStyle = (statusRaw?: string): RegionVisualStyle => {
    const status = (statusRaw || 'NoData') as LevelHargaStatus;
    const cfg = levelHargaLegend[status] ?? levelHargaLegend['NoData'];

    return {
        fill: cfg.fill,
        statusColor: cfg.statusColor,
        valueColor: cfg.valueColor
    };
};
