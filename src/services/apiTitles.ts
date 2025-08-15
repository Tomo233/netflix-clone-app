import { API_KEY_PARAM, API_URL } from "../constants/tmdbBaseUrls";
import type { HeroTitle } from "../types/titles/HeroTitle";
import type { TMDBHeroTitle } from "../types/tmdb/TMDBTitles";

export const getHeroTitle = async (): Promise<HeroTitle> => {
  const res = await fetch(`${API_URL}/trending/all/day${API_KEY_PARAM}`);

  const { results } = (await res.json()) as { results: TMDBHeroTitle[] };

  const title: TMDBHeroTitle = results.filter(
    (result) => result.media_type !== "person",
  )[0];

  return {
    titleName:
      "original_title" in title ? title.original_title : title.original_name,
    imageURL: title.backdrop_path,
    overview: title.overview,
  };
};
