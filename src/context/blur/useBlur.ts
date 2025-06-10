import { useContext } from 'react';
import { BlurContext } from './BlurContext';

export function useBlur() {
  const context = useContext(BlurContext);
  if (!context)
    throw new Error('useBlur deve ser usado dentro de um BlurProvider');
  return context;
}
