import { FaStar } from "react-icons/fa";
import { PiGitFork } from "react-icons/pi";
import type { ItemRow } from "./types";
import { Link } from "react-router-dom";

export function ItemRow({ description, forks, stars, title, urlRedirectRepo, language, activeTab }: ItemRow) {
  return (
    <Link to={urlRedirectRepo}>
      <div className="flex flex-col border border-gray-200 rounded-xl p-4 w-full max-w-sm bg-white shadow-sm">
        <div>
          <h2 className="text-gray-900 text-base font-medium">
            {title.split("/")[0]} / <span className="text-blue-600 hover:underline cursor-pointer">{title.split("/")[1]}</span>
          </h2>
          <p className="text-gray-400 text-sm mt-1">{description}</p>
        </div>
        <div className="flex items-center gap-4 mt-4 text-sm text-gray-700">
          {activeTab === "repositories" ? (
            <div className="flex items-center gap-1">
              <FaStar className="w-4 h-4 fill-current text-black" />
              <span>{stars.toLocaleString()}</span>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <span>{language}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <PiGitFork className="w-4 h-4 text-black" />
            <span>{forks}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
