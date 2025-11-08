import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FilterButton } from "../FilterButton";
import type { SearchBarProps } from "./types";
import { FILTER_LANGUAGE_OPTIONS, FILTER_TYPE_OPTIONS } from "../../utils/enums/filterOptions";

export function SearchBar({ onSearch }: SearchBarProps) {
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({ type: "All", language: "All" });

  const handleFilterChange = (filterName: string, selectedFilters: string[]) => {
    const selected = selectedFilters[0] || "All";
    setFilters((prev) => ({
      ...prev,
      [filterName.toLowerCase()]: selected,
    }));

    onSearch(query, { ...filters, [filterName.toLowerCase()]: selected });
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value, filters);
  };

  return (
    <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-3 py-2 w-full max-w-md shadow-sm">
      {!isSearching ? (
        <div className="flex items-center gap-3 w-full">
          <FilterButton name="Type" filtersOptions={FILTER_TYPE_OPTIONS} onFilterChange={handleFilterChange} />
          <FilterButton name="Language" filtersOptions={FILTER_LANGUAGE_OPTIONS} onFilterChange={handleFilterChange} />
          <button onClick={() => setIsSearching(true)} className="ml-auto text-blue-500 hover:text-blue-600 transition">
            <FaSearch className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <div className="flex items-center w-full">
          <FaSearch className="w-5 h-8 text-blue-500 mr-2" />
          <input
            type="text"
            placeholder="Search here..."
            value={query}
            onChange={handleQueryChange}
            onBlur={() => setIsSearching(false)}
            autoFocus
            className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
      )}
    </div>
  );
}
