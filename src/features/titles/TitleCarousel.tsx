import Carousel from "../../components/ui/Carousel";
import TitleCard from "./TitleCard";

function TitleCarousel({ url }: { url: string }) {
  return (
    <>
      <Carousel data={[{}]} renderItem={() => <TitleCard />} />
    </>
  );
}

export default TitleCarousel;
