import Carousel from "../../components/ui/Carousel";
import Loader from "../../components/ui/Loader";
import { useTitles } from "./hooks/useTitles";
import TitleCard from "./TitleCard";

function TitleCarousel({ url }: { url: string }) {
  const { titles, isLoadingTitles } = useTitles(url);
  console.log(url);
  if (isLoadingTitles) return <Loader />;

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
