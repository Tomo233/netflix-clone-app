import { useQuery } from "@tanstack/react-query";
import { getHeroTitle } from "../../../services/apiTitles";
import { useLocation } from "react-router";

export const useHeroTitle = () => {
  const { pathname, search } = useLocation();

  const genreId = search.split("=").at(1);
  const path = pathname.slice(1);

  const { data: heroTitle, isLoading: isLoadingHeroTitle } = useQuery({
    queryKey: ["heroTitle", path, genreId],
    queryFn: () => getHeroTitle(path, genreId),
  });

  return { heroTitle, isLoadingHeroTitle };
};
