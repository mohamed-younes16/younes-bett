import { create } from "zustand";

type Store = {
  isReady: boolean;
  setIsReady: (v: boolean) => void;
};

export const useStore = create<Store>()(
  
    (set) => ({
      isReady: false,
      setIsReady: (v: boolean) => set({ isReady: v }),
    }),

  
);