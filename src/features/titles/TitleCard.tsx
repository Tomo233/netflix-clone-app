import { useState } from "react";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Container from "../../components/ui/Container";
import MediaTag from "../../components/ui/MediaTag";
import Rating from "../../components/ui/Rating";

function TitleCard({ title }) {
  const [isHovered, setIsHovered] = useState(false);

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
          src={`${baseUrl}/original/${title?.imageURL}`}
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
            <ExpandCircleDownIcon
              fontSize="large"
              className="h-12! w-12! text-[#a3a3a3]"
            />
          </div>

          <div className="flex items-center gap-3 py-2">
            <MediaTag value="16+" />
            <Rating value={8.1} />
            <MediaTag value="HD" />
          </div>
          <ul className="flex justify-between text-sm font-medium">
            {title.genreIds.map((id) => {
              return <li>{id}</li>;
            })}
          </ul>
        </Container>
      </div>
    </div>
  );
}

export default TitleCard;
