import type { Repo } from "../../hooks/useFetchRepositories/types";

export type RepoStore = {
  repo: Repo[];
  setRepo: (repo: Repo[]) => void;
  starred: Repo[];
  setStarred: (repo: Repo[]) => void;
};
