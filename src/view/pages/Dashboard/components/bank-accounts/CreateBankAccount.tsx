import { CrossIcon } from '../../../../components/icons/CrossIcon';

export function CreateBankAccount() {
  return (
    <div
      className="border-dashed border-teal-6 border-2 rounded-2xl flex flex-col 
    w-[80%] md:w-[50%] lg:w-full
    items-center justify-center gap-5 cursor-pointer hover:bg-teal-8 active:bg-teal-7 h-[140px] md:h-[180px] lg:h-[200px]"
    >
      <div className="p-3 flex items-center justify-center border-dashed border-white border-2 rounded-full">
        <CrossIcon />
      </div>
      <p className="text-white select-none">Cadastre uma nova conta</p>
    </div>
  );
}
