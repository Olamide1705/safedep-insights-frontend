import { SafeDepResponse } from "../types/safedep";
import axios from "axios";

export async function getSafeDep(): Promise<SafeDepResponse> {
  const response = await axios.get("/api/safedep");
  return response.data;
}
