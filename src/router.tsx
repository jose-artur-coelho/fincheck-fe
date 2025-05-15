import { createBrowserRouter, redirect } from 'react-router';
import { LaunchScreen } from './view/pages/LaunchScreen';
import { AuthLayout } from './view/layouts/AuthLayout';
import { Login } from './view/pages/Login';
import { SignUp } from './view/pages/SignUp';
import { Home } from './view/pages/DashBoard';

export const Router = createBrowserRouter([
  { path: '/', Component: LaunchScreen },
  {
    Component: AuthLayout,
    children: [
      { path: '/auth', loader: () => redirect('login') },
      { path: '/auth/login', Component: Login },
      { path: '/auth/signup', Component: SignUp },
    ],
  },
  { path: '/home', Component: Home },
]);
