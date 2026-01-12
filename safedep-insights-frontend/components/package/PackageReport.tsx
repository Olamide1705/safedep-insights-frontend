import PackageMeta from "./PackageMeta";
import PackageHeaderInfo from "./PackageHeaderInfo";
import PackageTab from "./PackageTab";

export default function PackageReport() {
  return (
    <>
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-5 mt-6">
        <PackageHeaderInfo />
        <PackageMeta />
      </div>
      <div>
        <PackageTab />
      </div>
    </>
  );
}
