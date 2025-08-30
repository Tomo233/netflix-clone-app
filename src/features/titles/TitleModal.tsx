import BasicModal from "../../components/ui/BasicModal";
import TitlePreviewSection from "./TitlePreviewSection";
import EpisodesSection from "./EpisodesSection";
import MoreLikeThis from "./MoreLikeThis";
import { useSearchParams } from "react-router";

function TitleModal() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCloseModal = () => {
    const titleKey = searchParams.has("movie") ? "movie" : "tv";
    const seasonKey = searchParams.has("season") ? "season" : "";
    searchParams.delete(titleKey);
    searchParams.delete(seasonKey);
    setSearchParams(searchParams);
  };

  const isOpened = Boolean(searchParams.get("movie") || searchParams.get("tv"));

  return (
    <BasicModal handleClose={handleCloseModal} width={1000} open={isOpened}>
      <TitlePreviewSection handleClose={handleCloseModal} />
      <div className="px-10">
        {searchParams.has("tv") && <EpisodesSection />}
        <MoreLikeThis />
      </div>
    </BasicModal>
  );
}

export default TitleModal;
