import { create } from 'zustand';
import { BankAccount } from '../types/BankAccount';

type BankAccountsStore = {
  bankAccounts: BankAccount[];
  addBankAccount: (bAccount: BankAccount) => void;
  setBankAccounts: (bAccounts: BankAccount[]) => void;
  updateBankAccount: (id: string, newData: Partial<BankAccount>) => void;
  removeBankAccount: (id: string) => void;
  addBalance: (id: string, value: number) => void;
  removeBalance: (id: string, value: number) => void;
  getSumBalance: () => number;
};

export const useBankAccountsStore = create<BankAccountsStore>((set, get) => ({
  bankAccounts: [],

  addBankAccount: (account) =>
    set((state) => ({
      bankAccounts: [...state.bankAccounts, account],
    })),

  setBankAccounts: (accounts) => set({ bankAccounts: accounts }),

  updateBankAccount: (id, newData) =>
    set((state) => ({
      bankAccounts: state.bankAccounts.map((account) =>
        account.id === id ? { ...account, ...newData } : account
      ),
    })),

  removeBankAccount: (id) =>
    set((state) => ({
      bankAccounts: state.bankAccounts.filter((acc) => acc.id !== id),
    })),

  addBalance: (id, value) =>
    set((state) => ({
      bankAccounts: state.bankAccounts.map((acc) =>
        acc.id === id ? { ...acc, balance: acc.balance + value } : acc
      ),
    })),

  removeBalance: (id, value) =>
    set((state) => ({
      bankAccounts: state.bankAccounts.map((acc) =>
        acc.id === id && acc.balance >= value
          ? { ...acc, balance: acc.balance - value }
          : acc
      ),
    })),
  getSumBalance: () =>
    get().bankAccounts.reduce((sum, acc) => sum + acc.balance, 0),
}));
