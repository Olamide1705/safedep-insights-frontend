import Image from "next/image";

type PackageHeaderInfoProps = {
  name: string;
  version: string;
  analyzedAt: string;
  sourceUrl: string;
  sha256: string;
  confidence: string;
};
export default function PackageHeaderInfo({
  name,
  version,
  analyzedAt,
  sourceUrl,
  sha256,
  confidence,
}: PackageHeaderInfoProps) {
  return (
    <div className="mb-4 space-y-1 md:space-y-2">
      <div className="flex items-center gap-2">
        <Image
          src="/github_logo.jpg"
          alt="Github Logo"
          width={32}
          height={32}
          className="border border-[#E0E1E6] p-1 rounded-sm bg-white"
        />
        <h2 className="text-xl font-semibold text-slate-900">
          {name}@{version}
        </h2>
      </div>
      <p className="text-sm text-slate-500">
        Analysed at <span className="text-black">{analyzedAt} </span>
      </p>
      <p className="text-sm text-slate-500">
        Source <span className="text-black break-all">{sourceUrl}</span>
      </p>
      <p className="text-sm text-slate-500">
        SHA256 <span className="text-black break-all">{sha256}</span>
      </p>
      <p className="text-sm text-slate-500">
        Confidence <span className="text-black break-all">{confidence}</span>
      </p>
    </div>
  );
}
