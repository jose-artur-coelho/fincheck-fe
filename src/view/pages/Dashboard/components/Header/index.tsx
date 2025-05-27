import { useUserStore } from '../../../../../store/UserStore';
import { formatName } from '../../../../../utils/format-name';
import { Brand } from '../../../../components/Brand';

export function Header() {
  const name = useUserStore((state) => state.name);
  const formatedName = formatName(name);

  return (
    <header className="flex justify-between">
      <Brand size="sm" color="teal-9" />
      <div className=" flex items-center justify-center text-teal-9 text-[14px] font-medium rounded-full h-12 w-12 bg-teal-0">
        {formatedName}
      </div>
    </header>
  );
}
