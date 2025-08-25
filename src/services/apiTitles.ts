import { API_KEY_PARAM, API_URL } from "../constants/tmdbBaseUrls";
import type { HeroTitle } from "../types/titles/HeroTitle";
import type { Title } from "../types/titles/Title";
import type { TMDBHeroTitle } from "../types/tmdb/entities/TMDBHeroTitle";
import type { TMDBTitle } from "../types/tmdb/entities/TMDBTitle";

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
    mediaType: title.media_type,
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

export const getTitleDetails = async (title: string, id: string | null) => {
  try {
    if (!id) return;
    const res = await fetch(`${API_URL}${title}/${id}${API_KEY_PARAM}`);
    const data = await res.json();

    const finalData = {
      id: data.id,
      adult: data.adult,
      titleName:
        "original_title" in data ? data.original_title : data.original_name,
      rating: data.vote_average,
      imageURL: data.backdrop_path,
      mediaType: "original_title" in data ? "movie" : "tv",
      genreIds: data.genres.map((item: { id: number }) => item.id),
      length: "runtime" in data ? data.runtime : data.number_of_seasons,
      creators:
        "production_companies" in data
          ? data.production_companies.map((item: { name: string }) => item.name)
          : data.created_by.map((item: { name: string }) => item.name),
      overview: data.overview,
      releaseYear: data.release_date.split("-")[0],
    };

    return finalData;
  } catch (error: unknown) {
    console.log(error);
  }
};
