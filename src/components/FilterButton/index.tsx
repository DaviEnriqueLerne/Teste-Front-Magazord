import { FaChevronDown } from "react-icons/fa";
import type { FilterButtonProps } from "./types";
import { useState } from "react";
import { FilterModal } from "../FilterModal";

export function FilterButton({ name, filtersOptions }: FilterButtonProps) {
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);
  const [filters, setFilters] = useState<string[]>([]);

  console.log(filters);
  return (
    <>
      <button
        className="flex items-center gap-1 bg-linear-to-r from-blue-600 to-blue-500 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-sm hover:opacity-90 transition"
        onClick={() => setOpenFilterModal(true)}
      >
        <FaChevronDown className="w-4 h-4" />
        <span>{name}</span>
      </button>
      {openFilterModal && (
        <FilterModal isOpen={openFilterModal} onClose={() => setOpenFilterModal(false)} onApply={setFilters} filterOptions={filtersOptions} />
      )}
    </>
  );
}
