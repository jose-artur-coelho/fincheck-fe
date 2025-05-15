import { createContext, ReactNode, useContext, useState } from 'react';

type ContextType = {
  isVisible: boolean;
  toggleVisibility: () => void;
};
const BlurContext = createContext<ContextType | undefined>(undefined);

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

export function useBlur() {
  const context = useContext(BlurContext);
  if (!context)
    throw new Error('useBlur deve ser usado dentro de <BlurProvider>');
  return context;
}
