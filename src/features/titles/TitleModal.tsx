import BasicModal from "../../components/ui/BasicModal";
import EpisodesSection from "./EpisodesSection";
import TitlePreviewSection from "./TitlePreviewSection";

function TitleModal() {
  return (
    <BasicModal width={1000}>
      <TitlePreviewSection />
      <EpisodesSection />
    </BasicModal>
  );
}

export default TitleModal;
