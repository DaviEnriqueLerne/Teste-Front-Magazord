import { useQuery } from "@tanstack/react-query";
import { createQueryOptions } from "../../utils/react-query";
import type { User } from "./types";

export async function fetchUser(username: string): Promise<User> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
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

export const userQueryOptions = createQueryOptions(["user"], (username: string) => fetchUser(username));

export function useUserDataQuery(username: string, enabled = true) {
  return useQuery({ ...userQueryOptions(username), enabled });
}
