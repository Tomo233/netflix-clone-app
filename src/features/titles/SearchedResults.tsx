function SearchedResults() {
  return (
    <>
      <div className="my-10 flex items-center gap-5">
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
      <div className="grid grid-cols-5"></div>
    </>
  );
}

export default SearchedResults;
