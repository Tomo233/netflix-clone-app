import type { TMDBBaseTitle } from "./TMDBBaseTitle";

export type TMDBBaseDetails = {
  genres: { id: number; name: string }[];
  overview: string;
} & TMDBBaseTitle;
