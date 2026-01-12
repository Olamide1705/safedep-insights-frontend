export default function OverviewTab() {
  return (
    <div className="bg-white border border-[#E2E8F0] p-5">
      <div className="max-w-3xl w-full mx-auto space-y-5 md:space-y-8">
        {/* Summary */}
        <div className="border-l-4 border-primary p-5 min-h-53">
          <h2 className="font-medium text-base md:text-xl">Summary</h2>

          <div className="text-slate-500 text-xs md:text-base space-y-2">
            <p>
              This analysis was performed using vet and SafeDep Cloud Malicious
              Package Analysis. Integrate with GitHub using vet-action GitHub
              action.
            </p>

            <p>
              <span className="font-bold">Note:</span> This report is updated by
              a verification record
            </p>

            <p>
              Multiple files flagged for potential data exfiltration, XSS, and
              RCE vulnerabilities. High confidence of malicious intent due to
              combined factors.
            </p>
          </div>
        </div>

        {/* Verification Record */}
        <div className="border-border border-l-4 p-5 min-h-26.25">
          <h2 className="font-medium text-base md:text-xl">
            Verification Record
          </h2>

          <p className="text-slate-500 text-xs md:text-base mt-2">
            Manual analysis confirmed that the package is clean.
          </p>
        </div>

        {/* Details */}
        <div className="border-border border-l-4 p-5 min-h-65">
          <h2 className="font-medium text-base md:text-xl">Details</h2>
          <div className="text-slate-500 text-xs md:text-base mt-2 space-y-2">
            <p>
              <span className="font-bold">Note:</span> This report is updated by
              a verification record.
            </p>

            <p>
              The package exhibits multiple concerning behaviors. Several files
              match the <code>sys_net_recon_exfil</code>` YARA rule, suggesting
              potential system and network information exfiltration.
              Additionally, the code constructs javascript: URLs and assigns
              them to formAction attributes, which can lead to XSS or RCE if
              user-controlled data is involved. Furthermore, dynamic code
              execution is possible via formatDynamicImportPath if the
              cacheHandlers configuration is compromised. These factors,
              combined, indicate malicious intent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
