import { useQuery } from "@tanstack/react-query";
import { getHeroTitle } from "../../../services/apiTitles";

export const useHeroTitle = () => {
  const { data: heroTitle, isLoading: isLoadingHeroTitle } = useQuery({
    queryKey: ["heroTitle"],
    queryFn: getHeroTitle,
  });

  return { heroTitle, isLoadingHeroTitle };
};
