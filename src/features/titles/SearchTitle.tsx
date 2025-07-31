import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchTitle() {
  const [showInput, setShowInput] = useState(false);
  return (
    <>
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
    </>
  );
}

export default SearchTitle;
