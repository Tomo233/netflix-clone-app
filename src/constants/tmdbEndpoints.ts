export const TMDB_ENDPOINTS = {
  browse: [
    {
      title: "Trending Now",
      url: "/trending/all/day",
    },
    {
      title: "Upcoming",
      url: "/movie/upcoming",
    },
    {
      title: "Popular",
      url: "/tv/popular",
    },
    {
      title: "Now Playing",
      url: "/movie/now_playing",
    },
    {
      title: "On The Air",
      url: "/tv/on_the_air",
    },
  ],
  movie: [
    {
      title: "Trending",
      url: "/trending/movie/day",
    },
    {
      title: "Now Playing",
      url: "/now_playing",
    },
    {
      title: "Upcoming Movies",
      url: "/upcoming",
    },
    {
      title: "Top Rated Movies",
      url: "/top_rated",
    },
  ],
  tv: [
    {
      title: "Trending",
      url: "trending/tv/day",
    },
    {
      title: "Popular TV Shows",
      url: "/popular",
    },
    {
      title: "Airing Today",
      url: "/airing_today",
    },
    {
      title: "On The Air",
      url: "/on_the_air",
    },
    {
      title: "Top Rated",
      url: "/top_rated",
    },
  ],
};
