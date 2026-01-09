import Image from "next/image";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div>
      <h3 className="text-sm text-[#90A1B9] mb-2">POWERED BY</h3>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/safedep_logo.jpg"
            alt="Safedep Logo"
            width={32}
            height={32}
          />
          <span className="font-bold text-2xl md:text-3xl text-[#111827]">
            SafeDep
          </span>
        </div>

        <Button className="flex items-center gap-2">
          <Image
            aria-hidden
            src="/github.png"
            alt="Github Logo"
            width={16}
            height={16}
            className=""
          />
          Install GitHub App
        </Button>
      </div>
    </div>
  );
}
