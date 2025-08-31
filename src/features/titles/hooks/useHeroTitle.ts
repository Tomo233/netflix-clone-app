import { useQuery } from "@tanstack/react-query";
import { getHeroTitle } from "../../../services/apiTitles";
import { useLocation, useSearchParams } from "react-router";

export const useHeroTitle = () => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const genreId = searchParams.get("genre");
  const path = pathname.slice(1);

  const { data: heroTitle, isLoading: isLoadingHeroTitle } = useQuery({
    queryKey: ["heroTitle", path, genreId],
    queryFn: () => getHeroTitle(path, genreId),
  });

  return { heroTitle, isLoadingHeroTitle };
};
