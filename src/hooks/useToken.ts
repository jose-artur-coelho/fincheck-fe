import { useState } from 'react';

export function useToken() {
  const [storedValue, setStoredValue] = useState<string | null>(() => {
    const item = localStorage.getItem('token');
    return item ? item : null;
  });

  const setValue = (value: string) => {
    setStoredValue(value);
    localStorage.setItem('token', value);
  };

  return [storedValue, setValue] as const;
}
