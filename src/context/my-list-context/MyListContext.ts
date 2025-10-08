import { createContext, useContext } from "react";
import type { Title } from "../../types/titles/Title";
import type { TitleDetails } from "../../types/titles/TitleDetails";

type MyListContextValue = {
  titlesState: Title[] | TitleDetails[];
  handleAddToList: (item: Title | TitleDetails) => void;
};

const MyListContext = createContext<MyListContextValue | undefined>(undefined);

function useMyList() {
  const context = useContext(MyListContext);
  if (context === undefined)
    throw new Error("MyListContext was used outside of DarkModeProvider");
  return context;
}

export { MyListContext, useMyList };
