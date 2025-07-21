import Logo from "../../assets/netflix-logo.png";
import Avatar from "../../assets/avatar.png";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Header() {
  return (
    <header className="z-10 flex items-center justify-between">
      {/* Left Side: Logo + Navigation */}
      <div className="flex items-center justify-between gap-6">
        <img src={Logo} className="w-36" alt="netflix logo" />
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
        <SearchIcon
          fontSize="large"
          sx={{
            color: "white",
          }}
        />
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
