import Logo from "../../assets/netflix-logo.jpg";
import Avatar from "../../assets/avatar.png";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
function Header() {
  const [showInput, setShowInput] = useState(false);

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
        {showInput && (
          <input
            type="search"
            name="search"
            className="bg-background-color animate-fade-in border border-white py-1 pl-2"
            placeholder="Search..."
          />
        )}

        <button
          onClick={() => setShowInput((prev) => !prev)}
          className="cursor-pointer"
        >
          <SearchIcon
            fontSize="large"
            sx={{
              color: "white",
            }}
          />
        </button>

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
