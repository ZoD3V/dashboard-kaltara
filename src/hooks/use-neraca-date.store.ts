import { NeracaDateType } from '@/types/neraca';

import { create } from 'zustand';

type InfoDateState = {
    activeDate: NeracaDateType;
    setActiveDate: (tab: NeracaDateType) => void;
};

export const useInfoDateStore = create<InfoDateState>((set) => ({
    activeDate: '3m',
    setActiveDate: (date) => set({ activeDate: date })
}));
