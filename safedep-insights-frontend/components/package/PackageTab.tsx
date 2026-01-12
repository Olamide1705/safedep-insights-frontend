import LicenseTab from "../tabs/license";
import OverviewTab from "../tabs/overview";
import VersionsTab from "../tabs/versions";
import VulnerabilitiesTab from "../tabs/vulnerabilities";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function PackageTab() {
  return (
    <div className="border border-[#E2E8F0] px-5 py-2">
      <Tabs defaultValue="overview" className="min-h-40">
        <TabsList className="flex md:space-x-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="vulnerabilities">Vulnerabilities</TabsTrigger>
          <TabsTrigger value="versions">Versions</TabsTrigger>
          <TabsTrigger value="license">License</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <OverviewTab />
        </TabsContent>

        <TabsContent value="vulnerabilities">
          <VulnerabilitiesTab />
        </TabsContent>

        <TabsContent value="versions">
          <VersionsTab />
        </TabsContent>

        <TabsContent value="license">
          <LicenseTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
