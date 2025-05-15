import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: boolean;
};

export const Input = ({ type, label, error = false, ...props }: InputProps) => {
  const errorMap = 'border-red-9 focus:border-red-9';
  return (
    <div className="relative h-[52px] ">
      <label className="absolute top-1 left-2.5 text-xs text-gray-7 px-1 pointer-events-none">
        {label}
      </label>
      <input
        type={type}
        className={`w-full h-full pt-[18px] pb-2 px-3 border border-gray-5 bg-white rounded-[8px] text-lg focus:outline-none focus:ring-0
          transition 
        focus:border-gray-8 text-gray-8 ${error && errorMap}`}
        {...props}
      />
    </div>
  );
};
