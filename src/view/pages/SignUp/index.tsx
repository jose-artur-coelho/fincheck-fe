import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FieldError } from '../../components/FieldError';

const signUpSchema = z.object({
  nome: z
    .string()
    .nonempty('O nome é obrigatório')
    .min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('Insira um e-mail válido'),
  password: z
    .string()
    .nonempty('A senha é obrigatória')
    .min(8, 'A senha deve ter pelo menos 8 caracteres'),
});

type SingUpSchema = z.infer<typeof signUpSchema>;

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SingUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  function onSubmit(data: SingUpSchema) {
    console.log(data);
  }
  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-col gap-4 items-center mb-12">
        <h2 className="text-[24px] font-bold">Crie sua conta</h2>
        <p className="text-[16px]">
          Já possui uma conta?{' '}
          <Link className="text-teal-9" to="/login">
            Fazer login
          </Link>
        </p>
      </div>
      <form
        className="flex flex-col gap-4 w-full"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Input
          type="text"
          label="Nome"
          error={Boolean(errors.nome)}
          {...register('nome')}
        />
        {errors.nome?.message && (
          <FieldError errorMessage={errors.nome.message} />
        )}

        <Input
          type="email"
          label="E-mail"
          error={Boolean(errors.email)}
          {...register('email')}
        />
        {errors.email?.message && (
          <FieldError errorMessage={errors.email.message} />
        )}

        <Input
          type="password"
          label="Senha"
          error={Boolean(errors.password)}
          {...register('password')}
        />
        {errors.password?.message && (
          <FieldError errorMessage={errors.password.message} />
        )}

        <Button>Criar conta</Button>
      </form>
    </div>
  );
}
