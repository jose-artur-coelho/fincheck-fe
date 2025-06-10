import { User } from '../types/User';
import { useUserStore } from '../lib/user.store';

export function syncUserData(user: User) {
  useUserStore.getState().syncUserData(user);
}
