import { useState, useEffect, type ReactNode } from "react";
import type { Title } from "../../types/titles/Title";
import type { TitleDetails } from "../../types/titles/TitleDetails";
import { MyListContext } from "./MyListContext";

export function MyListProvider({ children }: { children: ReactNode }) {
  const [titlesState, setTitlesState] = useState<Title[] | TitleDetails[]>(
    () => {
      const titles = localStorage.getItem("titles");
      return titles ? [...JSON.parse(titles)] : [];
    },
  );

  const handleAddToList = (item: Title | TitleDetails) => {
    const isTitleInArray = titlesState.some((t) => t.id === item.id);
    if (!isTitleInArray) setTitlesState((prev) => [...prev, item]);
    else setTitlesState((prev) => prev.filter((title) => title.id !== item.id));
  };

  useEffect(() => {
    localStorage.setItem("titles", JSON.stringify(titlesState));
  }, [titlesState]);

  return (
    <MyListContext.Provider
      value={{
        titlesState,
        handleAddToList,
      }}
    >
      {children}
    </MyListContext.Provider>
  );
}
