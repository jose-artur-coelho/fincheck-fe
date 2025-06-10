import { BlurProvider } from '../../../context/blur/BlurProvider';
import { useAuthGuard } from '../../../hooks/useAuthGuard';
import { LaunchScreen } from '../../components/LaunchScreen';
import { useUserStore } from '../../../lib/user.store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Balance } from './components/Balance';
import { BankAccountsContainer } from './components/bank-accounts/BankAccountsContainer';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { TransactionsFilter } from './components/transactions/TransactionsFilter';

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
              <BankAccountsContainer />
            </div>
          </Container>

          <Container color="gray">
            <div className="flex flex-col justify-between h-full">
              <TransactionsFilter />
            </div>
          </Container>
        </div>
      </div>
    </BlurProvider>
  );
}
