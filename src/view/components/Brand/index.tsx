import { FincheckIcon } from '../icons/FincheckIcon';

type BrandProps = {
  color: 'gray-0' | 'gray-5' | 'teal-9';
  size: 'sm' | 'md';
};

export function Brand({ color, size }: BrandProps) {
  const sizeMap = {
    sm: 'text-xl',
    md: 'text-[32px]',
  };
  const colorMap = {
    'gray-0': 'text-gray-0',
    'gray-5': 'text-gray-5',
    'teal-9': 'text-teal-9',
  };

  return (
    <div className="flex items-center justify-center gap-1 ">
      <FincheckIcon color={color} size={size} />
      <p className={`${sizeMap[size]} ${colorMap[color]} `}>fincheck</p>
    </div>
  );
}
