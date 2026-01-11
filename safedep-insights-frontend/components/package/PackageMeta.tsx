import { PiMedal } from "react-icons/pi";
import { Card, CardContent } from "../ui/card";
import {
  RiBug2Line,
  RiEarthLine,
  RiGitRepositoryLine,
  RiInformationLine,
} from "react-icons/ri";

const items = [
  {
    label: "Version",
    value: "1.2.4",
    icon: RiInformationLine,
  },

  {
    label: "Vulnerabilities",
    value: "5",
    icon: RiBug2Line,
    iconColor: "text-red-700",
  },

  {
    label: "OpenSSF Scorecard",
    value: "9.5/10",
    icon: RiGitRepositoryLine,
    textColor: "text-primary",
  },

  {
    label: "License",
    value: "Apache-2.0",
    icon: PiMedal,
  },

  {
    label: "Ecosystem",
    value: "Go",
    icon: RiEarthLine,
  },
];
export default function PackageMeta() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 mt-5">
      {items.map(({ label, value, icon: Icon, textColor, iconColor }) => (
        <Card
          key={label}
          className="bg-white border border-[#E2E8F0] rounded-sm py-4 min-h-30 hover:shadow-md transition-all duration-300"
        >
          <CardContent className="flex flex-col justify-between h-full">
            <div className="flex items-center gap-3">
              <div className="border border-[#E2E8F0] rounded-sm p-1">
                <Icon className={`h-4 w-4 text-primary ${iconColor}`} />
              </div>
              <p className="text-slate-500 text-sm md:text-base">{label}</p>
            </div>
            <div>
              <p className={`text-2xl md:text-3xl font-medium ${textColor}`}>
                {value}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
