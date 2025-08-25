export type TMDBBaseTitle = {
  id: number;
  adult: boolean;
  backdrop_path: string;
  vote_average: number;
  media_type: "movie" | "tv";
} & ({ original_title: string } | { original_name: string });
