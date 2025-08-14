import { API_KEY_PARAM, API_URL } from "../constants/tmdbBaseUrls";

export const getHeroTitle = async () => {
  const res = await fetch(`${API_URL}/trending/all/day${API_KEY_PARAM}`);

  const { results } = await res.json();

  const title = results?.filter((result) => result.media_type !== "person")[0];

  return {
    titleName:
      "original_title" in title ? title.original_title : title.original_name,
    imageURL: title.backdrop_path,
    overview: title.overview,
  };
};
