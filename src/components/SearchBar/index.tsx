import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FilterButton } from "../FilterButton";
import type { SearchBarProps } from "./types";

const FILTER_TYPE_OPTIONS = ["All", "Sources", "Forks", "Archived", "Mirrors"];
const FILTER_LANGUAGE_OPTIONS = ["All", "Java", "TypeScript", "HTML", "CSS"];

export function SearchBar({ onSearch }: SearchBarProps) {
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearchClick = () => {
    setIsSearching(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsSearching(false);
      setQuery("");
    }, 150);
  };

  return (
    <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-3 py-2 w-full max-w-md shadow-sm">
      {!isSearching ? (
        <div className="flex items-center gap-3 w-full h-10">
          <FilterButton name="Type" filtersOptions={FILTER_TYPE_OPTIONS} />
          <FilterButton name="Language" filtersOptions={FILTER_LANGUAGE_OPTIONS} />

          <button onClick={handleSearchClick} className="ml-auto text-blue-500 hover:text-blue-600 transition">
            <FaSearch className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <div className="flex items-center w-full">
          <FaSearch className="w-5 h-10 text-blue-500 mr-2" />
          <input
            autoFocus
            type="text"
            placeholder="Search here"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              onSearch(e.target.value);
            }}
            onBlur={handleBlur}
            className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
      )}
    </div>
  );
}
