import { NeracaTabType } from '@/types/neraca';

import { create } from 'zustand';

type InfoTabState = {
    activeTab: NeracaTabType;
    setActiveTab: (tab: NeracaTabType) => void;
};

export const useInfoTabStore = create<InfoTabState>((set) => ({
    activeTab: 'neraca', // default
    setActiveTab: (tab) => set({ activeTab: tab })
}));
