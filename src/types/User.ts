import { BankAccount } from './BankAccount';
import { Category } from './Category';
import { Transaction } from './Transaction';

export type User = {
  name: string;
  categories: Category[];
  bankAccounts: BankAccount[];
  transactions: Transaction[];
};
