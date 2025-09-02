export type Title = {
  id: number;
  titleName: string;
  adult: boolean;
  genreIds: number[];
  rating: number | undefined;
  imageURL: string;
  mediaType: "movie" | "tv";
};
