import { ReactNode } from 'react';

type buttonProps = {
  variant?: 'default' | 'destructive' | 'cancel' | 'ghost';
  children: ReactNode;
  disabled?: boolean;
};

export function Button({
  variant = 'default',
  children,
  disabled = false,
}: buttonProps) {
  const variantMap = {
    default: 'bg-teal-9 hover:bg-teal-8 active:bg-teal-9 ',
    destructive: 'bg-red-9 hover:bg-red-8 active:bg-red-9',
    cancel: 'border border-gray-8 text-gray-8 hover:bg-gray-3 active:bg-gray-0',
    ghost: 'text-teal-9',
  };

  return (
    <button
      disabled={disabled}
      className={`text-center text-gray-0 h-14 px-6 rounded-2xl w-full
      flex justify-center items-center cursor-pointer disabled:bg-gray-1 disabled:text-gray-4 disabled:cursor-default disabled:border-none ${variantMap[variant]} `}
    >
      {children}
    </button>
  );
}
