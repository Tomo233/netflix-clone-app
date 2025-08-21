import { useQuery } from "@tanstack/react-query";
import { getTitles } from "../../../services/apiTitles";
import { useLocation } from "react-router";

export const useTitles = (url: string) => {
  const { pathname } = useLocation();

  const location = pathname.slice(1);
  const { data: titles, isLoading: isLoadingTitles } = useQuery({
    queryKey: [url],
    queryFn: () => getTitles(url, location),
  });

  return { titles, isLoadingTitles };
};
