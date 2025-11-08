import { create } from "zustand";
import type { RepoStore } from "./types";

export const repoStore = create<RepoStore>((set) => ({
  repo: [],
  setRepo: (repo) => set({ repo }),
  starred: [],
  setStarred: (starred) => set({ starred }),
}));
