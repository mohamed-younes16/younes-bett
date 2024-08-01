import { create } from "zustand";

type Store = {
  isReady: boolean;
  setIsReady: (v: boolean) => void;
};

export const useStore = create<Store>()((set) => ({
  isReady: true,
  setIsReady: (v: boolean) => set((state) => ({ isReady: v })),
}));
