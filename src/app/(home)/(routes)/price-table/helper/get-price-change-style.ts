import { movementLegend } from '@/data/movement-price-legend';
import { MovementStatus } from '@/types/status';

type RegionVisualStyle = {
    fill: string;
    statusColor: string;
    valueColor: string;
};

export const getMovementStyle = (statusRaw?: string): RegionVisualStyle => {
    const status = (statusRaw || 'NoData') as MovementStatus;

    const cfg = movementLegend[status] ?? movementLegend['NoData'];

    return {
        fill: cfg.fill,
        statusColor: cfg.statusColor,
        valueColor: cfg.valueColor
    };
};
