import { BankAccountType } from './BankAccountType';

export type BankAccount = {
  id: string;
  name: string;
  balance: number;
  type: BankAccountType;
  color: string;
};
