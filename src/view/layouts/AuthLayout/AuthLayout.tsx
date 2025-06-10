import { Outlet } from 'react-router';
import { Logo } from '../../components/Logo';
import { AuthSide } from './components/AuthSide';

import { LaunchScreen } from '../../components/LaunchScreen';

import { useAuthGuard } from '../../../hooks/useAuthGuard';

export function AuthLayout() {
  const { isLoading } = useAuthGuard({ redirectTo: '/dashboard' });

  if (isLoading) {
    return <LaunchScreen />;
  }

  return (
    <div
      className="bg-gray-0 min-h-screen min-w-screen 
      flex lg:block
    "
    >
      <div
        className="flex items-center mx-auto w-[90%] justify-center
        p-8  lg:justify-around
       "
      >
        <div className="flex flex-col justify-around max-w-[440px] w-full gap-12">
          <Logo color="gray-5" size="sm" />
          <Outlet />
        </div>

        <AuthSide />
      </div>
    </div>
  );
}
