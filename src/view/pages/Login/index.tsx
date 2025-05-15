import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { FieldError } from '../../components/FieldError';

const loginSchema = z.object({
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('Insira um e-mail válido para entrar'),
  password: z
    .string()
    .nonempty('A senha é obrigatória')
    .min(8, 'A senha deve ter pelo menos 8 caracteres'),
});

type LoginSchema = z.infer<typeof loginSchema>;

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: LoginSchema) {
    console.log(data);
  }

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
      <form
        className="flex flex-col gap-4 w-full "
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
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
          {...register('password')}
          error={Boolean(errors.password)}
        />
        {errors.password?.message && (
          <FieldError errorMessage={errors.password.message} />
        )}

        <Button>Entrar</Button>
      </form>
    </div>
  );
}
