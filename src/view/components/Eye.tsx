import { HTMLAttributes } from 'react';
import { ClosedEyeIcon } from './icons/eye/ClosedEyeIcon';
import { OpenedEyeIcon } from './icons/eye/OpenedEyeIcon';
import { motion, AnimatePresence } from 'framer-motion';

type EyeProps = HTMLAttributes<HTMLDivElement> & {
  open: boolean;
};

export function Eye({ open, ...props }: EyeProps) {
  return (
    <div
      className="cursor-pointer hover:bg-teal-8 h-[42px] w-[42px] p-1 flex items-center justify-center rounded-full active:bg-teal-7"
      {...props}
    >
      <AnimatePresence mode="wait" initial={false}>
        {open ? (
          <motion.span
            key="closed"
            initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'flex' }}
          >
            <ClosedEyeIcon />
          </motion.span>
        ) : (
          <motion.span
            key="open"
            initial={{ opacity: 0, rotate: 20, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'flex' }}
          >
            <OpenedEyeIcon />
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
