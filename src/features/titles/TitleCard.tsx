import { useState } from "react";
import type { Title } from "../../types/titles/Title";
import { IMAGE_BASE_URL } from "../../constants/tmdbBaseUrls";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Container from "../../components/ui/Container";
import MediaTag from "../../components/ui/MediaTag";
import Rating from "../../components/ui/Rating";
import { getGenresByIds } from "../../utils/helpers";
import { useNavigate } from "react-router";

function TitleCard({ title }: { title: Title }) {
  const [isHovered, setIsHovered] = useState(false);
  const genres = getGenresByIds(title.genreIds, title.mediaType);
  const navigate = useNavigate();
  return (
    <div
      className={`w-72 pb-3 transition-transform duration-300 ${
        isHovered
          ? "relative z-20 origin-bottom-left scale-105 bg-[#202020] shadow-lg"
          : "bg-background-color"
      }`}
    >
      {/* Card Image */}
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={`${IMAGE_BASE_URL}/original/${title?.imageURL}`}
          className="rounded-md"
          alt="Image Poster"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent" />
        <h3 className="absolute bottom-2 left-1/2 -translate-x-1/2 font-bold tracking-wide">
          {title.titleName}
        </h3>
      </div>
      {/* Card Menu */}
      <div
        className={`transition-opacity duration-200 ease-in-out ${
          isHovered
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Container>
          <div className="item-center flex justify-between pt-3">
            <div>
              <PlayCircleIcon
                fontSize="large"
                className="h-12! w-12! text-white"
              />
              <AddCircleOutlineIcon className="h-12! w-12! text-[#a3a3a3]" />
            </div>
            <button
              className="cursor-pointer"
              onClick={() =>
                navigate(
                  `?${title.mediaType === "movie" ? "movie" : "tv"}=${title.id}`,
                )
              }
            >
              <ExpandCircleDownIcon
                fontSize="large"
                className="h-12! w-12! text-[#a3a3a3]"
              />
            </button>
          </div>

          <div className="flex items-center gap-3 py-2">
            <MediaTag value={title.adult ? "16+" : "13+"} />
            <Rating value={title.rating} />
            <MediaTag value="HD" />
          </div>
          <ul className="flex flex-wrap gap-3 text-sm font-medium">
            {genres.map((genre) => {
              return genre?.name && <li key={genre.id}>{genre.name}</li>;
            })}
          </ul>
        </Container>
      </div>
    </div>
  );
}

export default TitleCard;
