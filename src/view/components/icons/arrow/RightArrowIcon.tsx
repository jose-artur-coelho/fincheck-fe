type RightArrowIconProps = {
  disabled?: boolean;
};

export function RightArrowIcon({ disabled = false }: RightArrowIconProps) {
  return (
    <svg
      className={`h-3 w-3 md:h-4 md:w-4  ${disabled && 'opacity-15'} `}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L7 7L1 13"
        stroke="#F8F9FA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
