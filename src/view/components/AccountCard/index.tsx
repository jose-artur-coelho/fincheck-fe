import { useBlur } from '../../../context/Blur';
import { formatToReal } from '../../../utils/format-to-real';
import { CheckingAccountIcon } from '../icons/account/CheckingAccountIcon';
import { InvestmentAccountIcon } from '../icons/account/InvestimentAccountIcon';
import { CashIcon } from '../icons/account/CashIcon';
import { BankAccountType } from '../../../types/BankAccountType';

type AccountCardProps = {
  name: string;
  type: BankAccountType;
  balance: number;
};

export function AccountCard({ name, type, balance }: AccountCardProps) {
  const { isVisible } = useBlur();
  return (
    <div className=" h-[140px] md:h-[180px] lg:h-[200px]  bg-white rounded-2xl p-2 md:p-5 flex flex-col justify-between hover:bg-gray-1 border-b-4 border-b-grape-9">
      <div className="flex flex-col items-start gap-2.5">
        <div className="p-2 h-[32px] w-[32px] md:h-[42px] md:w-[42px] rounded-full flex items-center justify-center bg-gray-2 ">
          {type === BankAccountType.CHECKING ? (
            <CheckingAccountIcon />
          ) : type === BankAccountType.INVESTMENT ? (
            <InvestmentAccountIcon />
          ) : (
            <CashIcon />
          )}
        </div>
        <p className="font-bold text-[16px] md:text-[18px]">{name}</p>
      </div>
      <div>
        <p
          className={`text-gray-8 text-[14px] md:text-[18px] font-medium transition-filter duration-500 ${
            !isVisible && 'blurred-text'
          }`}
        >
          {formatToReal(balance)}
        </p>
        <p className="text-gray-6 text-[12px] md:text-[14px] ">Saldo atual</p>
      </div>
    </div>
  );
}
