import { useState } from "react";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Container from "../../components/ui/Container";
import MediaTag from "../../components/ui/MediaTag";
import Rating from "../../components/ui/Rating";

const movie = {
  adult: false,
  backdrop_path: "/ncEsesgOJDNrTUED89hYbA117wo.jpg",
  belongs_to_collection: {
    id: 210,
    name: "The Matrix Collection",
    poster_path: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdrop_path: "/54CPwp2v1uW4Xr8RzqV1XJpMqKP.jpg",
  },
  budget: 63000000,
  genres: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
  ],
  homepage: "http://www.warnerbros.com/matrix",
  id: 603,
  imdb_id: "tt0133093",
  original_language: "en",
  original_title: "The Matrix",
  overview:
    "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
  popularity: 60.441,
  poster_path: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  production_companies: [
    {
      id: 79,
      name: "Village Roadshow Pictures",
      logo_path: "/ekpNvTXm9gEfRaz2gP1G8E7AaeM.png",
      origin_country: "AU",
    },
    {
      id: 9,
      name: "New Line Cinema",
      logo_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.png",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "1999-03-30",
  revenue: 463517383,
  runtime: 136,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "Welcome to the Real World.",
  title: "The Matrix",
  video: false,
  vote_average: 8.7,
  vote_count: 22537,
};

const baseUrl = "https://image.tmdb.org/t/p/";
// const posterPath = "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg";

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
