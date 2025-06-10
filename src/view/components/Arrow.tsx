import { HTMLAttributes } from 'react';
import { LeftArrowIcon } from './icons/arrow/LeftArrowIcon';
import { RightArrowIcon } from './icons/arrow/RightArrowIcon';

type ArrowProps = HTMLAttributes<HTMLDivElement> & {
  direction: 'right' | 'left';
  disabled?: boolean;
};
export function Arrow({ direction, disabled = false, onClick }: ArrowProps) {
  return (
    <div
      onClick={onClick}
      className={` h-[32px] w-[32px] md:h-[40px] md:w-[40px] p-1 md:p-2 flex items-center justify-center rounded-full  ${
        !disabled && 'cursor-pointer  hover:bg-teal-7 active:bg-teal-8'
      } `}
    >
      {direction == 'left' ? (
        <LeftArrowIcon disabled={disabled} />
      ) : (
        <RightArrowIcon disabled={disabled} />
      )}
    </div>
  );
}
