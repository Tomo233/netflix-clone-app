import { API_KEY_PARAM, API_URL } from "../constants/tmdbBaseUrls";
import type { TMDBHeroTitle, TMDBTitle } from "../types/tmdb/TMDBTitles";
import type { HeroTitle } from "../types/titles/HeroTitle";
import type { Title } from "../types/titles/Title";

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
    id: title.id,
    titleName:
      "original_title" in title ? title.original_title : title.original_name,
    imageURL: title.backdrop_path,
    overview: title.overview,
  } as HeroTitle;
};

export const getTitles = async (url: string, location: string) => {
  try {
    let fullUrl: string;

    if (location !== "browse" && !url.includes("trending")) {
      fullUrl = `${API_URL}${location}/${url}${API_KEY_PARAM}`;
    } else {
      fullUrl = `${API_URL}${url}${API_KEY_PARAM}`;
    }

    const res = await fetch(fullUrl);

    const { results } = (await res.json()) as { results: TMDBTitle[] };

    return results.map((item) => ({
      id: item.id,
      adult: item.adult,
      titleName:
        "original_title" in item ? item.original_title : item.original_name,
      rating: item.vote_average,
      imageURL: item.backdrop_path,
      genreIds: item.genre_ids,
      mediaType: "original_title" in item ? "movie" : "tv",
    })) as Title[];
  } catch (error: unknown) {
    console.log(error);
  }
};
