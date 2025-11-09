import { useEffect, useState } from "react";
import { FaX } from "react-icons/fa6";
import type { UserModalSearchReposProps } from "./types";
import { FiAlertCircle, FiLoader } from "react-icons/fi";

export function UserModalSearchRepos({ isOpen, onClose, onSearch, isLoading, isError }: UserModalSearchReposProps) {
  const [username, setUsername] = useState<string>("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleClear = () => {
    setUsername("");
  };

  const handleSearch = async () => {
    if (username.trim() !== "") {
      setHasSearched(true);
      onSearch(username.trim());
    }
  };

  useEffect(() => {
    if (hasSearched && !isLoading && !isError) {
      onClose();
      setUsername("");
      setHasSearched(false);
    }
  }, [isLoading, isError, hasSearched, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm z-10">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition">
          <FaX className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold text-gray-900 text-center mb-4">GitHub User Search</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="w-full border border-gray-300 rounded-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
        />
        {isError && !isLoading && (
          <div className="flex items-center text-red-600 text-sm mb-3">
            <FiAlertCircle className="w-4 h-4 mr-1" />
            {"User not found or an error occurred. Please try again."}
          </div>
        )}
        {isLoading ? (
          <div className="flex justify-center items-center">
            <FiLoader className="w-4 h-4 mr-2 animate-spin" />
            Searching...
          </div>
        ) : (
          <div className="flex justify-between">
            <button
              onClick={handleClear}
              className="flex-1 mr-2 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition text-sm font-medium"
            >
              Clear
            </button>
            <button
              onClick={handleSearch}
              className="flex-1 ml-2 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium hover:opacity-90 transition text-sm"
            >
              Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
