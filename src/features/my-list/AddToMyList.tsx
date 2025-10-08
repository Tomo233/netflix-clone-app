import type { Title } from "../../types/titles/Title";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import type { TitleDetails } from "../../types/titles/TitleDetails";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useMyList } from "../../context/my-list-context/MyListContext";

type AddToMyListProps = {
  title: Title | TitleDetails;
};

function AddToMyList({ title }: AddToMyListProps) {
  const { handleAddToList, titlesState } = useMyList();
  const isTitleInArray = titlesState.some((t) => t.id === title.id);
  return (
    <button className="cursor-pointer" onClick={() => handleAddToList(title)}>
      {isTitleInArray ? (
        <RemoveCircleOutlineIcon className="h-12! w-12! text-[#a3a3a3]" />
      ) : (
        <AddCircleOutlineIcon className="h-12! w-12! text-[#a3a3a3]" />
      )}
    </button>
  );
}

export default AddToMyList;
