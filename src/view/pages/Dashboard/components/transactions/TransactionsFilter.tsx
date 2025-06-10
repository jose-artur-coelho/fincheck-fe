import { FilterIcon } from '../../../../components/icons/FilterIcon';
import { TransactionsFilterOption } from './TransactionsFilterOption';

export function TransactionsFilter() {
  return (
    <div className="flex items-center justify-between">

      
      <TransactionsFilterOption value="Receitas" type="income" />

      <TransactionsFilterOption value="Despesas" type="expense" />

      <TransactionsFilterOption value="Transações" type="all" />

      <button>
        <FilterIcon />
      </button>
    </div>
  );
}
