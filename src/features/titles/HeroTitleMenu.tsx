import Menu from "../../components/ui/Menu";
import { useLocation } from "react-router";

const genres = [
  "Action",
  "Drama",
  "Comedy",
  "Horror",
  "Thriller",
  "Romance",
  "Sci-Fi",
  "Fantasy",
  "Crime",
  "Animation",
  "Fantasy",
  "Crime",
  "Animation",
  "Fantasy",
  "Crime",
  "Animation",
  "Fantasy",
  "Crime",
  "Animation",
];

function HeroTitleMenu() {
  const { pathname } = useLocation();

  return (
    <div className="mt-5 flex items-center gap-5">
      <h2 className="text-4xl font-semibold tracking-wide">
        {pathname === "/movie" ? "Movies" : "TV Shows"}
      </h2>
      <Menu data={["All Genres", ...genres]} grid={true} />
    </div>
  );
}

export default HeroTitleMenu;
