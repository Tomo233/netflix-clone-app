export type TMDBHeroTitle = {
  id: number;
  overview: string;
  backdrop_path: string;
  media_type: "movie" | "tv" | "person";
} & ({ original_title: string } | { original_name: string });
