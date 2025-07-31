import Logo from "../../assets/netflix-logo.jpg";
import Avatar from "../../assets/avatar.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchTitle from "../../features/titles/SearchTitle";

function Header() {
  return (
    <header className="z-10 flex items-center justify-between py-5">
      {/* Left Side: Logo + Navigation */}
      <div className="flex items-center justify-between gap-9">
        <img src={Logo} className="w-24" alt="netflix logo" />
        <nav>
          <ul className="text-secondary-text-color flex justify-between gap-9 font-semibold">
            <li>Home</li>
            <li>Movies</li>
            <li>Tv Shows</li>
            <li>My List</li>
          </ul>
        </nav>
      </div>

      {/* Right Side: Search + User */}
      <div className="flex items-center gap-3">
        <SearchTitle />

        <div className="flex items-center gap-1">
          <img src={Avatar} className="w-9 rounded-sm" alt="user avatar" />
          <ArrowDropDownIcon
            fontSize="medium"
            sx={{
              color: "white",
            }}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
