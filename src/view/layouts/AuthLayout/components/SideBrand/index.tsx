import { Brand } from '../../../../components/Brand';

export function SideBrand() {
  return (
    <div className="flex flex-col items-start gap-4 bg-white rounded-2xl p-8">
      <Brand color="teal-9" size="sm" />
      <p className="text-[20px]">
        Gerencie suas finanças pessoais de uma forma simples com o fincheck, e o
        melhor, totalmente de graça!
      </p>
    </div>
  );
}
