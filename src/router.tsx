import { createBrowserRouter, redirect } from 'react-router';
import { SplashScreen } from './view/pages/SplashScreen';
import { AuthLayout } from './view/pages/AuthLayout';
import { LoginForm } from './view/pages/AuthLayout/LoginForm';
import { Input } from './view/components/Input';
import { SignUpForm } from './view/pages/AuthLayout/SignUpForm';

export const router = createBrowserRouter([
  { path: '/', Component: SplashScreen },
  {
    Component: AuthLayout,
    children: [
      { index: true, path: '/auth', loader: () => redirect('login') },
      { index: true, path: '/auth/login', Component: LoginForm },
      { index: true, path: '/auth/signup', Component: SignUpForm },
    ],
  },
  { path: 'teste', element: <Input label="teste" type="text" /> },
]);
