type FincheckIconProps = {
  color: 'gray-0' | 'gray-5' | 'teal-9';
  size: 'sm' | 'md';
};

export function FincheckIcon({ color, size }: FincheckIconProps) {
  const sizeMap = {
    sm: 'h-[24px] w-[24px]',
    md: 'h-[40px] w-[40px]',
  };
  const colorMap = {
    'gray-0': 'text-gray-0',
    'gray-5': 'text-gray-5',
    'teal-9': 'text-teal-9',
  };
  return (
    <svg
      width="41"
      height="40"
      className={`${colorMap[color]} ${sizeMap[size]} `}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.1237 12.6426H16.0381C12.3897 12.6426 10.1016 15.2262 10.1016 18.8837V28.7515C10.1016 32.409 12.3771 34.9925 16.0381 34.9925H31.1219C34.7847 34.9925 37.062 32.409 37.062 28.7515V18.8837C37.062 15.2262 34.7847 12.6426 31.1237 12.6426Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0146 20.0801H31.1399"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.5362 12.6401L27.8932 8.23492C25.9995 5.1162 22.724 4.064 19.5802 5.95938L6.6656 13.7319C3.53425 15.6129 2.90367 19.0055 4.78464 22.1495L9.88702 30.5922C10.1249 31.0012 10.3879 31.3687 10.6888 31.6983V31.711"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
