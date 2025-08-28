import { MOVIE_GENRES, TV_GENRES } from "../constants/genres";

export const getGenresByIds = (
  genreIds: number[] | undefined,
  mediaType: "movie" | "tv",
) => {
  const genres = mediaType === "movie" ? MOVIE_GENRES : TV_GENRES;
  return genreIds?.map((id) => genres.find((genre) => genre.id === id));
};
