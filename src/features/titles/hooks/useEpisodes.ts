import { useInfiniteQuery } from "@tanstack/react-query";
import { getEpisodesOveview } from "../../../services/apiTitles";
import { useSearchParams } from "react-router";

export const useEpisodes = () => {
  const [searchParams] = useSearchParams();
  const seriesId = searchParams.get("tv");
  const seasonNumber = searchParams.get("season");

  const {
    data,
    isLoading: isLoadingEpisodesOverview,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["episodes", seriesId, seasonNumber || 1],
    queryFn: ({ pageParam = 0 }) =>
      getEpisodesOveview({ seriesId, seasonNumber, pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage?.episodesOverview.length === 0
        ? undefined
        : lastPage?.nextPage;
    },
  });

  return {
    data,
    isLoadingEpisodesOverview,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  };
};
