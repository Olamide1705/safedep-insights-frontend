import Header from "@/components/header";
import PackageReport from "@/components/package/PackageReport";

export default function Page() {
  return (
    <div className="bg-[#F1F5F9] min-h-screen p-4">
      <Header />
      <PackageReport />
    </div>
  );
}
