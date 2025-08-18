import { TMDB_ENDPOINTS } from "../../constants/tmdbEndpoints";
import TitleCarousel from "./TitleCarousel";

function CategoryCarousels() {
  return (
    <div className="pt-10">
      {TMDB_ENDPOINTS.browse.map((item) => {
        return (
          <div>
            <h2 className="text-2xl font-medium tracking-wide">{item.title}</h2>
            <TitleCarousel url={item.url} />
          </div>
        );
      })}
    </div>
  );
}

export default CategoryCarousels;
