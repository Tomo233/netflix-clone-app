import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Overlay from "../../components/ui/Overlay";

function HeroSection() {
  return (
    <section className="mb-64">
      {/* Image */}
      <div className="absolute top-0 left-1/2 -z-10 w-full -translate-x-1/2">
        <img
          src="https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
          alt="Poster of the Movie"
          className="h-[800px] w-full object-cover object-top"
        />
        <Overlay type="top" />
      </div>

      {/* Content */}
      <div className="max-w-4xl space-y-4 px-4 pt-56">
        <span className="text-lg font-bold text-red-600">N FILM</span>
        <h1 className="text-5xl font-extrabold">ALMOST COPS</h1>
        <p className="max-w-xl text-lg">
          Demoted to community officer, reckless ex-detective Jack gets
          partnered up with the eccentric Ramon. The perfect duo to fight
          crime... with chaos.
        </p>
        <div className="flex gap-4">
          <button className="flex cursor-pointer items-center rounded bg-white px-10 py-2 text-lg font-semibold text-black hover:bg-gray-200">
            <PlayArrowIcon fontSize="large" />
            Play
          </button>
          <button className="flex cursor-pointer items-center gap-2 rounded border border-white bg-[#6D6D6E]/70 px-8 py-2 text-lg hover:bg-[#6D6D6E]/80">
            <InfoOutlineIcon fontSize="large" />
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
