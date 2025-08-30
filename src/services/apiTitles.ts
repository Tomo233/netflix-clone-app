import { API_KEY_PARAM, API_URL } from "../constants/tmdbBaseUrls";
import type { Episode } from "../types/titles/Episode";
import type { HeroTitle } from "../types/titles/HeroTitle";
import type { Title } from "../types/titles/Title";
import type { TitleDetails } from "../types/titles/TitleDetails";
import type { TMDBHeroTitle } from "../types/tmdb/entities/TMDBHeroTitle";
import type { TMDBTitle } from "../types/tmdb/entities/TMDBTitle";
import type { TMDBTitleDetails } from "../types/tmdb/entities/TMDBTitleDetails";
import type { TMDBTVSeasonInfo } from "../types/tmdb/tv/TMDBTVSeasonInfo";
import { fetchClient } from "../utils/fetchClient";
import { transfromTitleData } from "../utils/transformTitleData";

export const getHeroTitle = async (
  path: string,
  genreId: string | undefined,
) => {
  let fullUrl;

  if (genreId) {
    fullUrl = `${API_URL}discover/${path}${API_KEY_PARAM}&with_genres=${genreId}`;
  } else {
    fullUrl = `${API_URL}trending/all/day${API_KEY_PARAM}`;
  }

  const results = await fetchClient<TMDBHeroTitle[]>(fullUrl);

  const filteredResults = results.filter(
    (result) => result.media_type !== "person",
  );

  let title: TMDBHeroTitle;

  if (path !== "browse" && !genreId) {
    title = filteredResults.filter((result) => result.media_type === path)[1];
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
  const results = await fetchClient<TMDBTitle[]>(fullUrl);

  const transformedData = transfromTitleData(results);

  return transformedData.map((item, index) => ({
    ...item,
    genreIds: results[index].genre_ids,
  })) as Title[];
};

export const getTitleDetails = async (title: string, id: string | null) => {
  if (!id) return;

  const data = await fetchClient<TMDBTitleDetails>(
    `${API_URL}${title}/${id}${API_KEY_PARAM}`,
  );

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
    releaseYear:
      "release_date" in data
        ? data.release_date.split("-")[0]
        : data.last_air_date.split("-")[0],
  } as TitleDetails;
};

export const getEpisodesOveview = async ({
  seriesId,
  seasonNumber,
  pageParam,
}: {
  seriesId: string | null;
  seasonNumber: string | null;
  pageParam: number;
}) => {
  if (!seriesId) return;

  const data = await fetchClient<TMDBTVSeasonInfo>(
    `${API_URL}tv/${seriesId}/season/${seasonNumber || 1}${API_KEY_PARAM}`,
  );

  const start = pageParam * 10;
  const end = (pageParam + 1) * 10;

  const episodesOverview: Episode[] = data.episodes
    .filter((episode) => episode.still_path)
    .slice(start, end)
    .map((episode) => ({
      id: episode.id,
      episodeName: episode.name,
      overview: episode.overview,
      length: episode.runtime,
      episodeNumber: episode.episode_number,
      imageURL: episode.still_path,
    }));

  return { episodesOverview, nextPage: pageParam + 1 };
};

export const getNumberOfSeasons = async (id: string | null) => {
  if (!id) return;

  const data = await fetchClient<{ number_of_seasons: number }>(
    `${API_URL}tv/${id}${API_KEY_PARAM}`,
  );

  return data.number_of_seasons;
};

export const getSearchedResults = async (query: string | null) => {
  if (!query) return;

  const results = await fetchClient<TMDBTitle[]>(
    `${API_URL}search/multi${API_KEY_PARAM}&query=${query}`,
  );

  const toTransfrom = results.filter((results) => results.backdrop_path);
  const transformedData = transfromTitleData(toTransfrom);

  const finalData: Title[] = transformedData.map((item, index) => {
    return {
      ...item,
      genreIds: results[index].genre_ids,
    };
  });

  return finalData;
};
