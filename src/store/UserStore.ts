import { create } from 'zustand';

type UserStore = {
  name: string;
  isAuthenticated: boolean;
  setIsAuthenticated: (newValue: boolean) => void;
  setName: (name: string) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  name: '',
  isAuthenticated: false,
  setName: (name) => set({ name }),
  setIsAuthenticated: (newValue) => set({ isAuthenticated: newValue }),
}));
