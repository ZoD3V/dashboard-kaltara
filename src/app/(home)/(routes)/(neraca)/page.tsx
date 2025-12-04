'use client';
import { useState } from 'react';

import { commodityItems } from '@/data/commodity-items';
import { NeracaDateType, NeracaTabType } from '@/types/neraca';

import KaltaraMap from './_components/kaltara-maps';
import NeracaFilter from './_components/neraca-filter';
import PriceCorrelation from './_components/price-correlation';
import TrenRegionCommodity from './_components/tren-region-commodity';

const DashboardNeracaPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<NeracaTabType>('neraca');
    const [selectedCommodity, setSelectedCommodity] = useState<string>(commodityItems[0]?.id ?? '');

    const [activeDate, setActiveDate] = useState<NeracaDateType>('3m');

    return (
        <>
            <NeracaFilter
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                selectedCommodity={selectedCommodity}
                setSelectedCommodity={setSelectedCommodity}
                activeDate={activeDate}
                setActiveDate={setActiveDate}
            />

            <KaltaraMap activeTab={activeTab} selectedCommodity={selectedCommodity} activeDate={activeDate} />
            <TrenRegionCommodity />
            <PriceCorrelation />
        </>
    );
};

export default DashboardNeracaPage;
