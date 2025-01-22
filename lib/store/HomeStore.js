import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useHomeStore = create(
  persist(
    (set, get) => ({
      currentTab: -1,
      setCurrentTab: (index) => set(() => ({ currentTab: index })),
      resetStatus: () => ({ currentTab: -1 }),
    }),
    {
      name: 'home-store', // 存储名称
      getStorage: () => localStorage,
    }
  )
);

export default useHomeStore;
