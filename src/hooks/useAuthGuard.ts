import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { httpService } from '../service/HttpService';
import { useToken } from './useToken';
import { syncUserData } from '../store/SyncUserData';
import { useUserStore } from '../store/UserStore';

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
    const MINIMUM_DISPLAY_TIME = 1000;

    const checkAuth = async () => {
      const delay = new Promise((resolve) =>
        setTimeout(resolve, MINIMUM_DISPLAY_TIME)
      );

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
        console.error(err);
      } finally {
        await delay;
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
