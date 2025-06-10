import { createContext } from 'react';

type ContextType = {
  isVisible: boolean;
  toggleVisibility: () => void;
};
export const BlurContext = createContext<ContextType | undefined>(undefined);
