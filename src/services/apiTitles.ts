import { API_KEY_PARAM, API_URL } from "../constants/tmdbBaseUrls";
import type { HeroTitle } from "../types/titles/HeroTitle";
import type { TMDBHeroTitle } from "../types/tmdb/TMDBTitles";

export const getHeroTitle = async (pathname: string) => {
  const res = await fetch(`${API_URL}trending/all/day${API_KEY_PARAM}`);

  if (!res.ok)
    throw new Error("Something went wrong while fetching hero title...");

  const { results } = (await res.json()) as { results: TMDBHeroTitle[] };

  const filteredResults = results.filter(
    (result) => result.media_type !== "person",
  );

  let title: TMDBHeroTitle;

  if (pathname !== "/browse") {
    title = filteredResults.filter(
      (result) => result.media_type === pathname.slice(1),
    )[1];
  } else {
    title = filteredResults[0];
  }

  return {
    titleName:
      "original_title" in title ? title.original_title : title.original_name,
    imageURL: title.backdrop_path,
    overview: title.overview,
  } as HeroTitle;
};
