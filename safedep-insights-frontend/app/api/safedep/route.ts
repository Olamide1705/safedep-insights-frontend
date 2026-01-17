/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import axios from "axios";
import mockInsight from "@/mocks/insights-sample.json";

export async function GET() {
  const apiKey = process.env.SAFEDEP_API_KEY;
  const tenantId = process.env.SAFEDEP_TENANT_ID;
  const projectName = process.env.SAFEDEP_PROJECT_NAME;
  const projectVersion = process.env.SAFEDEP_PROJECT_VERSION;

  if (!apiKey || !tenantId || !projectName || !projectVersion) {
    return NextResponse.json(mockInsight);
  }

  try {
    const response = await axios.get(
      `https://api.safedep.io/v1/projects/${projectName}/versions/${projectVersion}/insights`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "X-Tenant-ID": tenantId,
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.warn(
      "SafeDep API failed, falling back to mock:",
      error.response?.data || error.message
    );

    return NextResponse.json(mockInsight);
  }
}
