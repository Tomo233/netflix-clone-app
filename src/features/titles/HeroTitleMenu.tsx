import Menu from "../../components/ui/Menu";
import { useLocation } from "react-router";
import { MOVIE_GENRES, TV_GENRES } from "../../constants/genres";

function HeroTitleMenu() {
  const { pathname } = useLocation();

  const genres = pathname === "/movie" ? MOVIE_GENRES : TV_GENRES;

  return (
    <div className="mt-5 flex items-center gap-5">
      <h2 className="text-4xl font-semibold tracking-wide">
        {pathname === "/movie" ? "Movies" : "TV Shows"}
      </h2>
      <Menu
        data={[{ id: 0, name: "All Genres" }, ...genres]}
        paramName="genre"
        grid={true}
      />
    </div>
  );
}

export default HeroTitleMenu;
