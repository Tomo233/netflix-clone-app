import type { TMDBBaseTitle } from "./TMDBBaseTitle";

export type TMDBListItem = {
  genre_ids: number[];
} & TMDBBaseTitle;
