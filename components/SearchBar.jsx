"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="flex gap-4 items-center w-[200px]">
      <input
        type="text"
        name=""
        id=""
        className="w-full px-4 py-1 border-2 border-solid border-black rounded-md outline-none"
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
    </div>
  );
};

export default SearchBar;
