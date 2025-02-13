import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useHomeStore = create(
  persist(
    (set, get) => ({
      currentTab: 0,
      setCurrentTab: (index) => set(() => ({ currentTab: index })),
      resetStatus: () => ({ currentTab: 0 }),
    }),
    {
      name: 'home-store', // 存储名称
      getStorage: () => localStorage,
    }
  )
);

export default useHomeStore;
