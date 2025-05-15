type LeftArrowProps = {
  disabled?: boolean;
};

export function LeftArrow({ disabled = false }: LeftArrowProps) {
  return (
    <svg
      className={`h-3 w-3 md:h-4 md:w-4   ${
        disabled && 'cursor-auto opacity-15'
      } `}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 1L1 7L7 13"
        stroke="#f8f9fa"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
