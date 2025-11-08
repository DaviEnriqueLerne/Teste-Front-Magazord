import type { Repo } from "../../hooks/useFetchRepositories/types";
import type { User } from "../../hooks/useFetchUser/types";

export interface ProfileRepositoriesViewProps {
  User: User;
  Repo: Repo[];
  Starred: Repo[];
}
