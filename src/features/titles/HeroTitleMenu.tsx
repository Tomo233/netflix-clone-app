import Menu from "../../components/ui/Menu";
import { useLocation, useNavigate } from "react-router";
import { MOVIE_GENRES, TV_GENRES } from "../../constants/genres";
import type { SelectChangeEvent } from "@mui/material";

function HeroTitleMenu() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const genres = pathname === "/movie" ? MOVIE_GENRES : TV_GENRES;

  const handleMenuChange = (event: SelectChangeEvent) => {
    const paramValue = genres.find(
      (item) => item.name === event.target.value,
    )?.id;
    if (!paramValue) return;
    navigate(`/genres/${paramValue}`);
  };

  return (
    <div className="mt-5 flex items-center gap-5">
      <h2 className="text-4xl font-semibold tracking-wide">
        {pathname === "/movie" ? "Movies" : "TV Shows"}
      </h2>
      <Menu
        data={[{ id: "", name: "All Genres" }, ...genres]}
        handleMenuChange={handleMenuChange}
        paramName="genre"
        grid={true}
      />
    </div>
  );
}

export default HeroTitleMenu;
