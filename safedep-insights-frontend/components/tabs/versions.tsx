import { Button } from "../ui/button";
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
    version: "0.24.0",
    published: "08/10/2024",
    isLatest: "latest",
  },
  {
    version: "1.2.3",
    published: "10/10/2024",
  },
  {
    version: "1.4.0",
    published: "18/10/2024",
  },
];

export default function VersionsTab() {
  return (
    <div className="bg-white border border-[#E2E8F0] p-5">
      <div className="overflow-x-auto">
        <Table className="w-full table-fixed">
          <TableHeader>
            <TableRow>
              <TableHead className="w-2/3">Version</TableHead>
              <TableHead className="w-1/6">Published on</TableHead>
              <TableHead className="w-1/6 text-right"> </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {dummyData.map((item) => (
              <TableRow
                key={item.version}
                className="text-foreground font-medium"
              >
                <TableCell className="flex items-center gap-2">
                  <span>{item.version}</span>

                  {item.isLatest && (
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">
                      Latest
                    </span>
                  )}
                </TableCell>

                <TableCell>{item.published}</TableCell>
                <TableCell className="text-right">
                  <button className="text-primary text-sm hover:underline border-l border-border px-6 cursor-pointer">
                    View Version
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
