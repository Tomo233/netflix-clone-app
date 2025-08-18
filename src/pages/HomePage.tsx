import CategoryCarousels from "../features/titles/CategoryCarousels";
import HeroSection from "../features/titles/HeroSection";
import TitleModal from "../features/titles/TitleModal";

function HomePage() {
  return (
    <div className="mb-96">
      <HeroSection />
      <TitleModal />
      <CategoryCarousels />
    </div>
  );
}

export default HomePage;
