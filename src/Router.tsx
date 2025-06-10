import { createBrowserRouter, redirect } from 'react-router';
import { AuthLayout } from './view/layouts/AuthLayout/AuthLayout';
import { Login } from './view/pages/Login/Login';
import { SignUp } from './view/pages/SignUp/SignUp';
import { Dashboard } from './view/pages/Dashboard/DashBoard';

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
