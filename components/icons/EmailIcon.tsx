type EmailIconProps = {
  size?: number;
  className?: string;
};

export default function EmailIcon({
  size = 35,
  className
}: EmailIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 30 30"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 5c-.7044 0-1.3197.3628-1.6758.9102L14.293 16.8789c.4039.4039 1.0101.4039 1.4141 0L26.6758 5.9102C26.3197 5.3628 25.7044 5 25 5H5zM3 8.4141V23c0 1.108.892 2 2 2h20c1.108 0 2-.892 2-2V8.4141l-9.8789 9.8789c-1.163 1.163-3.0792 1.163-4.2422 0L3 8.4141z"
        fill="currentColor"
      />
    </svg>
  );
}
