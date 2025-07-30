import BasicModal from "../../components/ui/BasicModal";
import TitlePreviewSection from "./TitlePreviewSection";
import EpisodesSection from "./EpisodesSection";
import MoreLikeThis from "./MoreLikeThis";

function TitleModal() {
  return (
    <BasicModal width={1000}>
      <TitlePreviewSection />
      <div className="px-10">
        <EpisodesSection />
        <MoreLikeThis />
      </div>
    </BasicModal>
  );
}

export default TitleModal;
