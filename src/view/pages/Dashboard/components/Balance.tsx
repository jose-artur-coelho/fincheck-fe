import { useBlur } from '../../../../context/blur/useBlur';
import { useUserStore } from '../../../../lib/user.store';
import { formatToReal } from '../../../../utils/format-to-real';
import { Eye } from '../../../components/Eye';

export function Balance() {
  const { isVisible, toggleVisibility } = useBlur();
  const saldoTotal = useUserStore((state) => state.getBankAccountsSum());

  return (
    <div className="flex flex-col items-start gap-2">
      <p className="text-white text-[16px]">Saldo total</p>
      <div className="text-white text-2xl lg:text-3xl font-bold flex items-center w-full md:w-fit justify-between md:gap-5 select-none">
        <p
          className={`transition-filter duration-500 ${
            !isVisible && 'blurred-text'
          }`}
        >
          {formatToReal(saldoTotal)}
        </p>
        <Eye open={isVisible} onClick={toggleVisibility} />
      </div>
    </div>
  );
}
