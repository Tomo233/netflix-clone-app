import { useQuery } from "@tanstack/react-query";
import { getTitles } from "../../../services/apiTitles";
import { useLocation } from "react-router";

export const useTitles = (url: string) => {
  const { pathname, search } = useLocation();

  const path = pathname.slice(1);
  const genreId = search.split("=").at(1);

  const { data: titles, isLoading: isLoadingTitles } = useQuery({
    queryKey: [url, genreId],
    queryFn: () => getTitles(url, path, genreId),
  });

  return { titles, isLoadingTitles };
};
