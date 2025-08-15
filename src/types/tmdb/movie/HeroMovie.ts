import type { TMDBBaseHeroTitle } from "../base/TMDBBaseHeroTitle";

export type HeroMovie = {
  original_title: string;
} & TMDBBaseHeroTitle;
