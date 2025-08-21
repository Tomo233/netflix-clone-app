import type { TMDBListItem } from "../base/TMDBListItem";

export type Movie = {
  original_title: string;
} & TMDBListItem;
