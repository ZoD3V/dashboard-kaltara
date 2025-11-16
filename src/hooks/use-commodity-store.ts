// stores/foodStore.ts
import { create } from 'zustand';

type commodityId = string;

type commodityState = {
    selectedCommodity: commodityId;
    setselectedCommodity: (id: commodityId) => void;
};

export const useCommodityStore = create<commodityState>((set) => ({
    selectedCommodity: 'beras',
    setselectedCommodity: (id) => set({ selectedCommodity: id })
}));
