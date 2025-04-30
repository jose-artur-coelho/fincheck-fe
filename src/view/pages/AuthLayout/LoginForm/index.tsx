import { Link } from 'react-router';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';

export function LoginForm() {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-col gap-4 items-center mb-12">
        <h2 className="text-[24px] font-bold">Entre em sua conta</h2>
        <p className="text-[16px]">
          Novo por aqui?{' '}
          <Link className="text-teal-9" to="/auth/signup">
            Crie uma conta
          </Link>
        </p>
      </div>
      <form className="flex flex-col gap-4 w-full ">
        <Input type="email" label="E-mail" />
        <Input type="password" label="Senha" />

        <Button>Entrar</Button>
      </form>
    </div>
  );
}
