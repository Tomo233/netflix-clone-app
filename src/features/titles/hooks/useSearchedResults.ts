import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getSearchedResults } from "../../../services/apiTitles";

export const useSearchedResults = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");

  const { data: searchedResults, isLoading: isLoadingSearchedResults } =
    useQuery({
      queryKey: ["searchedResults", query],
      queryFn: () => getSearchedResults(query),
    });

  return { searchedResults, isLoadingSearchedResults };
};
