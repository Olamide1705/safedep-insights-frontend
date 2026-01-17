export interface SafeDepInsight {
  analyzedAt: string;
  sourceUrl: string;
  sha256: string;
  confidence: string;
}

export interface SafeDepPackageVersion {
  package: { name: string; ecosystem: string };
  version: string;
}

export interface SafeDepResponse {
  packageVersion: SafeDepPackageVersion;
  insight: SafeDepInsight;
}
