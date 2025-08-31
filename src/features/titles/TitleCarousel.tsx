import Carousel from "../../components/ui/Carousel";
import { useTitles } from "./hooks/useTitles";
import TitleCard from "./TitleCard";
import ProgressLoader from "../../components/ui/ProgressLoader";

function TitleCarousel({ item }: { item: { title: string; url: string } }) {
  const { title, url } = item;
  const { titles, isLoadingTitles } = useTitles(url);

  if (isLoadingTitles) return <ProgressLoader />;

  if (!titles || titles?.length < 2) return;

  return (
    <>
      <h2 className="text-2xl font-medium tracking-wide">{title}</h2>
      <Carousel
        data={titles}
        renderItem={(item, index) => <TitleCard title={item} key={index} />}
      />
    </>
  );
}

export default TitleCarousel;
