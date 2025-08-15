import { useQuery } from "@tanstack/react-query";
import { getHeroTitle } from "../../../services/apiTitles";
import { useLocation } from "react-router";

export const useHeroTitle = () => {
  const { pathname } = useLocation();

  const { data: heroTitle, isLoading: isLoadingHeroTitle } = useQuery({
    queryKey: ["heroTitle", pathname],
    queryFn: () => getHeroTitle(pathname),
  });

  return { heroTitle, isLoadingHeroTitle };
};
