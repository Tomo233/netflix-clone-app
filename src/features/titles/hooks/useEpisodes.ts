import { useQuery } from "@tanstack/react-query";
import { getEpisodesOveview } from "../../../services/apiTitles";
import { useSearchParams } from "react-router";

export const useEpisodes = () => {
  const [searchParams] = useSearchParams();
  const seriesId = searchParams.get("tv");

  const { data: episodesOverview, isLoading: isLoadingEpisodesOverview } =
    useQuery({
      queryKey: ["episodes", seriesId],
      queryFn: () => getEpisodesOveview(seriesId, "1"),
    });

  return { episodesOverview, isLoadingEpisodesOverview };
};
