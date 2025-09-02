import { useQuery } from "@tanstack/react-query";
import { getTitles } from "../../../services/apiTitles";
import { useLocation, useSearchParams } from "react-router";

export const useTitles = (url: string) => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const path = pathname.slice(1);
  const genreId = searchParams.get("genre");

  const { data: titles, isLoading: isLoadingTitles } = useQuery({
    queryKey: [url, genreId],
    queryFn: () => getTitles(url, path, genreId),
  });

  return { titles, isLoadingTitles };
};
