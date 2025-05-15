import { formatToReal } from '../../../../../../utils/format-to-real';
import { Eye } from '../../../../../components/Eye';
import { useBlur } from '../../../../../../context/Blur';

export function Balance() {
  const { isVisible, toggleVisibility } = useBlur();
  return (
    <div className="flex flex-col items-start gap-2">
      <p className="text-white text-[16px]">Saldo total</p>
      <div className="text-white text-2xl lg:text-3xl font-bold flex items-center w-full md:w-fit justify-between md:gap-5 select-none">
        <p
          className={`transition-filter duration-500 ${
            !isVisible && 'blurred-text'
          }`}
        >
          {formatToReal(100.56)}
        </p>
        <Eye open={isVisible} onClick={toggleVisibility} />
      </div>
    </div>
  );
}
