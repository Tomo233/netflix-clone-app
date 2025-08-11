import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";

function SearchTitle() {
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();

  const handleQueryChange = (value: string) => {
    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate("/browse");
    }
  };

  return (
    <>
      {showInput && (
        <input
          type="search"
          name="search"
          className="bg-background-color animate-fade-in border border-white py-1 pl-2"
          placeholder="Search..."
          onChange={(e) => handleQueryChange(e.target.value)}
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
