import { create } from 'zustand';
import { Category } from '../types/Category';
import { BankAccount } from '../types/BankAccount';
import { Transaction } from '../types/Transaction';
import { TransactionType } from '../types/TransactionType';
import { User } from '../types/User';

type UserStore = {
  name: string;
  isAuthenticated: boolean;
  categories: Category[];
  bankAccounts: BankAccount[];
  transactions: Transaction[];

  getCategoriesByType: (type: TransactionType) => Category[];
  getBankAccountsSum: () => number;
  getTransactionsByCategory: (categoryId: string) => Transaction[];
  getTransactionsTotalByCategory: (categoryId: string) => number;
  getTransactionsByType: (type: TransactionType) => Transaction[];

  syncUserData: (user: User) => void;
};

export const useUserStore = create<UserStore>((set, get) => ({
  name: '',
  isAuthenticated: false,
  categories: [],
  bankAccounts: [],
  transactions: [],

  getCategoriesByType: (type) =>
    get().categories.filter((cat) => cat.type === type),

  getBankAccountsSum: () =>
    get().bankAccounts.reduce((sum, acc) => sum + acc.balance, 0),

  getTransactionsByCategory: (categoryId) =>
    get().transactions.filter((t) => t.categoryId === categoryId),

  getTransactionsTotalByCategory: (categoryId) =>
    get()
      .transactions.filter((t) => t.categoryId === categoryId)
      .reduce((sum, t) => sum + t.value, 0),

  getTransactionsByType: (type) =>
    get().transactions.filter((t) => t.type === type),

  syncUserData: (user) => {
    set({
      name: user.name,
      isAuthenticated: true,
      categories: user.categories,
      bankAccounts: user.bankAccounts,
      transactions: user.transactions,
    });
  },
}));
