export default function OverviewTab() {
  return (
    <div className="bg-white border border-[#E2E8F0] h-screen p-5 flex flex-col justify-center items-center">
      <div className="max-w-3xl w-full flex flex-col h-full justify-between">
        <div className="space-y-2">
          <h1 className="font-medium text-base md:text-xl">Summary</h1>
          <p className="text-slate-500 text-xs md:text-base">
            This analysis was performed using vet and SafeDep Cloud Malicious
            Package Analysis. Integrate with GitHub using vet-action GitHub
            action.
            <br /> <span className="font-bold">Note:</span> This report is
            updated by a verification record
            <p className="mt-2">
              Multiple files flagged for potential data exfiltration, XSS, and
              RCE vulnerabilities. High confidence of malicious intent due to
              combined factors.
            </p>
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="font-medium text-base md:text-xl">
            Verification Record
          </h1>
          <p className="text-slate-500 text-xs md:text-base">
            Manual analysis confirmed that the package is clean.
          </p>
        </div>

        <div className="space-y-3">
          <h1 className="font-medium text-base md:text-xl">Details</h1>
          <p className="text-slate-500 text-xs md:text-base">
            <span className="font-bold">Note:</span> This report is updated by a
            verification record.
            <p className="mt-3">
              The package exhibits multiple concerning behaviors. Several files
              match the `&apos;sys_net_recon_exfil` YARA rule, suggesting
              potential system and network information exfiltration.
              Additionally, the code constructs javascript: URLs and assigns
              them to formAction attributes, which can lead to XSS or RCE if
              user-controlled data is involved. Furthermore, dynamic code
              execution is possible via formatDynamicImportPath if the
              cacheHandlers configuration is compromised. These factors,
              combined, indicate malicious intent.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
