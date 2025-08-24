import Carousel from "../../components/ui/Carousel";
import { useTitles } from "./hooks/useTitles";
import TitleCard from "./TitleCard";
import ProgressLoader from "../../components/ui/ProgressLoader";

function TitleCarousel({ url }: { url: string }) {
  const { titles, isLoadingTitles } = useTitles(url);

  if (isLoadingTitles) return <ProgressLoader />;

  return (
    <>
      <Carousel
        data={titles}
        renderItem={(item, index) => <TitleCard title={item} key={index} />}
      />
    </>
  );
}

export default TitleCarousel;
