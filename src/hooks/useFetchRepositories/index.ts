import { useQuery } from "@tanstack/react-query";
import { createQueryOptions } from "../../utils/react-query";
import type { Repo } from "./types";

export async function fetchRepositories(username: string, path: string): Promise<Repo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/${path}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Erro ${response.status}: usuário não encontrado`);
    }

    const data = await response.json();
    return data;
  } catch {
    throw new Error();
  }
}

export const repositoriesQueryOptions = createQueryOptions(["repos"], ({ username, path }: { username: string; path: string }) =>
  fetchRepositories(username, path)
);

export function useRepositoriesDataQuery(username: string, path: string, enabled = true) {
  return useQuery({ ...repositoriesQueryOptions({ username, path }), enabled });
}
