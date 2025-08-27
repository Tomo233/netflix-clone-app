import Menu from "../../components/ui/Menu";
import ProgressLoader from "../../components/ui/ProgressLoader";
import { IMAGE_BASE_URL } from "../../constants/tmdbBaseUrls";
import { useEpisodes } from "./hooks/useEpisodes";
import { useNumberOfSeasons } from "./hooks/useNumberOfSeasons";

function EpisodesSection() {
  const { episodesOverview, isLoadingEpisodesOverview } = useEpisodes();
  const { numberOfSeasons, isLoadingNumberOfSeasons } = useNumberOfSeasons();

  if (isLoadingEpisodesOverview || isLoadingNumberOfSeasons)
    return <ProgressLoader />;

  const data = Array.from(
    { length: numberOfSeasons! },
    (_, index) => `Season ${index + 1}`,
  );

  return (
    <section className="pt-3">
      {/* Heading and Menu */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="pt-3 text-2xl font-semibold">Episodes</h3>
          <p className="pt-1 text-sm font-medium tracking-wider">Season 1 :</p>
        </div>
        <Menu data={data} paramName="season" />
      </div>

      {/* Main Content */}
      <div className="grid pb-10">
        {episodesOverview?.map((episode) => {
          return (
            <div
              className="border-border-color flex items-center border-b py-5"
              key={episode.id}
            >
              <div className="text-secondary-text-color flex h-20 w-20 items-center justify-center text-3xl">
                {episode.episodeNumber}
              </div>
              <div className="flex w-full gap-3">
                <img
                  src={`${IMAGE_BASE_URL}original/${episode.imageURL}`}
                  className="w-36"
                  alt="title image"
                />
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-medium tracking-wide">
                      {episode.episodeName}
                    </h4>
                    <p className="font-medium">{episode.length}min</p>
                  </div>
                  <p className="text-sm">{episode.overview}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default EpisodesSection;
