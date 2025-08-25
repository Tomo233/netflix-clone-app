import type { TMDBBaseDetails } from "../base/TMDBBaseDetails";

export type MovieDetails = {
  runtime: number;
  production_companies: { name: string }[];
} & TMDBBaseDetails;
