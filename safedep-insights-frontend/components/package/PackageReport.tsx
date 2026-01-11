import PackageMeta from "./PackageMeta";
import PackageHeaderInfo from "./PackageHeaderInfo";

export default function PackageReport() {
  return (
    <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-5 mt-6">
      <PackageHeaderInfo />
      <PackageMeta />
    </div>
  );
}
