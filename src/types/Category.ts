import { TransactionType } from './TransactionType';

export type Category = {
  id: string;
  name: string;
  icon: string;
  type: TransactionType;
};
