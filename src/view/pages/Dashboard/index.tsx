import { BlurProvider } from '../../../context/Blur';
import { useAuthGuard } from '../../../hooks/useAuthGuard';
import { LaunchScreen } from '../../components/LaunchScreen';
import { Accounts } from './components/Accounts';
import { Balance } from './components/Accounts/Balance';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { useUserStore } from '../../../store/UserStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export function Dashboard() {
  const { isLoading } = useAuthGuard({ redirectTo: undefined });
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login', { replace: true });
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) {
    return <LaunchScreen />;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <BlurProvider>
      <div className="mx-auto p-3 md:p-10 flex flex-col gap-2 h-screen max-w-[1500px] overflow-hidden  ">
        <Header />
        <div className="flex flex-col lg:flex-row gap-4 h-full ">
          <Container color="teal">
            <div className="flex flex-col justify-between h-full">
              <Balance />
              <Accounts />
            </div>
          </Container>

          <Container color="gray">s</Container>
        </div>
      </div>
    </BlurProvider>
  );
}
