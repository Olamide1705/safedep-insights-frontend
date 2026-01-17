import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const dummyData = [
  {
    id: "CVE-2024-12345",
    name: "APACHE License 2.0",
    reference: "https://www.apache.org/licenses/LICENSE-2.0",
  },
  {
    id: "CVE-2024-12345",
    name: "APACHE License 2.0",
    reference: "https://www.apache.org/licenses/LICENSE-2.0",
  },
  {
    id: "CVE-2024-12345",
    name: "APACHE License 2.0",
    reference: "https://www.apache.org/licenses/LICENSE-2.0",
  },
];
export default function LicenseTab() {
  return (
    <div className="bg-white border border-[#E2E8F0] p-5">
      <div className="overflow-x-auto">
        <Table className="w-full md:table-fixed">
          <TableHeader>
            <TableRow>
              <TableHead className="w-full md:w-2/3">License ID</TableHead>
              <TableHead className="w-1/2">License Name</TableHead>
              <TableHead className="w-1/2">Reference URL</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {dummyData.map((item) => (
              <TableRow key={item.id} className="text-foreground font-medium">
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.reference}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
