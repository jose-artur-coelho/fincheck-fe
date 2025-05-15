import { Brand } from '../../components/Brand';
import { LoadingIcon } from '../../components/icons/LoadingIcon';

export function LaunchScreen() {
  return (
    <div className="fixed inset-0 flex flex-col gap-4 items-center justify-center bg-teal-9">
      <Brand color="gray-0" size="md" />
      <LoadingIcon />
    </div>
  );
}
