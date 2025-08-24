export type TMDBBaseTitle = {
  id: number;
  adult: boolean;
  backdrop_path: string;
  vote_average: number;
} & ({ original_title: string } | { original_name: string });
