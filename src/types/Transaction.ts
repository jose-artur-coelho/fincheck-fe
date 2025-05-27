import { TransactionType } from './TransactionType';

export type Transaction = {
  id: string;
  name: string;
  value: number;
  date: Date;
  type: TransactionType;
  bankAccountId: string;
  categoryId: string;
};
