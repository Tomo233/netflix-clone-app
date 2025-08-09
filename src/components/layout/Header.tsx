import Logo from "../../assets/netflix-logo.jpg";
import Avatar from "../../assets/avatar.png";
import SearchTitle from "../../features/titles/SearchTitle";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router";

function Header() {
  return (
    <header className="z-10 flex items-center justify-between py-5">
      {/* Left Side: Logo + Navigation */}
      <div className="flex items-center justify-between gap-9">
        <img src={Logo} className="w-24" alt="netflix logo" />
        <nav>
          <ul className="text-secondary-text-color flex justify-between gap-9 font-semibold">
            <Link to="/browse">Home</Link>
            <Link to="/movie">Movies</Link>
            <Link to="/tv">Tv Shows</Link>
            <Link to="/my-list">My List</Link>
          </ul>
        </nav>
      </div>

      {/* Right Side: Search + User */}
      <div className="flex items-center gap-3">
        <SearchTitle />

        {/* Avatar & Link to Settings */}
        <img src={Avatar} className="w-9 rounded-sm" alt="user avatar" />
        <Link className="cursor-pointer" to="/settings">
          <SettingsIcon className="h-4 w-4 text-white" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
