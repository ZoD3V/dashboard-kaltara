import { PriceChangeType } from '@/types/price';

import { create } from 'zustand';

type InfoPriceState = {
    activeTab: PriceChangeType;
    setActiveTab: (tab: PriceChangeType) => void;
};

export const useInfoPriceStore = create<InfoPriceState>((set) => ({
    activeTab: 'price', // default
    setActiveTab: (tab) => set({ activeTab: tab })
}));
