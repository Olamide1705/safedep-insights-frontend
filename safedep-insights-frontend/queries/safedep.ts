import { useQuery } from "@tanstack/react-query";
import { getSafeDep } from "../services/safedep";
import { SafeDepResponse } from "../types/safedep";

export function useSafeDep() {
  return useQuery<SafeDepResponse, Error>({
    queryKey: ["safedep"],
    queryFn: getSafeDep,
    staleTime: 1000 * 60 * 5,
  });
}
