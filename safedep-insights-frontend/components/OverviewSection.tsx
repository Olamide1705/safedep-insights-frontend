interface OverviewSectionProps {
  title: string;
  children: React.ReactNode;
  accent: "emerald";
}
export default function OverviewSection({
  title,
  children,
  accent,
}: OverviewSectionProps) {
  return (
    <div className="relative pl-6">
      <span
        className={`absolute left-0 top-1 h-full w-0.5 ${
          accent === "emerald" ? "bg-emerald-500" : "bg-slate-200"
        }`}
      />
      <h3>{title}</h3>
      <div className="mt-2 text-slate-500 text-sm md:text-base space-y-2">
        {children}
      </div>
    </div>
  );
}
