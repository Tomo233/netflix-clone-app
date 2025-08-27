import { useQuery } from "@tanstack/react-query";
import { getNumberOfSeasons } from "../../../services/apiTitles";
import { useSearchParams } from "react-router";

export const useNumberOfSeasons = () => {
  const [searchParams] = useSearchParams();

  const { data: numberOfSeasons, isLoading: isLoadingNumberOfSeasons } =
    useQuery({
      queryKey: ["numberOfSeasons", searchParams.get("tv")],
      queryFn: () => getNumberOfSeasons(searchParams.get("tv")),
    });

  return { numberOfSeasons, isLoadingNumberOfSeasons };
};
