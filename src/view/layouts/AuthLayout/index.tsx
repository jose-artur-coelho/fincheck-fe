import { Outlet } from 'react-router';
import { Brand } from '../../components/Brand';
import appExample from '../../../assets/auth-side.png';
import { SideBrand } from './components/SideBrand';

export function AuthLayout() {
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
          <Brand color="gray-5" size="sm" />
          <Outlet />
        </div>

        <div className="rounded-2xl hidden lg:flex lg:flex-col lg:items-center lg:justify-center max-w-[650px] w-[35%] max-h-[900px] ">
          <img src={appExample} className="  " />
          <SideBrand />
        </div>
      </div>
    </div>
  );
}
