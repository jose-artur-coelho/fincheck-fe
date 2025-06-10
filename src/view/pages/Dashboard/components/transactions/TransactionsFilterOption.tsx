import { TransactionIcon } from '../../../../components/icons/transaction/TransactionIcon';
import { ExpenseIcon } from '../../../../components/icons/transaction/type/ExpenseIcon';
import { IncomeIcon } from '../../../../components/icons/transaction/type/IncomeIcon';

export function TransactionsFilterOption({
  type,
  value,
}: {
  type: 'all' | 'income' | 'expense';
  value: string;
}) {
  return (
    <div className="flex items-center">
      {type === 'all' ? (
        <TransactionIcon />
      ) : type === 'income' ? (
        <IncomeIcon />
      ) : (
        <ExpenseIcon />
      )}
      <p>{value}</p>
    </div>
  );
}
