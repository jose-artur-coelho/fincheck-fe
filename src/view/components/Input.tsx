import { InputHTMLAttributes } from 'react';
import { ErrorIcon } from './icons/ErrorIcon';
import { AnimatePresence, motion } from 'framer-motion';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: boolean;
  errorMessage?: string | undefined;
};

export const Input = ({
  type,
  label,
  error = undefined,
  errorMessage = '',
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col justify-start gap-3">
      <div className="relative h-[52px] w-full">
        <label className="absolute top-1 left-2.5 text-xs text-gray-7 px-1 pointer-events-none">
          {label}
        </label>
        <input
          type={type}
          className={`w-full h-full pt-[18px] pb-2 px-3 border bg-white rounded-[8px] text-lg focus:outline-none focus:ring-0 transition-all duration-300
            ${
              error
                ? 'border-red-9 focus:border-red-9'
                : 'border-gray-5 focus:border-gray-8'
            } text-gray-8`}
          {...props}
        />
      </div>
      <AnimatePresence>
        {errorMessage && (
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.1 }}
          >
            <ErrorIcon />
            <p className="text-[12px] text-red-9">{errorMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
