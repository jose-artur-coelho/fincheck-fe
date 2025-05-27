import axios from 'axios';
import { User } from '../types/User';
// import { useCategoriesStore } from '../store/CategoriesStore';
// import { useBankAccountsStore } from '../store/BankAccountsStore';
// import { useAuthStore } from '../store/AuthStore';
// import { useTransactionsStore } from '../store/TransactionsStore';

class HttpService {
  API_URL = 'http://localhost:3000';
  AUTH_URL = this.API_URL + '/auth';
  USERS_URL = this.API_URL + '/users';
  TRANSACTIONS_URL = this.API_URL + '/transactions';
  B_ACCOUNTS_URL = this.API_URL + '/bank-accounts';
  CATEGORIES_URL = this.API_URL + '/categories';

  async login(login: { email: string; password: string }) {
    const response = await axios.post<{ accessToken: string }>(
      `${this.AUTH_URL}/login`,
      login
    );
    return response.data;
  }

  async getUserData(token: string) {
    const response = await axios.get<User>(`${this.USERS_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
}

export const httpService = new HttpService();
