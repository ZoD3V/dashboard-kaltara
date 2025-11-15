import { create } from 'zustand';

export type TabType = 'neraca' | 'ketersediaan' | 'kebutuhan';

type InfoTabState = {
    activeTab: TabType;
    setActiveTab: (tab: TabType) => void;
};

export const useInfoTabStore = create<InfoTabState>((set) => ({
    activeTab: 'neraca', // default
    setActiveTab: (tab) => set({ activeTab: tab })
}));
