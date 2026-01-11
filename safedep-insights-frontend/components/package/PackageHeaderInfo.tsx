import Image from "next/image";

export default function PackageHeaderInfo() {
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
        <h2 className="text-xl font-semibold text-slate-900">next@15.5.4</h2>
      </div>
      <p className="text-sm text-slate-500">
        Analysed at <span className="text-black">24 Oct 2025, 10:06 </span>
      </p>
      <p className="text-sm text-slate-500">
        Source{" "}
        <span className="text-black break-all">
          https://registry.npmjs.org/next/-/next-15.5.4.tgz
        </span>
      </p>
      <p className="text-sm text-slate-500">
        SHA256{" "}
        <span className="text-black break-all">
          5188d186e94a8d5470af6ed2725d209d8b2abc29cc7d6bedd58a748efd7e89f9
        </span>
      </p>
      <p className="text-sm text-slate-500">
        Confidence{" "}
        <span className="text-black break-all">
          5188d186e94a8d5470af6ed2725d209d8b2abc29cc7d6bedd58a748efd7e89f9
        </span>
      </p>
    </div>
  );
}
