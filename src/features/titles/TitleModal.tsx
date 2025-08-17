import BasicModal from "../../components/ui/BasicModal";
import TitlePreviewSection from "./TitlePreviewSection";
import EpisodesSection from "./EpisodesSection";
import MoreLikeThis from "./MoreLikeThis";
import { useSearchParams } from "react-router";

function TitleModal() {
  const [searchParams] = useSearchParams();

  const isOpened = Boolean(searchParams.get("title"));

  return (
    <BasicModal width={1000} open={isOpened}>
      <TitlePreviewSection />
      <div className="px-10">
        <EpisodesSection />
        <MoreLikeThis />
      </div>
    </BasicModal>
  );
}

export default TitleModal;
