import type { TMDBTVEpisode } from "./TMDBTVEpisode";

export type TMDBTVSeasonInfo = {
  air_date: string;
  episodes: TMDBTVEpisode[];
};
