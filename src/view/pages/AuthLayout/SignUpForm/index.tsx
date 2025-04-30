import { Link } from 'react-router';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

export function SignUpForm() {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-col gap-4 items-center mb-12">
        <h2 className="text-[24px] font-bold">Crie sua conta</h2>
        <p className="text-[16px]">
          Já possui uma conta?{' '}
          <Link className="text-teal-9" to="/auth/login">
            Fazer login
          </Link>
        </p>
      </div>
      <form className="flex flex-col gap-4 w-full ">
        <Input type="text" label="Nome" />
        <Input type="email" label="E-mail" />
        <Input type="password" label="Senha" />

        <Button>Criar conta</Button>
      </form>
    </div>
  );
}
