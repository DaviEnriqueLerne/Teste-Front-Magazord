import { useEffect, useMemo, useState } from "react";
import type { ContentSelector } from "./types";
import { LuBookMarked } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { SearchBar } from "../SearchBar";
import { ItemRow } from "../ItemRow";
import type { Repo } from "../../hooks/useFetchRepositories/types";
import { repoStore } from "../../store/reposStore";

export function ContentSelector() {
  const repositories = repoStore((state) => state.repo);
  const starred = repoStore((state) => state.starred);

  const [activeTab, setActiveTab] = useState<"repositories" | "starred">("repositories");
  const [search, setSearch] = useState("");
  const [repoSelected, setRepoSelected] = useState<Repo[]>(repositories);

  const handleChange = (tab: "repositories" | "starred") => {
    setActiveTab(tab);
  };

  const filteredRepos = useMemo(() => {
    return repoSelected.filter((item) => item.full_name.toLowerCase().includes(search.toLowerCase()));
  }, [repoSelected, search]);

  useEffect(() => {
    function SelectedContent() {
      if (activeTab === "repositories") {
        setRepoSelected(repositories);
      } else {
        setRepoSelected(starred);
      }
    }

    SelectedContent();
  }, [activeTab, repositories, starred]);

  return (
    <>
      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-8">
          <button
            onClick={() => handleChange("repositories")}
            className={`flex items-center gap-2 px-3 pb-3 border-b-2 transition-all duration-200 ${
              activeTab === "repositories" ? "border-orange-400 text-gray-900" : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            <LuBookMarked className={`w-4 h-4 ${activeTab === "repositories" ? "text-gray-900" : "text-gray-400"}`} />
            <span className="text-sm font-medium">Repositories</span>
            <span className="text-xs bg-gray-100 text-gray-500 rounded-full px-2 py-0.5 leading-none">{repositories.length}</span>
          </button>
          <button
            onClick={() => handleChange("starred")}
            className={`flex items-center gap-2 px-3 pb-3 border-b-2 transition-all duration-200 ${
              activeTab === "starred" ? "border-orange-400 text-gray-900" : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            <FaStar className={`w-4 h-4 ${activeTab === "starred" ? "text-gray-900" : "text-gray-400"}`} />
            <span className="text-sm font-medium">Starred</span>
            <span className="text-xs bg-gray-100 text-gray-500 rounded-full px-2 py-0.5 leading-none">{starred.length}</span>
          </button>
        </div>
      </div>
      <div className="flex justify-center w-full mt-3">
        <div className="w-full max-w-lg">
          <SearchBar onSearch={setSearch} />
          {filteredRepos.map((repo, index) => (
            <>
              <ItemRow
                key={repo.id}
                description={repo.description}
                forks={repo.forks_count}
                stars={repo.stargazers_count}
                language={repo.language}
                title={repo.full_name}
                urlRedirectRepo={repo.html_url}
                activeTab={activeTab}
              />
              {index < filteredRepos.length - 1 && <div className="border-t border-gray-200 my-4"></div>}
            </>
          ))}
        </div>
      </div>
    </>
  );
}
