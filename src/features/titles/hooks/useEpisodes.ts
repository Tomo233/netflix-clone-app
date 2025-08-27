import { useQuery } from "@tanstack/react-query";
import { getEpisodesOveview } from "../../../services/apiTitles";
import { useSearchParams } from "react-router";

export const useEpisodes = () => {
  const [searchParams] = useSearchParams();
  const seriesId = searchParams.get("tv");
  const seasonNumber = searchParams.get("season");

  const { data: episodesOverview, isLoading: isLoadingEpisodesOverview } =
    useQuery({
      queryKey: ["episodes", seriesId, seasonNumber || 1],
      queryFn: () => getEpisodesOveview(seriesId, seasonNumber),
    });

  return { episodesOverview, isLoadingEpisodesOverview };
};
