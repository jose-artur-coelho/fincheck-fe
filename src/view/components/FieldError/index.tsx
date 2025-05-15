import { XIcon } from '../icons/XIcon';

type FieldErrorProps = {
  errorMessage: string;
};

export function FieldError({ errorMessage }: FieldErrorProps) {
  return (
    <div className="flex items-center gap-2 animate-fade-in-up">
      <XIcon />
      <p className="text-[12px] text-red-9">{errorMessage}</p>
    </div>
  );
}
