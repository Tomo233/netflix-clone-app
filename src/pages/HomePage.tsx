import Carousel from "../components/ui/Carousel";
import HeroSection from "../features/titles/HeroSection";
import TitleCard from "../features/titles/TitleCard";

type typees = {
  id: number;
  title: string;
};

const cards: typees[] = [
  { id: 1, title: "Card 1" },
  { id: 2, title: "Card 2" },
  { id: 3, title: "Card 3" },
  { id: 4, title: "Card 4" },
  { id: 5, title: "Card 5" },
  { id: 6, title: "Card 6" },
  { id: 7, title: "Card 7" },
  { id: 8, title: "Card 8" },
  { id: 9, title: "Card 9" },
  { id: 10, title: "Card 10" },
];

function HomePage() {
  return (
    <div className="mb-96">
      <HeroSection />
      <Carousel data={cards} renderItem={() => <TitleCard />} />
    </div>
  );
}

export default HomePage;
