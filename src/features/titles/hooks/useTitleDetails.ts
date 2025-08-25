import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getTitleDetails } from "../../../services/apiTitles";

export const useTitleDetails = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.has("movie") ? "movie" : "tv";
  const id = searchParams.get(title);

  const { data: titleDetails, isLoading: isLoadingTitleDetails } = useQuery({
    queryKey: ["titleDetails", id],
    queryFn: () => getTitleDetails(title, id),
  });

  return { titleDetails, isLoadingTitleDetails };
};
