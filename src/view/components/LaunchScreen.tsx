import { Logo } from './Logo';
import { LoadingIcon } from './icons/LoadingIcon';

export function LaunchScreen() {
  return (
    <div className="fixed inset-0 flex flex-col gap-4 items-center justify-center bg-teal-9">
      <Logo color="gray-0" size="md" />
      <LoadingIcon />
    </div>
  );
}
