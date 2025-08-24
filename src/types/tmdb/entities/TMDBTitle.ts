import type { TMDBBaseTitle } from "../base/TMDBBaseTitle";

export type TMDBTitle = {
  genre_ids: number[];
} & TMDBBaseTitle;
