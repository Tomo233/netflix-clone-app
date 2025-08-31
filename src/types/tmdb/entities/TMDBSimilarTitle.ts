import type { TMDBTitle } from "./TMDBTitle";

export type TMDBSimilarTitle = TMDBTitle & {
  overview: string;
} & ({ release_date: string } | { first_air_date: string });
