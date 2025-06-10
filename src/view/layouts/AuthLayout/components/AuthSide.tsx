import { Logo } from '../../../components/Logo';
import appExample from '../../../../assets/auth-side.png';

export function AuthSide() {
  return (
    <div className="rounded-2xl hidden lg:flex lg:flex-col lg:items-center lg:justify-center max-w-[650px] w-[35%] max-h-[900px] ">
      <img src={appExample} className="  " />
      <div className="flex flex-col items-start gap-4 bg-white rounded-2xl p-8">
        <Logo color="teal-9" size="sm" />
        <p className="text-[20px]">
          Gerencie suas finanças pessoais de uma forma simples com o fincheck, e
          o melhor, totalmente de graça!
        </p>
      </div>
    </div>
  );
}
