import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { httpService } from '../lib/http.service';
import { useToken } from './useToken';
import { syncUserData } from '../utils/sync-user-data';
import { useUserStore } from '../lib/user.store';
import { AxiosError } from 'axios';

export function useAuthGuard({
  redirectTo = '/dashboard',
}: {
  redirectTo?: string;
}) {
  const [token] = useToken();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  useEffect(() => {
    let isMounted = true;
    const MINIMUM_DISPLAY_TIME = 1200;

    const checkAuth = async () => {
      const delay = new Promise((resolve) =>
        setTimeout(resolve, MINIMUM_DISPLAY_TIME)
      );

      await delay;

      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        if (!isAuthenticated) {
          const data = await httpService.getUserData(token);
          syncUserData(data);
        }
        if (location.pathname !== redirectTo && isMounted) {
          navigate(redirectTo, { replace: true });
        }
      } catch (err) {
        let toastMsg = 'Erro ao autenticar. Tente novamente.';

        if ((err as AxiosError)?.response?.status === 401) {
          toastMsg = 'Sessão expirada. Faça o login novamente.';
        } else if ((err as AxiosError)?.message === 'Network Error') {
          toastMsg =
            'Erro de conexão com o servidor. Por favor, tente novamente mais tarde.';
        }

        if (isMounted) {
          navigate('/login', { replace: true, state: { toast: toastMsg } });
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    checkAuth();

    return () => {
      isMounted = false;
    };
  }, [token, isAuthenticated, navigate, location.pathname, redirectTo]);

  return { isLoading };
}
