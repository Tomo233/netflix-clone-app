import type { HeroMovie } from "./movie/HeroMovie";
import type { Movie } from "./movie/Movie";
import type { HeroTV } from "./tv/HeroTV";
import type { TVSeries } from "./tv/TVSeries";

export type TMDBTitle = Movie | TVSeries;
export type TMDBHeroTitle = HeroMovie | HeroTV;
