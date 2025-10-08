import { useMyList } from "../../context/my-list-context/MyListContext";
import TitleCard from "../titles/TitleCard";

function MyList() {
  const { titlesState } = useMyList();

  return (
    <div className="mb-10 grid grid-cols-5">
      {titlesState.map((title) => (
        <TitleCard title={title} key={title.id} />
      ))}
    </div>
  );
}

export default MyList;
