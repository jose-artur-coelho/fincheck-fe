import { create } from 'zustand';
import { Transaction } from '../types/Transaction';
import { TransactionType } from '../types/TransactionType';

type transactionsStore = {
  transactions: Transaction[];
  addTransaction: (category: Transaction) => void;
  setTransactions: (transactions: Transaction[]) => void;
  updateTransaction: (id: string, newData: Partial<Transaction>) => void;
  removeTransaction: (id: string) => void;
  getByCategory: (CategoryId: string) => Transaction[];
  removeByCategory: (categoryId: string) => void;
  getTotalByCategory: (categoryId: string) => number;
  getByType: (type: TransactionType) => Transaction[];
};

export const useTransactionsStore = create<transactionsStore>((set, get) => ({
  transactions: [],

  addTransaction: (account) =>
    set((state) => ({
      transactions: [...state.transactions, account],
    })),

  setTransactions: (transactions) => set({ transactions: transactions }),

  updateTransaction: (id, newData) =>
    set((state) => ({
      transactions: state.transactions.map((t) =>
        t.id === id ? { ...t, ...newData } : t
      ),
    })),

  removeTransaction: (id) =>
    set((state) => ({
      transactions: state.transactions.filter((t) => t.id !== id),
    })),

  getByCategory: (categoryId) =>
    get().transactions.filter((t) => t.categoryId === categoryId),

  removeByCategory: (categoryId) =>
    set((state) => ({
      transactions: state.transactions.filter(
        (t) => t.categoryId !== categoryId
      ),
    })),

  getTotalByCategory: (categoryId) =>
    get()
      .transactions.filter((t) => t.categoryId === categoryId)
      .reduce((sum, t) => sum + t.value, 0),

  getByType: (type) => get().transactions.filter((t) => t.type === type),
}));
