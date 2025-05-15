import { HTMLAttributes } from 'react';
import { ClosedEyeIcon } from '../icons/eye/ClosedEyeIcon';
import { OpenEyeIcon } from '../icons/eye/OpenEyeIcon';

type EyeProps = HTMLAttributes<HTMLDivElement> & {
  open: boolean;
};
export function Eye({ open, ...props }: EyeProps) {
  return (
    <div
      className="cursor-pointer hover:bg-teal-8 h-[42px] w-[42px] p-1 flex items-center justify-center rounded-full active:bg-teal-7"
      {...props}
    >
      {!open ? <OpenEyeIcon /> : <ClosedEyeIcon />}
    </div>
  );
}
