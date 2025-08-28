import Row from "../../components/ui/Row";
import SkeletonLoader from "../../components/ui/SkeletonLoader";
import { useSearchedResults } from "./hooks/useSearchedResults";
import TitleCard from "./TitleCard";

function SearchedResults() {
  const { searchedResults, isLoadingSearchedResults } = useSearchedResults();

  console.log(searchedResults);

  if (isLoadingSearchedResults) return <SkeletonLoader />;

  if (searchedResults?.length === 0)
    return (
      <p className="mt-24 mb-96 text-center text-3xl font-semibold tracking-wide uppercase">
        No Results Found.
      </p>
    );

  return (
    <>
      <div className="my-10 mb-10 flex items-center gap-5">
        <span className="text-secondary-text-color text-lg tracking-wide">
          More to explore:
        </span>
        <ul className="flex cursor-pointer gap-3 font-medium tracking-wide">
          <li className="transition-colors duration-300 ease-in-out hover:text-red-500">
            Breaking
          </li>
          <span>|</span>
          <li>Breaking Bad</li>
          <span>|</span>
          <li>Breaking Down</li>
          <span>|</span>
          <li>Breaking In</li>
          <span>|</span>
          <li>Prison Break</li>
        </ul>
      </div>
      <Row>
        {searchedResults?.map((result) => (
          <TitleCard title={result} key={result.id} />
        ))}
      </Row>
    </>
  );
}

export default SearchedResults;
