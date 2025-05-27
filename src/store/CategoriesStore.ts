import { create } from 'zustand';
import { Category } from '../types/Category';
import { TransactionType } from '../types/TransactionType';

type CategoriesStore = {
  categories: Category[];
  addCategory: (category: Category) => void;
  setCategories: (categories: Category[]) => void;
  updateCategory: (id: string, newData: Partial<Category>) => void;
  removeCategory: (id: string) => void;
  getByType: (type: TransactionType) => Category[];
};

export const useCategoriesStore = create<CategoriesStore>((set, get) => ({
  categories: [],

  addCategory: (account) =>
    set((state) => ({
      categories: [...state.categories, account],
    })),

  setCategories: (categories) => set({ categories: categories }),

  updateCategory: (id, newData) =>
    set((state) => ({
      categories: state.categories.map((cat) =>
        cat.id === id ? { ...cat, ...newData } : cat
      ),
    })),

  removeCategory: (id) =>
    set((state) => ({
      categories: state.categories.filter((cat) => cat.id !== id),
    })),

  getByType: (type) => get().categories.filter((cat) => cat.type === type),
}));
