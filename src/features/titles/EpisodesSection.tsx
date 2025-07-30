import Menu from "../../components/ui/Menu";

function EpisodesSection() {
  return (
    <section className="pt-3">
      {/* Heading and Menu */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="pt-3 text-2xl font-semibold">Episodes</h3>
          <p className="pt-1 text-sm font-medium tracking-wider">Season 1 :</p>
        </div>
        <Menu data={["Season1", "Season2"]} />
      </div>

      {/* Main Content */}
      <div className="grid pb-10">
        <div className="border-border-color flex items-center border-b py-5">
          <div className="text-secondary-text-color flex h-20 w-20 items-center justify-center text-3xl">
            1
          </div>
          <div className="flex gap-3">
            <img
              src="https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
              className="w-36"
              alt="title image"
            />
            <div>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-medium tracking-wide">Pilot</h4>
                <p className="font-medium">58m</p>
              </div>
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos alias libero soluta in quos voluptatem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EpisodesSection;
