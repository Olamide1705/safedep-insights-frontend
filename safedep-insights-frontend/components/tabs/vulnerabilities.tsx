import { DashedIconRing } from "../DashedIconRing";
import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";
import { Badge } from "../ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { PiCircleHalfFill } from "react-icons/pi";
import { BsFillExclamationDiamondFill } from "react-icons/bs";

const dummyData = [
  {
    id: "CVE-2024-12345",
    summary: "Requests vulnerable to netrc credentials",
    risk: "low",
    published: "08/10/2024",
    modified: "08/10/2024",
  },
  {
    id: "CVE-2024-67890",
    summary: "Improper input validation",
    risk: "medium",
    published: "07/22/2024",
    modified: "08/01/2024",
  },
  {
    id: "CVE-2024-12345",
    summary: "Requests vulnerable to netrc credentials",
    risk: "high",
    published: "08/10/2024",
    modified: "08/10/2024",
  },
  {
    id: "CVE-2024-67890",
    summary: "Improper input validation",
    risk: "critical",
    published: "07/22/2024",
    modified: "08/01/2024",
  },
  {
    id: "CVE-2024-12345",
    summary: "Requests vulnerable to netrc credentials",
    risk: "unspecified",
    published: "08/10/2024",
    modified: "08/10/2024",
  },
];

const getPriorityBadge = (priority: string) => {
  const base =
    "inline-flex items-center gap-1 px-2 py-1 font-bold rounded-sm text-xs md:text-sm border-none";
  switch (priority) {
    case "low":
      return (
        <Badge
          variant="outline"
          className={`${base} bg-cyan-50 text-cyan-700 gap-2!`}
        >
          <DashedIconRing color="#0e7490">
            <RiArrowDownLine size={10} />
          </DashedIconRing>
          Low
        </Badge>
      );
    case "medium":
      return (
        <Badge
          variant="secondary"
          className={`${base} bg-yellow-100 text-yellow-700 gap-2!`}
        >
          <span className="text-base text-yellow-700 leading-none">
            <PiCircleHalfFill />
          </span>
          Medium
        </Badge>
      );
    case "high":
      return (
        <Badge
          variant="destructive"
          className={`${base} bg-pink-100 text-pink-700 gap-2!`}
        >
          <DashedIconRing color="#be185d">
            <RiArrowUpLine size={10} />
          </DashedIconRing>
          High
        </Badge>
      );
    case "critical":
      return (
        <Badge
          variant="destructive"
          className={`${base} text-red-700 bg-red-50 gap-2!`}
        >
          <span className="text-sm leading-none">
            <BsFillExclamationDiamondFill />
          </span>
          Critical
        </Badge>
      );

    default:
      return (
        <Badge
          variant="destructive"
          className={`${base} bg-neutral-100 text-neutral-600 gap-2!`}
        >
          <DashedIconRing color="#525252"></DashedIconRing>
          Unspecified
        </Badge>
      );
  }
};

export default function VulnerabilitiesTab() {
  return (
    <div className="bg-white border border-[#E2E8F0] p-5">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Vulnerability ID</TableHead>
              <TableHead>Summary</TableHead>
              <TableHead>Risk</TableHead>
              <TableHead>Published</TableHead>
              <TableHead>Modified</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {dummyData.map((item) => (
              <TableRow key={item.id} className="text-foreground font-medium">
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.summary}</TableCell>
                <TableCell className="capitalize">
                  {getPriorityBadge(item.risk)}
                </TableCell>
                <TableCell>{item.published}</TableCell>
                <TableCell>{item.modified}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
