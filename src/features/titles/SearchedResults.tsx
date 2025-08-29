import Row from "../../components/ui/Row";
import SkeletonLoader from "../../components/ui/SkeletonLoader";
import { useSearchedResults } from "./hooks/useSearchedResults";
import TitleCard from "./TitleCard";

function SearchedResults() {
  const { searchedResults, isLoadingSearchedResults } = useSearchedResults();

  if (isLoadingSearchedResults) return <SkeletonLoader />;

  if (searchedResults?.length === 0)
    return (
      <p className="mt-24 mb-96 text-center text-3xl font-semibold tracking-wide uppercase">
        No Results Found.
      </p>
    );

  const moreToExplore = searchedResults
    ?.slice(0, 5)
    .map((result) => result.titleName);

  return (
    <div>
      <div className="my-12 flex items-center gap-5">
        <span className="text-secondary-text-color text-lg tracking-wide">
          More to explore:
        </span>
        <ul className="flex cursor-pointer gap-5 font-medium tracking-wide">
          {moreToExplore?.map((item) => (
            <li
              className="transition-colors duration-300 ease-in-out hover:text-red-500"
              key={item}
            >
              {item}
              <span className="pl-3">|</span>
            </li>
          ))}
        </ul>
      </div>
      <Row>
        {searchedResults?.map((result) => (
          <TitleCard title={result} key={result.id} />
        ))}
      </Row>
    </div>
  );
}

export default SearchedResults;
