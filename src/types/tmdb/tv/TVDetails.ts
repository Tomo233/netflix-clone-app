import type { TMDBBaseDetails } from "../base/TMDBBaseDetails";

export type TVDetails = {
  number_of_seasons: number;
  created_by: { name: string }[];
  last_air_date: string;
} & TMDBBaseDetails;
