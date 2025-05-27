import { createBrowserRouter, redirect } from 'react-router';
import { AuthLayout } from './view/layouts/AuthLayout';
import { Login } from './view/pages/Login';
import { SignUp } from './view/pages/SignUp';
import { Dashboard } from './view/pages/Dashboard';

export const Router = createBrowserRouter([
  {
    Component: AuthLayout,
    children: [
      { path: '/login', Component: Login },
      { path: '/signup', Component: SignUp },
    ],
  },
  { path: '/dashboard', Component: Dashboard },

  { path: '*', loader: () => redirect('/dashboard') },
]);
