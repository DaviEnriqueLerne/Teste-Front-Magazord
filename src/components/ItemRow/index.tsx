import { FaStar } from "react-icons/fa";
import { PiGitFork } from "react-icons/pi";
import type { ItemRow } from "./types";
import { Link } from "react-router-dom";

export function ItemRow({ description, forks, stars, title, urlRedirectRepo, language, activeTab }: ItemRow) {
  return (
    <Link to={urlRedirectRepo} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col p-5 w-full bg-white transition-shadow duration-200 cursor-pointer">
        <div>
          <h2 className="text-gray-900 text-base font-medium truncate">
            <span>{title.split("/")[0]}/</span>
            <span className="text-blue-600 hover:underline">{title.split("/")[1]}</span>
          </h2>
          {description && <p className="text-gray-500 text-sm mt-1 line-clamp-2">{description}</p>}
        </div>
        <div className="flex flex-wrap items-center gap-5 mt-4 text-sm text-gray-700">
          {activeTab === "repositories" ? (
            <div className="flex items-center gap-1">
              <FaStar />
              <span>{stars?.toLocaleString()}</span>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <span>{language}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <PiGitFork />
            <span>{forks}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
