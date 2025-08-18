import Carousel from "../../components/ui/Carousel";
import TitleCard from "./TitleCard";

function TitleCarousel({ url }: { url: string }) {
  console.log(url);

  return (
    <>
      <Carousel data={[{}]} renderItem={() => <TitleCard />} />
    </>
  );
}

export default TitleCarousel;
