import { API_KEY_PARAM, API_URL } from "../constants/tmdbBaseUrls";
import type { HeroTitle } from "../types/titles/HeroTitle";
import type { Title } from "../types/titles/Title";
import type { TitleDetails } from "../types/titles/TitleDetails";
import type { TMDBHeroTitle } from "../types/tmdb/entities/TMDBHeroTitle";
import type { TMDBTitle } from "../types/tmdb/entities/TMDBTitle";
import type { TMDBTitleDetails } from "../types/tmdb/entities/TMDBTitleDetails";
import { transfromTitleData } from "../utils/transformTitleData";

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
  let fullUrl: string;

  if (location !== "browse" && !url.includes("trending")) {
    fullUrl = `${API_URL}${location}/${url}${API_KEY_PARAM}`;
  } else {
    fullUrl = `${API_URL}${url}${API_KEY_PARAM}`;
  }

  const res = await fetch(fullUrl);

  if (!res.ok) throw new Error("Something went wrong while fetching titles...");

  const { results } = (await res.json()) as { results: TMDBTitle[] };

  const transformedData = transfromTitleData(results);

  return transformedData.map((item, index) => ({
    ...item,
    genreIds: results[index].genre_ids,
  })) as Title[];
};

export const getTitleDetails = async (title: string, id: string | null) => {
  if (!id) return;

  const res = await fetch(`${API_URL}${title}/${id}${API_KEY_PARAM}`);

  if (!res.ok)
    throw new Error("Something went wrong while fetching title details...");

  const data = (await res.json()) as TMDBTitleDetails;

  const transformedData = transfromTitleData(data);

  return {
    ...transformedData,
    genreIds: data.genres.map((item) => item.id),
    length: "runtime" in data ? data.runtime : data.number_of_seasons,
    creators:
      "production_companies" in data
        ? data.production_companies.map((item) => item.name)
        : data.created_by.map((item) => item.name),
    overview: data.overview,
    releaseYear: data.release_date.split("-")[0],
  } as TitleDetails;
};
