import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";
import { useOutsideClick } from "../../hooks/useOutsideClick";

function SearchTitle() {
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();
  const ref = useOutsideClick(() => setShowInput(false));

  const handleQueryChange = (value: string) => {
    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate("/browse");
    }
  };

  return (
    <div ref={ref}>
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
    </div>
  );
}

export default SearchTitle;
