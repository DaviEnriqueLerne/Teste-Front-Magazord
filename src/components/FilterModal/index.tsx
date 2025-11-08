import { useState } from "react";
import { FaX } from "react-icons/fa6";
import type { FilterModalProps } from "./types";

export function FilterModal({ isOpen, onClose, onApply, filterOptions }: FilterModalProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    if (option === "All") {
      setSelected(["All"]);
    } else {
      setSelected((prev) => (prev.includes(option) ? prev.filter((item) => item !== option) : [...prev.filter((item) => item !== "All"), option]));
    }
  };

  const handleApply = () => {
    onApply(selected);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-sm p-6 shadow-xl z-10 animate-slide-up">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Type</h2>
          <button onClick={onClose} className="text-red-500 hover:text-red-600 transition">
            <FaX className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-3">
          {filterOptions.map((option) => (
            <label key={option} className="flex items-center space-x-2 text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => toggleOption(option)}
                className="w-4 h-4 accent-blue-600 rounded focus:ring-0"
              />
              <span className="text-sm">{option}</span>
            </label>
          ))}
        </div>
        <button
          onClick={handleApply}
          className="mt-6 w-full py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-medium hover:opacity-90 transition"
        >
          Apply Filters
        </button>
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}
