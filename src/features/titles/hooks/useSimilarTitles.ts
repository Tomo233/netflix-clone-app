import { useQuery } from "@tanstack/react-query";
import { getSimilarTitles } from "../../../services/apiTitles";
import { useSearchParams } from "react-router";

export const useSimilarTitles = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.has("movie") ? "movie" : "tv";
  const id = searchParams.get(title);

  const { data: similarTitles, isLoading: isLoadingSimilarTitles } = useQuery({
    queryKey: ["similarTitle", title, id],
    queryFn: () => getSimilarTitles(title, id),
  });

  return { similarTitles, isLoadingSimilarTitles };
};
