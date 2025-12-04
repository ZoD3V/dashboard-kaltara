'use client';
import { useState } from 'react';

import { PriceChangeType, PriceType } from '@/types/price';

import KaltaraMap from './_components/kaltara-maps';
import NeracaFilter from './_components/price-filter';
import PriceSupplyFilter from './_components/price-supply-chart';

const DashboardPricePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<PriceChangeType>('price');
    const [selectedCommodity, setSelectedCommodity] = useState<string>('beras');
    const [selectedPriceType, setSelectedPriceType] = useState<PriceType>('level-harga');
    const [activeDate, setActiveDate] = useState<string>('2025-11-05');

    return (
        <>
            <NeracaFilter
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                selectedCommodity={selectedCommodity}
                setSelectedCommodity={setSelectedCommodity}
                selectedPriceType={selectedPriceType}
                setSelectedPriceType={setSelectedPriceType}
                activeDate={activeDate}
                setActiveDate={setActiveDate}
            />
            <KaltaraMap
                activeTab={selectedPriceType}
                selectedCommodity={selectedCommodity}
                selectedPriceType={selectedPriceType}
            />
            <PriceSupplyFilter />
        </>
    );
};

export default DashboardPricePage;
