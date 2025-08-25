import Overlay from "../../components/ui/Overlay";

import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MediaTag from "../../components/ui/MediaTag";
import Rating from "../../components/ui/Rating";
import NetflixShow from "../../components/ui/NetflixShow";
import { useTitleDetails } from "./hooks/useTitleDetails";
import ProgressLoader from "../../components/ui/ProgressLoader";
import { getGenresByIds } from "../../utils/getGenresByIds";
import { IMAGE_BASE_URL } from "../../constants/tmdbBaseUrls";

function TitlePreviewSection({ handleClose }: { handleClose: () => void }) {
  const { titleDetails, isLoadingTitleDetails } = useTitleDetails();

  if (isLoadingTitleDetails)
    return (
      <div className="pt-10">
        <ProgressLoader />
      </div>
    );

  if (!titleDetails)
    return (
      <p className="py-10 text-center text-2xl font-medium tracking-wide uppercase">
        No Data To Display...
      </p>
    );

  const genres = getGenresByIds(titleDetails.genreIds, titleDetails.mediaType);

  return (
    <section>
      <div className="relative">
        {/* Close Button */}
        <button
          className="bg-border-color absolute top-3.5 right-3.5 z-50 cursor-pointer rounded-full p-1"
          onClick={handleClose}
        >
          <CloseIcon fontSize="large" />
        </button>

        <img
          src={`${IMAGE_BASE_URL}original/${titleDetails?.imageURL}`}
          alt="Poster of the Movie"
          className="h-[500px] w-full object-cover object-top"
        />

        <Overlay type="bottom" />

        {/* Text Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end px-10 pb-20 text-white">
          <NetflixShow />

          <h2 className="mb-3 text-5xl font-extrabold tracking-wide">
            {titleDetails.titleName}
          </h2>
          <div className="flex gap-3">
            <button className="flex cursor-pointer items-center rounded bg-white px-10 py-2 text-lg font-semibold text-black hover:bg-gray-200">
              <PlayArrowIcon fontSize="large" />
              Play
            </button>
            <button className="cursor-pointer">
              <AddCircleOutlineIcon className="h-12! w-12! text-[#a3a3a3]" />
            </button>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="px-10">
        <div className="flex justify-between gap-10 pt-5">
          <div className="text-sm">
            <div className="flex gap-2 pb-1">
              <p>{titleDetails.releaseYear}</p>
              <p>{titleDetails.length} min</p>
              <MediaTag value="HD" />
            </div>

            <div className="flex items-center gap-2">
              <MediaTag value={titleDetails.adult ? "16+" : "13+"} />
              <Rating value={titleDetails.rating} />
              <MediaTag value="EN" />
            </div>
          </div>

          <div className="max-w-70 text-sm">
            <p className="text-secondary-text-color font-medium tracking-wide">
              Productions :{" "}
              {titleDetails?.creators.map((creator: string, i: number) => (
                <span className="font-semibold text-white" key={i}>
                  {creator}
                  {i !== titleDetails.creators.length - 1 && ", "}
                </span>
              ))}
            </p>

            <p className="text-secondary-text-color mt-2 font-medium tracking-wide">
              Genres :{" "}
              {genres.map((genre, i) => (
                <span className="font-semibold text-white" key={i}>
                  {genre?.name}
                  {i !== genres.length - 1 && ", "}
                </span>
              ))}
            </p>
          </div>
        </div>

        <h3 className="pt-3 pb-1 text-xl font-semibold">Overview : </h3>
        <p className="max-w-3/4">{titleDetails.overview}</p>
      </div>
    </section>
  );
}

export default TitlePreviewSection;
