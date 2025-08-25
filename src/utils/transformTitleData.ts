import type { TransformedTitle } from "../types/titles/TransformedTitle";
import type { TMDBBaseTitle } from "../types/tmdb/base/TMDBBaseTitle";

const getTransformedData = <T extends TMDBBaseTitle>(item: T) => {
  return {
    id: item.id,
    adult: item.adult,
    titleName:
      "original_title" in item ? item.original_title : item.original_name,
    rating: item.vote_average,
    imageURL: item.backdrop_path,
  };
};

export function transfromTitleData<T extends TMDBBaseTitle>(
  data: T,
): TransformedTitle;

export function transfromTitleData<T extends TMDBBaseTitle>(
  data: T[],
): TransformedTitle[];

export function transfromTitleData<T extends TMDBBaseTitle>(
  data: T | T[],
): TransformedTitle | TransformedTitle[] {
  return Array.isArray(data)
    ? data.map((item) => getTransformedData(item))
    : getTransformedData(data);
}
