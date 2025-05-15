import { ReactNode } from 'react';

type ContainerProps = {
  color: 'teal' | 'gray';
  children: ReactNode;
};

export function Container({ color, children }: ContainerProps) {
  const colorMap = {
    teal: 'bg-teal-9',
    gray: 'bg-gray-0',
  };
  return (
    <div
      className={`rounded-2xl flex-1 overflow-hidden px-4 py-3 md:p-8 ${colorMap[color]}`}
    >
      {children}
    </div>
  );
}
