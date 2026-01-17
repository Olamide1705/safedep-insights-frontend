"use client";

import PackageMeta from "./PackageMeta";
import PackageHeaderInfo from "./PackageHeaderInfo";
import PackageTab from "./PackageTab";
import mockInsight from "@/mocks/insights-sample.json";
import { SafeDepResponse } from "@/types/safedep";

export default function PackageReport() {
  const insight = mockInsight as SafeDepResponse;

  return (
    <>
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-5 mt-6">
        <PackageHeaderInfo
          name={insight.packageVersion.package.name}
          version={insight.packageVersion.version}
          analyzedAt={insight.insight.analyzedAt}
          sourceUrl={insight.insight.sourceUrl}
          sha256={insight.insight.sha256}
          confidence={insight.insight.confidence}
        />
        <PackageMeta />
      </div>
      <div>
        <PackageTab />
      </div>
    </>
  );
}
