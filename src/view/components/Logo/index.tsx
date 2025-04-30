import FincheckIcon from '../../../assets/logo.svg?react';

type LogoProps = {
  color: 'gray-0' | 'gray-5' | 'teal-9';
  size: 'sm' | 'md';
};

export function Logo({ color, size }: LogoProps) {
  const sizeMap = {
    sm: 'h-[24px] w-[24px]',
    md: 'h-[40px] w-[40px]',
  };
  const colorMap = {
    'gray-0': 'text-gray-0',
    'gray-5': 'text-gray-5',
    'teal-9': 'text-teal-9',
  };

  return <FincheckIcon className={`${colorMap[color]} ${sizeMap[size]}  `} />;
}
