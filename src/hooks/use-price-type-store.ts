import { PriceType } from '@/types/price';

import { create } from 'zustand';

type InfoPriceState = {
    selectedPriceType: PriceType;
    setSelectedPriceType: (type: PriceType) => void;
};

export const useTypePriceStore = create<InfoPriceState>((set) => ({
    selectedPriceType: 'level-harga', // default
    setSelectedPriceType: (type) => set({ selectedPriceType: type })
}));
