import { ReactNode, useState } from 'react';
import { BlurContext } from './BlurContext';

type BlurProviderProps = {
  children: ReactNode;
};

export function BlurProvider({ children }: BlurProviderProps) {
  const [isVisible, setIsvisible] = useState(false);

  function toggleVisibility() {
    setIsvisible((prev) => !prev);
  }

  return (
    <BlurContext.Provider value={{ isVisible, toggleVisibility }}>
      {children}
    </BlurContext.Provider>
  );
}
