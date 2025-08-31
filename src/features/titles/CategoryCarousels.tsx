import { useLocation } from "react-router";
import { TMDB_ENDPOINTS } from "../../constants/tmdbEndpoints";
import TitleCarousel from "./TitleCarousel";

function CategoryCarousels() {
  const { pathname } = useLocation();

  const location = pathname.slice(1);

  return (
    <div className="pt-10">
      {TMDB_ENDPOINTS[location as "browse" | "movie" | "tv"].map((item) => {
        return (
          <div key={item.title}>
            <TitleCarousel item={item} />
          </div>
        );
      })}
    </div>
  );
}

export default CategoryCarousels;
