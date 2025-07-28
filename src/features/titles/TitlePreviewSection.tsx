import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import StarIcon from "@mui/icons-material/Star";

function TitlePreviewSection() {
  return (
    <section>
      <div className="relative">
        {/* Close Button */}
        <button className="bg-border-color absolute top-3.5 right-3.5 z-50 cursor-pointer rounded-full p-1">
          <CloseIcon fontSize="large" />
        </button>

        <img
          src="https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
          alt="Poster of the Movie"
          className="h-[500px] w-full object-cover object-top"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

        {/* Text Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end px-10 pb-20 text-white">
          <span className="text-lg font-bold text-red-600">N SHOW</span>
          <img src="" alt="" />
          <h2 className="mb-3 text-5xl font-extrabold tracking-wide">
            ALMOST COPS
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
              <p>2025</p>
              <p>1h 37m</p>
              <p className="rounded-sm border border-[#7c7676] px-1 text-sm">
                HD
              </p>
            </div>

            <div className="flex items-center gap-3">
              <p className="rounded-sm border border-[#7c7676] px-1.5 text-sm">
                16+
              </p>
              <span className="flex items-center gap-1">
                8.1
                <StarIcon fontSize="small" />
              </span>
              <p className="rounded-sm border border-[#7c7676] px-1 text-sm">
                EN
              </p>
            </div>
          </div>

          <div className="max-w-70 text-sm">
            <p className="text-secondary-text-color font-medium tracking-wide">
              Productions :{" "}
              <span className="font-semibold text-white">
                Sony Pictures Television,High Bridge Productions,Gran Via
                Productions
              </span>
            </p>

            <p className="text-secondary-text-color mt-2 font-medium tracking-wide">
              Genres :{" "}
              <span className="font-semibold text-white">Action,Comedy</span>
            </p>
          </div>
        </div>

        <h3 className="pt-3 pb-1 text-xl font-semibold">Overview : </h3>
        <p className="max-w-3/4">
          On the rugged isle of Berk, where Vikings and dragons have been bitter
          enemies for generations, Hiccup stands apart, defying centuries of
          tradition when he befriends Toothless, a feared Night Fury dragon.
          Their unlikely bond reveals the true nature of dragons, challenging
          the very foundations of Viking society.
        </p>
      </div>
    </section>
  );
}

export default TitlePreviewSection;
