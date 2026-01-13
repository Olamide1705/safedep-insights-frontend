export function DashedIconRing({
  children,
  color = "#0e7490",
}: {
  children?: React.ReactNode;
  color?: string;
}) {
  return (
    <div className="relative h-4 w-4 flex items-center justify-center">
      <svg className="absolute inset-0" viewBox="0 0 32 32">
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeDasharray="3 3"
        />
      </svg>
      {children}
    </div>
  );
}
