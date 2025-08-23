import { useLocation, useNavigate } from "react-router";
import { IMAGE_BASE_URL } from "../../constants/tmdbBaseUrls";
import { useHeroTitle } from "./hooks/useHeroTitle";

import Overlay from "../../components/ui/Overlay";
import NetflixShow from "../../components/ui/NetflixShow";
import HeroTitleMenu from "./HeroTitleMenu";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import Loader from "../../components/ui/Loader";

function HeroSection() {
  const { pathname } = useLocation();
  const { heroTitle, isLoadingHeroTitle } = useHeroTitle();
  const navigate = useNavigate();
  if (isLoadingHeroTitle)
    return (
      <div className="mb-96">
        <Loader />
      </div>
    );
  return (
    <section className="mb-64">
      {/* Image */}
      <div className="absolute top-0 left-1/2 -z-10 w-full -translate-x-1/2">
        <img
          src={`${IMAGE_BASE_URL}/original/${heroTitle?.imageURL}`}
          alt="Poster of the Movie"
          className="h-[800px] w-full object-cover object-top"
        />
        <Overlay type="top" />
      </div>

      {/* Genres Menu */}

      {pathname !== "/browse" && <HeroTitleMenu />}

      {/* Content */}
      <div className="max-w-4xl space-y-4 px-4 pt-56">
        <NetflixShow />
        <h1 className="text-5xl font-extrabold">{heroTitle?.titleName}</h1>
        <p className="max-w-xl text-lg">{heroTitle?.overview}</p>
        <div className="flex gap-4">
          <button className="flex cursor-pointer items-center rounded bg-white px-10 py-2 text-lg font-semibold text-black hover:bg-gray-200">
            <PlayArrowIcon fontSize="large" />
            Play
          </button>
          <button
            className="flex cursor-pointer items-center gap-2 rounded border border-white bg-[#6D6D6E]/70 px-8 py-2 text-lg hover:bg-[#6D6D6E]/80"
            onClick={() => {
              navigate(
                `?${heroTitle?.mediaType === "movie" ? "movie" : "tv"}=${heroTitle?.id}`,
              );
            }}
          >
            <InfoOutlineIcon fontSize="large" />
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
