import { FaChevronDown } from "react-icons/fa6";
import { FilterModal } from "../FilterModal";
import type { FilterButtonProps } from "./types";
import { useState } from "react";

export function FilterButton({ name, filtersOptions, onFilterChange }: FilterButtonProps) {
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);
  const [filters, setFilters] = useState<string[]>([]);

  const handleApply = (selectedFilters: string[]) => {
    setFilters(selectedFilters);
    setOpenFilterModal(false);
    onFilterChange(name, selectedFilters);
  };

  return (
    <>
      <button
        className="flex items-center gap-1 bg-linear-to-r from-blue-600 to-blue-500 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-sm hover:opacity-90 transition-all"
        onClick={() => setOpenFilterModal(true)}
      >
        <FaChevronDown className="w-4 h-4" />
        <span>{name}</span>
      </button>

      {openFilterModal && (
        <FilterModal
          isOpen={openFilterModal}
          onClose={() => setOpenFilterModal(false)}
          onApply={handleApply}
          filterOptions={filtersOptions}
          selectedFilters={filters}
        />
      )}
    </>
  );
}
