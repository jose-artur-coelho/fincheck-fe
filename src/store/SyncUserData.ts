import { User } from '../types/User';
import { useBankAccountsStore } from './BankAccountsStore';
import { useCategoriesStore } from './CategoriesStore';
import { useTransactionsStore } from './TransactionsStore';
import { useUserStore } from './UserStore';

export function syncUserData(user: User) {
  const { categories, bankAccounts, transactions, name } = user;
  useUserStore.getState().setName(name);
  useUserStore.getState().setIsAuthenticated(true);
  useCategoriesStore.getState().setCategories(categories);
  useBankAccountsStore.getState().setBankAccounts(bankAccounts);
  useTransactionsStore.getState().setTransactions(transactions);
}
