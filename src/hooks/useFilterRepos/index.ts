import { useMemo } from "react";
import type { Repo } from "../useFetchRepositories/types";
import type { FilterParams } from "./types";

export function useFilteredRepos(repos: Repo[], filters: FilterParams) {
  const filteredRepos = useMemo(() => {
    return repos.filter((repo) => {
      const matchesText =
        repo.full_name.toLowerCase().includes(filters.text.toLowerCase()) || repo.description?.toLowerCase().includes(filters.text.toLowerCase());

      const matchesType =
        filters.type === "All" ||
        (filters.type === "Sources" && !repo.fork && !repo.archived && !repo.mirror_url) ||
        (filters.type === "Forks" && repo.fork) ||
        (filters.type === "Archived" && repo.archived) ||
        (filters.type === "Mirrors" && repo.mirror_url);

      const matchesLanguage = filters.language === "All" || (repo.language && repo.language.toLowerCase() === filters.language.toLowerCase());

      return matchesText && matchesType && matchesLanguage;
    });
  }, [repos, filters]);

  return filteredRepos;
}
